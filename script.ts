const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const context = <CanvasRenderingContext2D> canvas.getContext("2d")

let rainType = 'drizzle'

const rainTypes = ['drizzle', 'normal', 'heavyRain']

const rainDropHeight = 2
const rainDropWidth = 1

const slowSpeed = 1
const mediumSpeed = 2
const highSpeed = 3

const speeds = [slowSpeed, mediumSpeed, highSpeed]

let rainDrops = []

let rainDrop = createRainDrop(getRandomX(), 0, getRandomSpeed())

canvas.addEventListener("keydown", (e) => upOrDownArrow(e))

setInterval(rain, 1000/50)

function rain() {
  drawBackground()
  drawRainDrop(rainDrop)
  rainDrop.y += mediumSpeed
  if (rainDrop.y > canvas.height) {
    rainDrop.y = 0
    rainDrop.x = getRandomX()
  }
}

function getRandomSpeed() {
  return speeds[Math.floor(Math.random() * speeds.length)]
}

function createRainDrop(x: number, y: number, speed: number) {
  return {x, y, speed}
}

function getRandomX(): number {
  return Math.floor(Math.random() * canvas.width)
}

function drawRainDrop(drop: { x: number; y: number; speed: number }) {
  context.fillStyle = "blue"
  context.fillRect(drop.x, drop.y, rainDropWidth, rainDropHeight)
}

function getRandomRainType(): string {
  return rainTypes[Math.floor(Math.random() * rainTypes.length)]
}

function drawBackground() {
  context.fillStyle = "black"
  context.fillRect(0, 0, canvas.width, canvas.height)
}

function upOrDownArrow(event: KeyboardEvent) {
  let code = Number(event.code)
  
  if (code == 38) {
    if (rainType == 'drizzle') rainType = 'drizzle'
    else {
      let indexOfCurrentType = rainTypes[rainType]
      rainType = rainTypes[indexOfCurrentType + 1]
    }
  }
  else if (code == 40) {
    if (rainType == 'heavyRain') rainType = 'heavyRain'
    else {
      let indexOfCurrentType = rainTypes[rainType]
      rainType = rainTypes[indexOfCurrentType - 1]
    }
  }
}