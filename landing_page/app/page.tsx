"use client";

import Image from "next/image";
import Head from "next/head";
import "./globals.css";

// icons
import { FaMoon, FaSun } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

// framer
import { motion } from "framer-motion";

// images
import heroImage from "../assets/hero-image.jpg";

import cardImage1 from "../assets/card-img-1.jpg";
import cardImage2 from "../assets/card-img-2.jpg";
import cardImage3 from "../assets/card-img-3.jpg";

import bannerImage1 from "../assets/banner-1.jpg";
import bannerImage2 from "../assets/banner-2.jpg";
import bannerImage3 from "../assets/banner-3.jpg";
import bannerImage4 from "../assets/banner-4.jpg";
import bannerImage5 from "../assets/banner-5.jpg";
import bannerImage6 from "../assets/banner-6.jpg";

// hooks
import { useState } from "react";

export default function Home() {

  // function
  const [darkmode, setdarkmode] = useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>

      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
        </style>
      </Head>

      <main className="font-JetBrains bg-yellow-50 min-h-screen px-10 dark:bg-black">

        {/* nav and hero */}
        <section>

          {/* nav */}
          <nav className="py-10 flex justify-between">

            <a href=""><h1 className="lg:text-xl text-sm md:text-base dark:text-white font-extrabold cursor-pointer">Future World</h1></a>

            <ul className="flex items-center">
              <li>
                {darkmode ? (
                  <FaSun
                    onClick={() => setdarkmode(!darkmode)}
                    className="cursor-pointer dark:text-white lg:text-xl sm:text-sm md:text-base mx-6"
                  />
                ) : (
                  <FaMoon
                    onClick={() => setdarkmode(!darkmode)}
                    className="cursor-pointer dark:text-white lg:text-xl sm:text-sm md:text-base mx-6"
                  />
                )}
              </li>

              <li>
                <a href="" className="bg-yellow-400 text-black px-4 py-2 border-none rounded-lg font-extrabold">More</a>
              </li>
            </ul>

          </nav>

          {/* hero */}
          <div className="text-center p-10">

            <h1 className="lg:text-7xl text-2xl md:text-4xl font-extrabold text-yellow-400">ARTIFICIAL INTELLIGENCE & QUANTUM COMPUTING</h1>
            <h3 className="lg:text-2xl text-xl md:text-2xl dark:text-white font-bold py-5 mt-5 opacity-60">Unlocking the Future Where AI Meets Quantum Computing</h3>
            <p className="lg:text-sm text-xs max-w-4xl mx-auto py-1 text-gray-400 dark:text-gray-100 leading-6">
              By combining the unparalleled processing power of quantum computers with the cutting-edge advancements in
              artificial intelligence, we are on the verge of revolutionizing industries, solving complex problems, and
              shaping a smarter, more efficient world.
            </p>

          </div>

          {/* icons */}
          <div className="lg:text-8xl text-4xl md:text-6xl flex justify-center gap-14 lg:gap-24 text-gray-700 dark:text-gray-100 mb-4">
            <i>
              <FaBrain />
            </i>
            <i>
              <FaComputer />
            </i>
            <i>
              <IoGameController />
            </i>
          </div>

          {/* image */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="m-auto relative bg-gradient-to-b from-yellow-400 mt-16 rounded-full justify-center hero-image-div overflow-hidden">
              <Image src={heroImage} alt="hero-image" className="p-3 rounded-full border-none hero-image" layout="fill" objectFit="cover" />
            </div>
          </motion.div>

        </section>

        {/* cards section */}
        <section>

          <div className="text-left p-10">

            <h3 className="lg:text-4xl dark:text-white text-lg md:text-2xl font-bold opacity-60 pt-2 pb-5 mt-5">Interesting</h3>
            <p className="lg:text-sm py-1 text-xs text-gray-400 dark:text-gray-100 leading-6">
              As we venture deeper into the world of technological advancements, artificial intelligence and quantum computing
              stand at the forefront of innovation. These two groundbreaking technologies hold the potential to redefine industries,
              enhance human capabilities, and solve problems that were once thought impossible. With AI's ability to learn, adapt,
              and process vast amounts of data combined with quantum computing's unparalleled processing power, the future is
              brighter and more fascinating than ever before.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-10">

            {/* card */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl mb-10 card-box cursor-pointer">
                <Image src={cardImage1} alt="cardImg1" width={120} height={120} className="inline border-none rounded-xl" />
                <h2 className="lg:text-2xl text-base md:text-lg pt-5 font-extrabold">Quantum Computing</h2>
                <p className="lg:text-sm text-xs py-2 text-gray-800 leading-6">
                  Quantum computing is revolutionizing the way we solve complex problems by harnessing the unique
                  properties of quantum mechanics. With its potential to process massive amounts of data at unprecedented speeds,
                  it promises to unlock solutions to challenges that classical computers cannot handle.
                </p>
              </div>
            </motion.div>

            {/* card */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl mb-10 card-box cursor-pointer">
                <Image src={cardImage2} alt="cardImg2" width={120} height={120} className="inline border-none rounded-xl" />
                <h2 className="lg:text-2xl text-base md:text-lg pt-5 font-extrabold">Machine Learning</h2>
                <p className="lg:text-sm text-xs py-2 text-gray-800 leading-6">
                  Machine learning enables systems to learn and improve from experience without being explicitly programmed.
                  By analyzing patterns in data, it powers everything from personalized recommendations to predictive analytics,
                  transforming industries across the globe.
                </p>
              </div>
            </motion.div>

            {/* card */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl mb-10 card-box cursor-pointer">
                <Image src={cardImage3} alt="cardImg3" width={120} height={120} className="inline border-none rounded-xl" />
                <h2 className="lg:text-2xl text-base md:text-lg pt-5 font-extrabold">Swarm Intelligence</h2>
                <p className="lg:text-sm text-xs py-2 text-gray-800 leading-6">
                  Swarm intelligence is inspired by the collective behavior of social organisms like ants or bees.
                  This decentralized approach to problem-solving allows groups of simple agents to work together efficiently,
                  leading to advancements in robotics, optimization, and more.
                </p>
              </div>
            </motion.div>

          </div>

        </section>

        {/* banner */}
        <section>

          <div className="text-left p-10 pt-2">

            <h3 className="lg:text-4xl dark:text-white text-lg md:text-2xl font-bold opacity-60 pb-5 mt-5">Letters</h3>
            <p className="lg:text-sm text-xs py-1 text-gray-400 dark:text-gray-100 leading-6">
              In a world rapidly advancing toward the future, artificial intelligence and quantum computing are at the heart of
              technological evolution. By merging AI's capacity for learning and adaptability with the sheer processing power of
              quantum systems, we are unlocking the potential to solve some of the most complex problems across industries.
              Whether it's in machine learning, where systems evolve and improve autonomously, or in swarm intelligence, which
              takes inspiration from nature's collective behaviors, these technologies are revolutionizing our approach to
              problem-solving. As we delve deeper into the realms of innovation, the possibilities are boundless, and the future
              of human interaction with technology looks brighter and more fascinating than ever before.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-10 p-6 pt-4">

            <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}>
              <Image src={bannerImage1} alt="bannerImg1" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}>
              <Image src={bannerImage2} alt="bannerImg2" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}>
              <Image src={bannerImage3} alt="bannerImg3" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}>
              <Image src={bannerImage4} alt="bannerImg4" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}>
              <Image src={bannerImage5} alt="bannerImg5" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}>
              <Image src={bannerImage6} alt="bannerImg6" className="rounded-lg object-cover mb-5 bannerImg cursor-pointer" />
            </motion.div>

          </div>

        </section>

        {/* footer */}
        <footer className="bg-yellow-400 footer -mx-10 p-3">

          <div className="text-left p-10 pt-2">

            <h3 className="lg:text-4xl text-lg md:text-2xl font-bold pb-5 mt-5 opacity-80">Contact for more details</h3>
            <p className="lg:text-sm text-xs text-black opacity-70 leading-6">
              Have any questions or want to learn more about the exciting advancements in AI and quantum computing? Get in touch with
              us to explore how these cutting-edge technologies can transform industries and solve complex problems. We're here to
              provide further details and discuss how the future of innovation can impact your projects.
            </p>

          </div>

          <div className="text-center pt-1">

            <h3 className="lg:text-sm text-xs font-bold opacity-80">Copyright © 2024 Future World All Rights Reserved.</h3>

          </div>

        </footer>

      </main>

    </div >
  );
}
