/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Dec 2023
 * This program uses radios to connect to another MicroBit
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(154)
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    // finding distance
    basic.showIcon(IconNames.Happy)
    distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    //sending message to other microbit
    if (distanceToObject <= 10) {
      radio.sendString('!')
      } else {
      radio.sendString('*')
    }
  }
}
// receiving messages
radio.onReceivedString(function (recievedString) {
    basic.clearScreen()
    basic.showString(recievedString)
})
