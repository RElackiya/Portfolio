import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import HeroImg from '../assets/Hero.jpg';

export default function Hero() {
    const config = {
        subtitle: 'I am a Full-Stack Developer specializing in React and Node.js',
        social: {
            Linkedin: 'https://www.linkedin.com/in/elackiya-rajamani-front-end-developer/',
            facebook: 'https://www.facebook.com',  // Add your Facebook link
            instagram: 'https://www.instagram.com', // Add your Instagram link
        }
    };

    return (
        <section className='flex flex-col md:flex-row items-center justify-center px-5 py-32 bg-gradient-to-b from-gray-900 to-gray-700'>
            {/* Left Section with text */}
            <div className='md:w-1/2 flex flex-col bg-gray-800 rounded-xl shadow-2xl p-10 space-y-5'>
                <h1 className='text-white text-5xl font-extrabold leading-snug'>
                    Hello, I'm <span className='text-indigo-400'>Elackiya</span>
                </h1>
                <p className='text-xl text-gray-300'>{config.subtitle}</p>

                {/* Social Icons */}
                <div className='flex space-x-5 mt-6'>
                    {config.social.Linkedin && (
                        <a href={config.social.Linkedin} className='transition-transform transform hover:scale-110' target="_blank" rel="noopener noreferrer">
                            <div className='bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 transition-all'>
                                <AiOutlineLinkedin size={28} />
                            </div>
                        </a>
                    )}
                    {config.social.facebook && (
                        <a href={config.social.facebook} className='transition-transform transform hover:scale-110' target="_blank" rel="noopener noreferrer">
                            <div className='bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition-all'>
                                <AiOutlineFacebook size={28} />
                            </div>
                        </a>
                    )}
                    {config.social.instagram && (
                        <a href={config.social.instagram} className='transition-transform transform hover:scale-110' target="_blank" rel="noopener noreferrer">
                            <div className='bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition-all'>
                                <AiOutlineInstagram size={28} />
                            </div>
                        </a>
                    )}
                </div>
            </div>

            {/* Hero Image */}
            <div className='md:w-1/4 w-44 mt-10 md:mt-0 relative'>
                <div className='rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 rounded-full'> {/* Added rounded-full here */}
                    <img 
                        src={HeroImg} 
                        alt="Hero Image" 
                        className='w-full h-full object-cover rounded-full' // Ensure the image is still rounded
                        style={{ width: '200px', height: '200px' }}
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30 animate-pulse'></div>
            </div>
        </section>
    );
}
