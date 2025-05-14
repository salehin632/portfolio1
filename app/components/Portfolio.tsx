"use client"

import React from "react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion } from "framer-motion";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Admin Dashboard",
            description: "A simple admin dashboard for a ecommerce website built with NextJs, Tailwind CSS using the Shadcn UI library",
            image: "/representation-user-experience-interface-design_23-2150169850.avif",
            link: "https://admin-dashboard-qyz6.vercel.app/",
        },
        {
            id: 2,
            title: "Spotify Album Finder",
            description: "A web app that allows users to find albums on Spotify. Integrated with Spotify API, built using Next.js and Tailwind CSS, featuring real-time search and music previews.",
            image: "/futuristic-laptop-with-blank-screen-viewed-from-spaceship-window-showing-earth-photo.jpg",
            link: "https://spotifyalbumfinder.netlify.app/",
        },
    ];
    
    return (
        <section id="portfolio" className="min-h-screen pt-24 pb-12">
            <BackgroundGradientAnimation>
                <div className="text-center max-w-[1200px] px-4 mx-auto">
                    <motion.h2 
                        className="flex justify-center text-5xl py-12 font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        My Portfolio
                    </motion.h2>
                    <div className="flex flex-col gap-8">
                        {projects.map((project, index) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row bg-stone-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                                    <div className="w-full md:w-2/5 relative min-h-[300px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 p-6 text-left">
                                        <div className="mb-4 text-sm uppercase text-white/80">
                                            Project {project.id}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/80 mb-8">
                                            {project.description}
                                        </p>
                                        <a 
                                            href={project.link} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                                        >
                                            View Project
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))} 
                    </div>
                </div>
            </BackgroundGradientAnimation>
        </section>
    );
}