/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useRef } from "react"
import { useColorMode } from "theme-ui"

export const Invert = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  // set color mode to inverted until unmounting
  useEffect(() => {
    setColorMode("invert")
  }, [])

  // run when unmounting
  const val = useRef()
  useEffect(() => {
    val.current = props
  }, [props])
  useEffect(() => {
    return () => {
      setColorMode("normal")
    }
  }, [])

  return (
    <div
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        // why isn't color mode working here?
        // color: "text" -> should be enough?
        color: colorMode === "normal" ? "text" : "invertedText",
        bg: "text",
        a: {
          color: "inherit",
        },
      }}
    />
  )
}

export default Invert
