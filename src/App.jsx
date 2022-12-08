import Header from './components/Header/Header';
import Atelier from './components/Atelier/Atelier';
import Template from './components/Template/Template';
import Image from './components/Image/Image';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Atelier />
        <Template />
        <Image />
        <Services />
      </main>
    </>
  );
}

export default App;
