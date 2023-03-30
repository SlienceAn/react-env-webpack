import S1 from '../assets/special-01.jpg'
import S2 from '../assets/special-02.jpg'
import S3 from '../assets/special-03.jpg'
import S4 from '../assets/special-04.jpg'
import blogPlc01 from '../assets/blog-pic-01.jpg'
import blogPlc02 from '../assets/blog-pic-02.jpg'
import blogPlc03 from '../assets/blog-pic-03.jpg'
import blogPlc04 from '../assets/blog-pic-04.jpg'
import adminPic01 from '../assets/admin-pic-01.jpg'
import adminPic02 from '../assets/admin-pic-02.jpg'
import adminPic03 from '../assets/admin-pic-03.jpg'
import adminPic04 from '../assets/admin-pic-04.jpg'
import D2 from '../assets/d2.jpg'
import D6 from '../assets/d6.jpg'
import D7 from '../assets/d7.jpg'
import D5 from '../assets/d5.jpg'
import D3 from '../assets/d3.jpg'
import D1 from '../assets/d1.jpg'
import h1 from '../assets/hotel-01.jpg'
import h2 from '../assets/hotel-02.jpg'
import h3 from '../assets/hotel-03.jpg'
import h4 from '../assets/hotel-04.jpg'
import h5 from '../assets/hotel-05.jpg'
export const initSpecial = {
    data: [
        { img: S1, title: '北陸立山紅葉、合掌村兼六園楓情、名古屋魅力遊5日', text: '$39,999' },
        { img: S2, title: '小松層楓、立山峽谷鐵道、白川鄉林道、高山古街5日', text: '$41,200' },
        { img: S3, title: '【能登假期】秋楓帝皇‧立山紅妝‧加賀屋懷石‧溫泉名景5日', text: '$30,000' },
        { img: S4, title: '小松魅力金澤、OUTLET古街樂購、松本城合掌村5日', text: '$52,870' },

    ]
}

export const initClient = {
    data: [
        { img: h1, title: '海漾小木屋) 一邊森林;一邊太平洋(適合1-4人獨棟+廚房)', text: '4位 · 1間臥室 · 3張床 · 1間衛浴' },
        { img: h2, title: '美式别墅峇里島風/捷運站接送/九份宜蘭淡水陽明山北台灣包車服務', text: '4位 · 1間臥室 · 2張床 · 1.5間衛浴' },
        { img: h3, title: '獨立陽台，大落地窗，厦大慵懒角落的榻榻米工業風', text: '2位 · 1間臥室 · 1張床 · 1間衛浴' },
        { img: h4, title: '武夷山景區南門(南源嶺民宿村)至岩茶宿半天妖舒適大床房', text: '2位 · 1間臥室 · 1張床 · 1.5間衛浴' },
        { img: h5, title: 'Kellys House包棟獨享一至三樓。大交誼廳。第五人以上加價。近大東夜市', text: '8位 · 1間臥室 · 2張床 · 1間衛浴' },

    ]
}

export const initBlog = {
    data: [
        { img: blogPlc01, articleID: 1, admin: adminPic01, title: 'LOREM IPSUM IS TYPESETTING INDUSTRY.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { img: blogPlc02, articleID: 2, admin: adminPic02, title: 'LOREM IPSUM IS TYPESETTING INDUSTRY.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { img: blogPlc03, articleID: 3, admin: adminPic03, title: 'LOREM IPSUM IS TYPESETTING INDUSTRY.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { img: blogPlc04, articleID: 4, admin: adminPic04, title: 'LOREM IPSUM IS TYPESETTING INDUSTRY.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },

    ]
}
export const initHoliday = {
    data: [D1, D2, D3, D5, D6, D7]
}

export const url = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://react-travel-express.vercel.app/"
export const user = url + "user"
export const sign = url + "sign"
export const place = url + "place"
export const about = url + "about"