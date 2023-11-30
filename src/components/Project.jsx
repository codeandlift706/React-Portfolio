import projectHeading from '../assets/projectHeading.png'
import typetester from '../assets/type.png'
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
import github from '../../public/githubicon.svg'


function Project() {
    return (
        <>
            <div className="tech-icon-container">
                <div className="tech-icon tooltip">
                    <a><img src={html} className="tech-icon tooltiptext" alt="" /></a>
                </div>
                <div className="tech-icon tooltip">
                    <a><img src={css} className="tech-icon tooltiptext2" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={materialize} className="tech-icon tooltiptext3" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={tailwind} className="tech-icon tooltiptext4" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={bootstrap} className="tech-icon tooltiptext5" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={jquery} className="tech-icon tooltiptext6" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={javascript} className="tech-icon tooltiptext7" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={handlebars} className="tech-icon tooltiptext8" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={express} className="tech-icon tooltiptext9" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={node} className="tech-icon tooltiptext10" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={mongodb} className="tech-icon tooltiptext11" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={mysql} className="tech-icon tooltiptext12" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={mongoose} className="tech-icon tooltiptext13" alt="" /></a>
                </div>

                <div className="tech-icon tooltip">
                    <a><img src={react} className="tech-icon tooltiptext14" alt="" /></a>
                </div>
            </div>

            <div className="projectHeader hover:animate-pulse">
                <a href="https://github.com/codeandlift706" target="_blank"><img src={projectHeading} alt="header title" /></a>
            </div>

            <div className="projectContainer">
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={typetester} />
                            </div>
                            <div className="card-content">
                                <p>typetester Game</p>
                                <p>
                                    Create a MERN stack app with React, GraphQL, Node.js, Express.js, MongoDB, & Mongoose ODM.
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/codeandlift706/typetester" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://typetester.onrender.com/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={girlsHelpDesk} />
                            </div>
                            <div className="card-content">
                                <p>Girls Help Desk</p>
                                <p>Create a help desk ticketing app with Node.js, Express.js, Handlebars.js, MySQL, & Sequelize ORM.</p>

                            </div>
                            <div className="card-action">
                                <a href="https://github.com/Vannasaur/girls-help-desk" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://murmuring-chamber-70429-75790581b652.herokuapp.com/login" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={fridge} />
                            </div>
                            <div className="card-content">
                                <p>Empty Your Fridge</p>
                                <p>Generate recipes and nutritional facts using Database API's that features dynamically updated HTML & CSS.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/MJ-AZN/Empty-Your-Fridge" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://mj-azn.github.io/Empty-Your-Fridge/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={social} />
                            </div>
                            <div className="card-content">
                                <p>Social Network API</p>
                                <p>Build a social network web app using Express.js, MongoDB database, & Mongoose ODM.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/codeandlift706/Social-Network-API" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://drive.google.com/file/d/197kZ45mBUmqM12JN_hLi1qhese3szY-A/view" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={book} />
                            </div>
                            <div className="card-content">
                                <p>Book Search Engine</p>
                                <p>Refactor a Google Books API search engine to a GraphQL API with Apollo Server using the MERN stack.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/codeandlift706/Book-Search-Engine" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://book-search-engine-1lzm.onrender.com/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={weather} />
                            </div>
                            <div className="card-content">
                                <p>Weather Dashboard</p>
                                <p>Build a weather forecast dashboard to run in the browser that features dynamically updated HTML & CSS.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://github.com/codeandlift706/Weather-Dashboard" target="_blank"><img src={github} className="card-icon hover:animate-pulse" alt="Github logo icon" /></a>
                                <a className="demo" href="https://codeandlift706.github.io/Weather-Dashboard/" target="_blank">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="cardLine">*View more of my work on GitHub.</h2>
        </>
    );
}

export default Project;
