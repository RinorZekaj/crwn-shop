import React from "react";

import { CustomButtonContainer } from "./costum-button.styles";

function CostumButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CostumButton;
