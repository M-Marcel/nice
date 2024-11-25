import ComputerImg from '../assets/computer.png'


const ComputerIcon = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={ComputerImg} alt="ComputerIcon" width={30} height={30} />
            
        </div>
    )
}

export default ComputerIcon;