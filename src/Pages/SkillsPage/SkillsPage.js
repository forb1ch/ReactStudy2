import React, {Component} from "react";
import Skills from "../../Components/Skills/skills";

class SkillsPage extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <Skills/>
                    </div>
                </section>
            </div>
        );
    }
}

export default SkillsPage;