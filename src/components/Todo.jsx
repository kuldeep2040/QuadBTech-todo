import { MdArrowDropDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

import TodoItem from "./TodoItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlices";
import CompeletedTodo from "./CompeletedTodo";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const isProfileVisible = useSelector((state) => state.responsive.isProfileVisible);
  const isActionVisible = useSelector((state) => state.responsive.isActionVisible);

  const handleChangeData = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
        <div className={`${!isProfileVisible && isActionVisible ? "w-[52vw] ml-[1vw] mr-[1vw]" : !isActionVisible && !isProfileVisible ? "ml-[2vw] mr-[2vw]" : !isActionVisible && isProfileVisible ? "w-[75vw] col-span-4 -ml-[12vw] " : " -ml-[13vw]"}`} >
            {/* Heading */}
            <div className="flex items-end border-b-2 border-gray-300 pt-[7vh] pb-[1vh] dark:bg-[#1F1F1F] dark:text-white ">
                <h1 className="text-lg font-semibold">To Do</h1>
                <h1 className=" text-lg">
                    <MdArrowDropDown />
                </h1>
            </div>
            {/* add task  */}
            <form onSubmit={handleAddTodo}>
                <div className="border-b-2  ">
                    <input type="text" onChange={handleChangeData} className="dark:bg-[#2F3630] outline-none h-[23vh]  text-4xl w-full pl-[2vw] placeholder:text-3xl placeholder:pl-[2vw]" placeholder="Add A Task" />
                    <div className="flex justify-between dark:bg-[#2F3630]">
                        {/* icons */}
                        <div className="text-3xl  flex space-x-8 ml-[2vw] cursor-pointer">
                            <FaRegBell />
                            <BsRepeat />
                            <CiCalendar />

                        </div >
                        <button type="submit" className="bg-[#357937] text-white font-semibold py-2 px-4 rounded-md shadow-lg m-[1vh] " >
                            ADD TASK
                        </button>
                    </div>
                </div>
            </form>
            <div className="w-full ">
                <TodoItem />
            </div>
            <div className="w-full">
                <h1>Compeleted</h1>
                <CompeletedTodo />
            </div>


        </div>
    )
}

export default Todo