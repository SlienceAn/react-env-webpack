import s1 from '../../assets/special-01.jpg'
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
export const clientAdd = () => {
    return {
        type: specialChange,
        value: 2
    }
}
export const blogAdd = () => {
    return {
        type: specialChange,
        value: ''
    }
}
export const holidayAdd = () => {
    return {
        type: specialChange,
        value: ''
    }
}