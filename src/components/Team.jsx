import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ShieldCheck, Cpu, Code, Globe } from 'lucide-react';

const TeamPage = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: "Jiya Chugh",
      role: "President",
      bio: "Leading Startup Sphere with vision and innovation, bridging the gap between student potential and market reality.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHpQG9NxWBCWA/profile-displayphoto-shrink_800_800/B56ZPuknIoGsAg-/0/1734874395982?e=1771459200&v=beta&t=3NjZzYbAImtgxg2lJ0AkpBOHztD5w1Ew6_oyDkOIsGg",
      linkedin: "https://www.linkedin.com/in/jiyachugh/",
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  const facultyTeam = [
    {
      id: 1,
      name: "Dr. Bhoomi Gupta",
      role: "HOD, ITE",
      bio: "Department Head of Information Technology Engineering with a focus on academic excellence.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHCVfTXnJzUmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1643182954113?e=1771459200&v=beta&t=FJrmAIHgMVFxUUsRnHK-xfBABnYLkYSqBWh5gNHGHGg",
      linkedin: "https://www.linkedin.com/in/dr-bhoomi-gupta-3278a734/",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Ms. Sapna Gupta",
      role: "Faculty Coordinator",
      bio: "Driving the administrative and mentorship bridge for Startup Sphere initiatives.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE49jaTKP6N7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695826184887?e=1771459200&v=beta&t=Sp7cp4Ii7dyYf2szTBwPgeNwgYFrsrS09-73kHvsYqE",
      linkedin: "https://www.linkedin.com/in/sapna-gupta-7ba94a219/",
      accent: "from-cyan-500 to-teal-500"
    }
  ];

  const coreTeam = [
    {
      id: 1,
      name: "Shubham Raj",
      role: "Founder",
      bio: "Driving innovation and entrepreneurship. Building the foundation of the startup ecosystem.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGMM-OnvswwDA/profile-displayphoto-crop_800_800/B56ZpSntCWI4AI-/0/1762322731998?e=1771459200&v=beta&t=o69Tanm_c6KpLH2bestXd9Q29kFoD-ad1De48JI39oA",
      linkedin: "https://www.linkedin.com/in/shubham-raj-62755628b/",
      accent: "from-violet-600 to-purple-600"
    },
    {
      id: 2,
      name: "Kartik",
      role: "Head, Venture Lab",
      bio: "Entrepreneur and mentor guiding student startups from ideation to prototype.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHPvF9dTmUZfA/profile-displayphoto-crop_800_800/B56ZhBV8dSHUAI-/0/1753442929996?e=1771459200&v=beta&t=_fmoM7VeZUe32NXFkjvXOCwE1qhLexWseFUIPwyo7hI",
      linkedin: "https://www.linkedin.com/in/kartik-singh19/",
      accent: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Shubham Solanki",
      role: "Co-Head, Venture Lab",
      bio: "Judge and mentor for various competitions, specializing in business model validation.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGG51UkVP8aew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732520079133?e=1771459200&v=beta&t=a8n5UUpFJ1P-MaMLM3KK_io3mQMdI3irXpEygNPHq10",
      linkedin: "https://www.linkedin.com/in/shubham-solanki-902331321/",
      accent: "from-emerald-500 to-teal-500"
    },
  ];

  const teamGroups = [
    { title: "Leadership", members: leadershipTeam, icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Faculty Mentors", members: facultyTeam, icon: <Cpu className="w-6 h-6" /> },
    { title: "The Core", members: coreTeam, icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-24 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 italic leading-[1.1]"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 whitespace-nowrap">ARCHITECTS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide px-4"
          >
            A collective of visionaries, mentors, and builders driving the startup culture at Startup Sphere.
          </motion.p>
        </div>

        {/* Team Sections */}
        <div className="space-y-32">
          {teamGroups.map((group, gIdx) => (
            <section key={gIdx} className="relative">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  {group.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase italic">{group.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {group.members.map((member, mIdx) => (
                  <TeamCard key={member.id} member={member} index={mIdx} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

const TeamCard = ({ member, index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleToggle}
      className="group relative cursor-pointer outline-none"
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border transition-all duration-500 
        ${isActive ? 'border-white/40 shadow-[0_0_50px_rgba(168,85,247,0.2)]' : 'border-white/10 bg-[#0a0a0a]'}`}>
        
        {/* Profile Image */}
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-700 
            ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-80'}`}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-br ${member.accent} 
          ${isActive ? 'opacity-20' : 'opacity-0'}`} />

        {/* Text Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20">
          <div className="space-y-1">
            <h3 className={`text-2xl font-bold tracking-tight leading-none transition-all
              ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white'}`}>
              {member.name}
            </h3>
            <p className="text-purple-400 text-xs font-black uppercase tracking-widest py-1">
              {member.role}
            </p>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pt-4 overflow-hidden"
              >
                <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
                  {member.bio}
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white hover:text-black transition-all active:scale-95"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Corner Icon */}
        <div className={`absolute top-5 right-5 transition-all duration-500 
          ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
           <ExternalLink className="w-5 h-5 text-white/70" />
        </div>
      </div>

      {/* Glow Effect Background */}
      <div className={`absolute -inset-px rounded-[2.5rem] bg-gradient-to-br ${member.accent} blur-xl transition-opacity duration-500 -z-10
        ${isActive ? 'opacity-15' : 'opacity-0'}`} />
    </motion.div>
  );
};

export default TeamPage;