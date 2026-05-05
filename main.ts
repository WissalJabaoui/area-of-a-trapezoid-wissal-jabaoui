game.splash("Let's calculate the area of a trapzoid!")
let base1 = game.askForNumber("what is the length of base1 in (cm)? ")
let base2 = game.askForNumber("what is the length of base2 in (cm)? ")
let height = game.askForNumber("what is the height in (cm)? ")
let area = (base1 + base2) / 2 * height
game.splash("the area of a trapzoid is:" + area)
