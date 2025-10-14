// src/assets/antdesign/Inputs/Input.jsx
const Input = ({ 
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  error = false,
  label,
  className = "",
  ...props 
}) => {
  const baseClasses = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200";
  
  const stateClasses = error 
    ? "border-red-500 focus:ring-red-500" 
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
    
  const disabledClasses = disabled 
    ? "bg-gray-100 cursor-not-allowed opacity-60" 
    : "bg-white hover:border-gray-400";
  
  const inputClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

export default Input;
