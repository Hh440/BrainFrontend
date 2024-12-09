import { useNavigate } from "react-router-dom"
import { Logo } from "../../icons/Logo"
import { Button } from "./Button"

export const NavBar = () => {

    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate('/signup')
    }
    const handleSignIn = () => {
        navigate('/signin')
    }

    return (
        <nav className="h-16 border shadow-md">

            <div className="pt-3 flex flex-wrap justify-between px-4 sm:px-8 md:px-12">
                <div className="flex justify-between items-center w-full md:w-auto gap-3">
                    <div className="text-blue-500">
                        <Logo />
                    </div>
                    <h1 className="text-3xl font-medium">Brain</h1>
                </div>

                <div className="flex flex-wrap justify-between items-center w-full md:w-auto gap-6 mt-4 md:mt-0">
                    <ul className="flex items-center gap-6">
                        <li className="text-slate-600"><a href="#">Features</a></li>
                        <li className="text-slate-600"><a href="#">How it Works</a></li>
                        <li className="text-slate-600"><a href="#">Pricing</a></li>
                    </ul>

                    <div className="flex gap-4">
                        <Button text="LogIn" variant="primary" OnClick={handleSignIn} />
                        <Button text="SignUp" variant="modern" OnClick={handleSignUp} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
