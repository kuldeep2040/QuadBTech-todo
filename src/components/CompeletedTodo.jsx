import { useSelector } from "react-redux"
import { FaStar } from 'react-icons/fa';

const CompeletedTodo = () => {
    const CompeletedTask = useSelector(state => state.compeleted)

    return (
        <>

            <ul className="list-none">
                {CompeletedTask.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between mb-2 p-2 border-b border-gray-300"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                disabled
                                className="mr-2 h-4 w-4 "
                            />
                            <span className="line-through">
                                {task.title}
                            </span>
                        </div>
                        <button >
                            <FaStar
                                className={`text-xl ${task.isImportant ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CompeletedTodo