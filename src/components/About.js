import React from 'react'
import '../styles/about.css'

function About() {
  return (
    <div id="about">
        <h1>About me</h1>
        <div class="about-content">
            <img class="about-pic" src={"assets/alwahami-abt.jpg"} />
            
            <div class="about-text">
                <p>Computer science student exploring the technology of software development and AI. I thrive on challenges that include problem-solving and coding. I have a passion for innovation and love collaborating with diverse minds to create impactful solutions. Feel free to message me!</p>
                <a href="assets/resume.pdf">View my resume!</a>
            </div>
        </div>
    </div>
  )
}

export default About

