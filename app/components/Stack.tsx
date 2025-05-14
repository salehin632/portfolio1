"use client";
import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";

export default function Stack() {
    const stack = [
        {   
            id: 1,
            name: "React",
            icon: <FaReact className="w-26 h-26 text-blue-500" />,
        },
        {
            id: 2,
            name: "Next.js",
            icon: <SiNextdotjs className="w-26 h-26 text-white" />,
        },
        {
            id: 3,
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="w-26 h-26 text-cyan-500" />,
        },
        {
            id: 4,
            name: "TypeScript",
            icon: <SiTypescript className="w-26 h-26 text-blue-600" />,
        },  
        {
            id: 5,
            name: "JavaScript",
            icon: <FaJs className="w-26 h-26 text-yellow-400" />,
        },
    ];

    return (
        <div>
            <section className="py-12">
                <div className="text-center max-w-[1200px] px-4 mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center text-5xl font-bold text-white mb-8"
                    >
                        My Stack
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {stack.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1 
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    backgroundColor: "rgba(68, 64, 60, 0.5)"
                                }}
                                className="flex flex-col bg-stone-800/50 rounded-lg p-4 items-center"
                            >
                                {item.icon}
                                <span className="text-white text-sm mt-2">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}