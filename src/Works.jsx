import React from "react";

const projects = [
    {
        id: "MazeSolver",
        name: "Maze Solver",
        description: "Create a maze and then solve it with a bunch of bouncing balls.",
        category: "Java Appliet",
        imgSrc: "maze-solver.png",
        url: ""
    },
    {
        id: "RegressionCalculator",
        name: "Regression Calculator",
        description: "Plot some points and watch the calculator find an equation of best fit.",
        category: "javascript",
        imgSrc: "regression-calculator-icon.jpg",
        url: "http://rgs-calc-gs.dyndns-server.com"
    },
    {
        id: "BirdDefense",
        name: "Bird Defense",
        description: "Tower defense game written with vanilla Javascript with multiplayer mode.",
        category: "javascript",
        imgSrc: "bird-defense-icon.jpg",
        url: "http://bird-defense-gs.servegame.org"
    },
    {
        id: "EmailFormatter",
        name: "Email Formatter",
        description: "Create email templates and write emails with a powerful formatting language.",
        category: "javascript",
        imgSrc: "email-formatter-icon.png",
        url: ""
    },
    {
        id: "FlappyBirdCompetition",
        name: "Flappy Bird Competition",
        description: "Clone of flapy bird, play and enjoin.",
        category: "React | Phaser3",
        imgSrc: "FlappyBirdCompetition.jpg",
        url: "http://flappy-bird-race-gs.servegame.org/"
    },
    {
        id: "wfMon",
        name: "Workflow Monitor",
        description: "Visualize a graph representing a workflow, allow interaction such as clicking or dragging",
        category: "React | fabric",
        imgSrc: "wfmon.jpg",
        url: "http://wf-monitor-gs.dyndns-server.com/"
    },
    {
        id: "SkyNotes",
        name: "Notes in the Sky",
        description: "take a note, typing or pasting, text or picture, save it, and find it later",
        category: "React | Springboot | Postgresql",
        imgSrc: "skynotes.jpg",
        url: "http://skynotes-gs.dyndns-server.com/"
    },
    {
        id: "Minesweeper",
        name: "Minesweeper",
        description: "The classic minesweeper game.",
        category: "Java Applet",
        imgSrc: "minesweeper-icon.jpg",
        url: ""
    }
];

function ProjectCard(props) {
    console.log(props.url);
    return (
      <li className="folio-list__item column">
        <a className="folio-list__item-link" id={props.id} href={props.url} >
            <div className="folio-list__item-pic">
                <img src={props.imgSrc} alt=""/>
            </div>
            <div className="folio-list__item-text">
                <div className="folio-list__item-cat">
                    {props.category}
                </div>
                <div className="folio-list__item-title">
                    {props.name}
                </div>
                <div className="folio-list__item-desc">
                    {props.description}
                </div>
            </div>
        </a>
      </li>
    );
}

function CreateProject(proj) {
    return (
        <ProjectCard
                key={proj.id}
                category={proj.category}
                name={proj.name}
                imgSrc={proj.imgSrc}
                description={proj.description}
                url={proj.url}
        />
    );
}

function Works() {
    // data-animate-el doesn't work in <h2 />, <li />
    console.log("works......");
    return (
        <div className="row works-portfolio">
            <div className="column lg-12" data-animate-block>
                <h2 className="text-pretitle">  
                    Recent Works
                </h2>
                <div id="demo"></div>
                <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                    {projects.filter(proj=>proj.url || !proj.url).map(CreateProject)}                    
                </ul>
            </div>
        </div>
    );
}

export default Works;