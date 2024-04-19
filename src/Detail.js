import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect,useState,useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Detail = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)

    useEffect(() => {
        fetch(`https://devjobs-backend-tfek.onrender.com/jobs/${id}`)
        .then(res => res.json())
        .then(data => {
            const newBackground = data.logoBackground.replace(/\s/g, "")
            setJob({...data, logoBackground:newBackground})
        })
    },[])

    const {theme, toggleTheme } = useContext(ThemeContext)


    return (
        <body className={`flex flex-col min-h-screen text-white ${theme === 'light'?'bg-custom-lightGrey':'bg-custom-midnight'} items-center justify-between`}>
            <div className="relative flex flex-col w-full items-center">
                <Header search={false}/>
                {job && <div className={`flex md:flex-row xs:flex-col items-center xs:w-11/12 md:w-3/5 md:h-28 xs:h-36 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-sm absolute xs:bottom-[-130px] md:bottom-[-80px] flex`}>
                    <div className={`flex items-center justify-center md:w-1/5 md:h-full xs:w-12 xs:h-16 xs:p-1 md:p-0 xs:rounded-md md:rounded-none md:mt-0 xs:mt-[-20px] bg-[color:${job.logoBackground}]`}>
                        <img src={job.logo} width="40px" height="40px"/>
                    </div>
                    <div className="flex md:flex-row xs:flex-col xs:gap-2 items-center justify-between md:w-4/5 xs:w-full h-full md:mb-0 xs:mb-4">
                        <div className="flex flex-col xs:items-center md:items-start md:ml-10 xs:ml-0 gap-1 xs:w-full md:w-auto">
                            <h4 className={`${theme == 'light'?'text-custom-darkBlue':'text-white'} font-semibold`}>{job.company}</h4>
                            <h4 className={`${theme == 'light'?'text-custom-darkBlue':'text-custom-darkGrey'} font-light`}>{job.company}.com</h4>
                        </div>
                        <a href={job.website} className={`flex justify-center items-center w-32 h-8 ${theme === 'light'?'bg-custom-paleViolet':'bg-custom-darkdarkGrey'}  ${theme === 'light'?'text-custom-violet':"text-white"} ${theme === 'light'?'hover:bg-custom-lightViolet':'hover:bg-custom-darkGrey'} rounded-sm md:mr-10 xs:mr-0`}>Company Site</a>
                    </div>
                </div>}
            </div>
            {job && <div className={`md:w-3/5 xs:w-11/12 flex flex-col items-center p-6 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-sm md:mt-28 xs:mt-36 mb-8`}>
                <div className="flex md:items-center xs:items-start justify-between w-full xs:flex-col xs:gap-8 md:flex-row">
                    <div className="flex gap-1 items-start flex-col">
                        <h4 className="text-sm text-custom-darkGrey">{job.postedAt} . {job.contract}</h4>
                        <h3 className={`font-bold ${theme == 'light'?'text-custom-darkBlue':'text-white'} text-left`}>{job.position}</h3>
                        <h5 className="text-custom-violet text-sm">{job.location}</h5>
                    </div>
                    <a href={job.apply} className="flex justify-center items-center md:w-32 xs:w-full h-10 bg-custom-violet hover:bg-custom-lightViolet text-white rounded-sm">Apply Now</a>   
                </div>
                <div className={`flex text-left ${theme == 'light'?'text-custom-darkGrey':'text-custom-gray'} w-full mt-10`}>
                    {job.description}
                </div>
                <div className={`flex flex-col  w-full mt-10 ${theme == 'light'?'text-custom-darkGrey':'text-custom-gray'}`}>
                    <h2 className={`${theme == 'light'?'text-custom-darkBlue':'text-white'} font-bold text-lg text-left`}>Requirements</h2>
                    <div className="text-left w-full mt-2">
                        {job.requirements.content}
                    </div>
                    <div className="flex flex-col items-start mt-5 w-full">
                        {
                            job.requirements.items.map(item => (
                                <li className="text-left">{item}</li>
                            ))
                        }
                    </div>
                </div>
                <div className={`flex flex-col  w-full mt-10 ${theme == 'light'?'text-custom-darkGrey':'text-custom-gray'}`}>
                    <h2 className={`${theme == 'light'?'text-custom-darkBlue':'text-white'} font-bold text-lg text-left`}>What You Will Do</h2>
                    <div className="text-left w-full mt-2">
                        {job.role.content}
                    </div>
                    <div className="flex flex-col items-start mt-5 w-full">
                        {
                            job.role.items.map(item => (
                                <li className="text-left">{item}</li>
                            ))
                        }
                    </div>
                </div>
            </div>}
            {job && <footer className={`flex w-full h-20 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} items-center justify-center`}>
                <div className="flex  md:w-3/5 xs:w-11/12 justify-between items-center">
                    <div className="md:flex xs:hidden flex-col gap-4 items-start">
                        <h3 className={`font-bold ${theme == 'light'?'text-custom-darkBlue':'text-white'} text-left`}>{job.position}</h3>
                        <h4 className={`${theme == 'light'?'text-custom-darkBlue':'text-custom-darkGrey'} font-semibold`}>{job.company}</h4>
                    </div>
                    <a href={job.apply} className="flex justify-center items-center md:w-32 xs:w-full h-10 bg-custom-violet hover:bg-custom-lightViolet text-white rounded-sm">Apply Now</a>   
                </div> 
            </footer>}
        </body>
    );
}
 
export default Detail;