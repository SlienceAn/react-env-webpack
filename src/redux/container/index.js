import { connect } from 'react-redux'
import Home from '../../component/Home'
import Blog from '../../component/Blog'
import About from '../../component/About'
import Holiday from '../../component/Holiday'
import ReadMore from '../../component/ReadMore'
import ShowPlace from '../../component/ShowPlace'
import { searchPlace, AboutUs } from '../action/index'

//Home首頁
export const StateHome = connect(
    state => ({
        SpecialValue: state.SpecialReducer.data,
        ClientValue: state.ClientReducer.data,
    }),
    dispatch => ({
        SearchPlace: (val) => { dispatch(searchPlace(val)) }
    })
)(Home)

//日誌
export const StateBlog = connect(
    state => ({
        BlogValue: state.BlogReducer.data
    }),
    dispatch => ({
        SearchPlace: (val) => { dispatch(searchPlace(val)) }
    })
)(Blog)

//假期
export const StateHoliday = connect(
    state => ({
        HolidayValue: state.HolidayReducer.data
    }),
    dispatch => ({
        SearchPlace: (val) => { dispatch(searchPlace(val)) }
    })
)(Holiday)

//關於我們
export const StateAbout = connect(
    state => ({
        AboutValue: state.AboutReducer.data,
    }),
    dispatch => ({
        SearchPlace: (val) => { dispatch(searchPlace(val)) },
        AboutUs: () => { dispatch(AboutUs()) }
    })
)(About)

//看更多
export const StateMore = connect(
    state => ({
        BlogValue: state.BlogReducer.data
    }),
)(ReadMore)

//地點搜尋
export const StatePlace = connect(
    state => ({
        PlaceValue: state.PlaceReducer.value
    }),
    dispatch => ({
        SearchPlace: (val) => { dispatch(searchPlace(val)) }
    })
)(ShowPlace)