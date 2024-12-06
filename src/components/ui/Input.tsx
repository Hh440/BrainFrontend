
interface InputProps{
    placeholder:string;
    reference?:any;
    className?:any
}

export function Input({placeholder,reference,className}:InputProps){
    const defaultClass="px-4 py-2 border-2 rounded m-2"
    return(
    <div>
        <input ref={reference} type={"text"} className={`${defaultClass} ${className}`} placeholder={placeholder}   ></input>

    </div>
    )
}