import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carddetails from './components/Carddetails';
import Reserve from './components/Reserve';
import Header from './components/Header';
import Text from './components/Text';
import Footer from './components/Footer';
import ThreeBurger from './components/ThreeBurger';
import ThreeCards from './components/ThreeCards';

function App() {
  return (
    <>
      <Header />
      <ThreeCards />
      <Text />
      <ThreeBurger />
      <Carddetails />
      <Reserve />
      <Footer />
    </>
  );
}

export default App;
