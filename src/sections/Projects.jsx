import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "Turf Spot",
    description:
      "TurfSpot is a MERN stack application for booking turf grounds, featuring User, Owner, and Admin modules. Users can book turfs, manage bookings, and apply to become owners. Owners can add turfs and manage bookings. Admins oversee user management and transactions, ensuring a smooth booking experience.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Razorpay",
      "Daisy UI",
      "Cloudinary",
      "Redux Toolkit",
      "Redux Persist",
    ],
    links: [
      {
        type: "Website",
        href: "https://turf-spot.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/TurfSpot",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=1", // Random image from Picsum
  },
  {
    title: "Expense Tracker",
    description:
      "Expense-Tracker is a MERN stack application that helps users manage their monthly expenses. It features secure login with JWT, an adjustable monthly expense limit, and tools to add, view, and delete expenses. The app also provides a graphical overview of the remaining balance and allows users to track expenses across different months",
    technologies: [
      "React.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Mantine UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://expense-log.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/Expense-Tracker",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=2", // Random image from Picsum
  },
  {
    title: "Chat Application",
    description:
      "I created a real-time chat application using the MERN stack, incorporating JWT authentication and Socket.io for seamless communication. Users can send messages to different users in real time, and the system provides instant notifications whenever they receive new messages, ensuring smooth and interactive conversations.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Daisy UI",
      "Socket.io",
    ],
    links: [
      {
        type: "Website",
        href: "https://chat-application-in4i.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/Chat-Application",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=3", // Random image from Picsum
  },
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App is a user-friendly application that allows users to browse and purchase food items from various menus. It features an admin section for managing products and orders, including adding new items, updating order statuses, and viewing all products. The app also includes a dummy Stripe payment integration and product filtering options for users",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
    ],
    links: [
      {
        type: "Website",
        href: "https://food-delivery-app-fe.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/food-delivery-app",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=4", // Random image from Picsum
  },
  {
    title: "TODO App",
    description:
      "Todo App is a full-stack application built with the MERN stack, offering users the ability to register, log in, and reset their password using an OTP sent via email. It supports complete CRUD operations for managing todos, allows users to view pending and completed tasks, and provides options to view and edit their profile. JWT protected routes ensure secure access throughout the application.",
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Bootstrap",
    ],
    links: [
      {
        type: "Website",
        href: "https://todo-app-mern-fe.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/Todo-App-Mern",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=5", // Random image from Picsum
  },
  {
    title: "E-Commerce Website",
    description:
      "E-Store is a React-based e-commerce site that lets users manage their cart by adding, deleting, and updating products, and completing purchases. It uses Redux Toolkit and Context API for state management, Redux Persist for localStorage, and features styling with Tailwind CSS and Daisy UI. The app includes smooth animations",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Daisy UI",
      "Redux Toolkit",
      "Redux Persist",
    ],
    links: [
      {
        type: "Website",
        href: "https://react-estore-app.vercel.app/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RijoKsd/E-Store",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: "https://picsum.photos/500/300?random=6", // Random image from Picsum
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-6xl">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
