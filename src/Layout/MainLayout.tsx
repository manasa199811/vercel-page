import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;