import React from 'react';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
const ProjectCard = ({ title, info, stack, github, website, image }) => {
	return (
		<div className="pb-10 sm:pb-0">
			<div className="text-secondBackgroundColor bg-secondBackgroundColor p-6 rounded-xl  h-[500px]">
				<h3 className="text-mainColor text-2xl mb-3">{title}</h3>
				{/* <p className="text-secondaryColor">{info}</p> */}
				<div className="relative px-16 w-full h-52 cursor-pointer hover:brightness-50">
					<a href={website} target="_blank">
						<Image
							src={image}
							alt={`${title}-picture`}
							priority
							layout="fill"
							className="object-cover rounded-xl"
						/>
					</a>
				</div>
				<div className="pb-4">
					<p className="text-secondaryColor ">{stack}</p>
				</div>
				<div className="flex flex-col items-center pt-10 ">
					<div className="relative flex flex-row items-center w-full justify-between">
						<div className="flex w-16 h-16 rounded-full cursor-pointer border border-thirdColor bg-secondBackgroundColor items-center justify-center hover:brightness-75">
							<a href={website} target="_blank" className="">
								<CgWebsite className="text-mainColor w-10 h-10" />
							</a>
						</div>
						<div className="flex w-16 h-16 rounded-full cursor-pointer border border-thirdColor bg-secondBackgroundColor items-center justify-center hover:brightness-75">
							<a href={github} target="_blank" className="">
								<FiGithub className="text-mainColor w-10 h-10" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;