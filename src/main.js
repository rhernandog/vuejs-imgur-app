import Vue from "vue";
// get vue router
import VueRouter from "vue-router";

// get the vuex store
import store from "./store";

// get the main app file
import App from "./App";

// get the components
import AuthHandler from "./components/AuthHandler";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";

// tell Vue to use Vue Router
Vue.use( VueRouter );

// config the router
export const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/oauth2/callback", component: AuthHandler },
		{ path: "/", component: Gallery },
		{ path: "/upload", component: Upload }
	]
});

new Vue({
	// add the store
	store,
	// add the router
	router,
	// render the app
	render: h => h(App)
}).$mount("#app");

/*
	vid: 123
	client id: 04ef26efdbcc0f5
	Client secret: 1a92800b0b3b3645c3c4ffd033800fe785b73ba7
*/
