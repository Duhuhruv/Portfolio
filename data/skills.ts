export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: ["C", "C++", "Python", "TypeScript", "Java", "MATLAB", "RISC-V Assembly", "LaTeX"],
  },
  {
    name: "Embedded & Hardware",
    items: ["TI CC1312R (SimpleLink)", "STM32", "Arduino", "UART/SPI/I2C", "FreeRTOS", "Sensor Integration"],
  },
  {
    name: "RF & Wireless",
    items: ["Sub-GHz Protocols", "2-FSK/4-FSK Modulation", "Link Budget Analysis", "Custom Protocol Design"],
  },
  {
    name: "Software Engineering",
    items: ["REST APIs", "Serverless Architecture", "Distributed Systems", "CI/CD", "Agile/Scrum", "Code Review"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS Lambda", "AWS S3", "DynamoDB", "EC2", "API Gateway", "GitHub Actions", "CloudWatch"],
  },
  {
    name: "AI/ML",
    items: ["PyTorch", "Reinforcement Learning", "CNNs", "Data Augmentation", "Model Training", "Computer Vision"],
  },
  {
    name: "Testing & Tools",
    items: ["Jest", "RESTler", "Git", "Linux", "GDB", "Valgrind", "Winston Logging", "Node.js"],
  },
];
