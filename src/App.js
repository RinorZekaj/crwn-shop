import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import Authentication from "./pages/authentication/authentication.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubcribeFromAuth = null;

  useEffect(() => {
    unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);
    });
    return () => {
      unsubcribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
