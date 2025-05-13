import { LuLogIn, LuUserRoundPlus } from "react-icons/lu"
import logo from "../assets/images/logo.png"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <section className="flex items-center justify-between my-5">
      <div className="right-side flex gap-2">
        <Button variant="secondary" className="text-white rounded-full"><LuUserRoundPlus />ثبت نام</Button>
        <Button variant="secondary" className="text-white rounded-full"><LuLogIn />وارد شوید</Button>
      </div>

      <div className="left-side">
        <img src={logo} alt="Logo" className="h-15" />
      </div>
    </section>
  )
}

export default Header