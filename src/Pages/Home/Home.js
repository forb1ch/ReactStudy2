import React, {Component} from "react";
import About from "../../Components/About/About";
import PortfolioBlock from "../../Components/PortfolioBlock/PortfolioBlock";
import Banner from "../../Components/Banner/Banner";
import Skills from "../../Components/Skills/skills";

class Home extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <Banner/>
                        <About/>
                        <PortfolioBlock/>
                        <Skills/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;