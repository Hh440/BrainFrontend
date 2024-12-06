import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Button } from "../components/ui/Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../Config"
// import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';



export const SignUp= ()=>{


    const UsernameRef= useRef<HTMLInputElement>(null)
    const PasswordRef= useRef<HTMLInputElement>(null)
    const EmailRef= useRef<HTMLInputElement>(null)
    const navigate= useNavigate()

    async function handleSubmit(){

        const email= EmailRef.current?.value;
        const password= PasswordRef.current?.value;
        const username= UsernameRef.current?.value;

        if(!email||!password||!username){
            toast.warning("All feilds should be filled")
        }

        try{
            await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                email,
                username,
                password
            })

            toast("Successfuly signed Up")
            navigate('/signin')

        }catch(e){
            console.log("Error while fetching the signup")
            toast.error("Error while SignUp")
        }

    }







    return(
        <div className="w-screen h-screen flex  items-center justify-center">

            <div className="w-7/12 text-black bg-white h-5/6 grid grid-cols-2 border border-black shadow-2xl rounded shadow-stone-700">

                <div className="bg-gradient-to-r  from-black via-zinc-700 to-stone-800">
                    

                </div>
                <div className=" flex flex-col  border-l-2 p-16">

                   <div  className="w-full">
                        <h1 className=" text-2xl px-4 font-medium">Create an Account</h1>
                        <span className="px-4">Already have an account? <a href="/signin" className="text-blue-600 underline">LogIn</a></span>
                        <br></br>


                        <div className="flex flex-col gap-2 pt-8 w-full pr-4">

                            <div>
                                <Label title="Email" className={"pl-2"}/>
                                <Input reference={EmailRef} placeholder="mohan12@gmail.com" className={"w-full text-md" }/>
                            </div>  

                            <div>
                                <Label title="Username" className={"pl-2"}/>
                                <Input reference={UsernameRef} placeholder="mohan21e" className={"w-full text-md" }/>
                            </div>  

                            <div className="w-full">
                                <Label title="Password" className={"pl-2"}/>
                                <Input  reference={PasswordRef} placeholder="Kre@3$#!" className={"w-full text-md" }/>
                                <h3 className="text-sm text-slate-400 pl-2">Use 8 or more characters with a mix of letters, numbers, & symbols</h3>
                            </div>    
                        </div>

                        <div className="pl-2 pt-6">
                            <div className="text-sm text-slate-400">By creating an account, you agree to our</div>
                            <div className="text-sm text-slate-400"><a className="underline text-black" href="#">Terms of use</a> and <a className="underline text-black" href="#">Privacy Plociy</a></div>
                        </div>

                        <div className="pt-12 pl-2">
                            {/* <ReCAPTCHA theme="light"/> */}

                        <Button text="Create an Account" variant="modern" OnClick={handleSubmit}/>

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