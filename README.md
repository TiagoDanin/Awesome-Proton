# Awesome Proton [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> List of games tested with Proton (Tool for Steam Client on Linux)

## Contents

- [Compatible](#compatible)
- [Partially Compatible](#partially-compatible)
- [Not Compatible](#not-compatible)

## Compatible
- [Endorlight](https://store.steampowered.com/app/428430)
> Proton 3.7 - AMD E-450</br> 
- [TeraBlaster](https://store.steampowered.com/app/384150)
> Proton 3.7 - AMD E-450</br> 

## Partially Compatible

## Not Compatible
- [AirMech Strike](https://store.steampowered.com/app/206500)
> Proton 3.7 - AMD E-450</br> Note: Error: Cannot create shadow depth buffer</br>
- [Mini Guns - Omega Wars](https://store.steampowered.com/app/649900)
> Proton 3.7 - AMD E-450</br> Note: Error: Doesn&#39;t open</br>
- [X-COM: UFO Defense](https://store.steampowered.com/app/7760)
> Proton 3.7 - AMD E-450</br> Note: Error: Black screen</br>

## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

### Add Test

Create an 'JSON' file in `tests/name-of-game-date.json`

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
