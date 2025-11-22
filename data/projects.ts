export type ProjectContentBlock =
  | { type: "text"; id: string; title?: string; body: string }
  | { type: "image"; id: string; src: string; alt: string; caption?: string };

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  tags: string[];
  stack: string[];
  thumbnail?: string;
  heroImage?: string;
  links?: {
    github?: string;
    report?: string;
    video?: string;
    website?: string;
  };
  overview?: string;
  impactBullets?: string[];
  contentBlocks?: ProjectContentBlock[];
}

export const projects: Project[] = [
  {
    slug: "sub-ghz-rf-telemetry-drone",
    title: "Sub-GHz RF Image Transmission System for Search & Rescue Drone",
    shortDescription: "Led communications subsystem design for a senior design drone project, achieving 3+ km operational range with custom packet protocol and 1 Mbps sustained data rates.",
    featured: true,
    tags: ["Embedded Systems", "RF Communication", "Senior Design", "Wireless"],
    stack: ["C", "Python", "TI CC1312R SimpleLink", "UART", "JPEG Compression", "Luckfox Pico Ultra", "2-FSK Modulation"],
    thumbnail: "/images/projects/subghz_drone/subsystem_block_radio.jpg",
    links: {
      github: "https://github.com/Duhuhruv/Sub-GHz_Radio_Drone_Project",
      report: "https://drive.google.com/file/d/1hLyYco8pAcUMKnUi00cZ6kdRbGmCKY5S/view?usp=sharing",
    },
    overview: "Design and implement a robust, long-range wireless communication system capable of transmitting real-time compressed images and alert data from an autonomous search-and-rescue drone with onboard object detection to a ground station over distances exceeding 3 km. Led the communications subsystem design and implementation for a senior design drone project. Architected a custom packet transmission protocol optimized for Sub-GHz operation (868 MHz, 2-FSK modulation) achieving 1 Mbps sustained data rates. Developed embedded C firmware for the TI CC1312R radio module with UART interfacing to the flight controller. Implemented Python-based ground station software for JPEG decompression, packet reassembly, and real-time image display. Designed custom framing with CRC error detection and basic ARQ for reliability.",
    impactBullets: [
      "3+ km operational range validated in line-of-sight field tests",
      "1 Mbps sustained data rate for image transmission",
      "Custom packet protocol with CRC/ARQ for reliability achieving 99.2% packet delivery rate",
      "Successfully integrated with YOLOv5 object detection pipeline",
      "Achieved <80ms average latency for alert messages with dual-queue priority scheduling",
      "Demonstrated at senior design showcase with positive industry feedback for real-world search-and-rescue applications",
    ],
    contentBlocks: [
      {
        type: "text",
        id: "system-architecture",
        title: "System Architecture & Implementation",
        body: "The communications subsystem served as the critical link between the autonomous drone and ground station, enabling real-time transmission of both object detection alerts and compressed video streams. The system architecture consisted of three primary components:\n\n1. Embedded Transmitter (Drone-Side):\n• TI CC1312R SimpleLink wireless MCU configured for 868 MHz Sub-GHz operation\n• Custom C firmware implementing packet framing, CRC calculation, and UART buffering\n• Integration with Luckfox Pico Ultra for JPEG compression and frame capture\n• Real-time prioritization: alert packets transmitted with higher priority than image data\n\n2. Custom RF Protocol:\n• Packet structure: Header (16 bytes) + Payload (variable) + CRC16\n• Support for both alert messages (low-latency, <50ms) and image chunks (throughput-optimized)\n• Basic ARQ implementation with selective retransmission for corrupted packets\n• Achieved 99.2% packet delivery rate in field conditions\n\n3. Ground Station Software (Python):\n• Real-time packet reception and reassembly\n• JPEG decompression and image display pipeline\n• Logging and diagnostics for performance analysis"
      },
      {
        type: "image",
        id: "radio-subsystem",
        src: "/images/projects/subghz_drone/subsystem_block_radio.jpg",
        alt: "Radio subsystem block diagram",
        caption: "Radio Subsystem block diagram"
      },
      {
        type: "image",
        id: "ui-demo",
        src: "/images/projects/subghz_drone/ui.png",
        alt: "Real-time image transfer UI",
        caption: "Real time Image transfer and UI example from Purdue SPARK Demo"
      },
      {
        type: "text",
        id: "technical-challenges",
        title: "Technical Challenges & Solutions",
        body: "Challenge 1: Balancing Latency vs. Throughput\n\nObject detection alerts required low-latency transmission (<100ms), while image data needed high throughput (1 Mbps). Solved by implementing a dual-queue system with priority scheduling in the firmware.\n\nChallenge 2: Packet Loss in Long-Range Scenarios\n\nInitial testing at 2+ km showed 15-20% packet loss due to signal fading. Implemented forward error correction and adaptive retry logic, reducing effective loss to <1%.\n\nChallenge 3: Power Constraints\n\nCC1312R power consumption at 10 dBm output threatened flight time. Optimized transmission duty cycle and implemented dynamic power scaling based on RSSI feedback from ground station."
      },
      {
        type: "image",
        id: "radio-latency",
        src: "/images/projects/subghz_drone/radio_latency.PNG",
        alt: "Radio latency measurements",
        caption: "Radio latency measurements"
      },
      {
        type: "image",
        id: "radio-transfer",
        src: "/images/projects/subghz_drone/radio_completed_transfer.PNG",
        alt: "UART transfer logs",
        caption: "UART logs showing transfer connection"
      },
      {
        type: "text",
        id: "testing-validation",
        title: "Testing & Validation",
        body: "Conducted comprehensive field testing across multiple environments:\n\n• Open Field Tests: Validated 3.2 km maximum range with line-of-sight\n• Urban Environment: Achieved 1.1 km range with building obstructions\n• Interference Testing: Verified operation in 2.4 GHz WiFi saturated areas\n• Reliability Metrics: 99.2% packet delivery, <80ms average latency for alerts"
      },
      {
        type: "image",
        id: "field-testing",
        src: "/images/projects/subghz_drone/distance_test.PNG",
        alt: "Field testing demonstrating 3+ km range",
        caption: "Field testing demonstrating 3+ km operational range. X marks the ground station location while the circles are the drone-side locations."
      },
      {
        type: "text",
        id: "key-takeaways",
        title: "Key Takeaways & Future Work",
        body: "This project demonstrated the viability of Sub-GHz communication for drone telemetry applications, particularly in scenarios requiring long range and obstacle penetration. Future enhancements could include adaptive modulation schemes (2-FSK to 4-FSK based on link quality) and integration of mesh networking for multi-drone coordination.\n\nThe system was successfully demonstrated at the senior design showcase, receiving positive feedback from industry judges for its practical approach to solving real-world search-and-rescue communication challenges."
      }
    ],
  },
  {
    slug: "npm-package-registry-clone",
    title: "NPM Package Registry Clone — Private Enterprise Software Distribution",
    shortDescription: "Built a scalable, serverless package management system with automated quality scoring across 7 metrics, using AWS Lambda, S3, DynamoDB, and presigned-URL security.",
    featured: true,
    tags: ["Cloud Architecture", "Full-Stack", "Software Engineering", "Serverless"],
    stack: ["TypeScript", "Node.js", "AWS Lambda", "AWS S3", "DynamoDB", "API Gateway", "GitHub Actions", "Jest", "Winston"],
    thumbnail: "/images/projects/npm clone/AWS_structure.png",
    links: {
      github: "https://github.com/AviatorNic28/ECE-461-Phase-2",
      report: "https://drive.google.com/file/d/1-CU-heo0OBlgMCqzhl4IIAyjx4r8V4bZ/view?usp=sharing",
    },
    overview: "Build a scalable, secure, private package management system for enterprise use that evaluates and stores software packages with automated quality metrics, access controls, and a web-based interface—essentially creating a private alternative to the public npm registry. Designed and implemented a serverless architecture on AWS with 8 RESTful API endpoints supporting full CRUD operations for package management. Developed Lambda functions in TypeScript for package ingestion with automated quality scoring, upload/download via presigned S3 URLs, regex-based search, and cost calculation. Implemented comprehensive CI/CD pipeline using GitHub Actions for automated testing, security scanning (RESTler), and deployment. Built responsive web frontend with S3 static hosting and integrated ADA-compliant UI (WCAG 2.1 AA).",
    impactBullets: [
      "8 REST endpoints with complete package lifecycle management (upload, download, search, update, reset)",
      "Automated quality scoring across 7 metrics: ramp-up time, responsiveness, correctness, bus factor, license compliance, dependency pinning, and code review fraction",
      "Serverless architecture scaling within AWS free tier with minimal operational overhead",
      "Presigned-URL security for time-limited (10-minute) S3 access, avoiding Lambda 6MB payload limits",
      "Packages below 0.5 average score automatically rejected during ingestion",
      "Comprehensive STRIDE threat model analysis with IAM policies and CloudWatch audit trails",
      "CI/CD pipeline with Jest unit testing (80%+ coverage), TypeScript linting, and RESTler security testing",
    ],
    contentBlocks: [
      {
        type: "text",
        id: "system-architecture",
        title: "System Architecture",
        body: "The system was architected as a fully serverless application leveraging AWS managed services to minimize operational overhead while maintaining scalability and security.\n\nCore Components:\n\n• API Gateway: RESTful endpoint routing with CORS configuration\n• AWS Lambda: 12+ serverless functions handling business logic (TypeScript/Node.js)\n• S3 Buckets: Package storage with presigned URL access control\n• DynamoDB: Two tables for package metadata and quality metrics\n• CloudWatch: Centralized logging and monitoring"
      },
      {
        type: "image",
        id: "architecture-diagram",
        src: "/images/projects/npm clone/AWS_structure.png",
        alt: "Serverless AWS architecture diagram",
        caption: "Serverless AWS architecture with Lambda, S3, DynamoDB, and API Gateway"
      },
      {
        type: "text",
        id: "key-features",
        title: "Key Features & Implementation Details",
        body: "1. Package Upload with Security\n\nImplemented a two-stage upload process using presigned S3 URLs:\n• Client requests upload → Lambda generates 10-minute presigned URL\n• Client uploads directly to S3 → S3 trigger invokes metadata processor\n• Metadata processor updates DynamoDB with package info\n\nThis approach avoided Lambda payload size limits (6 MB) and improved security by limiting S3 access windows.\n\n2. Automated Package Quality Scoring\n\nDeveloped a rating system evaluating packages across 7 dimensions:\n• Ramp-up time (README quality, documentation)\n• Responsiveness (issue/PR response times via GitHub API)\n• Correctness (test coverage, build status)\n• Bus factor (contributor distribution)\n• License compliance (SPDX validation)\n• Dependency pinning (security best practices)\n• Code review fraction (PR approval rates)\n\nPackages below 0.5 average score were automatically rejected during ingestion.\n\n3. Search & Discovery\n\nImplemented regex-based search across package names and descriptions using DynamoDB Query with scan fallback for complex patterns."
      },
      {
        type: "image",
        id: "frontend-ui",
        src: "/images/projects/npm clone/npm_frontend.png",
        alt: "NPM registry web frontend",
        caption: "Website frontend"
      },
      {
        type: "text",
        id: "development-process",
        title: "Development Process & Challenges",
        body: "CI/CD Pipeline:\n\nEstablished GitHub Actions workflow automating:\n• Jest unit tests (targeting 80%+ coverage)\n• TypeScript compilation and linting\n• Automated deployment to AWS (Lambda, S3, DynamoDB)\n• RESTler security testing against OpenAPI spec\n\nMajor Technical Challenge: Integration Issues\n\nMid-project, switched from AWS Amplify to manual GitHub Actions deployment due to HTTPS/HTTP conflicts breaking frontend-backend communication. This required re-architecting the deployment pipeline but ultimately provided better control and reliability.\n\nTeam Collaboration:\n\nWorked in a 4-person team using Agile methodology:\n• Weekly sprints with Discord standups\n• Git feature branching with PR reviews\n• Shared AWS account with IAM role separation\n• Documentation in GitHub Wiki"
      },
      {
        type: "text",
        id: "security-analysis",
        title: "Security Analysis (STRIDE Model)",
        body: "Conducted comprehensive threat modeling:\n\n• Spoofing: Mitigated with API key authentication (planned X-Authorization tokens)\n• Tampering: HTTPS for all communication, presigned URLs for S3\n• Repudiation: CloudWatch logging for audit trails\n• Information Disclosure: IAM policies restricting DynamoDB access\n• DoS: API Gateway rate limiting (not fully implemented)\n• Elevation of Privilege: AWS IAM with principle of least privilege"
      },
      {
        type: "image",
        id: "cicd-pipeline",
        src: "/images/projects/npm clone/cicd_deployment.png",
        alt: "GitHub Actions CI/CD pipeline",
        caption: "GitHub Actions CI/CD pipeline execution"
      },
      {
        type: "image",
        id: "accessibility-test",
        src: "/images/projects/npm clone/Accesibility_check.png",
        alt: "WCAG accessibility test results",
        caption: "WCAG Accessibility Test"
      },
      {
        type: "text",
        id: "outcomes-lessons",
        title: "Outcomes & Lessons Learned",
        body: "Successfully delivered a functional package registry demonstrating:\n\n• Serverless architecture design and implementation\n• RESTful API development with proper HTTP semantics\n• Cloud infrastructure management (IaC principles)\n• Security-first design with threat modeling\n• Team collaboration in a complex software engineering project\n\nKey Lesson: Integration testing should be prioritized earlier in development. We spent significant time on individual Lambda function testing but encountered issues when connecting components. Implementing end-to-end integration tests from week 1 would have surfaced these problems sooner.\n\nThe project provided hands-on experience with modern software engineering practices used in production systems—skills directly applicable to industry roles in cloud development and distributed systems."
      }
    ],
  },
  {
    slug: "drq-snake-reinforcement-learning",
    title: "Data-Regularized Q-Learning for Snake",
    shortDescription: "Implemented DrQ framework with random shift augmentation in a custom Snake environment, demonstrating 30% faster convergence and reduced overfitting compared to baseline DQN.",
    featured: false,
    tags: ["AI/ML", "Reinforcement Learning", "Research", "Computer Vision"],
    stack: ["Python", "PyTorch", "OpenAI Gym", "Reinforcement Learning", "Computer Vision", "CNNs"],
    thumbnail: "/images/projects/drq_snake/DrQRSFull1.png",
    links: {
      github: "https://github.com/Duhuhruv/ECE570-DrQSnake",
      report: "https://drive.google.com/file/d/1VV7r5jJUt6nuBxgADgMndOKDJUNj06Iz/view?usp=sharing",
      video: "https://www.youtube.com/watch?v=Rc4yFxNeazg",
    },
    overview: "Evaluate whether data augmentation techniques (DrQ) improve training efficiency and stability in discrete-action, pixel-based RL environments. Implemented DrQ framework with random shift augmentation, double Q-learning, and custom Snake environment with 84×84 pixel observations. Trained convolutional Q-networks with augmented replay buffers. Authored ICML-style research paper comparing DrQ against baseline DQN across harsh and forgiving reward conditions.",
    impactBullets: [
      "30% faster convergence in long training runs (500k+ steps) compared to baseline DQN",
      "Reduced overfitting through data augmentation with random shift techniques",
      "Demonstrated 25% higher score stability with DrQ versus baselines in harsh reward environments",
      "Published results in ICML-style research paper with comprehensive experimental analysis",
      "Created custom Snake environment with pixel-based observations for vision-based RL research",
    ],
    contentBlocks: [
      {
        type: "text",
        id: "project-overview",
        body: "Implemented DrQ framework with random shift augmentation, double Q-learning, and custom Snake environment with 84×84 pixel observations. Trained convolutional Q-networks with augmented replay buffers. Authored ICML-style research paper comparing DrQ against baseline DQN across harsh and forgiving reward conditions. Demonstrated 30% faster convergence and reduced overfitting in long training runs (500k+ steps)."
      },
      {
        type: "image",
        id: "drq-results",
        src: "/images/projects/drq_snake/DrQRSFull1.png",
        alt: "DrQ training results in forgiving environment",
        caption: "DrQ in a forgiving environment"
      },
      {
        type: "image",
        id: "dqn-baseline",
        src: "/images/projects/drq_snake/DQNRSFull1.png",
        alt: "DQN baseline training results",
        caption: "DQN (Baseline) in a forgiving environment"
      }
    ],
  },
  {
    slug: "epics-assistive-robotics",
    title: "EPICS: Rovers for Aero & Astro Education / Hippotherapy Assistive Technology",
    shortDescription: "Led embedded systems development for assistive robotics serving children with special needs, delivering servo-controlled prototypes demonstrated to 500+ attendees at Purdue Space Day.",
    featured: false,
    tags: ["Embedded Systems", "Community Partnership", "Robotics", "Hardware"],
    stack: ["C/C++", "Arduino/STM32", "Servo Control", "Sensor Integration", "Real-Time Systems"],
    thumbnail: "/images/projects/EPICS/rover.png",
    links: {
      website: "https://engineering.purdue.edu/EPICS",
    },
    overview: "Develop accessible, field-tested assistive robotics for hippotherapy (equine-assisted therapy) serving children with special needs through a year-long community partnership. Delivered servo-controlled Rover prototypes at Purdue Space Day for 500+ participants, demonstrating stable closed-loop operation and modular hardware design. Served as primary technical liaison between Purdue engineering team and community therapy organization, translating therapeutic requirements into engineering specifications.",
    impactBullets: [
      "Served as Project Partner Liaison, translating client therapy goals into engineering deliverables",
      "Developed servo-controlled assistive robotics with embedded C and sensor-actuator interfacing",
      "Ensured reliability and safety with fail-safe control logic for vulnerable user population",
      "Presented functional prototypes to 500+ attendees at Purdue Space Day",
      "Demonstrated real-time motion control and electromagnetics concepts through large educational activity",
      "Led collaboration with hippotherapy organization serving children with special needs",
    ],
    contentBlocks: [
      {
        type: "text",
        id: "project-overview",
        body: "Served as primary technical liaison between Purdue engineering team and community therapy organization, translating therapeutic requirements into engineering specifications. Led embedded systems development with servo-controlled modules, real-time sensor integration, and fail-safe control logic. Presented Rover prototypes at Purdue Space Day to 500+ attendees, demonstrating electromagnetics and remote controls through a large educational activity."
      },
      {
        type: "image",
        id: "rover-prototype",
        src: "/images/projects/EPICS/rover.png",
        alt: "Rover and controller prototype",
        caption: "Rover and Controller"
      },
      {
        type: "image",
        id: "space-day-demo",
        src: "/images/projects/EPICS/space_day.png",
        alt: "Rover demonstration at Purdue Space Day",
        caption: "Rover demonstration at Purdue Space Day with 500+ attendee"
      }
    ],
  },
];
