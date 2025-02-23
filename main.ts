input.onButtonPressed(Button.A, function () {
    mat += 20
})
let mat = 100
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (mat > 60) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (mat >= 31 && mat <= 59) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (mat >= 2 && mat <= 30) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (mat < 1) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.clearScreen()
        for (let index = 0; index < 1; index++) {
            music.play(music.stringPlayable("C5 A G E D C - C ", 120), music.PlaybackMode.UntilDone)
        }
        basic.showString("game over")
    }
})
loops.everyInterval(200, function () {
    mat += -1
})
