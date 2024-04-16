import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Home from './Components/Home/Home';
import TextInfo from './Components/TextInfo/TextInfo';
import Cursos from './Components/Cursos/Cursos';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <TextInfo />
      <Cursos />
    </div>
  )
}

export default App