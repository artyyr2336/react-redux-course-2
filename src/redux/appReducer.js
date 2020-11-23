import { HIDE_LOADER, SHOW_LOADER } from "./types"

const initalState = {
	loading: false,
}

export const appReducer = (state = initalState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true }
		case HIDE_LOADER:
			return { ...state, loading: false }
		default:
			return state
	}
}
