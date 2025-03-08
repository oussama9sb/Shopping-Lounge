const FooterItem = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-zinc-50 font-bold text-sm md:text-xl">{title}</h4>
      <ul className="flex flex-col gap-2 text-stone-400 text-xs md:text-sm cursor-pointer">
        {children}
      </ul>
    </div>
  );
};

export default FooterItem;
