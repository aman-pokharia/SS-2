import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  LightBulbIcon, 
  CubeTransparentIcon, 
  BuildingOffice2Icon, 
  MapPinIcon, 
  CalendarIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const offerings = [
    {
      title: "Mentorship Programs",
      desc: "Connect with experienced entrepreneurs, industry experts, and successful founders who provide guidance and insights to help you navigate your startup journey.",
      icon: <SparklesIcon className="w-5 h-5" />
    },
    {
      title: "Networking Opportunities",
      desc: "Build valuable connections with fellow entrepreneurs, investors, and industry professionals through our events and community activities.",
      icon: <CheckCircleIcon className="w-5 h-5" />
    },
    {
      title: "Skill Development Workshops",
      desc: "Participate in hands-on workshops covering design, marketing, business strategy, and technical skills that are essential for startup success.",
      icon: <AcademicCapIcon className="w-5 h-5" />
    },
    {
      title: "Pitching Competitions",
      desc: "Showcase your ideas and receive valuable feedback from judges and mentors at our flagship events like Fish Tank.",
      icon: <RocketLaunchIcon className="w-5 h-5" />
    },
    {
      title: "Resources & Support",
      desc: "Access to tools, templates, and resources that help you build and grow your startup, along with ongoing support from our community.",
      icon: <CubeTransparentIcon className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-24">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <p className="text-[13px] font-medium tracking-wider text-purple-200 uppercase">
              Department of ITE · MAIT
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-400 to-cyan-400">Startup Sphere</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation of entrepreneurs through innovation, mentorship, and a thriving campus ecosystem.
          </p>
        </motion.section>

        {/* Welcome Block */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-10 rounded-full bg-linear-to-b from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <h2 className="text-3xl font-bold tracking-tight uppercase italic">Welcome to the Sphere</h2>
          </div>
          <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:border-purple-500/20">
            <div className="space-y-6 max-w-4xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Welcome to the Startup Sphere Society at ITE MAIT College – your gateway to entrepreneurial success! Join our vibrant community where we nurture, empower, and accelerate startups, providing invaluable resources, mentorship, and networking opportunities.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                From ideation to execution, we're here to fuel your journey and transform ideas into thriving businesses. Let's innovate, collaborate, and shape the future together!
              </p>
            </div>
            {/* Decorative Icon */}
            <div className="absolute bottom-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <RocketLaunchIcon className="w-32 h-32" />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="group rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 flex flex-col gap-6 hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <LightBulbIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              To create a thriving ecosystem that supports student entrepreneurs at every stage of their journey, from initial ideation to successful business launch. We empower students with the knowledge and networks needed to turn innovation into reality.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 flex flex-col gap-6 hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <CubeTransparentIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              To be the leading student entrepreneurship society that produces successful startups and innovative leaders. We envision a future where every student with a great idea has the support and resources to bring it to life.
            </p>
          </motion.div>
        </motion.section>

        {/* Offerings Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <h2 className="text-3xl font-bold tracking-tight uppercase italic">What We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ title, desc, icon }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 flex flex-col gap-4 hover:border-purple-500/40 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {desc}
                </p>
                {/* Subtle corner highlight */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-4 h-4 border-t border-r border-purple-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Department Info */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <h2 className="text-3xl font-bold tracking-tight uppercase italic">Department Intelligence</h2>
          </div>
          <div className="rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 md:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  <BuildingOffice2Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-1">Department</p>
                  <p className="text-xl text-gray-200 font-bold">Information Technology Engineering (ITE)</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                  <AcademicCapIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-1">College</p>
                  <p className="text-xl text-gray-200 font-bold">Maharaja Agrasen Institute of Technology</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl text-gray-200 font-bold">New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-1">Founded</p>
                  <p className="text-xl text-gray-200 font-bold tracking-tight">ESTD. 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Tagline */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <div className="inline-block py-3 px-8 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm group">
            <p className="text-sm font-bold tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors uppercase">
              #StartupMAIT &nbsp;•&nbsp; #InnovationHub &nbsp;•&nbsp; #Entrepreneurship
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}