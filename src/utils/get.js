const BASE_URL = "https://api.musement.com/api/v3/activities.json";

export const GET = async () => {
	const res = await fetch(BASE_URL);
	const data = await res.json();

	return data.data[0];
};
