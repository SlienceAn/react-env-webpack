import { connect } from 'react-redux'
import Home from '../../component/Home'
import Blog from '../../component/Blog'
import About from '../../component/About'
import Holiday from '../../component/Holiday'
import { specialAdd } from '../action/index'
const mapHomeStateToProps = (store) => {
    return {
        SpecialValue: store.SpecialReducer.data,
        ClientValue: store.ClientReducer.data,
    }
}
const mapHomeDispathToProps = (dispatch) => {
    return {
        SpecialAdd: () => { dispatch(specialAdd()) }
    }
}
const mapBlogStateToProps = (store) => {
    return {
        BlogValue: store.BlogReducer.data
    }
}
const mapHolidayStateToProps = (store) => {
    return {
        HolidayValue: store.HolidayReducer.data
    }
}
const mapAboutStateToProps = (store) => {
    return {
        AboutValue: store.AboutReducer.data
    }
}
export const StateHome = connect(
    mapHomeStateToProps,
    mapHomeDispathToProps
)(Home)

export const StateBlog = connect(
    mapBlogStateToProps
)(Blog)

export const StateHoliday = connect(
    mapHolidayStateToProps
)(Holiday)

export const StateAbout = connect(
    mapAboutStateToProps
)(About)