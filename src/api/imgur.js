/* IMGUR LOGIC HELPER */
// get query string
import qs from "qs";
// get axios
import axios from "axios";

// client id string
const CLIENT_ID = "04ef26efdbcc0f5";
// root url for imgur api
const ROOT_URL = "https://api.imgur.com/";

export default {

	// login helper method
	login(){
		const queryString = {
			client_id: CLIENT_ID,
			response_type: "token"
		};
		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
	},

	// get all the images of the account
	fetchImages(token){
		return axios.get("https://api.imgur.com/3/account/me/images", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	},

	// upload the image(s)
	uploadImages(images, token){
		return Array.from(images).map( image => {
			const formData = new FormData();
			formData.append("image", image);
			// create and return the request
			return axios.post(
				"https://api.imgur.com/3/image",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);
		});
	}

};
