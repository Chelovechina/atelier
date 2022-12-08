import Header from './components/Header/Header';
import Atelier from './components/Atelier/Atelier';
import Template from './components/Template/Template';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Atelier />
        <Template />
      </main>
    </>
  );
}

export default App;
