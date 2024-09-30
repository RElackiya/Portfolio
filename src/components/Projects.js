import websiteImg1 from '../assets/ecommerce.jpg';
import websiteImg2 from '../assets/udemy.png';
import websiteImg3 from '../assets/taskmanagement.png';
import websiteImg4 from '../assets/weather.png';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Developed a fully responsive E-commerce platform using HTML, CSS, and JavaScript. Features product listings, a shopping cart, and checkout functionality.',
                link: 'https://relackiya.github.io/Nostra-Ecommerce/',
            },
            {
                image: websiteImg2,
                description: 'Created a responsive course platform using HTML and CSS. Features include course listings and a detailed course page to simulate the functionality of Udemy.',
                link: 'https://relackiya.github.io/Udemy-Clone-EMC/',
            },
            {
                image: websiteImg3,
                description: 'Developed a task management app using React.js. Allows users to add, edit, delete, and mark tasks as completed.',
                link: 'https://actodo-eight-gamma.vercel.app/',
            },
            {
                image: websiteImg4,
                description: 'Built a responsive weather app using React.js that fetches live weather data via an API. The app displays current weather, forecasts, and supports city-based search functionality.',
                link: 'https://vercel.com/relackiyas-projects/weather-app',
            },
        ],
    };

    return (
        <section id='projects' className="py-20 px-5 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
            <div className="w-full flex flex-col px-10 py-5 bg-gray-900 rounded-lg shadow-lg">
                <h1 className='text-4xl mb-5 font-bold'>Projects</h1>
                <p className="text-lg mb-4">Explore my projects that demonstrate my skills in web development. Each project reflects my commitment to building responsive and interactive applications.</p>
                <p className="text-sm italic">Click on the project titles to see them in action!</p>
            </div>
            <div className="w-full flex flex-col md:flex-row px-10 gap-5 mt-5">
                {config.projects.map((project, index) => (
                    <div key={index} className='relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl'>
                        <img className='h-[160px] w-full object-cover transition-transform duration-300 transform hover:scale-110' src={project.image} alt={`Project ${index + 1}`} />
                        
                        <div className='absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center z-10'>
                            <p className='text-center px-5 text-lg font-semibold text-white text-shadow'>{project.description}</p>
                        </div>
                        
                        <div className='bg-gray-800 p-5 z-20 relative'>
                            <div className='flex justify-center mt-3'>
                                <a 
                                    className='btn bg-secondary text-white px-4 py-2 rounded transition-colors hover:bg-white hover:text-secondary z-20'
                                    target='_blank' 
                                    rel="noopener noreferrer" 
                                    href={project.link}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
