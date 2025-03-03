radio.onReceivedNumber(function (receivedNumber) {
    Variable1 = receivedNumber
})
let Variable1 = 0
radio.setGroup(1)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 20)
    }
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 2)
    }
    if (Variable1 == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 17)
        basic.pause(100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        Variable1 = 0
    }
    if (Variable1 == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -17)
        basic.pause(100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        Variable1 = 0
    }
    if (Variable1 == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -15)
        basic.pause(250)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        Variable1 = 0
    }
    if (Variable1 == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 15)
        basic.pause(250)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        Variable1 = 0
    }
})
