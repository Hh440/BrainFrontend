import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";
// import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const PasswordRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleSubmit() {
    const email = EmailRef.current?.value;
    const password = PasswordRef.current?.value;

    if (!email || !password) {
      toast.warning("All fields should be filled");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        email,
        password,
      });

      const jwt = response.data.token;

      localStorage.setItem("token", jwt);

      toast.success("LogIn Successful");
      navigate("/dashboard");
    } catch (e) {
      console.log("Error while LogIn");
      toast.error("Error while LogIn");
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-11/12 max-w-5xl bg-white h-auto md:h-5/6 grid grid-cols-1 md:grid-cols-2 border border-gray-300 shadow-2xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="p-6 sm:p-12 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">LogIn</h1>
          <p className="text-gray-600">
            Create an account?{" "}
            <a href="/signup" className="text-blue-600 underline">
              SignUp
            </a>
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 pt-6">
            <div>
              <Label title="Email" className="pl-2" />
              <Input
                reference={EmailRef}
                placeholder="mohan12@gmail.com"
                className="w-full text-md border-gray-300"
              />
            </div>

            <div>
              <Label title="Password" className="pl-2" />
              <Input
                reference={PasswordRef}
                placeholder="Kre@3$#!"
                className="w-full text-md border-gray-300"
              />
              <p className="text-sm text-gray-400 pl-2">
                Use 8 or more characters with a mix of letters, numbers, & symbols
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            By creating an account, you agree to our{" "}
            <a className="underline text-gray-800" href="#">
              Terms of use
            </a>{" "}
            and{" "}
            <a className="underline text-gray-800" href="#">
              Privacy Policy
            </a>
          </p>

          {/* Button */}
          <div className="mt-8">
            <Button text="LogIn" variant="modern" OnClick={handleSubmit} />
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Create an account?{" "}
            <a href="/signup" className="text-blue-600 underline">
              SignUp
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:block bg-gradient-to-r from-black via-gray-700 to-zinc-700"></div>
      </div>
    </div>
  );
};
