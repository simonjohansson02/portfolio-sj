import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const spotify = {
		title: 'Spotify Clone',
		info: 'Did a spotify clone in three weeks',
		stack: 'Next.js, Redux, TailwindCSS',
		github: 'https://github.com/simonjohansson02/spotify-clone',
		website: 'https://spotify-clone-rho-ashy.vercel.app/',
		image: '/spotify-clone-img.png'
	};
	const webshop = {
		title: 'Webshop with Klarna',
		info: 'Did a webshop in two weeks',
		stack: 'React, Redux, Express',
		github: 'https://github.com/simonjohansson02/techover-webbshop',
		website: 'https://techover-webbshop.vercel.app/',
		image: '/webshop.png'
	};
	const sharemeApp = {
		title: 'Shareme App',
		info: 'Did a shareme app in one week',
		stack: 'React, Sanity, TailwindCSS',
		github: 'https://github.com/simonjohansson02/exploreThings',
		website: 'https://sharme-simon.netlify.app/',
		image: '/sharme.jpg'
	};
	const portfolio = {
		title: 'Portfolio',
		info: 'Did a Portfolio in a few days',
		stack: 'Next.js, TailwindCSS',
		github: 'https://github.com/simonjohansson02/portfolio-sj',
		website: 'https://portfolio-sj.vercel.app/',
		image: '/portfolio.png'
	};

	return (
		<div className="">
			<div className="px-2 pb-12 sm:pl-10 md:pl-20 lg:pl-28  xl:pl-40">
				<h1 className="text-mainColor text-lg">My Projects</h1>
			</div>
			<div className="grid gap-2 xl:gap-3 px-2 sm:px-10 md:px-20 lg:px-28  xl:px-40 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb:20 sm:pb-40">
				<ProjectCard
					title={spotify.title}
					info={spotify.info}
					stack={spotify.stack}
					github={spotify.github}
					website={spotify.website}
					image={spotify.image}
				/>
				<ProjectCard
					title={webshop.title}
					info={webshop.info}
					stack={webshop.stack}
					github={webshop.github}
					website={webshop.website}
					image={webshop.image}
				/>
				<ProjectCard
					title={sharemeApp.title}
					info={sharemeApp.info}
					stack={sharemeApp.stack}
					github={sharemeApp.github}
					website={sharemeApp.website}
					image={sharemeApp.image}
				/>
				<ProjectCard
					title={portfolio.title}
					info={portfolio.info}
					stack={portfolio.stack}
					github={portfolio.github}
					website={portfolio.website}
					image={portfolio.image}
				/>
			</div>
		</div>
	);
};

export default Projects;
