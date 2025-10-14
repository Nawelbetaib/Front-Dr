import React from "react";

// Simple button component without external dependencies
const Button = ({
  children,
  type = "default",
  onClick,
  icon,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-content-center border-none rounded-md font-medium transition-all duration-200 cursor-pointer outline-none";

  const typeClasses = {
    default: "bg-transparent text-purple-600 hover:bg-purple-50",
    primary: "bg-purple-500 text-white hover:bg-purple-600",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${disabledClasses} ${className}`.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
export { Button };