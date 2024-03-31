import React from 'react'
import '../styles/projects.css'
import { ReactComponent as Folder} from '../folder.svg'

class Projects extends React.Component {
    render() {
        const projects = {
            "Project 1": {
                desc: "Description lol ",
                stack: "Python, Java",
                link: "youtube.com",
                open: "youtube.com/@arartex"
            },
            "Creaks": {
                desc: "Horror game developed for 2 week game jam with unity using C#",
                stack: "Unity, Blender, Photoshop, FL Studio",
                link: "https://stuvs.itch.io/creaks",
                open: "https://www.youtube.com/watch?v=PUDWplJ1Ra8"
            },
            "Personal Portfolio": {
                desc: "This website! ",
                stack: "HTML, CSS, React (js)",
                link: "youtube.com",
                open: "youtube.com/@arartex"
            },
            "Milk": {
                desc: "Horror game developed with unity ",
                stack: "Python, Java",
                link: "youtube.com",
                open: ""
            },
            "Fortnite": {
                desc: "Fortnite!! ",
                stack: "Fortnite?",
                link: "",
                open: "youtube.com/@arartex"
            }
        };
        return (
            <div id="projects">
                <h1>Projects</h1>
                <div className="project-container">
                    <ul className='projects-grid'>

                        {Object.keys(projects).map((key, i) => (
                            <li className='projects-card'>
                                <div className='card-header'>
                                    <div className='folder-icon'>
                                        <Folder />
                                    </div>
                                    <div className='links'>
                                        <a href={projects[key]["link"]}>link</a>
                                        <a href={projects[key]["open"]}>open</a>
                                    </div>
                                </div>

                                <div className='card-title'>{key}</div>
                                <div className='card-desc'>{projects[key]["desc"]}</div>
                                <div className='card-tech'>{projects[key]["stack"]}</div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects