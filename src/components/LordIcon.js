import React from "react";

function LordIcon({
  icon = "etdtbiqy",
  w = "25px",
  h = "25px",
  trigger = "hover",
  delay = false,
  colors = "primary:#ffffff",
  stroke = "regular",
  state = null,
}) {
  return (
    <lord-icon
      src={"https://cdn.lordicon.com/" + icon + ".json"}
      trigger={trigger}
      colors={colors}
      style={{ width: w, height: h }}
      delay={delay}
      stroke={stroke}
      state={state}
    ></lord-icon>
  );
}

export default React.memo(LordIcon);
