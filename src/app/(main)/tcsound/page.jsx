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
                    <h1>tc sound</h1>
                    <span className="t-line"></span>
                </section>

                <section className="p-desc">
                    <h2>
                        Cutting through the noise
                    </h2>
                    <a>
                        TCS yearned for a visual identity built around the physical expression of sound.
                        <br></br>
                        <br></br>
                        The brand explores how abstract form can capture impact, movement, and restraint. Sharp edges and compressed shapes combine to create a mark that feels like a single, controlled bang. This was inspired from foley design, where artists use every object around them to create the perfect pop.
                        <br></br>
                        <br></br>
                        Designed to function entirely in black and white, the identity relies on contrast and silhouette to do the work. This ensured the mark remains bold, flexible, and legible in any context or colour application.
                        <br></br>
                        <br></br>
                        The result is a stripped-back system that cuts through excess, allowing form and intention to speak clearly, without noise.
                    </a>
                </section>
                <section className="p-images">
                    <video autoPlay loop muted playsInline><source src="tc/TCS_intro_BLACK.mp4" type="video/mp4" /></video>
                    <div className="img-dbl-tc">
                        <div>
                            <video autoPlay loop muted playsInline><source src="tc/TCS_site_mobile.mp4" type="video/mp4" /></video>
                        </div>
                        <video autoPlay loop muted playsInline><source src="tc/every_X.mp4" type="video/mp4" /></video>
                    </div>
                    <video autoPlay loop muted playsInline><source src="tc/TCS_STRAP_animation_S_1.mp4" type="video/mp4" /></video>
                    <div className="img-bg-r">
                        <img src="tc/s.png" alt="TC Sound" />
                    </div>
                    <video autoPlay loop muted playsInline><source src="tc/cutting.mp4" type="video/mp4" /></video>
                    <div className="img-dbl">
                        <video autoPlay loop muted playsInline><source src="tc/tcs_colours.mp4" type="video/mp4" /></video>
                        <video autoPlay loop muted playsInline><source src="tc/stack_animation.mp4" type="video/mp4" /></video>
                    </div>
                    <div className="img-dbl tc-ig-dbl">
                        <div className="tcs-ig">
                            <img className=" tc-ig-img" src="tc/i.png" alt="TC Sound"/>
                        </div>
                        <video style={{ width: "100% !important" }} className="tc-stretch" autoPlay loop muted playsInline><source src="tc/dmsans_animation.mp4" type="video/mp4"/></video>
                    </div>
                </section>
                <div className="foot-nav">
                    <a>Next Project</a>
                    <a>Parade Tattoo Parlour</a>
                    <a></a>
                    <Link href="/parade" className="no-underline flex">
                        <GoArrowRight />
                    </Link>

                </div>
            </div>
        </>
    );
}

// Keep named exports as well