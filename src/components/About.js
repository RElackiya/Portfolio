import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJsSquare, FaHtml5 } from 'react-icons/fa'; // Importing required icons

export default function About() {
    const config = {
        description1: 'Hi, I am Elackiya, a passionate Full Stack Developer focused on building user-friendly and responsive web applications.',
        description2: 'I specialize in React.js for front-end development and Node.js, MongoDB for back-end solutions. With an eye for detail and a strong understanding of design, I aim to deliver high-quality projects.',
    };

    const skills = [
        { icon: <FaReact size={30} className="text-blue-500" /> },
        { icon: <FaNodeJs size={30} className="text-green-500" /> },
        { icon: <FaDatabase size={30} className="text-green-600" /> },
        { icon: <FaCss3Alt size={30} className="text-blue-600" /> },
        { icon: <FaJsSquare size={30} className="text-yellow-500" /> },
        { icon: <FaHtml5 size={30} className="text-red-500" /> }
    ];

    return (
        <section className='flex flex-col md:flex-row bg-gradient-to-r from-purple-800 to-blue-600 px-5 py-10' id='about'>
            <div className='md:w-full flex justify-center'>
                <div className='flex flex-col justify-center text-white p-5 bg-gray-800 rounded-lg shadow-lg'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5 text-lg'>{config.description1}</p>
                    <p className='text-lg'>{config.description2}</p>
                    <div className='flex flex-wrap justify-center space-x-5 mt-8'>
                        {skills.map((skill, index) => (
                            <div key={index} className='flex items-center justify-center w-[60px] h-[60px] bg-gray-700 rounded-full p-5 transition-transform transform hover:scale-110'>
                                {skill.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
