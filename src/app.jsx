import React from 'react'
import Header from './component/static/Header'
import Footer from './component/static/Footer'
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { StateHome, StateBlog, StateHoliday, StateAbout, StateMore, StatePlace } from './redux/container'
import { createStore, applyMiddleware, compose } from 'redux'
import NoPage from './component/static/NoPage'
import { Provider } from 'react-redux'
import { DataReducer } from './redux/reducer/index'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import thunk from 'redux-thunk'
import './assets/css/page.scss'
// Redux Devtools配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// Redux Devtools和redux-thunk合併
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(
    DataReducer,
    enhancer
)
const RouterMap = () => {
    let location = useLocation();
    //CSSTransition-unmountOnExit=>動畫退出時，把DOM刪除
    //key屬性是配合TransitionGroup組件來使用的，可以通過key來判斷是否需要觸發動畫
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="page"
                timeout={500}
                unmountOnExit={true}
            >
                <Switch location={location}>
                    <Route exact path="/" component={StateHome} />
                    <Route exact path="/Home" component={StateHome} />
                    <Route exact path="/blog" component={StateBlog} />
                    <Route exact path="/holiday" component={StateHoliday} />
                    <Route exact path="/about" component={StateAbout} />
                    <Route exact path="/More/:id" component={StateMore} />
                    <Route exact path="/place" component={StatePlace} />
                    <Route component={NoPage} />
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