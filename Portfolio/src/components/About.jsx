import React from 'react';
import Collapsible from 'react-collapsible';

import aboutHeading from '../assets/aboutHeading.png'
import portfolioPic2 from '../assets/portfolioPic2.jpg'


const styles = {
    card: {
        // margin: '4rem',
    },
    heading: {
        minHeight: 50,
        pneHeight: 3.5,
        fontSize: '4rem',
        color: 'white',
        padding: '16rem',
    },
    content: {
        padding: '5em',
    },
    picture: {
        // marginLeft: '8rem',
        borderRadius: '200px',
        width: '30%',
    },
};

function About() {


    return (
        <>

            <div style={styles.card} id="about">
                <div style={styles.heading} id="aboutHead">
                    <img src={aboutHeading} alt="header title" />
                </div>

                <div class="aboutContent">
                    <img style={styles.picture} src={portfolioPic2} alt="picture" />

                    <div style={styles.content}>

                        <div class="progress white">
                            <div class="indeterminate black"></div>
                        </div>

                        <Collapsible trigger="A Little About Me">
                            <p class="collapseP">Born in Montreal, Quebec & raised in Orange County, Calfornia.</p>
                            <p class="collapseP">Husky enthusiast, fantasy football player, growing powerlifter. </p>
                        </Collapsible>

                        <Collapsible trigger="Life Before Tech">
                            <p class="collapseP">Previous HR Professional leveraging +4 years of project management experience and a continuous improvement mindset to become a "master of sport" in web development. </p>
                        </Collapsible>

                        <Collapsible trigger="Here & Now">
                            <p class="collapseP">
                                Ready to leverage my curious nature to find ways to design and ehance user interfaces. I've enjoyed what I've learned so far, and plan to keep learning and growing.
                                Please see my resume here:
                            </p>
                        </Collapsible>
                        

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;