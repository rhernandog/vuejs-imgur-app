<template>
	<div>
		
		<div v-if="isLoggedIn">
			<h3 class="ui center aligned header">Upload File(s)</h3>

			<div class="ui fluid card drag-upload">

				<input
					type="file"
					multiple
					accept="image/*"
					class="upload-input"
					@change="uploadImages($event.target.files)"
				/>

				<h1 class="ui header drag-text">Drag & Drop file(s) to upload</h1>

			</div>
		</div>

		<h2
			v-else
			class="ui center aligned header"
		>Please Log In</h2>

	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { map } from "lodash";

export default {
	name: "Upload",

	methods: {
		...mapActions([ "uploadImages" ]),
		// input change handler
		inputChangeHandler(e){
			// eslint-disable-next-line
			console.log( map(e.target.files, (file) => {
				return file
			}) );
		}
	},

	computed: {
		...mapGetters([ "isLoggedIn" ])
	}
}
</script>

<style scoped>
.drag-upload {
	height: 30vh;
	border: 1px dashed #d4d4d5;
	justify-content: center;
	cursor: pointer;
}

.drag-upload:hover {
	background-color: #f2f2f2;
}

.drag-text {
	align-self: center;
	margin-top: 0;
}

.upload-input {
	width: 100%;
	height: 30vh;
	position: absolute;
	opacity: 0;
}
</style>

