import { combineReducers } from 'redux'
import { specialChange, clientChange } from '../action/index'
import { initSpecial, initClient, initBlog, initHoliday, initAbout } from '../store'
const SpecialReducer = (state = initSpecial, action) => {
    switch (action.type) {
        case specialChange:
            return state
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
        default:
            return state
    }
}
const HolidayReducer = (state = initHoliday, action) => {
    switch (action.type) {
        default:
            return state
    }
}
const AboutReducer = (state = initAbout, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export const DataReducer = combineReducers({
    SpecialReducer,
    ClientReducer,
    BlogReducer,
    HolidayReducer,
    AboutReducer
})