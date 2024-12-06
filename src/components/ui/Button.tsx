import { ReactElement } from "react";

export interface ButtonProps{
    variant:"primary"|"secondary"|"special"|"modern";
    size?:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    fullWidth?:boolean;
    loading?:boolean
    OnClick?:()=>void;
}


 const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600",
    "special":"bg-green-500 text-white ",
    "modern":"bg-slate-600 text-white"

 }

 const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
 }

 const defaultStyles="rounded-md p-4 flex font-light justify-center items-center h-10"

export const  Button = (props:ButtonProps)=>{

    const {
        variant,
        size = "md", // Provide default size
        text,
        startIcon,
        fullWidth = false,
        loading = false,
        OnClick,
    } = props;
    
    return(
        <button onClick={OnClick }  disabled={loading} className={`${variantStyles[variant]}
        ${defaultStyles} ${sizeStyles[size]} ${fullWidth?"w-full":""} ${loading?"opacity-45":""}`}>{startIcon? <div className="pr-2">{startIcon}</div>:null} {text} </button>
    )

}


