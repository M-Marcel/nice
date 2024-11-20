import Avatars from '../assets/avatars.png'

type AvatarProps = {
    className:string
    children:React.ReactNode
}

const Avatar = ({className, children}:AvatarProps) => {
    const spanClasses = `text-black-400 text-sm`
    const classes = `flex items-center gap-2 mb-4`
    return (
        <div className={classes}>
            <img src={Avatars} width={50} height={30} alt='avatars' />
            <span className={spanClasses}>{children}</span>
        </div>
    )
}

export default Avatar 