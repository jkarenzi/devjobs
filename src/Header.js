import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = (props) => {
    const {theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="relative flex w-full items-center justify-center">
            <img src="/images/header.png" className="w-full xs:h-32 md:h-auto"/>
            <div className="flex w-4/5 justify-between items-center absolute">
                <h3 className="xs:text-xl xs:font-semibold">Devjobs</h3>
                <div className="flex items-center md:gap-8 xs:gap-4">
                    <img src="/images/sun.png"/>
                    <div className={`flex w-11 h-6 items-center rounded-xl bg-white ${theme === 'light'?'justify-start':'justify-end'} p-1`}>
                        <div className="w-4 h-4 rounded-full bg-custom-violet hover:bg-custom-lightViolet" onClick={toggleTheme}></div>
                    </div>
                    <img src="/images/moon.png"/>
                </div>  
            </div> 
            {props.search && <div className={`absolute bottom-[-25px] flex items-center w-4/5 xs:h-16 md:h-auto xs:rounded-lg ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} pl-2 pr-2 md:rounded-sm justify-between flex`}>
                <input type="text" className={`xs:flex md:hidden border-none outline-none w-24 text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by title…"/>
                <div className="xs:flex md:hidden flex items-center gap-4">
                    <img src="/images/filter.png" width="15" height="15" onClick={() => props.setToggleOverlay(true)}/>
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-custom-violet">
                        <img src="/images/search2.png" width="17px" height="17px"/>
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-3 pb-3 md:flex xs:hidden">
                    <img src="/images/search.png" width="17px" height="17px"/>
                    <input type="text" className={`border-none outline-none w-64 text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by title, companies, expertise…"/>
                </div>
                <div className="flex items-center gap-3 pt-3 pb-3 pl-4 border-l border-custom-darkGrey md:flex xs:hidden">
                    <img src="/images/location.png" width="12px" height="12px"/>
                    <input type="text" className={`border-none outline-none text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by location"/>
                </div>
                <div className="flex items-center gap-5 pt-3 pb-3 pl-4 border-l border-custom-darkGrey md:flex xs:hidden">
                    <input type="checkbox"/>
                    <h4 className={`${theme === 'light'?'text-custom-darkBlue':'text-white'} font-semibold`}>Full Time Only</h4>
                    <button className="flex items-center justify-center w-20 h-8 rounded-sm bg-custom-violet hover:bg-custom-lightViolet border-none text-white">Search</button>
                </div>
            </div>}
        </header>
    );
}
 
export default Header;