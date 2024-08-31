import { Heading } from "./Heading";
import { Posts } from "./Posts";
import { Modal } from "../../common-components/Modal";
import { useAuthState } from "../../providers/AuthProvider";
import { Logout } from "./Logout";
import { LoginPage } from "../LoginPage/LoginPage";

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
