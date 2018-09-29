const fs = require('fs')
const mustache = require('mustache')

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

for (status of data.status) {
	if (status.tests.length != 0) {
		status.tests.sort((a, b) => {
			var indexA = a.title.toUpperCase()
			var indexB = b.title.toUpperCase()
			if (indexA < indexB) { return -1 }
			if (indexA > indexB) { return  1 }
			return 0
		})
	}
}
fs.writeFileSync('README.md', mustache.render(template, data))
