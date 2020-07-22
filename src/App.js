import React from "react";
import HeaderApp from "./Header";
import Intro from "./Intro";
import About from "./About";
import WhatWeCanDo from "./WhatWeCanDo";
import PastProjects from "./PastProjects";
import ProjectsInfo from "./projectsInfo";
import Footer from "./Footer";
import Contact from "./Contact";



class App extends React.Component {

    render() {
       
        return (

            <React.Fragment>
                <HeaderApp />
                <Intro />
                <About />
                <WhatWeCanDo />
                <PastProjects />
                <ProjectsInfo />
                <Contact/> 
                <Footer />  
            </React.Fragment>
        );
    }
}

export default App;
