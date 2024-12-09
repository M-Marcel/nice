import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import Copy from '../assets/copy.png'
import Elipse from '../assets/elipse.png'
import DashboardIcon from '../assets/dashboard.png'
import UserIcon from '../assets/user.png'
import Thumbs from "../assets/thumbs.png"
import Social1 from "../assets/social1.png"
import Social2 from "../assets/social2.png"
import Social3 from "../assets/social3.png"
import Social4 from "../assets/socila4.png"
import Social5 from "../assets/social5.png"


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Features",
    url: "/features",
  },
  {
    id: "2",
    title: "Community",
    url: "/community",
  },
  {
    id: "3",
    title: "Request a feature",
    url: "/request-a-feature",
  },
 
];

export const SidebarLinks = [
  {
    id:0,
    title:"Dashboard",
    image: DashboardIcon,
    url:"/dashboard"
  },
  {
    id:2,
    title:"Community",
    image: UserIcon,
    url:"/community"
  },
  
]
export const communityBots = [
  {
    id: 0,
    image: Slide1,
    title: 'Track crypto wallets',
    author: 'Tanjiro',
    btnText: 'Use this app',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 1,
    image: Slide2,
    title: 'Crypto wallet app',
    author: 'Tanjiro',
    btnText: 'Use this app',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 2,
    image: Slide3,
    title: 'City explorer app',
    author: 'Tanjiro',
    btnText: 'Use this app',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 3,
    image: Slide1,
    title: 'City explorer app',
    author: 'Tanjiro',
    btnText: 'Use this app',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },

]

export const votedBots = [
  {
    id:0,
    btnText:'vote',
    createdAt:'December, 2024',
    botName:'Custom bot name or pfp',
    voteCount:78,
    image:Elipse,
    author:"Suki",
    thumb:Thumbs

  },
  {
    id:1,
    btnText:'vote',
    createdAt:'December, 2024',
    botName:'Custom bot name or pfp',
    voteCount:78,
    image:Elipse,
    author:"Suki",
    thumb:Thumbs

  },
  {
    id:2,
    btnText:'vote',
    createdAt:'December, 2024',
    botName:'Custom bot name or pfp',
    voteCount:78,
    image:Elipse,
    author:"Suki",
    thumb:Thumbs

  },
  {
    id:3,
    btnText:'vote',
    createdAt:'December, 2024',
    botName:'Custom bot name or pfp',
    voteCount:78,
    image:Elipse,
    author:"Suki",
    thumb:Thumbs

  }
]

export const socialLinks = [
   {
    id:0,
    image:Social1
   },
   {
    id:1,
    image:Social2
   },
   {
    id:2,
    image:Social3
   },
   {
    id:3,
    image:Social4
   },
   {
    id:4,
    image:Social5
   },

]