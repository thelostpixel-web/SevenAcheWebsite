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
import { GoArrowUpRight } from "react-icons/go";


// Add a default export combining all components
export default function MainPage() {
    return (
        <>
            <div className="land-wrap about-wrap">
                <div className="about-left">
                <span>
                    <img src="landing/logo.png" alt="7ACHE" />
                </span>
                <span>
                    <Link href="/work" className="no-underline flex land-t">
                        Work ↗
                    </Link>
                    <Link href="/contact" className="no-underline flex land-t">
                        Contact ↗
                    </Link>

                        <a className="land-t" style={{ textDecoration: 'none', color: 'black' } }>About</a>
                </span>
                </div>
                <a className="about-right">
                    creative based in Brighton, UK. working as a freelance graphic designer. with experience within ui design, typography, publication design, branding and art direction.
                </a>
            </div>
        </>
    );
}

// Keep named exports as well