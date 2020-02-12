let weather_prediction = game.askForString("What is your weather prediction?")
game.splash("It is going to " + weather_prediction)
let weatherDude = sprites.create(img`
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 f f f f f f f f f 5 . . . 
. 5 f f f f f f f f f f f 5 . . 
. 5 f d d d d d d d d d f 5 . . 
. 5 f d d 9 d d d 9 d d f 5 . . 
. . . d d d d d d d d d . . . . 
. . . d d d d d d d d d . . . . 
. . . d b b b b b b b d . . . . 
. . . d d d d d d d d d . . . . 
. . . . . . . a . . . . . . . . 
. . . . . 1 a a a 1 . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let weatherEffects = Math.randomRange(0, 6)
if (weatherEffects == 0) {
    effects.confetti.startScreenEffect()
    weatherDude.say("confetti woo")
} else if (weatherEffects == 1) {
    effects.smiles.startScreenEffect()
    weatherDude.say("smiles woo")
} else if (weatherEffects == 2) {
    effects.blizzard.startScreenEffect()
    weatherDude.say("blizzard woo")
} else if (weatherEffects == 3) {
    effects.bubbles.startScreenEffect()
    weatherDude.say("bubbles woo")
} else if (weatherEffects == 4) {
    effects.starField.startScreenEffect()
    weatherDude.say("star field woo")
} else if (weatherEffects == 5) {
    effects.clouds.startScreenEffect()
    weatherDude.say("clouds woo")
} else if (weatherEffects == 6) {
    effects.hearts.startScreenEffect()
    weatherDude.say("hearts woo")
} else {
	
}
