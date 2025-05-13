import { LuFilm, LuHouse, LuSearch } from "react-icons/lu"
import NavbarItem from "./NavbarItem"
import { FaAndroid } from "react-icons/fa6"
import { FaTheaterMasks } from "react-icons/fa"


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between bg-secondary w-full px-8 py-4">
            <ul className="flex gap-8">
                <li>
                    <NavbarItem title="خانه" subtitle="HOME" icon={LuHouse} />
                </li>
                <li>
                    <NavbarItem title="دانلود فیلم" subtitle="MOVIES" icon={LuFilm} />
                </li>
                <li>
                    <NavbarItem title="هنرمندان" subtitle="ARTISTS" icon={FaTheaterMasks} />
                </li>
                <li>
                    <NavbarItem title="اپلیکیشن" subtitle="APP" icon={FaAndroid} iconColorClass="text-[#30dc80]" /></li>
            </ul>

            <div className="sear-box relative w-1/5">
                <input className="bg-background rounded-full text-sm text-secondary-foreground py-1.5 px-2 w-full" placeholder="جستجو کنید ..." />
                <button className="text-primary absolute top-2 left-2"><LuSearch /></button>
            </div>
        </nav>
    )
}

export default NavBar