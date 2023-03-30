// pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
// pins.setPull(DigitalPin.P14, PinPullMode.PullNone)

const centerP: DigitalPin = DigitalPin.P12; //přejmenujeme pin 12 na "centerP"
pins.setPull(centerP, PinPullMode.PullNone)
const centerP2: DigitalPin = DigitalPin.P1; //přejmenujeme pin 12 na "centerP"
pins.setPull(centerP2, PinPullMode.PullNone)
let center: number = 0

basic.forever(function() {
    
    center = pins.digitalReadPin(centerP)

    console.log(center)

    center === 1 ? led.plot(2, 2) : led.unplot(2, 2) //if center je jedna rozsviť ledku else nerozsviť

    basic.pause(10)
}) //toto zobrazí 1 když před tím není překážka a 0 když před tím je překážka
basic.forever(function () {

    center = pins.digitalReadPin(centerP2)

    console.log(center)

    center === 1 ? led.plot(2, 2) : led.unplot(2, 2) //if center je jedna rozsviť ledku else nerozsviť

    basic.pause(10)
})