import projectHeading from '../assets/projectHeading.png'
import type from '../assets/type.png'
import girlsHelpDesk from '../assets/GirlsHelpDesk.png'
import fridge from '../assets/Fridge.png'
import weather from '../assets/Weather.png'
import book from '../assets/Book.png'
import social from '../assets/Social.png'
import html from '../../public/htmlLogo.svg'
import css from '../../public/cssLogo.svg'
import materialize from '../../public/materializeLogo.svg'
import tailwind from '../../public/tailwindLogo.svg'
import bootstrap from '../../public/bootstrapLogo.svg'
import javascript from '../../public/javascriptLogo.png'
import jquery from '../../public/jqueryLogo.svg'
import node from '../../public/nodeLogo.svg'
import express from '../../public/expressLogo.svg'
import handlebars from '../../public/handlebarsLogo.svg'
import mongodb from '../../public/mongodbLogo.svg'
import mysql from '../../public/mysqlLogo.svg'
import mongoose from '../../public/mongooseLogo.svg'
import react from '../../public/reactLogo.svg'


const styles = {
    card: {
        margin: '15rem',
        background: '#e8eaf6',
    },
    heading: {
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '3rem',
        color: 'white',
        backgroundColor: '#f8f4f0',
        paddingTop: '4rem',
    },
    size: {
        margin: '2rem',
        height: '20%',
        width: '25%',
    },
    iconBar: {
        backgroundColor: '#453F41',
        padding: '0.4rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    line: {
        paddingBottom: '0.4rem',
    }
};

function Project() {
    return (
        <>
                    <div style={styles.iconBar} class="tech-icon-container">
                <div class="tech-icon tooltip">
                    <a><img src={html} class="tech-icon tooltiptext" alt="" /></a>
                </div>
                <div class="tech-icon tooltip">
                    <a><img src={css} class="tech-icon tooltiptext2" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={materialize} class="tech-icon tooltiptext3" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={tailwind} class="tech-icon tooltiptext4" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={bootstrap} class="tech-icon tooltiptext5" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={jquery} class="tech-icon tooltiptext6" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={javascript} class="tech-icon tooltiptext7" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={handlebars} class="tech-icon tooltiptext8" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={express} class="tech-icon tooltiptext9" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={node} class="tech-icon tooltiptext10" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={mongodb} class="tech-icon tooltiptext11" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={mysql} class="tech-icon tooltiptext12" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={mongoose} class="tech-icon tooltiptext13" alt="" /></a>
                </div>

                <div class="tech-icon tooltip">
                    <a><img src={react} class="tech-icon tooltiptext14" alt="" /></a>
                </div>
            </div>
            <div style={styles.heading} id="project">
                <img src={projectHeading} alt="header title" />
            </div>

            <div class="projectContainer">
                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={type} />
                            </div>
                            <div class="card-content">
                                <p>typetester Game</p>
                                <p>
                                    Create a MERN stack app with React, GraphQL, Node.js, Express.js, MongoDB, & Mongoose ODM.
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/codeandlift706/typetester" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://typetester.onrender.com/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={girlsHelpDesk} />
                            </div>
                            <div class="card-content">
                                <p>Girls Help Desk</p>
                                <p>Create a help desk ticketing app with Node.js, Express.js, Handlebars.js, MySQL, & Sequelize ORM.</p>

                            </div>
                            <div class="card-action">
                                <a href="https://github.com/Vannasaur/girls-help-desk" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://murmuring-chamber-70429-75790581b652.herokuapp.com/login" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                            </div>
                            <div class="card-content">
                                <p>Empty Your Fridge</p>
                                <p>Generate recipes and nutritional facts using Database API's that features dynamically updated HTML & CSS.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/MJ-AZN/Empty-Your-Fridge" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://mj-azn.github.io/Empty-Your-Fridge/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={social} />
                            </div>
                            <div class="card-content">
                                <p>Social Network API</p>
                                <p>Build a social network web app using Express.js, MongoDB database, & Mongoose ODM.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/codeandlift706/Social-Network-API" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://drive.google.com/file/d/197kZ45mBUmqM12JN_hLi1qhese3szY-A/view" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={book} />
                            </div>
                            <div class="card-content">
                                <p>Book Search Engine</p>
                                <p>Refactor a Google Books API search engine to a GraphQL API with Apollo Server using the MERN stack.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/codeandlift706/Book-Search-Engine" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://book-search-engine-1lzm.onrender.com/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={weather} />
                            </div>
                            <div class="card-content">
                                <p>Weather Dashboard</p>
                                <p>Build a weather forecast dashboard to run in the browser that features dynamically updated HTML & CSS.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/codeandlift706/Weather-Dashboard" target="_blank"><img src="../../githubicon.svg" className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a class="demo" href="https://codeandlift706.github.io/Weather-Dashboard/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={styles.line}>*View more of my work on GitHub.</h2>




        </>



    );
}

export default Project;
