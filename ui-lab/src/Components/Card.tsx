export const Card = ({
  title,
  className: overrideStyles = "",
  onClick,
  children,
}: {
  title?: string | React.ReactElement;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`bg-white w-full max-w-sm rounded-lg border shadow-md transition-all duration-500 ${overrideStyles} ${
        onClick ? "cursor-pointer hover:shadow-2xl hover:shadow-gray-500" : ""
      }`}
      onClick={onClick}
    >
      {title && (
        <div className="bg-blue-600 rounded-t-lg px-4 py-2 font-semibold text-2xl text-white">
          {title}
        </div>
      )}
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};
