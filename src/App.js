import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
// import Home from "./routes/Home";
import Search from "./routes/Search";
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<Search />
				</Route>
			</Switch>
		</Router>
	)
}
export default App;
