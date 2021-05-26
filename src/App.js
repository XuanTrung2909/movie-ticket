import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
