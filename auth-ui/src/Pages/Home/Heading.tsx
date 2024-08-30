import { useAuthState } from "./AuthProvider";

export const Heading: React.FC = () => {
  const { username } = useAuthState();

  return (
    <div tabIndex={0} className="flex flex-col gap-3">
      <div className="text-text-primary font-medium text-heading">
        Hello {username}
      </div>
      <div className="text-text-secondary font-normal text-base">
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
    </div>
  );
};
