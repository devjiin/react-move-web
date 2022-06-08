import { useEffect, useState } from "react";
function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	}
	useEffect(() => {
		getMovies();
	}, []);
	return(
		<div>
			{loading ? <h1>Loading...</h1> : null}
			{movies.map((movie) => (
				<div key={movie.id}>
					<img src={movie.medium_cover_image} />
					<h2>{movie.title}</h2>
					<ul>
						{movies.map((g) => {
							<li key={movie.genres}>{movie.genres}</li>
						})}
					</ul>
					<p>{movie.summary}</p>
				</div>
			))}
		</div>
	)
}
export default App;
