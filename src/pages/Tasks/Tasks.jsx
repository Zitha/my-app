import React, { useState, useEffect } from "react";
import CreateTask from '../../components/Main/item/CreateTask'
import SortTasks from '../../components/Main/item/SortTasks'
import TaskItem from '../../components/Main/item/TaskItem'



const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [sortBy, setSortBy] = useState('All');

	useEffect(() => {
		const localTasks = localStorage.getItem("tasks");
		if (localTasks !== null) {
			var taskss = JSON.parse(localTasks);
			setTasks(taskss);
		}
	}, []);

	const filteredTasks = tasks.filter(task => {
		if (sortBy === 'All') return true;
		if (sortBy === 'Completed') return task.completed;
		if (sortBy === 'On Going') return !task.completed;
		return false;
	});

	function handleSortBy(state) {
		setSortBy(state);
	}

	function updateTask(title, dueDate) {
		var id = Date.now();
		var copyTasks = JSON.stringify(tasks);

		setTasks(prev => [
			{
				id: id,
				title,
				dueDate,
				complete: false,
			},
			...prev,
		])
		var dd = JSON.parse(copyTasks);
		dd.push({
			id: id,
			title,
			dueDate,
			complete: false,
		});
		localStorage.setItem("tasks", JSON.stringify(dd));
	}

	const changeTask = id => {
		const copy = [...tasks]
		const current = copy.find(t => t.id === id)
		current.completed = !current.completed
		setTasks(copy)
		localStorage.setItem("tasks", JSON.stringify(copy));
	}

	const removeTask = id => {
		var copyTasks = JSON.stringify(tasks);
		var dd = JSON.parse(copyTasks).filter(t => t.id !== id);
		localStorage.setItem("tasks", JSON.stringify(dd));

		setTasks([...tasks].filter(t => t.id !== id));
	}


	return (
		<div className="z-[1] p-6 w-screen h-full  relative">
			<CreateTask updateTask={updateTask} />
			<br />
			<hr />
			<br />
			<SortTasks handleSortBy={handleSortBy} />
			{filteredTasks.length === 0 ?
				<div className='flex justify-center'>
					<h1 className=' text-black text-5xl pt-16'>
						Tasks not found :(
					</h1>
				</div>
				:
				filteredTasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						changeTask={changeTask}
						removeTask={removeTask}
					/>
				))}
		</div>
	)
}

export default Tasks;