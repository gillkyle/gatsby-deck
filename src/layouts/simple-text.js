/** @jsx jsx */
import { jsx } from "theme-ui"

const SimpleText = ({ children }) => {
  return (
    <div sx={{ width: "80vw" }}>
      <div sx={{ width: "75%" }}>{children}</div>
    </div>
  )
}

export default SimpleText
