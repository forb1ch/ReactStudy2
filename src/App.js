import './App.scss';
import Header from "./Header/Header";
import {HashRouter} from 'react-router-dom';
import About from "./Pages/AboutPage/AboutPage";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Home from "./Pages/Home/Home";
import {Route} from "react-router";
import Footer from "./Footer/Footer";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";

const App = () => {
  return (
    <div className="App">

        <HashRouter basename='/'>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={SkillsPage}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Footer/>
        </HashRouter>
    </div>
  );
}

export default App;
