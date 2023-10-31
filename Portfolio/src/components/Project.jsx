// A single `Project` component that will be used multiple times in the Portfolio section

import girlsHelpDesk from '../assets/GirlsHelpDesk.png'
import fridge from '../assets/Fridge.png'


const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    heading: {
        background: 'black',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '3rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
    size: {
        height: '40%',
        width: '40%'
    }
};

function Project() {
    return (
        <>
        <p>Insert logos for: HTML, CSS, Materialize, TailWind, Bootstrap, JavaScript, JQuery, Nodejs, Handlebars, NodeJs, MongoDB, MySQL, Mongoose, React, MERN</p>
        <h2 style={styles.heading}>My Projects</h2>
        <h3>Check out some projects:</h3>
            <div class="projectContainer">
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={girlsHelpDesk} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Girls Help Desk<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/Vannasaur/girls-help-desk">GitHub</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Girls Help Desk<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">GitHub</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Single Page Application - COMING SOON<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">GitHub</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">GitHub</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card" style={styles.size}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={fridge} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://github.com/MJ-AZN/Empty-Your-Fridge">GitHub</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Empty Your Fridge<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>



        </>



    );
}

export default Project;