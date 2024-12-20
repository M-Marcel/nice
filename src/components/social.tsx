import { socialLinks } from '../constants'

const Social = () => {

    return (
       <div className='flex relative'>
          {socialLinks.map((item, index) => (
             <a href={item.url}
              key={item.id} 
              className="relative"
              style={{ marginLeft: index === 0 ? 0 : -7 }}
              >
                <img 
                src={item.image} 
                alt='social' 
                className="relative z-[10]"
                width={20} 
                height={20} 
            />
             </a>
          ))}
       </div>
    )
}

export default Social