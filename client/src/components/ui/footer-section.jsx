"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

const footerLinks = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16"
      style={{ paddingTop: "60px", paddingBottom: "80px" }}
    >
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div
        className="w-full"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          marginLeft: "30%",
          marginRight: "30%",
        }}
      >
        <AnimatedContainer
          className="space-y-4"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginRight: "50px",
            transform: "translateX(70px)",
          }}
        >
          <FrameIcon
            className="size-8"
            style={{ transform: "translateX(150px)" }}
          />
          <p
            className="text-muted-foreground mt-8 text-sm md:mt-0"
            style={{
              fontSize: "10px",
              whiteSpace: "nowrap",
              textAlign: "right !important",
              textAlign: "right",
              transform: "translateX(150px)",
            }}
          >
            © {new Date().getFullYear()} EstateApp. All rights reserved.
          </p>
        </AnimatedContainer>

        <div
          className="mt-10 xl:mt-0"
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            gap: "120px",
            marginLeft: "300px",
          }}
        >
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div
                className="mb-10 md:mb-0"
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h3
                  className="text-xs"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    textAlign: "left !important",
                    textAlign: "left",
                    marginLeft: "10px",
                  }}
                >
                  {section.label}
                </h3>
                <ul
                  className="text-muted-foreground mt-4"
                  style={{
                    fontSize: "10px",
                    fontWeight: "300",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    marginTop: "20px",
                    marginLeft: "25px",
                  }}
                >
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                        style={{
                          fontSize: "10px",
                          fontWeight: "300",
                          gap: "8px",
                        }}
                      >
                        {link.icon && (
                          <link.icon
                            className="me-1 size-4"
                            style={{ width: "12px", height: "12px" }}
                          />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
