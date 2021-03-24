import React, {Component} from "react";
import About from "../../Components/About/About";

class AboutPage extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <About/>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutPage;