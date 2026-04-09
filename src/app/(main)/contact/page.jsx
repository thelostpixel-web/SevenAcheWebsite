"use client";
import React, { useState } from "react";
import { FaSpotify, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSoundcloud } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { SpinningText } from "@/components/ui/spinning-text";
import { ImSoundcloud2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { toast, Toaster } from "sonner";


// Add a default export combining all components
export default function MainPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                toast.success("Message sent!");
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send. Please try again.");
            }
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    }

    return (
        <>
            <Toaster />
            <div className="land-wrap about-wrap">
                <div className="about-left">
                <span>
                    <img src="landing/logo.png" alt="7ACHE" />
                </span>
                <span>
                    <Link href="/work" className="no-underline flex land-t">
                        Work ↗
                    </Link>
                        <a className="land-t" style={{ textDecoration: 'none', color: 'black' } }>Contact</a>

                    <Link href="/about" className="no-underline flex land-t">
                        About ↗
                    </Link>
                </span>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit} style={{ display: "contents" }}>
                        <span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </span>
                        <input
                            type="text"
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="message-input"
                        />
                        <button type="submit" disabled={sending}>
                            {sending ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

// Keep named exports as well