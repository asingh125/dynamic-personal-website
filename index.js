import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './src/App'
import Reducer from './src/reducers/Reducers'

const store = createStore(Reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)