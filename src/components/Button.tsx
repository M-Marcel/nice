type ButtonProps = {
    id?:string
    className:string
    children:React.ReactNode
    href?:string
    disabled?: boolean
    onClick?:() => void
    type?:"submit" | "reset" | "button" 
}

const Button = ({id, disabled, className, type, children, href, onClick }:ButtonProps) => {
    return(
        <button id={id} disabled={disabled} type={type} className={className} onClick={onClick}>
            {children}
        </button>

       
    )
}

export default Button;