"use client";
import React from "react";
import { FaSpotify, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSoundcloud } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { SpinningText } from "@/components/ui/spinning-text";
import { ImSoundcloud2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { Navbar } from "@/components/main/navbar";

// Add a default export combining all components
export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="c-wrap">
        <section className="p-title">
          <h1>Studio Fox</h1>
          <span className="t-line"></span>
        </section>

        <section className="p-desc">
          <h2>Outside of the box</h2>
          <a>
            A bold, contemporary rebrand for an interior design studio ready to
            step into a more modern, confident space.
            <br />
            <br />
            The project replaced an outdated identity with a brand new system
            that finally reflects their energy and ambition. The new brand
            introduces a confident logo mark, flexible typographic rules, and a
            vibrant colour world, all designed to connect with a younger,
            corporate-leaning audience.
            <br />
            <br />
            From full guidelines to a redesigned website, pitch materials, and
            social templates, the identity gives Studio Fox the clarity and
            personality their work has always deserved. I recommend checking out
            their website for a deeper dive into the brand.
          </a>
        </section>
        <section className="p-images">
          <img src="fox/sf.png" falt="Studio Fox" />
          <video autoPlay loop muted playsInline className="w-full">
            <source src="fox/CWFP_animation_loop.mp4" type="video/mp4" />
          </video>
          <div className="img-dbl fox-dbl b-s">
            <video autoPlay loop muted playsInline className="sf-believe" >
              <source src="fox/SFIG.mp4" type="video/mp4" />
            </video>
            <img src="fox/believe.png" alt="Studio Fox" />
          </div>
          <video autoPlay loop muted playsInline className="w-full">
            <source src="fox/sf_site_withbar.mp4" type="video/mp4" />
          </video>



          <video autoPlay loop muted playsInline className="w-full">
            <source src="fox/guidelines.mp4" type="video/mp4" />
          </video>
          <video autoPlay loop muted playsInline className="w-full">
            <source src="fox/colours.mp4" type="video/mp4" />
          </video>
          <div className="img-dbl-d">
            <img src="fox/tshirt.jpg" alt="Studio Fox" />
            <img src="fox/sticker.png" alt="Studio Fox" />
          </div>
          <div className="img-dbl fox-dbl">
            <img src="fox/fs.png" alt="Studio Fox" />
            <video autoPlay loop muted playsInline className="w-full">
            <source src="fox/typography.mp4" type="video/mp4" />
          </video>
          </div>
        </section>
        <div className="foot-nav">
          <a>Next Project</a>
          <a>tc sound</a>
          <a></a>
          <Link href="/tcsound" className="no-underline flex">
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}

// Keep named exports as well
