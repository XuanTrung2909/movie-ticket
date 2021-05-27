import { BrowserRouter as Router, Switch } from "react-router-dom";
import './Assets/scss/style.scss';


import Login from "./Pages/Login";
import SignTemplate from "./Templates/SignTemplate";
import HomeTemplate from "./Templates/HomeTemplate";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <SignTemplate path='/dang-nhap' component={Login} />
          <HomeTemplate path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
