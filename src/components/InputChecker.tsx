type CheckerProps = {
    className?:string
    type:'checkbox' | 'radio'
    children:React.ReactNode
}

const InputChecker = ({className, type, children }: CheckerProps) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                type={type}
                className={className}
            />
            <span className="text-sm text-black-500">{children}</span>
        </div>
    )
}


export default InputChecker