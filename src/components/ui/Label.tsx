
interface LabelProps{
    title:string,
    className:any
}

export const Label = ({title,className}:LabelProps)=>{

    const defaultClass ="text-slate-400 text-sm"
    return(
        <label className={`${defaultClass} ${className}`}>{title}</label>
    )
}