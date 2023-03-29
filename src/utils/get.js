const BASE_URL = "https://fakestoreapi.com/products";

export const GET = async () => {
	const res = await fetch(BASE_URL);
	const data = await res.json();
	console.log(data);

	return data;
};
