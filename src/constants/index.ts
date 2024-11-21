import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import Copy from '../assets/copy.png'
import Elipse from '../assets/elipse.png'


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
      title: "Integrations",
      url: "/integrations",
    },
    {
      id: "4",
      title: "Pricing",
      url: "/pricing",
    },
    {
      id: "5",
      title: "Login",
      url: "/login",
      onlyMobile: true,
    },
  ];

  export const communityBots = [
     {
      id:0,
      image:Slide1,
      title:'Track crypto wallets',
      author:'Tanjiro',
      btnText:'Use this app',
      totalUsers:48,
      copy:Copy,
      elipse:Elipse,
     },
     {
      id:1,
      image:Slide2,
      title:'Crypto wallet app',
      author:'Tanjiro',
      btnText:'Use this app',
      totalUsers:48,
      copy:Copy,
      elipse:Elipse,
     },
     {
      id:2,
      image:Slide3,
      title:'City explorer app',
      author:'Tanjiro',
      btnText:'Use this app',
      totalUsers:48,
      copy:Copy,
      elipse:Elipse,
     },
     
  ]