import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Button } from "../components/ui/Button"
// import ReCAPTCHA from "react-google-recaptcha"



export const Test= ()=>{
    return(
        <div className="w-screen h-screen flex bg-black items-center justify-center">

            <div className="w-7/12 text-black bg-white h-5/6 grid grid-cols-2">

                <div className="bg-gradient-to-r from-slate-900 via-sky-400 to-blue-800">
                    

                </div>
                <div className=" flex flex-col  border-l-2 p-12">

                   <div  className="w-full">
                        <h1 className=" text-2xl px-4">Create an Account</h1>
                        <span className="px-4">Already have an account? <a href="/signin" className="text-blue-600 underline">LogIn</a></span>
                        <br></br>


                        <div className="flex flex-col gap-2 pt-8 w-full pr-4">

                            <div>
                                <Label title="Email" className={"pl-2"}/>
                                <Input placeholder="mohan12@gmail.com" className={"w-full text-md" }/>
                            </div>  

                            <div>
                                <Label title="Username" className={"pl-2"}/>
                                <Input placeholder="mohan21e" className={"w-full text-md" }/>
                            </div>  

                            <div className="w-full">
                                <Label title="Password" className={"pl-2"}/>
                                <Input placeholder="Kre@3$#!" className={"w-full text-md" }/>
                                <h3 className="text-sm text-slate-400 pl-2">Use 8 or more characters with a mix of letters, numbers, & symbols</h3>
                            </div>    
                        </div>

                        <div className="pl-2 pt-6">
                            <div className="text-sm text-slate-400">By creating an account, you agree to our</div>
                            <div className="text-sm text-slate-400"><a className="underline text-black" href="#">Terms of use</a> and <a className="underline text-black" href="#">Privacy Plociy</a></div>
                        </div>

                        <div className="pt-12 pl-2">
                            {/* <ReCAPTCHA theme="light"/> */}

                        <Button text="Create an Account" variant="modern"/>

                        </div>

                        <div className="pt-4">

                            <span className=" pl-2 text-sm">Already have an account? <a href="/signin" className="text-blue-600 underline">LogIn</a></span>


                        </div>

                        




                       
                        

                        
                    </div> 
                  


                    
                </div>

            

            </div>
            
        </div>
    )
}