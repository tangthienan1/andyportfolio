import React from 'react';
import Link from 'next/link';

import Layout from '../Layout';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Build With <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
                    <Link href="https://google.com" className="underline underline-offset-2">
                        AndyTang
                    </Link>
                </div>
                <Link
                    href="https://goole.com"
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Say Hello
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
