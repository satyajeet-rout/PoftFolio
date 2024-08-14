import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div >
			
			<div className="all-projects-container flex flex-col border-2 rounded-2xl border-black bg-[#F2F0E0] shadow-2xl">
				<h1 className="text-2xl  text-white font-black border-black border-2 bg-blue-700 w-[200px] text-center rounded-xl m-auto mt-4 mb-7">React Projects</h1>
				<div className=" flex flex-wrap justify-center gap-10">
					{INFO.reactProjects.map((reactProject, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={reactProject.logo}
						title={reactProject.title}
						description={reactProject.description}
						linkText={reactProject.linkText}
						link={reactProject.link}
						githubLink={reactProject.githublink}
						githubLinkText={reactProject.githubLinkText}
						projectImg={reactProject.image}
					/>
				</div>
			))}
			</div>
			</div>



			<div className="all-projects-container flex flex-col border-2 rounded-2xl border-black bg-[#F2F0E0] shadow-2xl mt-8">
				<h1 className="text-2xl  text-white font-black border-black border-2 bg-orange-500 w-[250px] text-center rounded-xl m-auto mt-4 mb-7">Tailwind Css Project</h1>
				<div className=" flex flex-wrap justify-center gap-10">
					{INFO.tailwindProjects.map((tailwindProject, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={tailwindProject.logo}
						title={tailwindProject.title}
						description={tailwindProject.description}
						linkText={tailwindProject.linkText}
						link={tailwindProject.link}
						githubLink={tailwindProject.githublink}
						githubLinkText={tailwindProject.githubLinkText}
						projectImg={tailwindProject.image}
					/>
				</div>
			))}
			</div>
			</div>
			


			<div className="all-projects-container flex flex-col border-2 rounded-2xl border-black mt-4 bg-[#F2F0E0] ">
				<h1 className="text-2xl  text-black font-black border-black border-2 bg-purple-300 w-[300px] text-center rounded-xl m-auto mt-4 mb-7">Html And Css Projects</h1>
				<div className=" flex flex-wrap">
					{INFO.htmlCssProjects.map((htmlCssProject, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={htmlCssProject.logo}
						title={htmlCssProject.title}
						description={htmlCssProject.description}
						linkText={htmlCssProject.linkText}
						link={htmlCssProject.link}
						githubLink={htmlCssProject.githublink}
						githubLinkText={htmlCssProject.githubLinkText}
						projectImg={htmlCssProject.image}
					/>
				</div>
			))}
			</div>
		</div>
		</div>
	);
};

export default AllProjects;
