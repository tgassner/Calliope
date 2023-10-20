input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 10; index++) {
        basic.setLedColor(0x00ffff)
        basic.pause(100)
        basic.setLedColor(0xff00ff)
        basic.pause(100)
    }
    basic.setLedColor(0x00ffff)
    basic.pause(2000)
    basic.setLedColor(0x000000)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playMelody("E D G F B A C5 B ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("C5 B A G F E D C ", 240)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    zufallszahl = randint(0, 2)
    if (zufallszahl == 0) {
        basic.showLeds(`
            . . . # #
            # . # # #
            . # . . .
            # . # # #
            . . . # #
            `)
    }
    if (zufallszahl == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (zufallszahl == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let zufallszahl = 0
let startzufallszahl = randint(0, 4)
if (startzufallszahl == 0) {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (startzufallszahl == 1) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (startzufallszahl == 2) {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (startzufallszahl == 3) {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
if (startzufallszahl == 4) {
    basic.showLeds(`
        # . # . #
        . # # # .
        # . # . #
        . # # # .
        # . # . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
