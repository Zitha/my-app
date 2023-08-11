import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs';

const TaskItem = ({ task, changeTask, removeTask }) => {
	const today = new Date(); 
	const [isPastDue, setIsPastDue] = React.useState(new Date(task.dueDate) < today); 
	return (
		<div className=' flex items-center justify-between border-2  border-black  mb-4 rounded-2xl bg-white p-5 w-full text-black'>

			<button className=' flex items-center' onClick={() => changeTask(task.id)}>

				<Check completed={task.completed} />

				<span className={` ${task.completed ? ' line-through' : ''}`}>
					<b> {task.title} </b><br />
					<i style={{ color: isPastDue ? 'red' : 'green' }}>{task.dueDate}</i>
				</span>
			</button>

			<button onClick={() => removeTask(task.id)}>
				<BsTrash size={22} className=' text-black hover:text-red-700 transition-colors ease-in-out duration-200' />
			</button>
		</div>
	)
}

export default TaskItem;