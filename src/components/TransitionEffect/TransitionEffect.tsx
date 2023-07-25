import React from 'react';
import { motion } from 'framer-motion';
import EffectLayout from '../EffectLayout';

const TransitionEffect = () => {
    return (
        <EffectLayout>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-emerald-400"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', y: '0%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-red-700"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', y: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', y: '0%' }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
            />
        </EffectLayout>
    );
};

export default TransitionEffect;
