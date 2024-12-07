import { Logo } from "../../icons/Logo"
import { Button } from "./Button"


export const NavBar= ()=>{

    return(
        <nav className="h-16 border shadow-md">

            <div className="pt-3 flex justify-between">
                <div className="flex justify-start pl-12 gap-3">
                    <Logo/>

                    <h1 className="text-3xl font-medium">Brain</h1>

                </div>
                <div className="flex justify-end pr-16 gap-10 ">
                    <ul className="flex items-center gap-3">
                        <li className="text-slate-600"><a href="#">Features</a></li>
                        <li className="text-slate-600"><a href="#">How it Works</a></li>
                        <li className="text-slate-600"><a href="#">Pricing</a></li>
                    </ul>

                    <div className="flex gap-4 ">
                        <Button text="LogIn" variant="primary"/>
                        <Button text="SignUp" variant="modern"/>

                    </div>

                </div>

            </div>



            


            

        </nav>
    )

}