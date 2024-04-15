import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect,useState,useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Detail = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/jobs/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJob(data)
        })
    },[])

    const {theme, toggleTheme } = useContext(ThemeContext)


    return (
        <body className={`flex flex-col min-h-screen text-white ${theme === 'light'?'bg-custom-lightGrey':'bg-custom-midnight'} items-center justify-between`}>
            <div className="relative flex flex-col w-full items-center">
                <Header search={false}/>
                {job && <div className={`flex items-center w-3/5 h-28 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-sm absolute bottom-[-80px]`}>
                    <div className="flex w-1/5 h-full">
                        <img src={job.logo} className="w-full h-full"/>
                    </div>
                    <div className="flex items-center justify-between w-4/5 h-full">
                        <div className="flex flex-col items-start ml-10 gap-1">
                            <h4 className="text-custom-darkBlue font-semibold">{job.company}</h4>
                            <h4 className="text-custom-darkBlue font-light">{job.company}.com</h4>
                        </div>
                        <a href={job.website} className="flex justify-center items-center w-32 h-8 bg-custom-lightViolet text-custom-violet rounded-sm mr-10">Company Site</a>
                    </div>
                </div>}
            </div>
            {job && <div className={`w-3/5 flex flex-col items-center p-6 ${theme === 'light'?'bg-white':'bg-custom-darkBlue'} rounded-sm m-28`}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex gap-1 items-start flex-col">
                    <h4 className="text-sm text-custom-darkGrey">{job.postedAt} . {job.contract}</h4>
                    <h3 className={`font-bold ${theme == 'light'?'text-custom-darkBlue':'text-white'} text-left`}>{job.position}</h3>
                    <h5 className="text-custom-violet text-sm">{job.location}</h5>
                    </div>
                    <a href={job.apply} className="flex justify-center items-center w-32 h-10 bg-custom-violet text-white rounded-sm">Apply Now</a>   
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
                <div className="flex w-3/5 justify-between items-center">
                    <div className="flex flex-col gap-4 items-start">
                        <h3 className={`font-bold ${theme == 'light'?'text-custom-darkBlue':'text-white'} text-left`}>{job.position}</h3>
                        <h4 className={`${theme == 'light'?'text-custom-darkBlue':'text-custom-darkGrey'} font-semibold`}>{job.company}</h4>
                    </div>
                    <a href={job.apply} className="flex justify-center items-center w-32 h-10 bg-custom-violet text-white rounded-sm">Apply Now</a>   
                </div> 
            </footer>}
        </body>
    );
}
 
export default Detail;