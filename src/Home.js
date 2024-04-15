import Header from "./Header";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/jobs")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const detail = (id) => {
        navigate(`/detail/${id}`)
    }

    const {theme, toggleTheme } = useContext(ThemeContext)

    return (
        <body className={`flex flex-col min-h-screen text-white ${theme === 'light'?'bg-custom-lightGrey':'bg-custom-midnight'} items-center`}>
            <Header search={true}/>
            <div className="w-4/5 flex justify-center flex-wrap gap-4 m-20">
                {
                    jobs.map((job) => (
                        <div className={`relative flex flex-col items-start ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-md p-4 pt-8 w-64`}>
                            <img src={job.logo} className="absolute top-[-10px]" width="40px" height="40px"/>
                            <div className="flex flex-col items-start gap-6">
                                <div className="flex flex-col items-start gap-1 text-custom-darkGrey">
                                    <h4 className="text-sm">{job.postedAt} . {job.contract}</h4>
                                    <h3 onClick={() => detail(job.id)} className={`font-bold ${theme == 'light'?'text-custom-darkBlue':'text-white'} text-left`}>{job.position}</h3>
                                    <h4 className="text-sm">{job.company}</h4>
                                </div>
                                <h5 className="text-custom-violet text-sm">{job.location}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </body>
    );
}
 
export default Home;