<template>
	<div class="ui menu">
		<router-link to="/"
			class="header item"
		>
			<img src="image-logo.png" class="logo-img" alt="">
			Image Loader
		</router-link>
		<!--
			Depending on the login status, show the login
			button or the user's menu
		-->
		<div v-if="!isLoggedIn" class="right menu">
			<a
				class="ui item"
				@click="login"
			>
				LogIn
			</a>
		</div>
		<div v-else class="right menu">
			<router-link
				class="ui item"
				to="/"
			>
				Gallery
			</router-link>
			<router-link
				to="/upload"
				class="ui item"
			>
				Upload
			</router-link>
			<a
				class="ui item"
				@click="logout"
			>
				LogOut
			</a>
		</div>
	</div>
</template>

<script>
// get vuex
import {
	mapActions,
	mapGetters
} from "vuex";

export default {
	name: "Header",
	methods: {
		// get store actions
		...mapActions([
			"login",
			"logout"
		])
	},
	computed: {
		...mapGetters([ "isLoggedIn" ])
	}
}
</script>

<style scoped>
	.logo-img {
		max-height: 50px;
	}
	.ui.menu {
		border-radius: 0;
	}
</style>
