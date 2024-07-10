function CustomButton({ className, children, ...props }) {
  return (
    <button className={`text-[--lightFontColor] flex gap-2 items-center hover:text-[--darkThemeColor] ${className}`} {...props}>
      {children}
    </button>
  );
}

export default CustomButton;
