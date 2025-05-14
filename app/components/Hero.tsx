"use client"
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import React from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Image from "next/image";
import pic from "@/public/pic.png";
import { motion } from "framer-motion";

export default function Hero() {
    const words = "Salehin";
    return (
        <BackgroundGradientAnimation>
            <div className="h-screen flex items-center justify-center">
                <div className="text-center space-y-8 max-w-4xl px-4">
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p 
                            className="text-white text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hi! I am
                        </motion.p>
                        <motion.div 
                            className="text-gray-400 text-5xl md:text-6xl lg:text-9xl font-bold tracking-wider"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <TextGenerateEffect words={words} />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Image 
                            src={pic} 
                            alt="hero" 
                            width={300} 
                            height={300} 
                        />
                    </motion.div>

                    <motion.p 
                        className="text-white font-semibold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Frontend Developer based in Dhaka, Bangladesh.
                    </motion.p>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}