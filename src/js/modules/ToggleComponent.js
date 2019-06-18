import React from "react";
import { withRouter } from "react-router-dom";

const ToggleComponent = ({ location, children, Components }) => {
  Components.forEach(component => {
    console.log(component, location.pathname.match(component.path), location);

    if (location.pathname === component.path) children = component.toRender;
  });
  return children;
};

export default withRouter(ToggleComponent);
