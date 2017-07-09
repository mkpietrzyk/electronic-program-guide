import {GET_EPG_DATA} from './actionTypes'


const initialState = {
  epgChannelsData: null
}

export default(state = initialState, action = {}) => {
  switch (action.type) {

    case GET_EPG_DATA:
      return {
        ...state,
        epgChannelsData: action.epgChannelsData
      }

    default:
      return state
  }
}