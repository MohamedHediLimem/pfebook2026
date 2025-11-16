import React, { useEffect, useRef, useState } from "react";

export default function About({ img = "/assets/bg.png" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // refs for the new counters
  const statRefs = {
    experience: useRef(null),
    clients: useRef(null),
    projects: useRef(null),
    engineers: useRef(null),
  };

  // target values for the countup
  const targets = {
    experience: 4,
    clients: 15,
    projects: 15,
    engineers: 30,
  };

  /* Reveal on scroll */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Count-up animation */
  useEffect(() => {
    if (!visible) return;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animateTo = (node, endValue, duration = 1300) => {
      if (!node) return;
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = easeOut(t);
        node.textContent = Math.round(endValue * eased);
        if (t < 1) requestAnimationFrame(tick);
        else node.textContent = endValue; // final
      };

      requestAnimationFrame(tick);
    };

    animateTo(statRefs.experience.current, targets.experience, 1200);
    animateTo(statRefs.clients.current, targets.clients, 1300);
    animateTo(statRefs.projects.current, targets.projects, 1300);
    animateTo(statRefs.engineers.current, targets.engineers, 1400);

  }, [visible]);

  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
    >
      {/* Black and White Building Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/src/assets/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Liquid Glass Overlay - Apple Style */}
      

      {/* Subtle gradient orb - very minimal */}
      <div 
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
        }}
      />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10"
      >

        {/* LEFT CONTENT */}
        <div
          className={
            "space-y-6 transition-all duration-700 " +
            (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
          }
        >
          {/* Tag with subtle glass effect */}
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-slate-700"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            ABOUT PURA
          </span>

          <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Pura  
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h3>
          <p 
            className="text-lg text-slate-600 max-w-xl leading-relaxed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
            }}
          >
            Founded in 2021, Pura Solutions merges technology with healthcare to build
            powerful software, AI systems, and smart products. We focus on innovation,
            teamwork, and delivering measurable impact.
          </p>

          {/* STATS - Minimal glass cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">

            <div 
              className="group p-5 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-baseline gap-1">
                <span 
                  ref={statRefs.experience} 
                  className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  0
                </span>
                <span 
                  className="text-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-sm text-slate-600 mt-2 font-medium"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Years of Experience
              </div>
            </div>

            <div 
              className="group p-5 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-baseline gap-1">
                <span 
                  ref={statRefs.clients} 
                  className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  0
                </span>
                <span 
                  className="text-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-sm text-slate-600 mt-2 font-medium"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Satisfied Clients
              </div>
            </div>

            <div 
              className="group p-5 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-baseline gap-1">
                <span 
                  ref={statRefs.projects} 
                  className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  0
                </span>
                <span 
                  className="text-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-sm text-slate-600 mt-2 font-medium"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Successful Projects
              </div>
            </div>

            <div 
              className="group p-5 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-baseline gap-1">
                <span 
                  ref={statRefs.engineers} 
                  className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  0
                </span>
                <span 
                  className="text-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #0b4b69ff 0%, #16438bff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  +
                </span>
              </div>
              <div 
                className="text-sm text-slate-600 mt-2 font-medium"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Trusted Engineers
              </div>
            </div>
          </div>

          {/* Vision / Culture - Minimal glass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div 
              className="p-5 rounded-2xl transition-all duration-300 hover:scale-102"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
              }}
            >
              <h4 
                className="font-semibold text-slate-900 mb-1"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                Vision
              </h4>
              <p 
                className="text-slate-600 text-sm leading-relaxed"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Transform healthcare through seamless, intelligent technology.
              </p>
            </div>

            <div 
              className="p-5 rounded-2xl transition-all duration-300 hover:scale-102"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
              }}
            >
              <h4 
                className="font-semibold text-slate-900 mb-1"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                Culture
              </h4>
              <p 
                className="text-slate-600 text-sm leading-relaxed"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                }}
              >
                Built on teamwork, leadership, growth and responsibility.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE — Clean with subtle effect */}
        <div
          className={
            "flex justify-center md:justify-end transition-all duration-900 delay-100 " +
            (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
          }
        >
          <div className="relative">
            <img
              src={img}
              alt="Pura Solutions logo"
              className="w-full max-w-sm object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(35, 163, 222, 0.15))',
              }}
            />
            {/* Subtle glow behind image */}
            <div 
              className="absolute inset-0 blur-3xl opacity-20 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(35, 163, 222, 0.3) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}