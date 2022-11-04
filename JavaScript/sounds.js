export default function () {
  const forest = new Audio('./sound/forest.wav')
  const rain = new Audio('./sound/rain.wav')
  const coffeeshop = new Audio('./sound/coffeeshop.wav')
  const fireplace = new Audio('./sound/fireplace.wav')
  const timerEnd = new Audio("./sound/audios_kichen-timer.mp3")

  coffeeshop.loop = true
  fireplace.loop = true
  forest.loop = true
  rain.loop = true
  timerEnd.volume = 0.3

  const volForest = value => (forest.volume = value)

  const volRain = value => (rain.volume = value)

  const volCoffeeshop = value => (coffeeshop.volume = value)

  const volFireplace = value => (fireplace.volume = value)

  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    timerEnd,
    volForest,
    volRain,
    volCoffeeshop,
    volFireplace
  }
}