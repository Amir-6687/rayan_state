"use client";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";

export default function AboutSection3() {
  const heroRef = useRef(null);
  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-8 px-4 bg-[#09090b]" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative" style={{ minHeight: "800px" }}>
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-red-500 animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-gray-400"
              >
                WHO WE ARE
              </TimelineContent>
            </div>
            <div
              className="flex gap-12 sm:gap-8 lg:gap-16"
              style={{ gap: "2rem" }}
            >
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 flex items-center justify-center cursor-pointer"
              >
                <PiFacebookLogoThin size={28} className="text-gray-300" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 flex items-center justify-center cursor-pointer"
              >
                <PiInstagramLogoThin size={28} className="text-gray-300" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.linkedin.com/naymur-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 flex items-center justify-center cursor-pointer"
              >
                <PiLinkedinLogoThin size={28} className="text-gray-300" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.youtube.com/naymurweb"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 flex items-center justify-center cursor-pointer"
              >
                <PiYoutubeLogoThin size={28} className="text-gray-300" />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
            style={{ height: "700px", marginTop: "-100px" }}
          >
            <svg
              className="w-full"
              width={"100%"}
              height={"700px"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop"
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold" style={{ color: "#ff3b30" }}>
                  16+
                </span>
                <span className="text-gray-400" style={{ marginLeft: "8px" }}>
                  years of experience
                </span>
                <span className="text-gray-600" style={{ marginLeft: "8px" }}>
                  |
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span
                  className="font-bold"
                  style={{ color: "#ff3b30", marginLeft: "8px" }}
                >
                  2000+
                </span>
                <span className="text-gray-400" style={{ marginLeft: "8px" }}>
                  properties
                </span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex flex-col lg:gap-0 gap-4 w-80">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2"
                style={{ fontSize: "2.7rem", lineHeight: 1.1 }}
              >
                <span className="font-semibold" style={{ color: "#ff3b30" }}>
                  200+
                </span>
                <span
                  className="uppercase"
                  style={{ color: "#9ca3af", marginLeft: "8px" }}
                >
                  awards
                </span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2"
                style={{ fontSize: "1.2rem", lineHeight: 1.25 }}
              >
                <span className="font-bold" style={{ color: "#ff3b30" }}>
                  30%
                </span>
                <span style={{ color: "#9ca3af", marginLeft: "8px" }}>
                  higher satisfaction
                </span>
              </TimelineContent>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1
              className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-white mb-8"
              style={{ fontSize: "clamp(2.75rem, 6vw, 3rem)" }}
            >
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 3,
                }}
              >
                Crafting Dreams Into Reality.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-gray-400"
            >
              <div className="flex gap-2" style={{ marginTop: "40px" }}>
                <TimelineContent
                  as="div"
                  animationNum={10}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-base text-xs"
                >
                  <p
                    className="leading-relaxed text-justify"
                    style={{
                      width: "45%",
                      lineHeight: "1.8",
                      marginRight: "40px",
                    }}
                  >
                    Our journey began as a passionate real estate team and
                    evolved into a comprehensive property solutions company. We
                    specialize in transforming dreams into reality that helps
                    families and investors grow.
                  </p>
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={11}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-base text-xs"
                >
                  <p
                    className="leading-relaxed text-justify"
                    style={{
                      width: "80%",
                      lineHeight: "1.8",
                      marginLeft: "-400px",
                    }}
                  >
                    Every property has a story, and we specialize in telling
                    yours with clarity and impact. By blending expertise with
                    innovation, we provide solutions that resonate with our
                    clients.
                  </p>
                </TimelineContent>
              </div>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-2xl font-bold mb-2"
                style={{ color: "#ff3b30" }}
              >
                RYANSTATE
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs mb-8"
                style={{
                  color: "#9ca3af",
                  fontWeight: "300",
                  marginTop: "15px",
                }}
              >
                Real Estate | Property Solutions
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
                style={{ marginTop: "35px" }}
              >
                <p className="text-white font-medium mb-4">
                  Ready to transform your property dreams into reality?
                </p>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex w-fit ml-auto gap-2 transition-all duration-300 ease-in-out cursor-pointer font-semibold"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#ef4444",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.3)",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#dc2626";
                  e.target.style.boxShadow =
                    "0 20px 25px -5px rgba(239, 68, 68, 0.4)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ef4444";
                  e.target.style.boxShadow =
                    "0 10px 15px -3px rgba(239, 68, 68, 0.3)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                LET'S COLLABORATE <ArrowRight className="" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
