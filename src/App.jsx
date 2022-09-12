import styles from "./App.module.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
   return (
   <Router>
      <header>
          <Link to="/" ><h1 className={styles.title}>Movies</h1></Link>
          
          <br />
          <Link to="/movie" >Movies</Link>
      </header> 
      <main>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
          </Routes>
      </main>
    </Router>
    )
}

