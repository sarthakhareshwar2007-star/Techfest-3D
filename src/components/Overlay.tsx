import { Scroll } from '@react-three/drei';
import React from 'react';

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={`w-screen h-screen flex flex-col justify-center px-6 md:px-20 pointer-events-none ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-black/40 border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl pointer-events-auto hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function Overlay() {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>
      {/* Page 1: Hero */}
      <Section className="items-center text-center">
        <h1 className="text-6xl md:text-9xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-lg">
          TECHFEST
        </h1>
        <p className="text-xl md:text-3xl font-light text-white tracking-widest uppercase">
          The Future is Here
        </p>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-sm text-cyan-400 uppercase tracking-[0.3em] mb-2 animate-pulse">
            Scroll to explore
          </p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </Section>

      {/* Page 2: About */}
      <Section className="items-start">
        <GlassCard className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Techfest
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            Asia's largest science and technology festival. Techfest brings together the most brilliant minds, visionary innovators, and tech enthusiasts from across the globe to celebrate the spirit of innovation.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8 text-center">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-3xl font-bold text-cyan-400">175K+</h3>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Footfall</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-fuchsia-400/50 transition-colors">
              <h3 className="text-3xl font-bold text-fuchsia-400">250+</h3>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Universities</p>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* Page 3: Competitions */}
      <Section className="items-end text-right">
        <GlassCard className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            Competitions
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
            Challenge yourself in world-class events. Compete for an incredible prize pool of <span className="text-white font-bold">INR 50 Lakhs+</span> and global recognition.
          </p>
          <ul className="text-gray-400 space-y-3 font-mono text-sm md:text-base">
            <li><span className="text-cyan-400">★</span> Robowars & Autonomous Robotics</li>
            <li><span className="text-cyan-400">★</span> Aeromodelling & Drone Racing</li>
            <li><span className="text-cyan-400">★</span> Cozmo Clench & Meshmerize</li>
            <li><span className="text-cyan-400">★</span> International Coding Challenge</li>
          </ul>
        </GlassCard>
      </Section>

      {/* Page 4: Hackathons & Web3 (NEW) */}
      <Section className="items-start">
        <GlassCard className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fuchsia-400">
            Hackathons & Web3
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
            Join the intense 48-hour coding sprint. Build decentralized applications, solve real-world problems with Generative AI, and pitch your startup ideas to top venture capitalists.
          </p>
          <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 p-4 rounded-lg mt-6">
            <p className="text-fuchsia-300 font-mono text-sm text-center">
              &gt; OVER 500+ TEAMS COMPETING GLOBALLY
            </p>
          </div>
        </GlassCard>
      </Section>

      {/* Page 5: Workshops */}
      <Section className="items-end text-right">
        <GlassCard className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Workshops
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
            Get hands-on experience with cutting-edge technologies. Learn directly from industry experts and build your foundations for the tech of tomorrow.
          </p>
          <div className="flex flex-wrap justify-end gap-2 text-sm font-mono">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Quantum Computing</span>
            <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30">Generative AI</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">IoT & Robotics</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Ethical Hacking</span>
          </div>
        </GlassCard>
      </Section>

      {/* Page 6: Technoholix & Lectures */}
      <Section className="items-start">
        <GlassCard className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            Technoholix
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light mb-4">
            Where Tech meets Entertainment. Experience mind-bending Laser Shows, EDM nights, drone light shows, and spectacular performances by international artists.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent my-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Keynote Lectures</h3>
          <p className="text-gray-400 font-light text-sm">
            Witness lectures from Nobel Laureates, industry giants, and pioneers who are actively shaping the digital era. Past speakers include APJ Abdul Kalam, Jimmy Wales, and the Dalai Lama.
          </p>
        </GlassCard>
      </Section>

      {/* Page 7: CTA */}
      <Section className="items-center text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-lg">
          BE PART OF THE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">REVOLUTION</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 font-light">
          Secure your passes before they sell out.
        </p>
        <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 text-xl pointer-events-auto shadow-[0_0_30px_rgba(217,70,239,0.5)] uppercase tracking-widest">
          Register Now
        </button>
      </Section>
    </Scroll>
  );
}
