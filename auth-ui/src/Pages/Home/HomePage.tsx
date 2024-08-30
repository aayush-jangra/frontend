import { Heading } from "./Heading";
import { Posts } from "./Posts";
import Modal from "../../Components/Modal";
import { LoginPage } from "../Login/LoginPage";
import { useAuthState } from "./AuthProvider";
import { Logout } from "./Logout";

export const HomePage: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal } = useAuthState();

  return (
    <>
      <Logout />
      <div className="flex flex-col gap-10">
        <Heading />
        <Posts />
        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <LoginPage isModal />
        </Modal>
      </div>
    </>
  );
};
