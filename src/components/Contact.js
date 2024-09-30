import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    const config = {
        email: 'Relackiya96@gmail.com',
        phone: '9025482795',
    };

    return (
        <section id="contact" className="relative flex flex-col bg-gradient-to-r from-violet-900 to-blue-800 px-5 py-32 text-white">
            
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <FaPaperPlane size={80} className="absolute text-blue-500 opacity-20 top-10 right-20 animate-bounce-slow" />
                <FaPaperPlane size={60} className="absolute text-purple-500 opacity-20 bottom-32 left-10 animate-bounce-slower" />
            </div>

            <div className="relative flex flex-col items-center z-10">
                <h1 className="text-5xl mb-8 w-auto font-bold tracking-wide">Get In Touch</h1>
                <p className="text-lg pb-8 text-center max-w-lg">
                    Feel free to reach out if you want to discuss collaboration, projects, or anything else!
                </p>

                <div className="space-y-8 text-center">
                    {/* Email */}
                    <div className="flex items-center justify-center space-x-4 text-xl">
                        <AiOutlineMail className="text-secondary" size={30} />
                        <a href={`mailto:${config.email}`} className="hover:text-secondary transition duration-300">
                            {config.email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-center space-x-4 text-xl">
                        <AiOutlinePhone className="text-secondary" size={30} />
                        <a href={`tel:${config.phone}`} className="hover:text-secondary transition duration-300">
                            {config.phone}
                        </a>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6 mt-10">
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-secondary transition duration-300"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-secondary transition duration-300"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-secondary transition duration-300"
                    >
                        <FaTwitter size={30} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-transparent to-purple-500 opacity-30"></div>
        </section>
    );
}
