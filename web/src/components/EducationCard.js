import React from 'react';

const EducationCard = ({ education }) =>
  <div class="card mb-3">
		<img src={require("../images/" + education.image)} class="card-img-top" alt={education.name} />
		<div class="card-body">
			<h5 class="card-title mb-0">
				<span>{education.name}</span>
				<span className="subheader"> - {education.degree}</span>
			</h5>
			<div class="mb-3"><small class="text-muted">
				{education.dateFrom + " - " + education.dateTo}
			</small></div>
			{education.subsections ? 
				education.subsections.map(subsection => 
					<p class="card-text"><b>{subsection.title}: </b>{subsection.body}</p>
				) : null
			}
		</div>
	</div>

export default EducationCard;