import Footer from "modules/guest/Footer";
import Header from "modules/guest/Header";
interface Props {
  children?: React.ReactNode;
}
const MainGuestLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainGuestLayout;
