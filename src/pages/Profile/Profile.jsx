import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaTelegramPlane } from 'react-icons/fa'

const Profile = () => {
	return (
		<div className='grid h-screen place-items-center overflow-hidden '>
			<div className="flex flex-col justify-center max-w-xs p-6 shadow-xl rounded-xl sm:px-12 dark:bg-white dark:text-black">
				<img src="https://i.pinimg.com/564x/97/91/21/9791216c502a370f4d819f0f8d51b996.jpg" alt=""
					className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
				<div className="space-y-4 text-center divide-y divide-gray-700">
					<div className="my-2 space-y-1">
						<h2 className="text-xl font-semibold sm:text-2xl">Mpho Lukhwareni</h2>
						<p className="px-5 text-xs sm:text-base dark:text-[#1a1a1a]">Frontend developer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;