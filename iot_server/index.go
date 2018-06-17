package main

import (
"gobot.io/x/gobot"
"gobot.io/x/gobot/drivers/gpio"
"gobot.io/x/gobot/platforms/firmata"
"gobot.io/x/gobot/api"
 "time"
 "fmt"
)

func main() {
 firmataAdaptor := firmata.NewTCPAdaptor("192.168.0.253:3030")
 led := gpio.NewLedDriver(firmataAdaptor, "2")

 mbot := gobot.NewMaster()

 a := api.NewAPI(mbot)
 a.Debug()
 a.Start()

 work := func() {
  led.On()
 }

 work1 := func() {
  gobot.Every(1 * time.Second, func() {
   led.Toggle()
  })
 }

 work2 := func() {
  led.Off()
 }

 robot := gobot.NewRobot("bot",
  []gobot.Connection{firmataAdaptor},
  []gobot.Device{led},
  work,
 )

 blinkBot := mbot.AddRobot(robot)

 blinkBot.AddCommand("blink", func(params map[string]interface{}) interface{} {
  work1()
  return fmt.Sprint("Blinking")
 })

 blinkBot.AddCommand("On", func(params map[string]interface{}) interface{} {
  work2()
  return fmt.Sprint("On")
 })

 blinkBot.AddCommand("Off", func(params map[string]interface{}) interface{} {
  work()
  return fmt.Sprint("Off")
 })

 robot.Start()
}
