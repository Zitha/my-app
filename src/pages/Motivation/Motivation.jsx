import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineBook } from 'react-icons/ai';


const Motivation = () => {
	const [quote, setQuote] = useState({});

	useEffect(() => {
		axios.get("https://api.quotable.io/random")
			.then((response) => {
				setQuote(response.data); 
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='grid h-screen place-items-center overflow-hidden z-[1] p-6 w-screen h-full relative'>
			<div className='font-Karla flex flex-col justify-center items-center gap-6'>
				<p className='text-focus-in text-3xl lg:text-[64px] font-bold text-center'>	Quote of the day</p> 
			</div>
			<div className="flex flex-col justify-center max-w-xs p-8 shadow-xl rounded-xl sm:px-12 dark:bg-white dark:text-black">
				 <AiOutlineBook className="w-8 h-8" />
				<hr className='border-black border-1' />
				<br />
				<div key={quote?.id}>
					<br />
					<h1>"{quote?.content}"</h1>
					<br />
					<h3><i>{quote?.author}</i></h3>
				</div>
			</div>
		</div>
	);
};

export default Motivation;