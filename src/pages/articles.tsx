import AnimatedText from '@/components/AnimatedText';
import FeaturedArticleCard from '@/components/ArticleCard/FeaturedArticleCard';
import SimpleArticleCard from '@/components/ArticleCard/SimpleArticleCard';
import CustomHead from '@/components/CustomHead';
import Layout from '@/components/Layout';
import { articles, articlesPageTitle } from '@/data/articlesPageData';

const Articles = () => {
    const featuredArticles = articles.slice(0, 2);
    const simpleArticles = articles.slice(2, articles.length);

    return (
        <>
            <CustomHead title={'Articles Page'} content={'any'} />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={articlesPageTitle} className="mb-16" />
                    <div className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        {featuredArticles.map((article, index) => (
                            <div className="col-span-1" key={index}>
                                <FeaturedArticleCard {...article} />
                            </div>
                        ))}
                    </div>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All Articles
                    </h2>
                    <ul>
                        {simpleArticles.map((article, index) => (
                            <li key={index}>
                                <SimpleArticleCard {...article} />
                            </li>
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default Articles;
