import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'; // For icons
import { IoIosRocket, IoMdCodeWorking } from 'react-icons/io'; // More icons
import ResumeImg from '../assets/Resume2.jpg'; // Import your resume image

export default function Resume() {
    const config = {
        canvaLink: 'https://www.canva.com/design/DAGM_bL_eIw/S-xGXjaJOW9Hr0LNtXHPcg/view?utm_content=DAGM_bL_eIw&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        pdfLink: '/Resume.pdf' // Ensure this is in the 'public' folder
    };

    return (
        <section id='resume' className='relative flex flex-col items-center md:flex-row bg-indigo-900 px-5 py-10'>
            {/* Floating Icons in the Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <IoIosRocket className="absolute top-10 left-10 text-white opacity-10 text-6xl animate-bounce" />
                <IoMdCodeWorking className="absolute bottom-10 right-10 text-white opacity-10 text-6xl animate-spin-slow" />
            </div>

            {/* Resume Text and Features */}
            <div className='md:w-1/2 flex justify-center z-10 md:mr-4 mb-6 md:mb-0'> {/* Added `mb-6` for mobile spacing */}
                <div className='flex flex-col justify-center text-white p-6 bg-indigo-800 rounded-lg shadow-lg relative'>
                    {/* Title without underline */}
                    <h1 className='text-4xl mb-5 w-[140px] font-bold'>Resume</h1>

                    {/* Description */}
                    <p className='pb-5 text-lg'>
                        Explore my resume to learn more about my experience and skills. Below you can view it online or download the PDF.
                    </p>

                    {/* Progress Bars for Skills */}
                    <div className="pb-5">
                        <h2 className="text-lg font-semibold mb-2">Skills:</h2>
                        <div className="mb-2">
                            <label className="block mb-1">React.js</label>
                            <div className="w-full bg-indigo-700 rounded-full h-2.5">
                                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">JavaScript</label>
                            <div className="w-full bg-indigo-700 rounded-full h-2.5">
                                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">HTML/CSS</label>
                            <div className="w-full bg-indigo-700 rounded-full h-2.5">
                                <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        {/* New Skills - Node.js and MongoDB */}
                        <div className="mb-2">
                            <label className="block mb-1">Node.js</label>
                            <div className="w-full bg-indigo-700 rounded-full h-2.5">
                                <div className="bg-teal-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">MongoDB</label>
                            <div className="w-full bg-indigo-700 rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons for Viewing Online and Download */}
                    <div className="flex space-x-4 mt-4">
                        {/* View Online */}
                        <a 
                            href={config.canvaLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 shadow-lg"
                        >
                            <FaExternalLinkAlt />
                            <span>View Online</span>
                        </a>

                        {/* Download PDF */}
                        <a 
                            href={config.pdfLink} 
                            download
                            className="flex items-center space-x-2 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition duration-300 shadow-lg"
                        >
                            <FaDownload />
                            <span>Download PDF</span>
                        </a>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 rounded-lg"></div>
                </div>
            </div>

            {/* Resume Image on the Right */}
            <div className='md:w-1/2 flex flex-col justify-center items-center md:ml-4 z-10'>
                <div className="relative hover:shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img className='w-[300px] rounded-lg shadow-lg' src={ResumeImg} alt="Resume Preview" />
                </div>

                {/* New Section: Testimonials */}
                <div className='bg-indigo-800 p-6 rounded-lg shadow-lg text-white mt-5'>
                    <h2 className='text-lg font-bold mb-2'>Testimonials:</h2>
                    <p className='mb-2'>"A dedicated developer with a keen eye for detail!"</p>
                    <p className='mb-2'>- Former Colleague</p>
                    <p className='mb-2'>"Always delivers on time and exceeds expectations!"</p>
                    <p>- Client</p>
                </div>

                {/* New Section: Interests */}
                <div className='bg-indigo-800 p-6 rounded-lg shadow-lg text-white mt-5'>
                    <h2 className='text-lg font-bold mb-2'>Interests:</h2>
                    <ul className='list-disc list-inside'>
                        <li>Coding Challenges</li>
                        <li>Open Source Contribution</li>
                        <li>Tech Blogging</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
