import React from 'react'
import Header from './component/static/Header'
import Home from './component/Home'
import Blog from './component/Blog'
import Footer from './component/static/Footer'
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { StateHome, StateBlog, StateHoliday, StateAbout } from './redux/container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { DataReducer } from './redux/reducer/index'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './assets/page.scss'
const store = createStore(DataReducer)
const RouterMap = () => {
    let location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="page"
                timeout={100}
            >
                <Switch>
                    <Route exact path="/" component={StateHome} />
                    <Route exact path="/Home" component={StateHome} />
                    <Route exact path="/blog" component={StateBlog} />
                    <Route exact path="/holiday" component={StateHoliday} />
                    <Route exact path="/about" component={StateAbout} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}
const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Header />
                <RouterMap />
                <Footer />
            </Provider>
        </Router>

    )
}
export default App;