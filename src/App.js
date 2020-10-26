import { Switch, Route } from "react-router-dom";
import "./App.css";  
import HomePage from "./pages/homepage/homepage.component";

const Hats = () => {
  return (
    <h1>HATS</h1>
  )
}

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
  