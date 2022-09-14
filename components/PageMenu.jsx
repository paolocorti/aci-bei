const PageMenu = ({ setMenuopen }) => {
  return (
    <div className="w-full h-16 flex justify-end px-2">
      <img src={"/menu.svg"} width={50} onClick={() => setMenuopen(true)} />
    </div>
  );
};

export default PageMenu;
