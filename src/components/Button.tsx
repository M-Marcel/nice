type ButtonProps = {
    className:string
    children:React.ReactNode
    href?:string
    onClick?:() => void
    type?:"submit" | "reset" | "button" 
}

const Button = ({className, type, children, href, onClick }:ButtonProps) => {
    return(
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;