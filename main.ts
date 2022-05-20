basic.forever(function () {
    if (true) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # . # #
            . # # # .
            . . # . .
            `)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . # .
            # . . . #
            `)
    }
})
