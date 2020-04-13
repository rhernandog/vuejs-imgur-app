import Vuex from "vuex";
import Vue from "vue";

// get the auth module
import auth from "./modules/auth";
// get the images module
import images from "./modules/images";

Vue.use(Vuex);

// create the app store
export default new Vuex.Store({

	modules: {
		auth,
		images
	}

});
