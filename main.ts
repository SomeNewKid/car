for (let index = 0; index <= 4; index++) {
    basic.showIcon(IconNames.Heart)
    k_Bit.run(DIR.RunForward, 100)
    basic.showIcon(IconNames.Silly)
    basic.pause(1000)
}
k_Bit.carStop()
basic.showIcon(IconNames.Skull)
