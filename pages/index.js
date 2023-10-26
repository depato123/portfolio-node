
import Header from '../components/partials/header';
import Footer from '../components/partials/footer';

function HomePage() {
  return (
    <div>
      <Header title="Acerca de Nosotros" />
      <main className="bg-red-900 bg-sky-800">
        <div className=" bg-red-900 homeHeaderText">
          <h1 className="bg-red-900 title bg-red-900 ">Hola Mundo...</h1>
          <p className="bg-red-900 subtext bg-red-900">Esto es una prueba</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;