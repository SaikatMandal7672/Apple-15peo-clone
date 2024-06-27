import { appleImg, bagImg, searchImg } from "../utils";

const Navbar=() => {
  return (
    <header class="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav class=" w-full flex screen-max-width text-gray-200">
        <img src= {appleImg} alt="Apple" width={14} height={14}/>

        <div class="flex flex-1 gap-8  justify-center max-sm:hidden">
            {["Store","iPhunes", "iMac", "iPads", "Macbooks"].map((nav)=> (
                <div key={nav} class="text-gray-200 text-xs cursor-pointer hover:text-white transition-all">
                        {nav}
                </div>
                
            ))}
        </div>
        <div class="flex  max-sm:flex-1 gap-7 items-baseline max-sm:justify-end " >
            <img src={searchImg} alt="search" width={14} height={14}/>
            <img src={bagImg} alt="search" width={14} height={14}/>
             
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
