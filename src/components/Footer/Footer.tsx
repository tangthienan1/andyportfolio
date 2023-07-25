import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
            <div className="py-6 flex items-center justify-around lg:flex-col">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Build With <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span> by&nbsp;
                    <Link href="https://www.linkedin.com/in/tang-thien-an-0691a4195/" target='_blank' className="underline underline-offset-2">
                        ND
                    </Link>
                </div>
                <Link
                    href="https://www.linkedin.com/in/tang-thien-an-0691a4195/"
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Say Hello
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
