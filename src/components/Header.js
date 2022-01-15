const Header = () => {
  return (
    <header className="top-0 left-0 z-[3] w-full pb-[10px] fixed header-of-page"> 

    <div className="after:clear-both after:h-0 after:w-0 after:block after:overflow-hidden after:content-[''] w-full max-w-[1300px] m-auto py-[22px] px-[8px] h-[36px] header-content black-bg">
        <a href="#" className="text-black float-left block text-[22px] logo font-bold 2xl:text-[20px]">
           Digital States
        </a>
        
    </div>

</header>
  );
}

export default Header;
