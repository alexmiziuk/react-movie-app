export interface PopularMovie {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_language: string,
	vote_average: number,
	title: string,
	original_title: string,
	overview: string,
	release_date: string,
}

const url = 'https://api.themoviedb.org/3/movie/popular?';
const API_KEY = 'api_key=9215c0041417f320adc39d1057f57497&language=ru-RU';


export async function getPopularMovie(): Promise <PopularMovie[]> {
	try {
		const response = await fetch(`${url}${API_KEY}`);
		if (response.ok) {
				
			const json = await response.json();
			console.log(json);
			return json.results;
		
		}
		else {
			console.error('Fetch error:', response.status);
			return [];
		}
	} catch (err) {
		console.error(err);
		return [];
	}
}

