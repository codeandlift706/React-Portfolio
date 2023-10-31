// A single `Project` component that will be used multiple times in the Portfolio section

import girlsHelpDesk from '../assets/GirlsHelpDesk.png'
import fridge from '../assets/Fridge.png'
// import githubicon from '../../public/githubicon.svg'


const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    heading: {
        // background: 'black',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '3rem',
        color: 'white',
        padding: '0 20px',
    },
    // content: {
    //     padding: 5,
    // },
    size: {
        height: '30%',
        width: '30%'
    }
};

function Project() {
    return (
        <>
        <h2 style={styles.heading}>My Projects</h2>
        <h3>Check out some projects:</h3>
            <div class="projectContainer">
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Single Page App - COMING SOON<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">GitHub</a></p><p><a href="#">Demo</a></p>
                        <img src="../../githubicon.svg" href="#" className="icon hover:animate-pulse" alt="Github logo icon"></img>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Single Page App - COMING SOON<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={girlsHelpDesk} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Girls Help Desk<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/Vannasaur/girls-help-desk">GitHub</a></p><p><a href="https://github.com/Vannasaur/girls-help-desk">Demo</a></p>
                        <img src="../../githubicon.svg" href="https://github.com/Vannasaur/girls-help-desk" className="icon hover:animate-pulse" alt="Github logo icon"></img>

                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Girls Help Desk<i class="material-icons right">close</i></span>
                        <p>Create a full-stack application using Node.js & Express.js to create a RESTful API, Handlebars.js as the templating engine, and MySQL & the Sequelize ORM for the database.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">GitHub</a></p><p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">Demo</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">close</i></span>
                        <p>Generate recipes and nutritional facts using MealDB API & Edamam Nutritional Data API that features dynamically updated HTML and CSS.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Social Network API<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/codeandlift706/Social-Network-API">GitHub</a></p><p><a href="#">Demo</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Social Network API<i class="material-icons right">close</i></span>
                        <p>Build an API for a social network web application using Express.js for routing, a MongoDB database, and the Mongoose ODM.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Book Search Engine<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/codeandlift706/Book-Search-Engine">GitHub</a></p><p><a href="#">Demo</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Book Search Engine<i class="material-icons right">close</i></span>
                        <p>Refactor a Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server using the MERN stack.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Weather Dashboard<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/codeandlift706/Weather-Dashboard">GitHub</a></p><p><a href="#">Demo</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Weather Dashboard<i class="material-icons right">close</i></span>
                        <p>Build a weather forecast dashboard to run in the browser that features dynamically updated HTML and CSS.</p>
                    </div>
                </div>
            </div>
            <p>Insert logos for: HTML, CSS, Materialize, TailWind, Bootstrap, JavaScript, JQuery, Nodejs, Handlebars, NodeJs, MongoDB, MySQL, Mongoose, React, MERN</p>



        </>



    );
}

export default Project;