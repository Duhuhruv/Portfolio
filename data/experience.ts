export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "SeaTec Consulting",
    role: "Boeing Space, Defense, & Security Intern",
    location: "Bellevue, WA",
    start: "May 2022",
    end: "Aug 2023",
    bullets: [
      "Automated a Boeing IP documentation program by developing a Python and VBA pipeline to process 18K+ technical files, cutting the contract-allocated 6-hour review time per document to under 1 minute and saving over 10,000 labor hours across the scope.",
      "Created automation scripts in Access and Excel to streamline configuration management workflows and error tracking for aircraft system documentation.",
      "Streamlined airspace data-sharing documentation for NASA's Urban Air Mobility Challenge by consolidating cross-team research and verification workflows.",
    ],
  },
  {
    company: "Senior Design: Object Detection Drone",
    role: "Communications and Embedded Systems Lead",
    location: "West Lafayette, IN",
    start: "Jan 2025",
    end: "May 2025",
    bullets: [
      "Achieved stable 3 km Sub-GHz image transmission at 1 Mbps by designing a custom packet protocol and embedded C firmware on the TI CC1312R.",
      "Integrated Python-based compression and reliability testing to improve throughput and minimize data loss.",
      "Led communications development, coordinating RF integration and firmware across a four-person team.",
    ],
  },
  {
    company: "Engineering Projects in Community Service (EPICS)",
    role: "Project Partner Liaison",
    location: "West Lafayette, IN",
    start: "Aug 2021",
    end: "May 2022",
    bullets: [
      "Translated client therapy goals into engineering deliverables by leading collaboration with a hippotherapy organization serving children with special needs.",
      "Developed servo-controlled assistive robotics with embedded C and sensor-actuator interfacing, ensuring reliability.",
      "Presented functional prototypes to 500+ attendees at Purdue Space Day, demonstrating real-time motion control.",
    ],
  },
];
