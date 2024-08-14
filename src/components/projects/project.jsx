import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


import "./styles/project.css";


const Project = (props) => {
	const { logo, title, description, linkText, githubLinkText, link, githubLink, projectImg } = props;

	return (
		<React.Fragment>
			<div className="project border-2 border-black">
				<div >
					<div className="project-container">
						
						<div className="project-title underline">{title}</div>
						<img className="w-full border-2 border-black" src={projectImg} />
						<div className="project-description font-black underline mt-2">{description}</div>
						
						<Link to={link}>
							<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
								
							</div>
							

							<div className="project-link-text">{linkText}</div>
							
						</div>
						</Link>
						<Link to={githubLink}>
							<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
								
							</div>
							

							<div className="github-project-link-text text-[14px] font-bold ml-[-7px]">{githubLinkText}</div>
							
						</div>
						</Link>
						
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
