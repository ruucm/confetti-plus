import "../styles/index.scss"
import { Particle } from "./particle"
import img01 from "../resource/gift.png"
import img02 from "../resource/ball.png"
import img03 from "../resource/poinsettia.png"

import gif01 from "../resource/gold-coin.gif"

if (process.env.NODE_ENV === "development") {
  require("../index.html")
}

class App {
  constructor() {
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")
    document.body.appendChild(this.canvas)

    this.totalParticles = 30

    // color
    this.particles = []
    this.colorPalette = [
      "#1abc9c",
      "#2ecc71",
      "#f1c40f",
      "#e74c3c",
      "#c0392b",
      "#27ae60",
      "#9b59b6",
    ]
    this.textItem = ["🎉", "🍾", "👑"]
    this.imgItem = [img01, img02, img03]
    this.gifItem = [gif01]

    window.addEventListener("resize", this.resize.bind(this), false)
    this.resize()

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * 2
    this.canvas.height = this.stageHeight * 2
    this.ctx.scale(2, 2)
    this.createParticles()
  }

  createParticles() {
    for (let i = 0; i < this.totalParticles; i++) {
      const image = new Image()
      image.src = this.imgItem[getRandomInt(0, this.imgItem.length)]

      const item = new Particle(
        Math.random() * 60,
        this.colorPalette[getRandomInt(0, this.colorPalette.length)],
        this.textItem[getRandomInt(0, this.textItem.length)],
        image
      )
      this.particles[i] = item
    }
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
    window.requestAnimationFrame(this.animate.bind(this))

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i]
      item.draw(this.ctx)
    }
  }
}

window.onload = () => {
  new App()
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
