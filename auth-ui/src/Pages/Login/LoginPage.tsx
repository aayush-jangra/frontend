import Logo from "../../Assets/Icons/logo.svg";
import { LoginComponent } from "../../Components/LoginComponent";

export const LoginPage: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-12">
      <img src={Logo} />
      <LoginComponent />
    </div>
  );
};
