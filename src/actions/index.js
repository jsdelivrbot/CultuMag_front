import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const DELETE_TASKS = 'DELETE_ARTICLES';

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

//axios header
//{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}

export function fetchArticles(){
	const request = axios.get(ROOT_URL);
	return {
		type:FETCH_ARTICLES,
		payload: request
	};
}

export function deleteArticles(){
	const request = axios.delete(ROOT_URL+'article');
	return {
		type:DELETE_ARTICLES,
		payload: request
	};
}

export function createArticle(data){
	console.log(data);
	const request = axios.post(ROOT_URL+'article',data);
	return {
		type:CREATE_ARTICLE,
		payload: request
	};
}

export function fetchArticle(data){
	const request = axios.get(ROOT_URL+'article/'+data);
	return {
		type:FETCH_ARTICLE,
		payload: request
	};
}

export function updateArticle(data){
	const request = axios.put(ROOT_URL+'article/'+data.id,data);
	return {
		type:UPDATE_ARTICLE,
		payload: request
	};
}

export function deleteArticle(data){
	const request = axios.delete(ROOT_URL+'article/'+data);
	return {
		type:DELETE_ARTICLE,
		payload: request
	};
}