let 移動距離 = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        if (input.compassHeading() == 0) {
            plenbit.soccerMotion(plenbit.SocMotions.LongDribble)
            移動距離 = 0
        } else if (false) {
        	
        }
    }
})
