import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineBook } from 'react-icons/ai';
import About3 from '../../assets/About-3.png'

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
		<div className="slide-in-fwd-center flex flex-col justify-center items-center w-screen relative top-0 font-bold contain">
			<div className='font-Karla flex flex-col justify-center items-center gap-1'>
				<p className='text-focus-in text-3xl lg:text-[64px] font-bold text-center'>	Quote of the day</p>
			</div>
			<div className='flex flex-row w-full justify-center items-center gap-5 p-4'>
				<div className=' border-[1px] border-black p-2x relative gap-2' >
					<img src={About3} alt="About" width={300} height={250} />
					<p className='font-Karla font-medium text-xl w-1/2' style={{ mr: 1 }}>"{quote?.content}"</p>
					<br />
					<i>{quote?.author}</i>
				</div>
			</div>
		</div >
	);
};

export default Motivation;