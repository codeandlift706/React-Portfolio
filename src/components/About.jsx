import React from 'react';
import Collapsible from 'react-collapsible';

import aboutHeading from '../assets/aboutHeading.png'
import portfolioPic2 from '../assets/portfolioPic2.jpg'


const styles = {
    card: {
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
        borderRadius: '240px',
        width: '28%',
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
                            <p class="collapseP">HR professional with over four years of project management experience and a continuous improvement mindset seeking to transition into the field of web development. </p>
                            <p class="collapseP">Having excelled at creating programs, workflows, and processes while supporting employee development, I have honed my critical thinking, problem-solving, and creative skills. </p>
                            <p class="collapseP">Driven by an insatiable curiosity about the world of web development, I am now determined to pursue this passion and leave behind the "what if's" of an unfulfilled path. </p>
                        </Collapsible>

                        <Collapsible trigger="Here & Now">
                            <p class="collapseP">
                            With an eager mind and a passion for crafting intuitive interfaces, I'm thrilled with the knowledge I've gained so far and am committed to a journey of continuous learning and growth in tech. </p>
                            <p class="collapseP">While my 3-month boot camp has provided a solid foundation, I recognize that this is just the beginning of my tech career. </p>
                            <p class="collapseP">I'm excited to embrace the challenges ahead, expand my skillset, and ultimately create meaningful experiences for others. </p>
                            <p class="collapseP">Thanks for the read, </p>
                            <p class="collapseP">C.</p>
                        </Collapsible>
                        

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;