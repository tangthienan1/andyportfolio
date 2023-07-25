import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { FC } from 'react';

const Document: FC = () => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`
                        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                        }
                    `}
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
