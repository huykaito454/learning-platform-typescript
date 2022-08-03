import HeaderAuthentication from "modules/authentication/HeaderAuthentication";
interface Props {
  children?: React.ReactNode;
}
const AuthenticationLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] relative">
      <HeaderAuthentication></HeaderAuthentication>
      {children}
    </div>
  );
};

export default AuthenticationLayout;
