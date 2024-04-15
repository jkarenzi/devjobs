import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = (props) => {
    const {theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="relative flex w-full items-center justify-center">
            <img src="/images/header.png"/>
            <div className="flex w-4/5 justify-between items-center absolute">
                <h3 className="">Devjobs</h3>
                <div className="flex items-center gap-8">
                    <img src="/images/sun.png"/>
                    <div className={`flex w-11 h-6 items-center rounded-xl bg-white ${theme === 'light'?'justify-start':'justify-end'} p-1`}>
                        <div className="w-4 h-4 rounded-full bg-custom-violet hover:bg-custom-lightViolet" onClick={toggleTheme}></div>
                    </div>
                    <img src="/images/moon.png"/>
                </div>  
            </div> 
            {props.search && <div className={`absolute bottom-[-25px] flex items-center w-4/5 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} pl-2 pr-2 rounded-sm justify-between`}>
                <div className="flex items-center gap-3 pt-3 pb-3">
                    <img src="/images/search.png" width="17px" height="17px"/>
                    <input type="text" className={`border-none outline-none w-64 text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by title, companies, expertise…"/>
                </div>
                <div className="flex items-center gap-3 pt-3 pb-3 pl-4 border-l border-custom-darkGrey">
                    <img src="/images/location.png" width="12px" height="12px"/>
                    <input type="text" className={`border-none outline-none text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by location"/>
                </div>
                <div className="flex items-center gap-5 pt-3 pb-3 pl-4 border-l border-custom-darkGrey">
                    <input type="checkbox"/>
                    <h4 className="text-custom-darkBlue font-semibold">Full Time Only</h4>
                    <button className="flex items-center justify-center w-20 h-8 rounded-sm bg-custom-violet hover:bg-custom-lightViolet border-none text-white">Search</button>
                </div>
            </div>}
        </header>
    );
}
 
export default Header;