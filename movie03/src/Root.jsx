

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage'; 
import Login from './Components/Login';
import RegisterForm from './Components/Registerform';
import AboutMe from './Components/AboutMe';
import Header from './Header';
import MovieDetails from './MovieDetails';


export default function Root() {
  return (
    <Router>
    <Header />
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
