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
          <h1>Parade Tattoo Parlour</h1>
          <span className="t-line"></span>
        </section>

        <section className="p-desc">
          <h2>Bringing some buzz</h2>
          <a>
            A raw, handcrafted identity refresh for one of Brighton’s most
            energetic tattoo studios.
            <br></br>
            <br></br>
            Commissioned by Joe, Parade’s owner, the project focused on a new
            typographic direction and a bespoke site built to replace their
            rigid Squarespace setup. The previous in-house design lacked the
            craft and character that defines the shop, which is a space buzzing
            with personality and profession.
            <br></br>
            <br></br>
            The updated identity embraces a strict red–blue palette,
            sign-painting influences, and a blend of thin serif typography with
            textured, calligraphic details, paying homage to American paint
            shops, and keeping the hardcore and punk spirit of the shop alive.
          </a>
        </section>
        <section className="p-images">
          <video autoPlay loop muted playsInline className="w-full">
            <source src="parade/paradenoise18mar.mp4" type="video/mp4" />
          </video>
          <div className="img-dbl">
            <img src="parade/photo1.png" alt="Parade Tattoo Parlour" />
            <img src="parade/photo2.png" alt="Parade Tattoo Parlour" />
          </div>
          <div className="img-bg-b">
            <img src="parade/site.png" alt="Parade Tattoo Parlour" />
          </div>
          <video autoPlay loop muted playsInline className="w-full">
            <source src="parade/PARADE_INTRO.mp4" type="video/mp4" />
          </video>

          <div className="img-dbl">
            <video autoPlay loop muted playsInline>
              <source src="parade/parade_scroll.mp4" type="video/mp4" />
            </video>
            <img
              src="parade/photo3.png"
              alt="Parade Tattoo Parlour"
              style={{ height: "unset" }}
            />
          </div>
          <div className="img-dbl">
            <img src="parade/tee.png" alt="Parade Tattoo Parlour" />
            <img src="parade/hat.png" alt="Parade Tattoo Parlour" />
          </div>
        </section>
        <div className="foot-nav">
          <a>Next Project</a>
          <a>Southwark Supertram</a>
          <a></a>
          <Link href="/southwark" className="no-underline flex">
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}

// Keep named exports as well
