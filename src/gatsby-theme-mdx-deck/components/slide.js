/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Fragment } from "react"
import Context from "gatsby-theme-mdx-deck/src/context"
import useDeck from "gatsby-theme-mdx-deck/src/hooks/use-deck"
import useSwipe from "gatsby-theme-mdx-deck/src/hooks/use-swipe"
import { modes } from "gatsby-theme-mdx-deck/src/constants"
import Monogram from "../../assets/monogram.svg"
import { useColorMode } from "theme-ui"

export const Slide = ({ slide, index, preview, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  return (
    <Context.Provider value={context}>
      <div
        {...(!preview ? swipeProps : {})}
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: context.mode === modes.print ? "100vh" : "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          color: "text",
          bg: "background",
          variant: "styles.Slide",
        }}
      >
        <div
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-start",
            top: 32,
            right: 32,
            zIndex: 3,
            height: 25,
          }}
        >
          <img sx={{ height: 25, width: 25 }} src={Monogram} />
        </div>
        {slide}
        <div
          sx={{
            color: colorMode === "normal" ? "text" : "primary",
            position: "absolute",
            display: "flex",
            alignItems: "flex-start",
            bottom: 60,
            right: 10,
            zIndex: 3,
            fontSize: 24,
            transform: "rotate(-90deg)",
          }}
        >
          Gatsby
        </div>
      </div>
    </Context.Provider>
  )
}

export default Slide
