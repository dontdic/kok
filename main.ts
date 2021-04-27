let list: number[] = []
game.setScore(0)
let hoop = game.createSprite(2, 4)
let ball = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    ball.set(LedSpriteProperty.Direction, 180)
    ball.move(1)
    basic.pause(700)
})
basic.forever(function () {
    let wall: game.LedSprite = null
    if (ball.isDeleted()) {
        ball = game.createSprite(randint(0, 4), 0)
    }
    if (ball.isTouching(hoop)) {
        game.addScore(1)
        ball.delete()
    }
    if (ball.isTouching(wall)) {
        ball.delete()
    }
})
basic.forever(function () {
    list = [0, 1]
})
