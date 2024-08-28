export const RegisterComponent: React.FC<{ openLoginTab: () => void }> = ({
  openLoginTab,
}) => {
  return (
    <div className="border-gradient-bg w-full max-w-md">
      <div className="px-6 py-10 rounded-md bg-post flex flex-col gap-11">
        <div className="flex flex-col gap-2 items-center">
          <div className="font-medium text-sm text-text-tertiary">SIGN UP</div>
          <div className="font-semibold text-white text-lg">
            Create an account to continue
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">Email</div>
            <input
              type="email"
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">
              Username
            </div>
            <input
              type="text"
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Choose a preferred username"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">
              Password
            </div>
            <input
              type="password"
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Choose a strong password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="p-3 mt-1 text-white rounded bg-cta font-medium"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={openLoginTab}
              className="font-medium text-sm text-text-tertiary self-start"
            >
              Already have an account?{" "}
              <span className="text-text-primary">Login →</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
