import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__( ))
export default store;