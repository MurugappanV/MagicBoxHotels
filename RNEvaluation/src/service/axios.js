import axios from "axios";

export const BaseAxiosInstance = axios.create({
	baseURL: "https://maps.googleapis.com/maps/api/",
	timeout: 10000,
	headers: { "Content-Type": "application/json" },
});
