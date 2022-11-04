export default function () {
  const forest = new Audio("./sounds/Floresta.wav")
  const rain = new Audio("./sounds/Chuva.wav")
  const coffeeshop = new Audio("./sounds/Cafeteria.wav")
  const fireplace = new Audio("./sounds/Lareira.wav")
  const timerEnd = new Audio("./sounds/audios_kichen-timer.mp3")

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