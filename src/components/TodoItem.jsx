import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { done } from '../redux/compeletedSlice';
import { PiTrashFill } from "react-icons/pi";
import { toggleTaskImportant, updateTaskPriority } from '../redux/todoSlices';
import { removeTodo } from '../redux/todoSlices';

const TodoItem = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const toggleTaskDone = (taskId) => {
        const itemToDone = todos.find((task) => task.id === taskId);
        dispatch(done(itemToDone));
        dispatch(removeTodo(taskId));
    };

    const handleImportant = (taskId) => {
        dispatch(toggleTaskImportant(taskId));
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handlePriorityChange = (taskId, priority) => {
        dispatch(updateTaskPriority({ id: taskId, priority })); // Dispatch action to update priority
    };

    // Sort tasks by priority (High > Medium > Low)
    const sortedTodos = [...todos].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return (
        <div className="list-none flex flex-wrap dark:bg-[#1F1F1F] dark:text-white">
            {sortedTodos.map((task) => (
                <div
                    key={task.id}
                    className="max-w-sm mx-full m-[1vw] bg-white shadow-lg rounded-lg overflow-hidden my-4 dark:bg-[#1F1F1F] dark:text-white"
                >
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.isDone}
                                    onChange={() => toggleTaskDone(task.id)}
                                    className="w-8 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className={`${task.isDone ? 'line-through text-gray-500' : ''} ml-2`}>
                                    {task.title}
                                </span>
                            </div>
                            <button onClick={() => handleImportant(task.id)}>
                                <FaStar
                                    className={`text-xl w-6 ${task.isImportant ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                                />
                            </button>
                            <button
                                onClick={() => handleRemove(task.id)}
                                className="text-red-500 text-2xl ml-2"
                            >
                                <PiTrashFill />
                            </button>
                        </div>
                        <div className="mt-2">
                            <label htmlFor={`priority-${task.id}`} className="text-sm font-semibold">
                                Priority:
                            </label>
                            <select
                                id={`priority-${task.id}`}
                                value={task.priority || 'Low'}
                                onChange={(e) => handlePriorityChange(task.id, e.target.value)}
                                className="ml-2 p-1 border rounded-md  dark:bg-[#1F1F1F] dark:text-white"
                            >
                                <option value="High" className=' dark:bg-[#1F1F1F] dark:text-white'>High</option>
                                <option value="Medium" className=' dark:bg-[#1F1F1F] dark:text-white'>Medium</option>
                                <option value="Low" className=' dark:bg-[#1F1F1F] dark:text-white'>Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoItem;
