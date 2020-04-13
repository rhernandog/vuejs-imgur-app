/* STORE AUTH MODULE */
// get the login helper
import api from "../../api/imgur";
// get the query string module
import qs from "qs";
// get the router instance
import { router } from "../../main";

const state = {
	// login toke for imgur
	token: null
};

const getters = {
	// returns wheather a user is logged in or not
	isLoggedIn(state){
		return !!state.token;
	}
};

const actions = {
	// login method, use the login helper
	login() {
		api.login();
	},
	// complete login method
	// gets the token from the url
	completeLogin({ commit }, hash){
		// get the 
		const parsedUrlHash = qs.parse( hash.replace("#", "") );
		// eslint-disable-next-line
		console.log( parsedUrlHash );
		commit("setToken", parsedUrlHash.access_token);
		// send the user to the root router
		router.push("/");
	},
	// logout method
	logout({ commit }){
		commit("setToken", null);
	}
};

const mutations = {
	// method to update the state token
	setToken(state, token){
		state.token = token;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
