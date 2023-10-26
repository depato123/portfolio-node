// pages/portfolio.js (por ejemplo)
import Header from '../components/partials/header';
import Footer from '../components/partials/footer';

function PortfolioPage() {
  return (
    <div>
      <Header title="Acerca de Nosotros" />
      <main className="portfolioHeader">
        <div className="portfolioHeaderText">
          <h1 className="title">Portafolios</h1>
          <p className="subtext">Acá irá el portafolio...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;