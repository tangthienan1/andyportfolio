import { motion } from 'framer-motion';
import SkillItem from './SkillItem';

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            "
            >
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark
        text-light p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <SkillItem name={'Kafka'} x={'5vw'} y={'-13vw'} />
                <SkillItem name={'NGINX'} x={'5vw'} y={'-27vw'} />
                <SkillItem name={'RTL'} x={'0vw'} y={'-19vw'} />
                <SkillItem name={'NextJS'} x={'-17vw'} y={'-17vw'} />
                <SkillItem name={'TailwindCSS'} x={'-23vw'} y={'-23vw'} />
                <SkillItem name={'Shadcn'} x={'-13vw'} y={'-29vw'} />
                <SkillItem name={'TypeScript'} x={'-33vw'} y={'-3vw'} />
                <SkillItem name={'React Native'} x={'-23vw'} y={'-9vw'} />
                <SkillItem name={'Jest'} x={'-20vw'} y={'2vw'} />
                <SkillItem name={'CSS'} x={'-5vw'} y={'-11vw'} />
                <SkillItem name={'HTML'} x={'-32vw'} y={'9vw'} />
                <SkillItem name={'Javascript'} x={'15vw'} y={'11vw'} />
                <SkillItem name={'Micro FE'} x={'33vw'} y={'8vw'} />
                <SkillItem name={'AWS'} x={'-23vw'} y={'18vw'} />
                <SkillItem name={'ReactJS'} x={'-10vw'} y={'12vw'} />
                <SkillItem name={'NodeJS'} x={'5vw'} y={'19vw'} />
                <SkillItem name={'Express'} x={'20vw'} y={'19vw'} />
                <SkillItem name={'Docker'} x={'15vw'} y={'-12vw'} />
                <SkillItem name={'A11y'} x={'29vw'} y={'-5vw'} />
                <SkillItem name={'GraphQL'} x={'20vw'} y={'2vw'} />
            </div>
        </>
    );
};

export default Skills;
