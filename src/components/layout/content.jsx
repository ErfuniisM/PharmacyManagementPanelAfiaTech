const Content = ({ children, title, buttonTitle, onButtonClick }) => {
  return (
    <div>
      <div className="flex justify-between items-center h-16 p-4">
        <h1>{title}</h1>
        {buttonTitle && (
          <button
            onClick={onButtonClick}
            className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-full rounded-[10px] cursor-pointer"
          >
            {buttonTitle}
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Content;
