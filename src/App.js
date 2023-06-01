import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Content from './components/content';


function App() {
  const name = "Ubits";
  const slogan = "el HUB de aprendizaje para empresas"
  return (
    <>
      <Navbar nombre='Ubits'/>
      <h1>{name}</h1>
      <h2>{slogan}</h2>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
