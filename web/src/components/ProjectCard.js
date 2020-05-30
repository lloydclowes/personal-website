import React from 'react';

const ProjectCard = ({ project }) =>
  <div class="col mb-4 projects">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title">{project.title}</h5>
				<p class="card-text">
					<small class="text-muted">
						{project.date ? project.date : project.dateFrom + " - " + project.dateTo}
					</small>
				</p>
				{project.description ? <p class="card-text">{project.description}</p> : null}
				
				{project.buttons ? 
					project.buttons.map(button => 
						<a href={button.buttonLink} class="btn btn-primary mx-1">{button.buttonText}</a>
					) : null
				}
			</div>
		</div>
	</div>

export default ProjectCard;