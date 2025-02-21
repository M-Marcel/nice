import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import Copy from '../assets/copy.png'
import Elipse from '../assets/elipse.png'
import Thumbs from "../assets/thumbs.png"
import Social1 from "../assets/social1.png"
import Social2 from "../assets/social2.png"
import Social3 from "../assets/social3.png"
import Social4 from "../assets/socila4.png"
import Social5 from "../assets/social5.png"
import DashboardIcon from '../assets/svg/users/dashboardIcon'
import CommunityIcon from '../assets/svg/users/communityIcon'
import AdminDashboardIcon from '../assets/svg/admin/dashboardIcon'
import AdminFeatureRequestIcon from '../assets/svg/admin/featureRequest'
import AdminCommunityIcon from '../assets/svg/admin/communityIcon'
import AdminUsersIcon from '../assets/svg/admin/adminsUsersIcon'
import AdminPaymentIcon from '../assets/svg/admin/paymentIcon'
import AdminsIcon from '../assets/svg/admin/adminsIcon'
import Car from '../assets/car.png'


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
    id: 0,
    title: "Projects",
    icon: DashboardIcon,
    isAdmin: false,
    url: "/dashboard"
  },
  {
    id: 1,
    title: "Community",
    isAdmin: false,
    icon: CommunityIcon,
    url: "/community"
  },
  {
    id: 2,
    title: "Dashboard",
    icon: AdminDashboardIcon,
    isAdmin: true,
    url: "/admin"
  },
  {
    id: 3,
    title: "Feature Requests",
    icon: AdminFeatureRequestIcon,
    isAdmin: true,
    url: "/admin/feature-request"
  },
  {
    id: 4,
    title: "Community",
    icon: AdminCommunityIcon,
    isAdmin: true,
    url: "/admin/community"
  },
  {
    id: 5,
    title: "Users",
    icon: AdminUsersIcon,
    isAdmin: true,
    url: "/admin/users"
  },
  {
    id: 6,
    title: "Payments",
    icon: AdminPaymentIcon,
    isAdmin: true,
    url: "/admin/payment"
  },
  {
    id: 7,
    title: "Admins",
    icon: AdminsIcon,
    isAdmin: true,
    url: "/admin/admins"
  }

]
export const communityBots = [
  {
    id: 0,
    image: Slide1,
    title: 'Track crypto wallets',
    author: 'Tanjiro',
    btnText: 'coming soon',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 1,
    image: Slide2,
    title: 'Crypto wallet app',
    author: 'Tanjiro',
    btnText: 'coming soon',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 2,
    image: Slide3,
    title: 'City explorer app',
    author: 'Tanjiro',
    btnText: 'coming soon',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },
  {
    id: 3,
    image: Slide1,
    title: 'City explorer app',
    author: 'Tanjiro',
    btnText: 'coming soon',
    totalUsers: 48,
    copy: Copy,
    elipse: Elipse,
  },

]

export const votedBots = [
  {
    id: 0,
    btnText: 'vote',
    createdAt: 'December, 2024',
    botName: 'Custom bot name or pfp',
    voteCount: 78,
    image: Elipse,
    author: "Suki",
    thumb: Thumbs

  },
  {
    id: 1,
    btnText: 'vote',
    createdAt: 'December, 2024',
    botName: 'Custom bot name or pfp',
    voteCount: 78,
    image: Elipse,
    author: "Suki",
    thumb: Thumbs

  },
  {
    id: 2,
    btnText: 'vote',
    createdAt: 'December, 2024',
    botName: 'Custom bot name or pfp',
    voteCount: 78,
    image: Elipse,
    author: "Suki",
    thumb: Thumbs

  },
  {
    id: 3,
    btnText: 'vote',
    createdAt: 'December, 2024',
    botName: 'Custom bot name or pfp',
    voteCount: 78,
    image: Elipse,
    author: "Suki",
    thumb: Thumbs

  }
]

export const socialLinks = [
  {
    id: 0,
    image: Social1,
    url: "https://www.linkedin.com/company/lanepact"
  },
  {
    id: 1,
    image: Social2,
    url: "https://www.instagram.com/officiallanepact"
  },
  {
    id: 2,
    image: Social3,
    url: "https://www.facebook.com/Lanepact"
  },
  {
    id: 3,
    image: Social4,
    url: "https://x.com/lanepact"
  },
  {
    id: 4,
    image: Social5,
    url: "https://www.facebook.com/Lanepact"
  },

]

export const adminOverview = [
  {
    id:0,
    image:Car,
    count:0,
    title:"Bots",
    ActiveCount:0
  },
  {
    id:1,
    image:Car,
    count:0,
    title:"Users",
    ActiveCount:0
  },
  {
    id:2,
    image:Car,
    count:0,
    title:"Feature Request",
    ActiveCount:0
  },

]
