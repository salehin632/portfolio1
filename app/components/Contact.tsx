"use client"

import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub className="w-6 h-6" />,
            url: "https://github.com/salehin632",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="w-6 h-6" />,
            url: "https://www.linkedin.com/in/salehin-tahmid-531172196/",
        },
       
    ];

    return (
        <section id="contact" className="min-h-screen pt-24 pb-12">
            <BackgroundGradientAnimation>
                <div className="max-w-[1200px] px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold mt-15 text-white mb-4">Get in Touch</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-stone-800/50 backdrop-blur-sm rounded-lg p-8"
                        >
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-stone-800/50 backdrop-blur-sm rounded-lg p-8"
                        >
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                                    <p className="text-white/80 font-bold text-lg">
                                        Phone - +8801721869852 <br />
                                        Email - stahmid23@gmail.com
                                    </p>    
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Connect with me</h3>
                                    <div className="flex gap-4">
                                        {socialLinks.map((link) => (
                                            <motion.a
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-white/80 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
                                    <p className="text-white/80">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </BackgroundGradientAnimation>
        </section>
    );
}