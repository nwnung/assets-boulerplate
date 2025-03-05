"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const logos = ["GreatLab", "Quolum", "Linq", "Bionic Talent"];

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      if (scrollElement) {
        scrollAmount += 1;
        if (scrollAmount >= scrollElement.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollElement.scrollLeft = scrollAmount;
      }
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full mb-4">
        🔥 New: filter by revenue & technology
      </span>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
        Find decision-maker emails from
        <span className="text-gray-400"> 100,000+ startups</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mt-4">
        Unlock 200,000+ Verified Emails & contact info from tech companies
        around the world, without the hefty monthly costs. Get the entire
        database for $67.
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <Button className="bg-black text-white px-6 py-3 rounded-full">
          Early Bird Access ($67) →
        </Button>
        <Button variant="outline" className="px-6 py-3 rounded-full">
          Documentation
        </Button>
      </div>
      <p className="text-sm text-gray-400 mt-8">
        Trusted by founders & teams everywhere
      </p>
      <div
        ref={scrollRef}
        className="mt-4 text-sm font-semibold text-gray-300 flex space-x-8 overflow-hidden whitespace-nowrap"
        style={{ width: "100%" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <span key={index} className="px-4">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Home;
