export type HighlightContentsType = {
    number: number;
    content: string;
};

export const aboutTitle = `I'm not different, I'm the different!`;

export const highlightContentsData: HighlightContentsType[] = [
    {
        number: 20,
        content: 'age',
    },
    {
        number: 4,
        content: 'projects completed',
    },
    {
        number: 3,
        content: 'years of experience',
    },
];

export const biographyContentsData: string[] = [
    `Hi, I'm Andy Tang or ND for short (Thien An Tang), a full-stack JS web developer with a passion
   for creating beautiful, functional, and user-centered digital
   experiences. With 4+ years of experience in the field. I am always
   looking for new and innovative ways to bring my client's visions to
   life.`,
    `I believe that develop is about more than just making application run
    – it's about solving problems and easy to maintain later,
  enjoyable experiences for users.`,
    `
  Whether I'm working on a website, mobile app, I bring commitment to clean and maintainable
   to every project I work on. I look forward to
  the opportunity to bring my skills and passion to your next project. 
  `,
    `Thanks you!!!`,
];

export type BackgroundDetailType = {
    title: string;
    subTitle?: string;
    subtitleLink?: string;
    time: string;
    address?: string;
    description?: string;
    teamSize?: number;
    technologies?: string;
    modal?: string;
    scopes?: string[];
};
export const experiences: BackgroundDetailType[] = [
    {
        title: 'Software Engineer',
        subTitle: 'NAB',
        time: 'Dec 2021-Present',
        address: 'Ho Chi Minh, Viet Nam',
        teamSize: 12,
        modal: 'Agile/Scrum',
        technologies:
            'ReactJS, NodeJS, Express, Jest, RTL, Git, Rally, TypeScript, GraphQL, BFF, A11y, AWS, Jenkins, Micro FE, Micro services, Bash script, Terraform, Hashicorp Vault, Linux, Docker',
        description: 'For full-time official work and full-stack developer',
        subtitleLink: 'https://www.nab.com.au/',
        scopes: [
            'Implement features or bug fixing with high quality, and high test coverage (with Jest on Be or Jest + RTL on FE).',
            'Build app UI from the design',
            'Implement bff with GraqhQL method and Nodejs and express',
            'Implement downstream service',
            'Build a stub data to interact with the application',
            'Deployment',
            'Build a simulated shell to interact with app',
            'Implement BioCatch, Ally',
            'Code review',
            'Spiking new feature',
            'Join Planning meetings to break tasks.',
            'Join training as a guilder.',
            'Guiding new member',
            'Make sharing session (A11y, BioCatch, PKI model, Browser behavior,...)',
        ],
    },
    {
        title: 'Software Engineer',
        subTitle: 'FPT',
        time: 'Sep 2020- Dec 2021',
        address: 'Ho Chi Minh, Viet Nam',
        teamSize: 10,
        description: 'Worked on a team responsible for developing a new mobile app about Health.',
        modal: 'Agile/Scrum',
        technologies: 'React native, Jest, Enzyme, Redux, Git, Jira, TypeScript, GraphQL',
        subtitleLink: 'https://fptsoftware.com/',
        scopes: [
            'Implement UI by design',
            'Implement feature logic, fixing bugs',
            'Unit test',
            'Optimize performance',
        ],
    },
    {
        title: 'Software Developer',
        subTitle: 'Self-purpose',
        time: '2023',
        address: 'Ho Chi Minh, Viet Nam.',
        description: 'Build my own portfolio',
        teamSize: 1,
        technologies: 'NextJS, Framer motion, Typescript, Tailwind',
    },
    {
        title: 'Software Developer',
        subTitle: 'Self-purpose',
        time: '2019',
        address: 'Ho Chi Minh, Viet Nam.',
        description: 'Build an mobile application to tracking finance during trip',
        teamSize: 1,
        technologies: 'React native, AWS amplify',
    },
    {
        title: 'Teaching Assistant',
        subTitle: 'FPT Greenwich',
        time: '2018',
        address: 'Ho Chi Minh, Viet Nam.',
        description:
            'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
    },
];

export const educations: BackgroundDetailType[] = [
    {
        title: 'Amazon Web Services Cloud Practitioner',
        subTitle: 'Credential',
        subtitleLink: '/AWS Certified Cloud Practitioner certificate.pdf',
        time: 'Apr 2023- Apr 2026',
        address: 'Amazon Web Services (AWS)',
    },
    {
        title: 'Graph Developer - Associate',
        subTitle: 'Credential',
        subtitleLink:
            'https://www.apollographql.com/tutorials/certifications/51793318-c989-4c57-a9f3-ee0c0310144f',
        time: 'Issued on 9/5/2022',
        address: 'Apollo GraphQL',
    },
];
