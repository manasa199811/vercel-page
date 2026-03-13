import MainLayout from "../Layout/MainLayout";
import DeployCTA from "../components/DeployCTA";
import EnterpriseStrip from "../components/EnterpriseStrip";
import Hero from "../components/Hero";
import Pitch from "../components/Pitch";

const Home = () => {
  return (
    <MainLayout>
      <section className="section-wrapper">
        <div className="section-box"><Hero /></div>
      </section>
      <section className="section-wrapper">
        <div className="section-box"><Pitch /></div>
      </section>
      <section className="section-wrapper">
        <div className="section-box"><EnterpriseStrip /></div>
      </section>
      <section className="section-wrapper">
        <div className="section-box"><DeployCTA /></div>
      </section>
    </MainLayout>
  );
};

export default Home;
