import { BaseAxiosInstance } from "../axios";
import { API_KEY } from "../Defaults";

export const PlaceRouteApi = (lat, long, placeId, success, failure) => {
	let url = `directions/json?origin=${lat}, ${long}&destination=place_id:${placeId}&mode=walking&key=${API_KEY}`;
    console.log("url", url)
    BaseAxiosInstance.get(url)
		.then(function(response) {
			console.log("settings response", response);
			if (response.data.routes != null && response.data.routes.length > 0) {
				success(response.data.routes[0].legs[0]);
			} else {
				failure(response);
			}
		})
		.catch(function(error) {
			console.log("settings error", error);
			failure(error);
		});
};
