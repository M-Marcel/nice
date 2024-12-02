type CheckerProps = {
    className?:string
    type:'checkbox' | 'radio'
    checked?:boolean
    children:React.ReactNode
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void
}

const InputChecker = ({className, type, children, checked, onChange }: CheckerProps) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                type={type}
                checked={checked}
                className={className}
                onChange={onChange}
            />
            <span className="text-sm text-black-500">{children}</span>
        </div>
    )
}


export default InputChecker