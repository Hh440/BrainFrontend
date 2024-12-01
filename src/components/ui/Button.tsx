
export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:any;
    endIcon?:any;
    OnClick:()=>void;
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

 const defaultStyles="rounded-sm flex"

export const  Button = (props:ButtonProps)=>{
    return(
        <button className={`${variantStyles[props.variant]}
        ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon? <div className="pr-2">{props.startIcon}</div>:null} {props.text} {props.endIcon}</button>
    )

}

