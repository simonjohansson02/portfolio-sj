import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const LandingPage = () => {
	return (
		<div className="px-2 sm:px-10 md:px-20 lg:px-28  xl:px-40 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-12 lg:pb-40">
			<div className="w-full lg:items-start items-center grid grid-cols-1 lg:grid-cols-2">
				<div className=" w-full">
					<div className="text-secondBackgroundColor bg-secondBackgroundColor p-6 rounded-xl h-auto mb-12 sm:mb-40">
						<h3 className="text-mainColor text-2xl mb-3">Experience</h3>
						<p className="text-secondaryColor mb-3 text-sm">
							2021-2022 <span className="text-xs">Junior Developer</span>
						</p>
						<p className="text-secondaryColor mb-6 text-sm">
							Open to learning new things to develop companies and my own knowledge. If I'm not the
							perfect one matching in knowledge for you. Then I'm definitely it for my hard working and in
							my learning
						</p>
						<div className="flex flex-row items-center justify-around w-full">
							<ul className="flex flex-col items-center text-thirdColor w-1/2">
								<li>Javascript</li>
								<li>HTML/CSS</li>
								<li>React</li>
								<li>NextJS</li>
								<li>TailwindCSS</li>
								<li>Github</li>
							</ul>

							<ul className="flex flex-col items-center text-thirdColor w-1/2">
								<li>NPM</li>
								<li>Rest Api</li>
								<li>NodeJS</li>
								<li>Express</li>
								<li>MongoDb</li>
								<li>FireBase</li>
							</ul>
						</div>
					</div>
					<div className="text-secondBackgroundColor bg-secondBackgroundColor p-6 rounded-xl h-auto mb-20 lg:mb-0">
						<h3 className="text-mainColor text-2xl mb-3">About Me</h3>

						<p className="text-secondaryColor mb-6 text-sm">
							Hi, I started my journey in web development after the summer of 2021 through a bootcamp and
							self-learning. In over half a year, I see a great growth in my developing journey that grows
							and grows per week. I try to be up to date and learn the new techniques that come after time
							all the time. And in addition to my study knowledge as a person, I am a calm, driven and
							well-structured person who likes technology, gaming and animals. If you are more interested
							in me, do not hesitate to contact me
						</p>
						<div className="flex flex-row justify-between text-mainColor text-xs items-center">
							<div className="flex flex-col ">
								<div className="hidden sm:flex flex-row items-center">
									<MdOutlinePlace className="text-mainColor w-5 h-5" />
									<p className="pl-2">Skåne/Västerås/Stockholm</p>
								</div>
								<div className="flex flex-row items-center">
									<AiOutlinePhone className="text-mainColor w-5 h-5" />
									<p className="pl-2">(+46) 76-875 23 73</p>
								</div>
							</div>
							<div className="hidden sm:flex cursor-pointer flex hover:brightness-75 ">
								<a href="mailto:simonjohanssonstoby@gmail.com">
									<AiOutlineMail className="text-mainColor w-14 h-14" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:h-96 w-full lg:w-72 sticky top-24 lg:pl-40">
					<div className="hidden lg:flex animate-bounce pb-4 w-72">
						<Image
							src="/simon4000x4000.png"
							alt="profile-picture"
							priority
							width={288}
							height={288}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-row justify-around w-full lg:w-72">
						<div className="flex w-16 h-16 rounded-full cursor-pointer border border-thirdColor bg-secondBackgroundColor items-center justify-center hover:brightness-75">
							<a
								href="https://www.linkedin.com/in/simon-johansson-bb645621b/"
								target="_blank"
								className=""
							>
								<FiLinkedin className="text-mainColor w-10 h-10" />
							</a>
						</div>
						<div className="flex w-16 h-16 rounded-full cursor-pointer border border-thirdColor bg-secondBackgroundColor items-center justify-center hover:brightness-75">
							<a href="https://github.com/simonjohansson02" target="_blank" className="">
								<FiGithub className="text-mainColor w-10 h-10" />
							</a>
						</div>
						<div className="flex w-16 h-16 rounded-full cursor-pointer border border-thirdColor bg-secondBackgroundColor items-center justify-center hover:brightness-75">
							<a href="/document/SJCV.pdf" target="_blank" rel="noopener noreferrer" className="">
								<HiOutlineDocumentSearch className="text-mainColor w-10 h-10" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
