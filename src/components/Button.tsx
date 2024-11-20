type ButtonProps = {
    className:string
    children:React.ReactNode
    href?:string
    onClick?:() => void

}

const Button = ({className, children, href, onClick }:ButtonProps) => {
    return(
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;