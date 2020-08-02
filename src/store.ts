import { combineReducers } from 'redux'

export default combineReducers({
  repos,
})

////////////////////////////////////////////////////////////

interface RepoState {}

interface RepoAction {}

function repos(state: RepoState[] = [], action: RepoAction) {}
