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
                            <p class="collapseP">HR professional with over four years of project management experience and a continuous improvement mindset seeking to transition into the field of web development. Having excelled at creating programs, workflows, and processes while supporting employee development, I have honed my critical thinking, problem-solving, and creative skills. Driven by an insatiable curiosity about the world of web development, I am now determined to pursue this passion and leave behind the "what if's" of an unfulfilled path. </p>
                        </Collapsible>

                        <Collapsible trigger="Here & Now">
                            <p class="collapseP">
                            With an eager mind and a passion for crafting intuitive interfaces, I'm thrilled with the knowledge I've gained so far and am committed to a journey of continuous learning and growth in tech. While my 3-month boot camp has provided a solid foundation, I recognize that this is just the beginning of my tech career! I'm excited to embrace the challenges ahead, expand my skillset, and ultimately create meaningful experiences for others.
                            </p>
                        </Collapsible>
                        

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;