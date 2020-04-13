<template>
	<div>
		
		<div v-if="isLoggedIn">
			<h3 class="ui center aligned header">IMAGES GALLERY COMPONENT</h3>

			<div class="image-wrapper">
				<img
					v-for="image in getAllImages"
					:key="image.id"
					class="ui bordered rounded image"
					:src="image.link"
					alt=""
				/>
			</div>
		</div>

		<h2
			v-else
			class="ui center aligned header"
		>Please Log In</h2>
		
	</div>
</template>

<script>
// get vuex helpers
import {
	mapActions,
	mapGetters
} from "vuex";

export default {
	name: "Gallery",

	methods: {
		...mapActions([ "fetchImages" ])
	},

	computed: {
		...mapGetters([ "getAllImages", "isLoggedIn" ])
	},

	// lifecycle method, get the images
	created(){
		this.isLoggedIn ? this.fetchImages() : null;
	}
}
</script>

<style scoped>
	.image-wrapper {
		column-count: 3;
		column-gap: 10px;
		padding: 10px 0;
	}

	.image-wrapper img {
		max-width: 100%;
		padding: 5px;
		margin-bottom: 10px;
	}

	.image-wrapper img:hover {
		-webkit-box-shadow: 1px 1px 4px 2px #666666;
		box-shadow: 1px 1px 4px 2px #666666;
	}
</style>
