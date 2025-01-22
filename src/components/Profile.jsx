import { RxAvatar } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { TbChecklist } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import CircularGraph from "./CircularGraph";
import { useSelector } from "react-redux";
// import { image } from "../../public";

const Profile = () => {
    
 const pendingLength = (useSelector(state => state.todo.todos) || []).length;
const completedLength = (useSelector(state => state.compeleted) || []).length;

  const totalTask = pendingLength + completedLength;

  return (
    <div className="mt-10 w-full md:w-1/4 lg:w-80 h-screen bg-[#EEF6EF] p-4 dark:text-white dark:bg-[#2C2C2C] flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl -mt-16">
          {/* <RxAvatar /> */}
          <img className="aspect-square rounded-full w-[118px]"  src="image.png"alt="" />
        </h1>
        <h4 className="text-center mt-2">Hey, ABCD</h4>
      </div>

      {/* Task Section */}
      <div className="bg-white dark:bg-[#232323]  dark:text-white mt-4 rounded-md p-4">
        <div className="hover:bg-green-400mb-4 flex flex-col">
          {[
            { Icon: LuClipboardList, label: "All Tasks" },
            { Icon: CiCalendar, label: "Today" },
            { Icon: CiStar, label: "Important" },
            { Icon: CiMap, label: "Planned" },
            { Icon: TbChecklist, label: "Assigned Items" },
          ].map(({ Icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-md mb-2 p-2 rounded-md hover:bg-[#35793729] hover:dark:bg-[#35793729] cursor-pointer"
            >
              <Icon />
              <h1>{label}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Add List Section */}
      <div className="mt-4 bg-white dark:bg-[#1F1F1F] dark:text-white rounded-md p-4 flex items-center space-x-3 hover:bg-[#EEF6EF] cursor-pointer">
        <IoMdAdd className="text-2xl" />
        <h2>Add List</h2>
      </div>

      {/* Graph Section */}
      <div className="mt-6 bg-white dark:bg-[#1F1F1F] dark:text-white rounded-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-md">Today's Tasks</h1>
          <IoInformationCircleOutline className="text-xl cursor-pointer" />
        </div>
        <div className="text-3xl mt-2 mb-4">{totalTask}</div>
        <div className="flex justify-center items-center">
          <CircularGraph />
        </div>
      </div>
    </div>
  );
};

export default Profile;
