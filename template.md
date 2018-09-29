# Awesome Proton [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> List of games tested with Proton (Tool for Steam Client on Linux)

## Contents

{{#status}}
- [{{name}}]({{href}})
{{/status}}

{{#status}}
## {{name}}
{{#tests}}
- [{{title}}](https://store.steampowered.com/app/{{id}})
> Proton {{proton}} - {{pc}}</br> {{#note}}Note: {{.}}</br>{{/note}}
{{/tests}}

{{/status}}
## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

### Add Test

Create an JSON file in `tests/name-of-game-date.json`

```javascript
{
	"title": "Name of Game",
	"status": "Compatible", //Compatible, Partially Compatible or Not Compatible
	"user": "Your Name",
	"id": "steam id",
	"proton": "1.0", //Proton version
	"pc": "Intel Core i2000", //GPU, CPU, OS...
	"note": "" //Problem, Game config...
}
```

## License

[CC0 1.0 Universal](LICENSE)

To the extent possible under law, Tiago Danin has waived all copyright and
related or neighboring rights to this work.
