import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../Config"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"


export const SignUp = ()=>{
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);



    async function signup(){
        const email = emailRef.current?.value;
        const username= usernameRef.current?.value;
        const password =  passwordRef.current?.value;
        const navigate= useNavigate()

        if (!email || !username || !password) {
            alert("All fields are required!");
            return;
          }
      
          try {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
              
                    email,
                    username,
                    password,
                
            });
      
            
            alert("You have signed up successfully!");
            navigate("/signin")
            
          } catch (error) {
            console.error("Signup failed:", error);
            alert("Something went wrong during signup. Please try again.");
          }
    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={emailRef} placeholder="Email"/>
                <Input reference={usernameRef} placeholder="UserName"/>
                <Input reference={passwordRef} placeholder="Password"/>

                <div className=" flex justify-center items-center pt-4">
                    <Button OnClick={signup} variant="primary" text="SignUp" fullWidth={true} loading={false}/>

                </div>

                

                

            </div>

        </div>
    )
}