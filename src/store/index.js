import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,

})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
)

const persistor = persistStore(store)

export {
  store,
  persistor,
}
