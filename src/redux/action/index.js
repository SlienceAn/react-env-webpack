import s1 from '../../assets/special-01.jpg'
import axios from 'axios'
import { place, about } from '../store'
export const specialChange = "special_change"
export const clientChange = "client_change"
export const blogChange = "blog_change"
export const holidayChange = "holiday_change"
export const specialAdd = () => {
    return {
        type: specialChange,
        value: { img: s1, title: '北陸立山紅葉、合掌村兼六園楓情、名古屋魅力遊5日', text: '$42,500' }
    }
}
export const AboutUs = () => {
    return (dispatch) => {
        axios.get(about).then(res => {
            const data = res.data
            dispatch({ type: 'about_change', value: data })
        }).catch(err => {
            console.log(err)
        })
    }
}
export const searchPlace = (val) => {
    return (dispatch) => {
        axios.post(place, val).then(res => {
            const data = res.data
            dispatch({ type: 'search_place', value: data })
        }).catch(err => {
            console.log(err)
        })
    }
}