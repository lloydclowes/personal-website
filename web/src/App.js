import React from 'react';

import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import NavBar from './components/NavBar';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import experiences from './data/experience.json';
import education from './data/education.json';
import projects from './data/projects.json';

const App = () => {
	return (
    <div className="App">

			<NavBar />

			<div className="container">

				{experiences.length > 0 ? [
					<h1 class="mb-3 mt-3">Experience</h1>,
					<ul class="list-unstyled">
						{experiences.map(experience => <ExperienceCard experience={experience}/>)}
					</ul>
				] : null}

				<h1 class="mb-3 mt-5">Education</h1>
				{education.map(education => <EducationCard education={education} />)}

				{projects.length > 0 ? [ 
					<h1 class="mb-3 mt-5">Projects</h1>,
					<div class="row row-cols-1 row-cols-md-3">
							{projects.map(project => <ProjectCard project={project}/>)}
					</div>
				] : null}

			</div>
    </div>
  );
}

export default App;
