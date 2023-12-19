/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Dec 2023
 * This program uses radios to connect to another MicroBit
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(23)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // checking distance with sonar
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  // if the distance is less than 10 cm, send alert (!) to microbit, if distance is more than 10 cm send star (*)
  if (distanceToObject <= 10) {
    radio.sendString('!')
  } else {
    radio.sendString('*')
  }
})

// receiving message
  radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
