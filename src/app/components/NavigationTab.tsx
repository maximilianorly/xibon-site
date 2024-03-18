const NavigationTab: React.FC<any> = ({ label, isActive }) => {
  // Tailwind classes for active/inactive states
  const tabClasses = `w-12 h-8 flex ${
    isActive ? "text-primary" : "text-gray-800"
  }`;
  const tabLabelClasses = `flex flex-col justify-end ${
    isActive ? "text-primary font-extrabold" : "text-gray-800 font-light"
  } text-md mb-[-0.25rem]`;

  // Custom animation needs to be handled via inline styles or defined in tailwind.config.js
  const activeTabIndicatorStyle = {
    borderBottom: "0.125rem solid",
    borderColor: "bg-primary",
  };

  return (
    <div className={tabClasses}>
      {isActive && (
        <div
          className="animate-activeTabSlide"
          style={activeTabIndicatorStyle}
        ></div>
      )}
      <div className={tabLabelClasses}>{label}</div>
    </div>
  );
};

export default NavigationTab;
