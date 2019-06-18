import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ToggleComponent from "./modules/ToggleComponent";
import Header from "./views/Header";
import Product from "./views/Product";

const App = () => {
  const headerToToggle = [{ path: "/", toRender: null }];
  return (
    <>
      <BrowserRouter>
        <ToggleComponent Components={headerToToggle}>
          <Header />
        </ToggleComponent>
        <Route path="/Product" Component={Product} />
      </BrowserRouter>
    </>
  );
};

export default App;
