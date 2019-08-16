import { colors } from "gatsby-design-tokens"

export default {
  initialColorMode: "normal",
  useCustomProperties: true,
  fonts: {
    body: "Roboto, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap",
  colors: {
    text: colors.white,
    background: colors.purple[80],
    primary: colors.gatsby,
    gold: colors.yellow[50],
    invertedText: colors.text.primary,
    modes: {
      invert: {
        text: colors.text.primary,
        background: colors.white,
        primary: colors.gatsby,
      },
    },
  },
  styles: {
    Slide: {},
    b: {
      color: "gold",
    },
    strong: {
      color: "primary",
    },
    h1: {
      fontSize: 60,
      fontWeight: 600,
      margin: 0,
    },
    h2: {
      fontSize: 48,
      fontWeight: 400,
      color: colors.yellow[50],
      margin: 0,
    },
    h3: {
      fontSize: 36,
      fontWeight: 400,
      color: colors.purple[40],
      mt: 10,
    },
    p: {
      fontWeight: 300,
    },
  },
}
