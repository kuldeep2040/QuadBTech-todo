
import { useSelector } from 'react-redux'
import Action from './Action'
import Navbar from './Navbar'
import Profile from './Profile'
import Todo from './Todo'

const Layout = () => {
    const isProfileVisible = useSelector(state => state.responsive.isProfileVisible)
    const isActionVisible = useSelector(state => state.responsive.isActionVisible)



    return (        
<div className="dark:bg-[#1F1F1F] dark:text-white min-h-screen" >
            <Navbar />
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {/* Profile Section */}
                {isProfileVisible && <Profile className="col-span-1" />}

                {/* Todo Section */}
                <div
                    className={`${!isProfileVisible && !isActionVisible
                        ? "col-span-1 lg:col-span-3"
                        : isProfileVisible && !isActionVisible
                            ? "col-span-2 md:col-span-1"
                            : !isProfileVisible && isActionVisible
                                ? "col-span-2  md:col-span-1"
                                : "col-span-1"
                        }`}
                >
                    <Todo />
                </div>

                {/* Action Section */}
                {isActionVisible && <Action className="col-span-1" />}
            </div>



        </div>
    )
}

export default Layout