import { Data, Override } from "framer"

// [1]
const data = Data({
  confettiStatus: "play",
  play: false,
})

export function Box(): Override {
  return {
    animate: {
      opacity: data.confettiStatus === "play" ? 0 : 1,
    },
  }
}

export function Confetti(): Override {
  return {
    onConfettiComplete: () => {
      data.confettiStatus = "stop"
    },
  }
}

export function ConfettiTest(): Override {
  return {
    play: data.play,
    onConfettiComplete: () => {
      data.play = false
      console.log("end / " + data.play)
    },
  }
}

export function Btn(): Override {
  return {
    onTap: () => {
      data.play = true
      console.log("start / " + data.play)
    },
  }
}
