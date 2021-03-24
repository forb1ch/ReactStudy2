import React from 'react';
import './skills.scss';

const Skills = () => {
    return (
        <div className="skills-wrapper">
            <h2 className="h2 skills-main-title">Skills stack</h2>

            <div className="skills-stack-wrapper">
                <div className="skills-stack">
                    <div className="small">
                        <h5 className="h5">Drupal 8</h5>
                        <ul>
                            <li>Composer</li>
                            <li>Drupal Console</li>
                            <li>Drush</li>
                            <li>Phing</li>
                            <li>Code standards and sniffers</li>
                            <li>Configuration manager</li>
                            <li>Migrations</li>
                            <li>Display Suite</li>
                            <li>Paragraphs</li>
                            <li>Drupal.org contributions</li>
                            <li>Pattern Lab</li>
                            <li>Search API (Solr, Elasticsearch)</li>
                            <li>Layout builder</li>
                            <li>Acquia Cloud</li>
                        </ul>
                    </div>
                    <div className="small">
                        <h5 className="h5">Drupal 7</h5>
                        <ul>
                            <li>Drush</li>
                            <li>Code standards and sniffers</li>
                            <li>Features</li>
                            <li>Drupal Commerce</li>
                            <li>i18n</li>
                            <li>Panels</li>
                            <li>Display Suite</li>
                            <li>Paragraphs</li>
                            <li>Context</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-stack">
                    <div className="small">
                        <h5 className="h5">Workflow</h5>
                        <ul>
                            <li>Git
                                <ul>
                                    <li>Forks</li>
                                    <li>Branch per task</li>
                                    <li>Merge requests</li>
                                    <li>Code review</li>
                                </ul></li>
                            <li>CI
                                <ul>
                                    <li>Code standards &amp; sniffers</li>
                                    <li>Builds</li>
                                    <li>Tests (if necessary)</li>
                                    <li>Automatic deploy</li>
                                </ul></li>
                            <li>Vagrant</li>
                            <li>Docker</li>
                            <li>Redmine or Jira</li>
                            <li>JetBrains PhpStorm and WebStorm</li>
                            <li>Local-&gt;Dev-&gt;Stage-&gt;Live environments</li>
                            <li>QA
                                <ul>
                                    <li>Functional testing</li>
                                    <li>Compatibility testing (wide range of browsers and devices)</li>
                                    <li>Security review</li>
                                    <li>Performance review</li>
                                </ul></li>
                        </ul>
                    </div>
                    <div className="small">
                        <h5 className="h5">LAMP Stack</h5>
                        <ul>
                            <li>Linux</li>
                            <li>APACHE / Nginx</li>
                            <li>PHP 5.6 / PHP 7</li>
                            <li>MySQL / MariaDB</li>
                            <li>AJAX</li>
                            <li>Memcache</li>
                            <li>Varnish</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-stack">
                    <div className="small">
                        <h5 className="h5">Front-end</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>Gulp</li>
                            <li>Bower</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>AngularJS</li>
                            <li>TypeScript</li>
                            <li>BrowserStack</li>
                            <li>Pixel-Perfect</li>
                        </ul>
                    </div>
                    <div className="small">
                        <h5 className="h5">Alternative technologies</h5>
                        <ul>
                            <li>Symfony Framework</li>
                            <li>Laravel Framework</li>
                            <li>React JS library</li>
                            <li>Vue.js Framework</li>
                            <li>Angular Framework</li>
                            <li>Hybrid Mobile Apps
                                <ul>
                                    <li>React Native</li>
                                    <li>Ionic Framework</li>
                                </ul></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;