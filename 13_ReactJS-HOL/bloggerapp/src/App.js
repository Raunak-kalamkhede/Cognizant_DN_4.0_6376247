import "./App.css";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";

function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				justifyContent: "space-around",
				fontFamily: "sans-serif",
			}}
		>
			<CourseDetails />
			<BookDetails />
			<BlogDetails />
		</div>
	);
}

export default App;
