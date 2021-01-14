## Confetti ＋

A customizable confetti component built with Framer Property Controls.

## Properties

| Property Name      | Type         | Description                                                                                        |
| ------------------ | ------------ | -------------------------------------------------------------------------------------------------- |
| play               | Boolean      | Confetti playing states.                                                                           |
| loop               | Boolean      | If it true, confetti repeat launch particles after it ends.                                        |
| type               | String       | "shape", "emoji", "image"                                                                          |
| shape              | String       | "rect", "circle", "star"                                                                           |
| particleNumber     | Number       | The number of particles.                                                                           |
| particleWidth      | Number       | If the type of confetti is "shape," it defines the width of each particle.                         |
| particleHeight     | Number       | If the type of confetti is "shape," it defines the height of each particle.                        |
| particleSize       | Number       | If the type of confetti is circle shape or emoji or image, it defines the height of each particle. |
| velocity           | Number       | Speed of particles                                                                                 |
| friction           | Number       | Frictions                                                                                          |
| gravity            | Number       | Downside forces to increase velocity.                                                              |
| x                  | Number       | Starting X point.                                                                                  |
| y                  | Number       | Starting Y point.                                                                                  |
| launchDegree       | Number       | Launch Degree                                                                                      |
| injectionDegree    | Number       | Injection Degree                                                                                   |
| wind               | Number       | Wind                                                                                               |
| particleColors     | Array        | Particle colors                                                                                    |
| emojis             | Array        | Emoji kinds                                                                                        |
| imgs               | Array        | Image kinds                                                                                        |
| onConfettiComplete | EventHandler | Callback handler after confetti completes. Default value prints a console.                         |

## About

This is a project made by [Framer Korea Library Crew](https://framerkorea.org)

### Participants on this package

- [Seungmee](https://seungmee-lee.com)
- alexpong
- ShinD
- [yongmin ruucm](https://harbor.school)

## Issues?

Feel free to leave questions/bugs on the [GitHub repository](https://github.com/ruucm/confetti-plus) for this package.
