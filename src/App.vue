<template>
	<div>
		<Header></Header>
		<div class="ui container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
// get the header
import Header from "./components/Header";

export default {
	name: "App",
	components: {
		Header
	}
}
</script>
