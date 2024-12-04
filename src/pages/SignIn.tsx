import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";

export const SignIn = ()=>{

   
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate= useNavigate()



    async function signin(){
        const email = emailRef.current?.value;
       
        const password =  passwordRef.current?.value;

        if (!email || !password) {
            alert("All fields are required!");
            return;
          }
      
          try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
              
                    email,
                    
                    password,
                
            });
      
            
            const jwt= response.data.token
            localStorage.setItem('token', jwt);
            navigate('/dashboard')


          } catch (error) {
            console.error("Signup failed:", error);
            alert("Something went wrong during signup. Please try again.");
          }
    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={emailRef} placeholder="email"/>
                <Input  reference={passwordRef} placeholder="password"/>

                <div className=" flex justify-center items-center pt-4">
                    <Button OnClick={signin} variant="primary" text="SignUp" fullWidth={true} loading={false}/>

                </div>

                

                

            </div>

        </div>
    )
}