import Head from 'next/head';
import React, { FC } from 'react';

type CustomHeadType = {
    title: string;
    content: string;
};

const CustomHead: FC<CustomHeadType> = ({ title, content }) => {
    return (
        <Head>
            <title>Andy | {title}</title>
            <meta name="description" content={content} />
        </Head>
    );
};

export default CustomHead;
