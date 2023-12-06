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

// 
while (true) {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
      distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
      )
      basic.showNumber(distanceToObject)
      basic.showString("cm")

     if (distanceToObject < 10) {
       radio.sendString("X                                                                       ")
     } else {
       radio.sendString("*")
     }
  }
