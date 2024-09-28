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
                link: 'https://weather-app-livid-seven-27.vercel.app/',
            },
        ],
    };

    return (
        <section id='projects' className="py-20 px-5 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
            <div className="w-full flex flex-col px-10 py-5">
                {/* Updated title without underline */}
                <h1 className='text-4xl mb-5 w-[140px] font-bold'>Projects</h1>
                <p>Here are some of the projects I've built using technologies like HTML, CSS, JavaScript, and React.js. Each project focuses on creating interactive and user-friendly web applications. Check them out.</p>
            </div>
            <div className="w-full flex flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project, index) => (
                    <div key={index} className='relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-900'>
                        {/* Reduced image size */}
                        <img className='h-[140px] w-full object-cover transition-transform duration-300 transform hover:scale-110' src={project.image} alt={`Project ${index + 1}`} />
                        
                        {/* Full description shown without hover */}
                        <div className='bg-gray-800 p-5'>
                            <p className='text-center text-lg font-semibold text-white'>{project.description}</p>
                            <div className='flex justify-center mt-3'>
                                <a 
                                    className='btn bg-secondary text-white px-4 py-2 rounded transition-colors hover:bg-blue-700'
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
