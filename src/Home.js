import Header from "./Header";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [toggleOverlay, setToggleOverlay] = useState(false)

    useEffect(() => {
        fetch("https://devjobs-backend-tfek.onrender.com/jobs")
        .then(res => res.json())
        .then(data => {
            const newData = data.map(job => {
                const newBackground = job.logoBackground.replace(/\s/g, "")
                return {
                    ...job,
                    logoBackground:newBackground
                }
            })

            setJobs(newData)   
        })
    },[])

    const detail = (id) => {
        navigate(`/detail/${id}`)
    }

    const {theme, toggleTheme } = useContext(ThemeContext)

    return (
        <body className={`flex flex-col min-h-screen text-white ${theme === 'light'?'bg-custom-lightGrey':'bg-custom-midnight'} items-center`}>
            <Header search={true} setToggleOverlay={setToggleOverlay}/>
            { toggleOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50" onClick={() => setToggleOverlay(false)}>
                <div className={`flex items-center flex-col w-11/12 h-44 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} gap-4 rounded-md`} onClick={() => setToggleOverlay(true)}>
                    <div className="flex gap-4 p-4 border-b border-custom-darkGrey w-full">
                        <img src="/images/location.png" width="15px" height="10px"/>
                        <input type="text" className={`border-none outline-none w-36 text-custom-lightGrey ${theme === 'light'?'bg-white':'bg-custom-darkBlue'}`} placeholder="Filter by location..."/>
                    </div>
                    <div className="flex gap-4 w-11/12 justify-start">
                        <input type="checkbox" className={`${theme === 'light'?'bg-white':'bg-custom-midnight'}`}/>
                        <h3 className={`${theme === 'light'?'text-custom-darkBlue':'text-white'}`}>Full Time Only</h3>
                    </div>
                    <button className="flex items-center justify-center bg-custom-violet text-white rounded-md w-11/12 h-10 border-none">Search</button>
                </div>
            </div>}
            <div className="w-4/5 flex justify-center flex-wrap gap-4 mt-20">
                {
                    jobs.map((job) => (
                        <div className={`relative flex flex-col items-start ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-md p-4 pt-8 md:w-64 xs:w-11/12`}>
                            <div className={`absolute top-[-10px] bg-[color:${job.logoBackground}] flex items-center justify-center p-1 w-8 h-8 rounded-md overflow-hidden`}>
                                <img src={job.logo} width="40px" height="40px"/>
                            </div>
                            <div className="flex flex-col items-start gap-6">
                                <div className="flex flex-col items-start gap-1 text-custom-darkGrey">
                                    <h4 className="text-sm">{job.postedAt} . {job.contract}</h4>
                                    <h3 onClick={() => detail(job.id)} className={`font-bold ${theme === 'light'?'text-custom-darkBlue':'text-white'} hover:text-custom-darkGrey text-left cursor-pointer`}>{job.position}</h3>
                                    <h4 className="text-sm">{job.company}</h4>
                                </div>
                                <h5 className="text-custom-violet text-sm">{job.location}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="flex items-center justify-center w-36 h-10 rounded-md bg-custom-violet hover:bg-custom-lightViolet text-white border-none outline-none mt-8 mb-8">Load more</button>
        </body>
    );
}

export default Home;