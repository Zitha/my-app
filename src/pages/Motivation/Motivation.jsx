import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineBook } from 'react-icons/ai';

const Motivation = () => {
	const [quote, setQuote] = useState({});

	useEffect(() => {
		axios.get("https://api.quotable.io/random")
			.then((response) => {
				setQuote(response.data);
				var a = 1 + 1;
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='grid h-screen place-items-center overflow-hidden '>
			<div className="flex flex-col justify-center max-w-xs p-6 shadow-xl rounded-xl sm:px-12 dark:bg-white dark:text-black">
				<h2 className=' text-black text-4xl pt-16'>
					Quote of the day
				</h2><AiOutlineBook className="w-8 h-8" />
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