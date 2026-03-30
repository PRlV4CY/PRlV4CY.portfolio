const data = {
    projects: [
        {
            year: 2023,
            title: "DevHouse",
            subtitle: "Connect with developers Worldwide",
            tagline: "The application simulates a real-world development workspace where users can create projects, assign tasks, and monitor progress. DevHouse focuses on clean UI design, organized data management, and modular server-side architecture.",
            images: {
                hero: "devhouse.jpg",
                heroAlt: "DevHouse application screenshot",
                gallery: []
            },
            overview: {
                summary: "DevHouse is a web application created to allow users to create, share, and interact with posts in a structured online platform. The project addresses the need for a simple and organized way to manage user-generated content and discussions, providing a system where users can register, log in, create posts, and engage through comments.",
                problemContext: "The main challenge was designing a scalable and organized architecture using object-oriented programming while integrating a database for persistent data management. Built with TypeScript, Node.js, Prisma, and SQLite, the project offers user authentication, post creation and editing, and a comment system, along with a modular OOP structure that separates controllers, services, and views for maintainability and scalability.",
                note: "*This is an academic project created for educational purposes."
            },
            projectInfo: {
                deliverables: ["Web Application"],
                techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "Prisma", "SQLite"],
                responsibilities: ["Full-Stack Development", "Frontend Development", "Backend Development", "Database Design", "UI/UX Design"]
            },
            links: {
                live: "https://devhouse-rtdx.onrender.com",
                github: "https://github.com/SDX24/OOP-term-proj"
            },
            features: [
                {
                    number: 1,
                    title: "User Authentication & Session Management",
                    description: "The application requires a secure way for users to create accounts and stay logged in while interacting with posts and comments. User credentials are securely stored in SQLite using Prisma ORM, with passwords hashed using bcrypt before being saved. This ensures that sensitive information is protected. User sessions are used to maintain login state across pages. When a user logs in, their session is stored and checked on protected routes to ensure only authenticated users can perform actions like creating or editing posts.",
                    codeSnippet: "const hashedPassword = await bcrypt.hash(password, 10);"
                },
                {
                    number: 2,
                    title: "Post & Comment System",
                    description: "The core functionality of the application is allowing users to create posts and interact through comments. Posts and comments are stored in SQLite and linked to users through relational data models. The system ensures that each post belongs to a specific user and each comment is tied to a post. When a user submits a post or comment, the request is processed by the controller and saved to the database using Prisma. The updated content is then displayed dynamically on the page.",
                    codeSnippet: "await prisma.post.create({\n  data: {\n    title: req.body.title,\n    content: req.body.content,\n    authorId: res.locals.current_user.id\n  }\n});"
                },
                {
                    number: 3,
                    title: "MVC Architecture & Code Organization",
                    description: "As the application grows, maintaining clean and organized code becomes important. The project follows an MVC-inspired (Model-View-Controller) architecture using an object-oriented approach. Controllers handle incoming requests, services manage business logic, and views are responsible for displaying data. This separation improves scalability, readability, and maintainability of the codebase.",
                    codeSnippet: "class PostController {\n  async create(req, res) {\n    return this.postService.create(req.body);\n  }\n}"
                }
            ],

            libraries: [
                {
                    category: "Backend Framework",
                    name: "Express.js",
                    use: "Backend framework used to handle routing, requests, and server logic",
                    link: "https://expressjs.com"
                },
                {
                    category: "ORM",
                    name: "Prisma",
                    use: "ORM used to interact with the SQLite database and manage data models",
                    link: "https://www.prisma.io"
                },
                {
                    category: "Database",
                    name: "SQLite",
                    use: "Lightweight database used to store users, posts, and comments",
                    link: "https://sqlite.org"
                },
                {
                    category: "Security",
                    name: "bcrypt",
                    use: "Used to hash user passwords for secure authentication",
                    link: "https://github.com/kelektiv/node.bcrypt.js"
                },
                {
                    category: "Build Tool",
                    name: "Vite",
                    use: "Build tool used for fast frontend development and asset bundling",
                    link: "https://vite.dev"
                }
            ]
        },

        {
            title: "Trello User Guide",
            tagline: "This documentation is a step-by-step user guide for Trello, a visual project management tool. It explains key features, setup instructions, and best practices for new users.",

            images: {
                hero: "trello-user-guide.jpg",
                heroAlt: "Trello website screenshot",
            },
            
            overview: {
                summary: "A documentation website built with MkDocs Material. Written in Markdown and organized into clear sections (Getting Started, card management, members, labels, due dates, automation, notifications, etc.) with lots of annotated screenshots plus a glossary to help new users learn Trello quickly.",
            },

            projectInfo: {
                techStack: ["Markdown", "MkDocs", "MkDocs Material", "YAML"],
            },

            links: {
                live: "https://userguides.onrender.com",
                github: "https://github.com/Addyware/userguides"
            },
        },

        {
            title: "Dice Game",
            tagline: "A simple interactive dice game where players roll dice to compete for the highest score. It shows how game logic and user interaction work in a web app.",

            images: {
                hero: "dice-game.jpg",
                heroAlt: "Dice game interface showing dice roll results",
            },
            
            overview: {
                summary: "A browser-based dice game built using HTML, CSS, and JavaScript. Players can roll dice and see random results generated each time. The game updates the UI based on the outcome and determines a winner. It focuses on basic game logic, DOM manipulation, and handling user actions.",
            },

            projectInfo: {
                techStack: ["HTML", "CSS", "JavaScript"],
            },

            links: {
                live: "https://dice-game-hwd0.onrender.com",
                github: "https://github.com/PRlV4CY/dice-game"
            },
        },
    ],

    about: "I am a Full-Stack Web Development student focused on building modern, responsive, and user-friendly web applications. My work emphasizes clean code, accessibility, and performance. I enjoy turning ideas into real digital products using JavaScript, Node.js, and modern web technologies.",
    img: "johan-mathew-barrera.jpeg",

    contacts: [
        {
            title: "GitHub",
            link: "https://github.com/PRlV4CY",
        },

        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/johanbarrera/",
        },

        {
            title: "Gmail",
            link: "mathew.barrera@gmail.com",
        },
    ],
}

module.exports = data;