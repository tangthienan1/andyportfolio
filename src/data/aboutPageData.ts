export type HighlightContentsType = {
    number: number;
    content: string;
};

export const aboutTitle = `I'm not different, I'm the different!`;

export const highlightContentsData: HighlightContentsType[] = [
    {
        number: 4,
        content: 'satisfied clients',
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
    `Hi, I'm Andy Tang or ND for short (Thien An Tang), a full-stack web developer with a passion
   for creating beautiful, functional, and user-centered digital
   experiences. With 3 years of experience in the field. I am always
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
};
export const experiences: BackgroundDetailType[] = [
    {
        title: 'Software Engineer',
        subTitle: 'NAB',
        time: 'Dec 2022-Present',
        address: 'Ho Chi Minh, Viet Nam',
        teamSize: 12,
        modal: 'Agile/Scrum',
        technologies:
            'ReactJS, Jest, RTL, Git, Rally, TypeSCript, GraphQL, Backend for frontend, A11y, AWS, Jenkins, Micro FE',
        description:
            'For full-time official work, my team collaborated with Australian and Indian teams. My squad takes responsibility for a mini-app. My role is to implement the UI within integrate BioCatch and a11y, create resolvers on BFF, write queries or mutations with Apollo, and Spike and implement new functions, mentor new members, and present any new feature or new archive to the whole team. Take sharing section, Own some training class in office...',
        subtitleLink: 'https://www.nab.com.au/',
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
        time: '2016-2020',
        address: 'Apollo GraphQL',
    },
];
