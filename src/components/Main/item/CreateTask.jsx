import React, { useState } from 'react';

const CreateTask = ({ updateTask }) => {
	const [title, setTitle] = useState('');
	const [dueDate, setDueDate] = useState('');

	const addTask = (title, dueDate) => {
		if (title !== '' && dueDate !== '') {
			updateTask(title, dueDate);
			setTitle('');
			setDueDate('');
		}
		setTitle('')
	}


	return (
		<div className="grid grid-cols-4 gap-2">
			<div className='col-span-2 flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-20 w-full'>
				<input
					type="text"
					onChange={e => setTitle(e.target.value)}
					value={title}
					className=' bg-transparent w-full border-none outline-none'
					placeholder='Task Name'
				/>
			</div>
			<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-20 w-full'>
				<input
					type="date"
					placeholder="Select a date"
					value={dueDate}
					onChange={(event) => setDueDate(event.target.value)}
				/>
			</div>
			<div className='flex items-center justify-between mb-4 px-5 py-3 mt-20 w-full'>
				<button
					className='relative m-auto rounded-full bg-[#028ce8] border-[3px] border-black  text-3xl px-6 flex flex-row justify-center items-center gap-1'
					onClick={() => addTask(title, dueDate)}>
					Add Task
				</button>
			</div>
		</div >
	)
}

export default CreateTask