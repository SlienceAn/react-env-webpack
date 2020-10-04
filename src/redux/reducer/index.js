import { combineReducers } from 'redux'
import { specialChange, clientChange } from '../action/index'
import S1 from '../../assets/special-01.jpg'
import S2 from '../../assets/special-02.jpg'
import S3 from '../../assets/special-03.jpg'
import S4 from '../../assets/special-04.jpg'
const initSpecial = {
    data: [
        { img: S1, title: '北陸立山紅葉、合掌村兼六園楓情、名古屋魅力遊5日', text: '$39,999' },
        { img: S2, title: '小松層楓、立山峽谷鐵道、白川鄉林道、高山古街5日', text: '$30,000' },
        { img: S3, title: '【能登假期】秋楓帝皇‧立山紅妝‧加賀屋懷石‧溫泉名景5日', text: '$30,000' },
        { img: S4, title: '小松魅力金澤、OUTLET古街樂購、松本城合掌村5日', text: '$30,000' },
    ]
}
const SpecialReducer = (state = initSpecial, action) => {
    switch (action.type) {
        case specialChange:
            return state
        default:
            return state
    }
}
const initClient = {
    data: [
        { img: 'http://fakeimg.pl/440x320/282828/EAE0D0/', title: '', text: '' },
        { img: 'http://fakeimg.pl/440x320/282828/EAE0D0/', title: '', text: '' },
        { img: 'http://fakeimg.pl/440x320/282828/EAE0D0/', title: '', text: '' },
        { img: 'http://fakeimg.pl/440x320/282828/EAE0D0/', title: '', text: '' },

    ]
}
const ClientReducer = (state = initClient, action) => {
    switch (action.type) {
        case clientChange:
            return state
        default:
            return state
    }
}
export const DataReducer = combineReducers({
    SpecialReducer,
    ClientReducer
})