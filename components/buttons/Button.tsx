

const Button = ({ children }) => {
  return (
    <button 
    type="button"
    className="bg-[#5ec57e] text-white w-fit p-2 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;

