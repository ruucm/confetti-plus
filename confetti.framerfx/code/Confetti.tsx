import * as React from "react"
import { useRef, useEffect } from "react"
import { Particle } from "./particle"
import { addPropertyControls, ControlType } from "framer"
import { getRandomInt } from "./utils"

export function Confetti(props) {
  const canvasRef = useRef(null)
  const {
    play,
    particleNumber,
    particleColors,
    emojis,
    imgs,
    ...options
  } = props
  const particles = []
  init()

  function init() {
    for (let i = 0; i < particleNumber; i++) {
      const image = new Image()

      if (imgs !== undefined) {
        image.src = imgs[getRandomInt(0, imgs.length)]
      }
      const item = new Particle(
        particleColors[getRandomInt(0, particleColors.length)],
        emojis[getRandomInt(0, emojis.length)],
        image,
        options
      )
      particles[i] = item
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    let animationFrameId

    // Our draw came here
    function render() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      for (let i = 0; i < particleNumber; i++) {
        const item = particles[i]
        item.draw(context)
      }
      animationFrameId = window.requestAnimationFrame(render)
    }
    if (play) render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [play])

  return <canvas ref={canvasRef} {...props} />
}

Confetti.defaultProps = {
  width: 300,
  height: 600,
}

addPropertyControls(Confetti, {
  play: {
    type: ControlType.Boolean,
  },
  type: {
    type: ControlType.SegmentedEnum,
    options: ["shape", "emoji", "image"],
    optionTitles: ["Shape", "Emoji", "Image"],
  },
  shape: {
    type: ControlType.SegmentedEnum,
    options: ["rect", "circle", "star"],
    optionTitles: ["■", "●", "★"],
    hidden(props) {
      return props.type !== "shape"
    },
  },
  particleNumber: {
    type: ControlType.Number,
    defaultValue: 50,
    min: 0,
    max: 1000,
    step: 5,
    displayStepper: true,
    hidden(props) {
      return props.type !== "Shape"
    },
  },
  particleWidth: {
    type: ControlType.Number,
    defaultValue: 20,
    min: 0,
    max: 1000,
    unit: "px",
    step: 5,
    displayStepper: true,
    hidden(props) {
      return props.type !== "shape" || props.shape !== "rect"
    },
  },
  particleHeight: {
    type: ControlType.Number,
    defaultValue: 15,
    min: 0,
    max: 1000,
    unit: "px",
    step: 5,
    displayStepper: true,
    hidden(props) {
      return props.type !== "shape" || props.shape !== "rect"
    },
  },
  particleSize: {
    type: ControlType.Number,
    defaultValue: 30,
    min: 0,
    max: 1000,
    unit: "px",
    step: 5,
    displayStepper: true,
    hidden(props) {
      return props.type === "shape" && props.shape === "rect"
    },
  },

  velocity: {
    type: ControlType.Number,
    defaultValue: 10,
    min: 0,
    max: 1000,
    unit: "px",
    step: 5,
    displayStepper: true,
  },
  friction: {
    type: ControlType.Number,
    defaultValue: 0.7,
    min: 0,
    max: 1,
    step: 0.1,
    displayStepper: true,
  },
  gravity: {
    type: ControlType.Number,
    defaultValue: 0.02,
    min: 0,
    max: 1000,
    step: 0.01,
    displayStepper: true,
  },
  x: {
    type: ControlType.Number,
    defaultValue: 100,
    min: 0,
    max: 500,
    unit: "px",
    step: 5,
    displayStepper: true,
  },
  y: {
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    max: 1000,
    unit: "px",
    step: 5,
    displayStepper: true,
  },
  launchDegree: {
    type: ControlType.Number,
    defaultValue: -90,
    min: -360,
    max: 360,
    unit: "deg",
    step: 90,
    displayStepper: true,
  },
  injectionDegree: {
    type: ControlType.Number,
    defaultValue: 120,
    min: -360,
    max: 360,
    unit: "deg",
    step: 5,
    displayStepper: true,
  },
  wind: {
    type: ControlType.Number,
    defaultValue: 0,
    min: -1,
    max: 1,
    step: 0.1,
    displayStepper: true,
  },
  particleColors: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.Color,
    },
    defaultValue: [
      "#1abc9c",
      "#2ecc71",
      "#f1c40f",
      "#e74c3c",
      "#c0392b",
      "#27ae60",
      "#9b59b6",
    ],
    hidden(props) {
      return props.type !== "shape"
    },
  },
  emojis: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["🎉", "🤡", "🎄"],
    hidden(props) {
      return props.type !== "emoji"
    },
  },
  imgs: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.Image,
    },
    defaultValue: ["url(./assets/ball.png)"],
    hidden(props) {
      return props.type !== "image"
    },
  },
})
