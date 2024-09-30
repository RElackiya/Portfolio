import { FaDownload } from 'react-icons/fa'; 
import { IoIosRocket, IoMdCodeWorking } from 'react-icons/io'; 
import ResumeImg from '../assets/Resume2.jpg';

export default function Resume() {
    const config = {
        pdfLink: process.env.PUBLIC_URL + '/Resume.pdf' // this will ensure the proper path
    };
    
    return (
        <section id='resume' className='relative flex flex-col items-center md:flex-row bg-indigo-900 px-5 py-6 md:py-10'>
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <IoIosRocket className="absolute top-10 left-10 text-white opacity-10 text-6xl animate-bounce" />
                <IoMdCodeWorking className="absolute bottom-10 right-10 text-white opacity-10 text-6xl animate-spin-slow" />
            </div>

            <div className='md:w-1/2 flex justify-center z-10 md:mr-4 mb-6 md:mb-0'>
                <div className='flex flex-col justify-center text-white p-6 bg-indigo-800 rounded-lg shadow-lg relative'>
                    <h1 className='text-4xl mb-2 font-bold'>Resume</h1>
                    <p className='text-lg mb-5'>Explore my resume to learn more about my experience and skills. Below you can view and download it!</p>

                    {/* Skills Section */}
                    <div className="pb-5">
                        <h2 className="text-lg font-semibold mb-2">Skills:</h2>
                        {['React.js', 'JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB'].map((skill, index) => (
                            <div className="mb-2" key={index}>
                                <label className="block mb-1">{skill}</label>
                                <div className="w-full bg-indigo-700 rounded-full h-2.5 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className={`bg-green-400 h-2.5 rounded-full transition-all duration-500`} style={{ width: `${[85, 90, 95, 80, 75][index]}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 rounded-lg"></div>
                </div>
            </div>

            <div className='md:w-1/2 flex flex-col justify-center items-center md:ml-4 z-10'>
                <div className="relative hover:shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img className='w-[250px] h-[250px] rounded-full shadow-lg' src={ResumeImg} alt="Resume Preview" />
                </div>

                {/* New Section: Testimonials */}
                <div className='bg-indigo-800 p-6 rounded-lg shadow-lg text-white mt-5 w-full'>
                    <h2 className='text-lg font-bold mb-2'>Testimonials:</h2>
                    <p className='mb-2'>"A dedicated developer with a keen eye for detail!"</p>
                    <p className='mb-2'>- Former Colleague</p>
                    <p className='mb-2'>"Always delivers on time and exceeds expectations!"</p>
                    <p>- Client</p>
                </div>

                {/* New Section: Interests */}
                <div className='bg-indigo-800 p-6 rounded-lg shadow-lg text-white mt-5 w-full'>
                    <h2 className='text-lg font-bold mb-2'>Interests:</h2>
                    <ul className='list-disc list-inside'>
                        {['Coding Challenges', 'Open Source Contribution', 'Tech Blogging'].map((interest, index) => (
                            <li key={index} className="mb-1">{interest}</li>
                        ))}
                    </ul>
                </div>

                {/* Download PDF Button placed below Interests */}
                <div className="flex justify-center mt-4">
                    <a 
                        href={config.pdfLink} 
                        download 
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-6 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <FaDownload className="text-lg" />
                        <span className="font-semibold">Download PDF</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
