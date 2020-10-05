import React from 'react'
import Header from './component/static/Header'
import Home from './component/Home'
import Blog from './component/Blog'
import Footer from './component/static/Footer'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { StateHome } from './redux/container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { DataReducer } from './redux/reducer/index'
import { CSSTransition } from 'react-transition-group'
const store = createStore(DataReducer)
const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Header />
                <Switch>
                    <Route exact path="/" component={StateHome} />
                    <Route exact path="/Home" component={StateHome} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
                <Footer />
            </Provider>
        </Router>

    )
}
export default App;