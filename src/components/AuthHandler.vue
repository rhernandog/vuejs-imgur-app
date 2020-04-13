<template>
	<div class="ui container">
		<div class="ui icon message">
			<i class="notched circle loading icon"></i>
			<div class="content">
				<div class="header">
					Just one second
				</div>
				<p>We're fetching that content for you.</p>
			</div>
		</div>
	</div>
</template>

<script>
// get vuex
import { mapActions } from "vuex";

export default {
	name: "AuthHandler",
	
	methods: {
		...mapActions([ "completeLogin" ])
	},
	// call the lifecycle method to get the token
	created(){
		this.completeLogin(window.location.hash);
	}
}
</script>

