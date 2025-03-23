
type HeadingProps = {
    children:React.ReactNode
    className:string
}

const Heading = ({children, className} : HeadingProps ) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Heading