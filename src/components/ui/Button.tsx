import { ReactElement } from "react";

export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    
    OnClick?:()=>void;
}


 const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
 }

 const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
 }

 const defaultStyles="rounded-md p-4 flex font-light justify-center items-center h-10"

export const  Button = (props:ButtonProps)=>{
    return(
        <button onClick={props.OnClick } className={`${variantStyles[props.variant]}
        ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon? <div className="pr-2">{props.startIcon}</div>:null} {props.text} </button>
    )

}


