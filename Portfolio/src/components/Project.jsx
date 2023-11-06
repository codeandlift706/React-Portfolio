
import projectHeading from '../assets/projectHeading.png'
import girlsHelpDesk from '../assets/GirlsHelpDesk.png'
import fridge from '../assets/Fridge.png'
// import githubicon from '../../public/githubicon.svg'
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
    // content: {
    //     padding: 5,
    // },
    size: {
        margin: '2rem',
        height: '20%',
        width: '25%',
    },
    // border: {
    //     border: black,
    // },
    iconBar: {
        backgroundColor: '#41372F',
        padding: '0.4rem',
        color: 'white',
    }
};

function Project() {
    return (
        <>
            <div style={styles.heading} id="project">
                <img src={projectHeading} alt="header title" />
            </div>

            <div class="projectContainer">

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                                <span class="card-title">Type Racer</span>
                            </div>
                            <div class="card-content">
                                <p>Type Racer Game - Coming Soon</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="#" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="#">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={girlsHelpDesk} />
                                <span class="card-title">Girls Help Desk</span>
                            </div>
                            <div class="card-content">
                                <p>Create a full-stack application using Node.js & Express.js to create a RESTful API, Handlebars.js as the templating engine, and MySQL & the Sequelize ORM for the database.</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="https://github.com/Vannasaur/girls-help-desk" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="https://github.com/Vannasaur/girls-help-desk">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                                <span class="card-title">Empty Your Fridge</span>
                            </div>
                            <div class="card-content">
                                <p>Generate recipes and nutritional facts using MealDB API & Edamam Nutritional Data API that features dynamically updated HTML and CSS.</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="https://github.com/Vannasaur/girls-help-desk" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="https://github.com/Vannasaur/girls-help-desk">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                                <span class="card-title">Social Network API</span>
                            </div>
                            <div class="card-content">
                                <p>Build an API for a social network web application using Express.js for routing, a MongoDB database, and the Mongoose ODM.</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="https://github.com/codeandlift706/Social-Network-API" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="#">Demo N/A</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                                <span class="card-title">Book Search Engine</span>
                            </div>
                            <div class="card-content">
                                <p>Refactor a Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server using the MERN stack.</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="https://github.com/codeandlift706/Book-Search-Engine" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="https://book-search-engine-1lzm.onrender.com/">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src={fridge} />
                                <span class="card-title">Weather Dashboard</span>
                            </div>
                            <div class="card-content">
                                <p>Build a weather forecast dashboard to run in the browser that features dynamically updated HTML and CSS.</p>
                            </div>
                            <div class="card-action">
                                <img src="../../githubicon.svg" href="https://github.com/codeandlift706/Weather-Dashboard" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                                <a class="demo" href="https://codeandlift706.github.io/Weather-Dashboard/">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
            </div>


        </>



    );
}

export default Project;
