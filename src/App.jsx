import Header from './components/Header/Header';
import Atelier from './components/Atelier/Atelier';
import Template from './components/Template/Template';
import Image from './components/Image/Image';
import Services from './components/Services/Services';
import Follow from './components/Follow/Follow';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

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
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
