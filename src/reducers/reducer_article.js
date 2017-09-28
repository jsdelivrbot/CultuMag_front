import {FETCH_ARTICLES,DELETE_ARTICLES,CREATE_ARTICLE,FETCH_ARTICLE,UPDATE_ARTICLE,DELETE_ARTICLE} from '../actions/index';

const INITIAL_STATE = {data:[],fetchTask:[]};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_ARTICLES :
			return {...state,data:action.payload.data};
		case DELETE_ARTICLES :
			return {...state,data:action.payload.data};
		case CREATE_ARTICLE :
			return {...state,data:action.payload.data};
		case FETCH_ARTICLE :
			return {...state,fetchArticle:action.payload.data};
		case UPDATE_ARTICLE :
			return {...state,data:action.payload.data};
		case DELETE_ARTICLE :
			return {...state,data:action.payload.data};
		default:
			return state;
	}
}