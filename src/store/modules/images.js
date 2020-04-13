// get the fetch images method
import api from "../../api/imgur";
// get the router instance
import { router } from "../../main";

const state = {
	// all the images in the state
	images: []
};

const getters = {
	// get all the images in the state
	getAllImages: state => state.images
};

const actions = {
	// get the images from the imgur api
	fetchImages({ rootState, commit }){
		api.fetchImages(rootState.auth.token)
			.then( response => {
				// eslint-disable-next-line
				console.log( response.data );
				// set the images to the state
				commit("setImages", response.data.data);
			})
			// eslint-disable-next-line
			.catch( e => console.warn(e) );
	},

	// upload one or more images to imgur
	// use the rootState to get the token from the
	// auth module
	uploadImages({ rootState, commit }, images){
		// eslint-disable-next-line
		// console.log( Array.from(images) );
		Promise.all(api.uploadImages(images, rootState.auth.token))
			.then( response => {
				// eslint-disable-next-line
				console.log( response );
				router.push("/");
			})
			.catch( e => {
				// eslint-disable-next-line
				console.warn( e );
			})
	}
};

const mutations = {
	// set the list of images to the state
	setImages(state, images) {
		state.images = images;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
