const w = 40
const h = 70
const velocity = 20
const launchDegree = 90 // 발사각
const injectionDegree = 60 // 분사각

export class Confetti {
  constructor (radius, color, text, img) {
    this.radius = radius
    this.text = text
    this.color = color
    this.img = img

    this.sizeVari = randomRange(0.8, 1.2) // 크기 다양화
    const minVx = velocity * Math.cos((launchDegree - injectionDegree / 2) * Math.PI / 180)
    const maxVx = velocity * Math.cos((launchDegree + injectionDegree / 2) * Math.PI / 180)
    const minVy = -velocity * Math.sin((launchDegree - injectionDegree / 2) * Math.PI / 180)
    const maxVy = -velocity * Math.sin((launchDegree + injectionDegree / 2) * Math.PI / 180)
    this.vx = randomRange(minVx, maxVx)
    this.vy = randomRange(minVy, maxVy) // vy의 끝 값으로 얼마나 높게 파티클이 올라갈지 결정

    this.vr = randomRange(0, 10) // 돌아가는 회전 속도값
    this.angle3dvari = randomRange(0, 1)
    this.gravity = 0.3 // 중력값
    // this.color = '#' + Math.floor(Math.random() * 16777215).toString(16) // 랜덤 컬러

    // 터지는 위치
    this.x = 500
    this.y = 500
    this.r = 0
  }

  draw (ctx, stageWidth, stageHeight) {
    // Set position
    this.angle3d = 0.5 + Math.sin(this.vy * this.angle3dvari) * 0.5

    this.vy = Math.min(this.vy + this.gravity)
    this.x += this.vx
    this.y += this.vy
    this.r += this.vr

    ctx.save() // Save x, y, r state (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)
    ctx.translate(this.x, this.y) // Move context, but no direct movemnents on rectangles.
    // ctx.scale(this.angle3d, 1) //3d rotation
    ctx.scale(this.sizeVari, this.sizeVari)
    ctx.rotate(this.r * Math.PI / 180)

    // FOR DEFAULT COLOR CONFETTI
    // ctx.fillStyle = this.color
    // ctx.fillRect(-w / 2, -h / 2, w, h)

    // FOR TEXT/EMOJI CONFETTI
    // ctx.font = h * this.sizeVari + 'px' + ' san-serif'
    // ctx.textAlign = 'center'
    // ctx.textBaseline = 'middle'
    // ctx.fillText(this.text, 0, 0)

    // FOR IMAGE CONFETTI
    ctx.drawImage(this.img, -(this.img.width / 2), -(this.img.height / 2))

    ctx.restore() // Restore x, y, r state
  }
}

function randomRange (min, max) {
  return Math.random() * (max - min) + min
}
