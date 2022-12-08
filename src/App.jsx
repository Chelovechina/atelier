import Header from './components/Header/Header';
import Atelier from './components/Atelier/Atelier';
import Template from './components/Template/Template';
import Image from './components/Image/Image';
import Services from './components/Services/Services';
import Follow from './components/Follow/Follow';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Atelier />
        <Template />
        <Image />
        <Services />
        <Follow />
      </main>
    </>
  );
}

export default App;
