// pages/about.js (por ejemplo)

import Header from '../components/partials/header';
import Footer from '../components/partials/footer';

function AboutPage() {
  return (
    <div>
      <Header title="Acerca de Nosotros" />
      <main className="homeHeader">
        <div className="homeHeaderText">
          <h1 className="title">Hola Mundo...</h1>
          <p className="subtext">Esto es una prueba</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;