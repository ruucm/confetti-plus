import { randomRange } from "./utils"

export class Particle {
    constructor(color, emoji, img, options, canvasWidth, canvasHeight) {
        this.color = color
        this.emoji = emoji
        this.img = img
        this.options = options
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.init()
    }

    init() {
        const {
            type,
            shape,
            particleWidth,
            particleHeight,
            particleSize,
            x,
            y,
            velocity,
            friction,
            gravity,
            launchDegree,
            injectionDegree,
            wind,
        } = this.options

        this.size = particleSize
        this.type = type
        this.shape = shape
        this.particleWidth = particleWidth
        this.particleHeight = particleHeight

        this.sizeVari = randomRange(0.8, 1.2) // 크기 다양화
        const minVx =
            velocity *
            Math.cos(((launchDegree - injectionDegree / 2) * Math.PI) / 180)
        const maxVx =
            velocity *
            Math.cos(((launchDegree + injectionDegree / 2) * Math.PI) / 180)
        const minVy =
            -velocity *
            Math.sin(((launchDegree - injectionDegree / 2) * Math.PI) / 180)
        const maxVy =
            -velocity *
            Math.sin(((launchDegree + injectionDegree / 2) * Math.PI) / 180)
        const f = randomRange(1 - friction, 1)
        this.vx = randomRange(minVx, maxVx) * f
        this.vy = randomRange(minVy, maxVy) * f // vy의 끝 값으로 얼마나 높게 파티클이 올라갈지 결정

        this.vr = randomRange(0, 2 * Math.PI) // 돌아가는 회전 속도값
        this.angle3dvari = randomRange(0, 1)
        this.gravity = gravity // 중력값
        this.wind = wind
        // this.color = '#' + Math.floor(Math.random() * 16777215).toString(16) // 랜덤 컬러

        // 터지는 위치
        this.x = x
        this.y = y
        this.r = 0

        this.active = true
    }

    draw(ctx) {
        // Set position
        this.angle3d = 0.5 + Math.sin(this.vy * this.angle3dvari) * 0.5

        this.vy = Math.min(this.vy + this.gravity)

        this.x += this.vx
        this.vx += this.wind

        this.y += this.vy
        this.r += this.vr
        if (
            this.y > this.canvasHeight ||
            this.x > this.canvasWidth ||
            this.x < -100 ||
            this.y < -100
        ) {
            this.active = false
        }
        ctx.save() // Save x, y, r state (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)
        ctx.translate(this.x, this.y) // Move context, but no direct movemnents on rectangles.
        ctx.scale(this.sizeVari, this.sizeVari)
        ctx.rotate((this.r * Math.PI) / 180)

        // FOR DEFAULT COLOR CONFETTI
        if (this.type === "shape" && this.shape === "rect") {
            ctx.scale(this.angle3d, 1) //3d rotation
            ctx.fillStyle = this.color
            ctx.fillRect(
                -this.particleWidth / 2,
                -this.particleHeight / 2,
                this.particleWidth,
                this.particleHeight
            )
        } else if (this.type === "shape" && this.shape === "circle") {
            ctx.scale(this.angle3d, 1) //3d rotation
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, 2 * Math.PI)
            ctx.fill()
        }

        // FOR TEXT/EMOJI CONFETTI
        else if (this.type === "emoji") {
            ctx.font = this.size * 2 + "px" + " san-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillText(this.emoji, 0, 0)
        } else if (this.type === "image" && this.img !== null) {
            ctx.drawImage(
                this.img,
                -(this.size / 2),
                -((this.size * (this.img.height / this.img.width)) / 2),
                this.size,
                this.size * (this.img.height / this.img.width)
            )
        }

        // FOR IMAGE CONFETTI
        ctx.restore() // Restore x, y, r state
    }
}
