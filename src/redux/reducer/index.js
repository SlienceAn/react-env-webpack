import { combineReducers } from 'redux'
import { specialChange, clientChange, blogChange, holidayChange } from '../action/index'
import { initSpecial, initClient, initBlog, initHoliday, initAbout } from '../store'
const SpecialReducer = (state = initSpecial, action) => {
    switch (action.type) {
        case specialChange:
            const newSpecial = Object.assign({}, state)
            newSpecial.data.push(action.value)
            return newSpecial
        default:
            return state
    }
}
const ClientReducer = (state = initClient, action) => {
    switch (action.type) {
        case clientChange:
            return state
        default:
            return state
    }
}

const BlogReducer = (state = initBlog, action) => {
    switch (action.type) {
        case blogChange:
            return state
        default:
            return state
    }
}
const HolidayReducer = (state = initHoliday, action) => {
    switch (action.type) {
        case holidayChange:
            return state
        default:
            return state
    }
}
const AboutReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case 'about_change':
            const val = Object.assign({}, state)
            val.data = action.value
            return val
        default:
            return state
    }
}
const PlaceReducer = (state = { value: [] }, action) => {
    switch (action.type) {
        case 'search_place':
            const val = Object.assign({}, state)
            val.value = action.value
            return val
        default:
            return state
    }
}
export const DataReducer = combineReducers({
    SpecialReducer,
    ClientReducer,
    BlogReducer,
    HolidayReducer,
    AboutReducer,
    PlaceReducer
})