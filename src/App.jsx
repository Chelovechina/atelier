import Header from './components/Header/Header';
import Atelier from './components/Atelier/Atelier';
import Template from './components/Template/Template';
import Image from './components/Image/Image';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Atelier />
        <Template />
        <Image />
      </main>
    </>
  );
}

export default App;
