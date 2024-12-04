
interface InputProps{
    placeholder:string;
    reference?:any;
}
export function Input({placeholder,reference}:InputProps){
    return(
    <div>
        <input ref={reference} type={"text"} className="px-4 py-2 border-2 rounded m-2" placeholder={placeholder}   ></input>

    </div>
    )
}