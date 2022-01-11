import React from 'react';
import Image from 'next/image';

const Header = () => {
	return (
		<div className="flex flex-row justify-between p-2 pt-10 pb-12 sm:pr-10 md:pr-20 sm:pl-10 md:pl-20 lg:pl-28  xl:pl-40">
			<div>
				<h2 className="text-mainColor text-base  sm:text-lg">Hi, my name is</h2>
				<h1 className="text-secondaryColor text-2xl  sm:text-5xl ">Simon Johansson</h1>
			</div>
			<div className="relative flex lg:hidden w-14 sm:w-20">
				<Image
					src="/simon4000x4000.png"
					alt="profile-picture"
					priority
					layout="fill"
					className="rounded-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Header;
//sm:pl-6 md:pl-10 lg:pl-16  xl:pl-20
