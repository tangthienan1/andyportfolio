export const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            // staggerChildren make its' all children effect after the first one
            // this case is each word will have the animation in order
            staggerChildren: 0.05,
        },
    },
};

export const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};
