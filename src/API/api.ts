const API_KEY: string = 'cD7jqGNSMKTGMuW2mXdrktm3aNMPaLBi';

export async function getImage(tag: string, func: any, gerError?: any) {
	let response = await fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
	);

	if (response.ok) {
		let json = await response.json();
		func(json.data.image_url, tag);
	} else {
		gerError(response.status);
	}
}
