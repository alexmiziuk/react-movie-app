import { /* useState, */ useEffect } from 'react'

import './App.css'

function App() {
	/* const [move, setMove] = useState([]) */

	const url = 'https://api.themoviedb.org/3/movie/popular?';
	const API_KEY = 'api_key=9215c0041417f320adc39d1057f57497&language=ru-RU';
	
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${url}${API_KEY}`);
				if (response.ok) {
					const json = await response.json();
					console.log(json);
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
	
	  </div>
	 </>
  )
}

export default App
