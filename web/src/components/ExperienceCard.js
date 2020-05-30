import React from 'react';

const ExperienceCard = ({ experience }) =>
  <li class="media my-4">
		<img
			src={require("../images/" + experience.image)} 
			class="mr-3" 
			alt={experience.company + " logo"} 
			width="60" 
			height="60" 
		/>
		<div class="media-body">
			<h5 class="mt-0 mb-0">
				<span>{experience.company}</span>
				<span className="subheader"> - {experience.role}</span>
			</h5>
			<div><small class="text-muted">
				{experience.dateFrom + " - " + experience.dateTo}
			</small></div>
			
			{experience.description}
			{experience.bulletPoints &&
				[
					<ul className="experience-bullet">
						{experience.bulletPoints ? 
							experience.bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>) 
							: null
						}
					</ul>
				]
			}
		</div>
	</li>

export default ExperienceCard;
