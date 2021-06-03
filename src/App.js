import { BrowserRouter as Router, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Assets/scss/style.scss';
import './../node_modules/react-modal-video/scss/modal-video.scss';
import "react-tabs/style/react-tabs.css";


import Login from "./Pages/Login";
import SignTemplate from "./Templates/SignTemplate";
import HomeTemplate from "./Templates/HomeTemplate";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Modal from "./Components/Modal/Modal";
import MovieDetail from "./Pages/MovieDetail";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <SignTemplate path='/dang-ky' component={SignUp}/>
          <SignTemplate path='/dang-nhap' component={Login} />
          <HomeTemplate path='/detail/:idMovie' exact component={MovieDetail} />
          <HomeTemplate path='/' exact component={Home} />
        </Switch>
      </Router>
      <Modal />
    </div>
  );
}

export default App;
