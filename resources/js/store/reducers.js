import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import subscribers from '../modules/subscriber/store/reducer'

export default combineReducers({ auth, user, subscribers })
