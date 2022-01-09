import React from 'react';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
const AboutMe = () => {
	return (
		<div className="flex pl-40 pb-40">
			<div className="text-secondBackgroundColor bg-secondBackgroundColor p-6 rounded-xl w-2/4 h-auto">
				<h3 className="text-mainColor text-2xl mb-3">About Me</h3>

				<p className="text-secondaryColor mb-6 text-sm">
					Hi, I started my journey in web development after the summer of 2021 through a bootcamp and
					self-learning. In over half a year, I see a great growth in my developing journey that grows and
					grows per week. I try to be up to date and learn the new techniques that come after time all the
					time. And in addition to my study knowledge as a person, I am a calm, driven and well-structured
					person who likes technology, gaming and animals. If you are more interested in me, do not hesitate
					to contact me
				</p>
				<div className="flex flex-row justify-between text-mainColor text-xs items-center">
					<div className="flex flex-col ">
						<div className="flex flex-row items-center">
							<MdOutlinePlace className="text-mainColor w-5 h-5" />
							<p className="pl-2">Skåne/Västerås/Stockholm</p>
						</div>
						<div className="flex flex-row items-center">
							<AiOutlinePhone className="text-mainColor w-5 h-5" />
							<p className="pl-2">(+46) 76-875 23 73</p>
						</div>
					</div>
					<div className="cursor-pointer flex hover:brightness-75 ">
						<a href="mailto:simonjohanssonstoby@gmail.com">
							<AiOutlineMail className="text-mainColor w-14 h-14" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
