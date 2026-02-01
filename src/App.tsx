import { useState, useEffect } from 'react'

import './App.css';

interface PopularMovie {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_language: string,
}

const GENRE_MAP: Record<number, string> = {
	28: "Боевик",
	12: "Приключения",
	16: "Мультфильм",
	35: "Комедия",
	80: "Криминал",
	99: "Документальный",
	18: "Драма",
	10751: "Семейный",
	14: "Фэнтези",
	36: "История",
	27: "Ужасы",
	10402: "Музыка",
	9648: "Детектив",
	10749: "Мелодрама",
	878: "Фантастика",
	10770: "Телефильм",
	53: "Триллер",
	10752: "Военный",
	37: "Вестерн"
};

function App() {
	const [popularMovie, setPopularMovie] = useState<PopularMovie[]>([]);

	const url = 'https://api.themoviedb.org/3/movie/popular?';
	const API_KEY = 'api_key=9215c0041417f320adc39d1057f57497&language=ru-RU';
	const IMG_PATH = "https://image.tmdb.org/t/p/w300";

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${url}${API_KEY}`);
				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setPopularMovie(json.results);
				} else {
					console.error('Fetch error:', response.status);
				}
			} catch (err) {
				console.error(err);
			}
		}

		fetchData();
	}, [])
	return (
		<>
			<div>
				<ul>
					{popularMovie.map((movie) => (
						<li key={movie.id}>
							<img src={`${IMG_PATH}${movie.backdrop_path}`} alt={movie.original_language} />
							<p>{movie.genre_ids.map((id) => GENRE_MAP[id] || 'Неизвестно').join(', ')}</p>
							<p>{movie.adult ? '18+' : 'Для всех возрастов'}</p>
							<p>{movie.original_language}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default App
