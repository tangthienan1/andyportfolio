import { useMotionValue } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, RefObject, useRef } from 'react';

import { MotionImage } from '../common';

type MovingImgLinkType = {
    img: StaticImageData;
    link: string;
    title: string;
    className?: string;
};

const MovingImgLink: FC<MovingImgLinkType> = ({
    title,
    img,
    link,
    className = 'capitalize text-xl font-semibold hover:underline',
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef: RefObject<HTMLImageElement> = useRef(null);

    const handleMouseMove = (e: any) => {
        if (imgRef) {
            if (imgRef.current) {
                imgRef.current.style.display = 'inline-block';
                x.set(e.pageX);
                y.set(-10);
            }
        }
    };

    const handelMouseLeave = () => {
        if (imgRef) {
            if (imgRef.current) {
                imgRef.current.style.display = 'none';
                x.set(0);
                y.set(0);
            }
        }
    };

    return (
        <Link
            href={link}
            target="_blank"
            onMouseLeave={handelMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <h2 className={className}>{title}</h2>
            <MotionImage
                style={{ x: x, y: y }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                initial={{ opacity: 0 }}
                ref={imgRef}
                src={img}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
            />
        </Link>
    );
};
export default MovingImgLink;
