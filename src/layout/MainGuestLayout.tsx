import Footer from "modules/main/Footer";
import Header from "modules/main/Header";
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
