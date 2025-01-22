import { FaRegStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BsRepeat } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { PiTrashFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";



const Action = () => {
    const isProfileVisible = useSelector(state => state.responsive.isProfileVisible)
    const isActionVisible = useSelector(state => state.responsive.isActionVisible)
    return (
        <div className={`${!isProfileVisible && isActionVisible ? "ml-[23vw] col-span-2 bg-[#EEF6EF] pt-[10vh]  dark:bg-[#1F1F1F] dark:text-white " : "bg-[#EEF6EF] pt-[10vh]  dark:bg-[#1F1F1F] dark:text-white dark:border-solid-white"}`}>
            <div className=" dark:bg-[#1F1F1F] dark:text-white ">
                <ul className="pl-[3vh] pt-[3vh] space-y-8">
                    <li className="border-t-2  flex  justify-between pt-[3vh] ">

                        <div className="flex space-x-8 "> <h1 className="text-2xl">
                            <MdOutlineCheckBoxOutlineBlank />
                        </h1>

                            <h4 className="">Buy groceries</h4></div>

                        <h1 className="text-2xl pr-[4vw]"><FaRegStar /></h1>
                    </li>
                    <li className="border-t-2 flex  space-x-8 p"><h1 className="text-2xl"> <IoMdAdd /> </h1>
                        <h4>Add Step</h4></li>
                    <li className="border-t-2 flex space-x-8 "> <h1 className="text-2xl"> <FaRegBell /></h1>
                        <h4>Set Reminder</h4></li>
                    <li className="border-t-2 flex space-x-8 "> <h1 className="text-2xl"><CiCalendar /></h1><h4>Add Due Date</h4></li>
                    <li className="border-t-2 flex space-x-8 "> <h1 className="text-2xl"><BsRepeat /></h1><h4>Repeat</h4></li>

                    <li className="border-t-2 flex space-x-16 pb-[35vh] "><input className="bg-transparent pl-[2vw] pt-[2vh]  outline-none" placeholder="Add Notes" /></li>
                    <li className="border-t-2 flex space-x-8 "> <h1 className="text-2xl"><BsRepeat /></h1></li>
                     
                </ul>

            </div>
            <div className=" border-t-2 flex justify-between p-[1vh]">
                <h1><ImCross />
                </h1>
                <h4> Created Today</h4>
                <h1 className="text-2xl"><PiTrashFill />
                </h1>

            </div>

        </div>
    )
}

export default Action;