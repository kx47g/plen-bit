let 移動距離 = 0
let 方角 = 0
input.onButtonPressed(Button.A, function () {
    移動距離 = 0
    方角 = input.compassHeading()
    while (移動距離 < 31) {
        if (方角 - 10 <= input.compassHeading() && input.compassHeading() <= 方角 + 10) {
            plenbit.soccerMotion(plenbit.SocMotions.LongDribble)
            移動距離 += 5
        } else if (方角 + 10 < input.compassHeading() && input.compassHeading() < 方角 + 170) {
            plenbit.danceMotion(plenbit.DanceMotions.DanceLStep)
        } else if (方角 - 10 > input.compassHeading() && input.compassHeading() < 方角 - 170) {
            plenbit.danceMotion(plenbit.DanceMotions.DanceRStep)
        }
    }
})
