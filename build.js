const fs = require('fs')
const mustache = require('mustache')
const SteamAPI = require('steamapi')
require('dotenv').load();

const testFiles = fs.readdirSync('./tests/')
const template = fs.readFileSync('template.md').toString()

var data = {
	status: [
		{
			name: 'Compatible',
			href: '#compatible',
			tests: []
		},
		{
			name: 'Partially Compatible',
			href: '#partially-compatible',
			tests: []
		},
		{
			name: 'Not Compatible',
			href: '#not-compatible',
			tests: []
		}
	],
}

for (file of testFiles) {
	var json = JSON.parse(fs.readFileSync(`tests/${file}`).toString())
	for (status of data.status) {
		if (status.name == json.status) {
			status.tests.push(json)
		}
	}
}

const steam = new SteamAPI(process.env.STEAM_API_KEY)
const getGame = id => steam.getGameDetails(id, true)
const appReg = /^\d{1,6}$/;

const gameNames = Promise.all(
	testFiles.map(
		filename => JSON.parse(fs.readFileSync(`tests/${filename}`).toString())
	).filter(
		json => appReg.test(json.id)
	).map(
		json => getGame(json.id)
	).map(
		promise => promise.catch(() => false)
	)
).then(
	games => games.filter(game => !!game)
).then(
	games => {
		status = data.status.map(
			stat => ({
				...stat,
				tests: stat.tests.map(
					test => ({
						...test,
						game: games.find(
							game => game.steam_appid === parseInt(test.id, 10)
						)
					})
				).filter(
					test => !!test.game
				).map(
					test => {
						const {
							game,
							...rest
						} = test;

						return {
							...rest,
							name: game.name
						}
					}
				).sort((a, b) => {
					var indexA = a.name.toUpperCase()
					var indexB = b.name.toUpperCase()
					if (indexA < indexB) { return -1 }
					if (indexA > indexB) { return  1 }
					return 0
				})
			})
		)

		fs.writeFileSync('README.md', mustache.render(template, { status }))
	}
)





