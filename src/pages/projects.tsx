import AnimatedText from '@/components/AnimatedText';
import CustomHead from '@/components/CustomHead';
import Layout from '@/components/Layout';
import { FeaturedProjectCard, SimpleProjectCard } from '@/components/ProjectCard';
import { projectPageTitle, projects } from '@/data/projectPageData';

const Projects = () => {
    return (
        <>
            <CustomHead title="project" content="any" />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={projectPageTitle} className="mb-16 sm:mb-8" />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        {projects.map((project, index) => {
                            if (index === 0) {
                                return (
                                    <div className="col-span-12" key={index}>
                                        <FeaturedProjectCard {...project} />
                                    </div>
                                );
                            }
                            return (
                                <div className="col-span-6 sm:col-span-12" key={index}>
                                    <SimpleProjectCard {...project} />
                                </div>
                            );
                        })}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
