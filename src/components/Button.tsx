type ButtonProps = {
    id?:string
    className:string
    children:React.ReactNode
    href?:string
    onClick?:() => void
    type?:"submit" | "reset" | "button" 
}

const Button = ({id, className, type, children, href, onClick }:ButtonProps) => {
    return(
        <button id={id} type={type} className={className} onClick={onClick}>
            {children}
        </button>

       
    )
}

export default Button;