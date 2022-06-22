import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Header from "../components/Header";

function Search(){
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState();
	// const search = value;

	const onClick = () => {
		
		setSearch()
	}
	const getMovies = async () => {
		const ID_KEY = 'Q0xESHVo2CnWGxM2_EVJ'; //발급받은 CLIENT ID
	
			// if (search === "") {
			// 	setMovies([]);
			// 	setLoading(false);
			// } else {
				const responese = axios.get("/v1/search/movie.json", {
						params:{
							query: search,
							display: 20
						},
						headers: {
							'X-Naver-Client-Id': ID_KEY,
							// 'X-Naver-Client-Secret': SECRET_KEY
						}
					}).then((res) => {
						console.log(res.data.items);
						setMovies(res.data.items);
						setLoading(false);

					});
					// }
	}
	useEffect(() => {
		getMovies();
	}, []);
	return(
		<div>
			<Header />
		{loading ? (
		  <h1>Loading...</h1>
		) : (
		  <div>
			<div className="input_div">
                <h1>영화 검색</h1>
                <input className="input_search" type="text" placeholder="영화를 검색해 보세요."/>
				<button type="button">검색</button>
              </div>
			{movies.map((movie) => (
				<Movie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor} />
			//   <Movie
			// 	key={movie.id}
			// 	id={movie.id}
			// 	coverImg={movie.medium_cover_image}
			// 	title={movie.title}
			// 	summary={movie.summary}
			// 	genres={movie.genres}
			//   />
			))}
		  </div>
		)}
	  </div>
	)
}

export default Search;