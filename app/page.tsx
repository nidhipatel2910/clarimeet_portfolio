'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card m-4" style={{ maxWidth: 'calc(100% - 2rem)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">ClariMeet</div>
          <div className="hidden md:flex gap-6">
            <a href="#problem" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Problem</a>
            <a href="#features" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#workflow" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
            <a href="#tech" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Tech Stack</a>
            <a href="#team" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#contact" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            <a href="#problem" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Problem</a>
            <a href="#features" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#workflow" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
            <a href="#tech" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Tech Stack</a>
            <a href="#team" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#contact" className="text-white hover:text-purple-200 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              ClariMeet
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI-Powered Meeting Summarizer
            </p>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Transform lengthy conversations into clear, concise summaries and actionable insights
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              The Problem
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">😓</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Time-Consuming Meetings</h3>
                    <p className="text-white/80">
                      Long meetings consume valuable time, making it difficult to extract key information quickly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📝</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Manual Note-Taking</h3>
                    <p className="text-white/80">
                      Traditional note-taking is error-prone and often misses critical action items and decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Information Overload</h3>
                    <p className="text-white/80">
                      Important details get lost in lengthy transcripts, making it hard to find what matters most.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lack of Action Items</h3>
                    <p className="text-white/80">
                      Without clear action points, team members struggle to follow up on commitments and decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Summarization',
                desc: 'Advanced AI algorithms analyze conversations and extract key points automatically.'
              },
              {
                icon: '✨',
                title: 'Smart Action Items',
                desc: 'Automatically identifies and organizes action items with assignees and deadlines.'
              },
              {
                icon: '📊',
                title: 'Interactive Dashboard',
                desc: 'Beautiful, intuitive interface to view summaries, search history, and manage meetings.'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                desc: 'Enterprise-grade security ensures your conversations remain confidential.'
              },
              {
                icon: '⚡',
                title: 'Real-Time Processing',
                desc: 'Get instant summaries as meetings conclude, no waiting required.'
              },
              {
                icon: '📱',
                title: 'Multi-Platform Support',
                desc: 'Works seamlessly across web, mobile, and desktop platforms.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-6" style={{ position: 'relative' }}>
              {[
                { step: '1', title: 'Record Meeting', desc: 'Connect your meeting platform or upload audio/video files' },
                { step: '2', title: 'AI Processing', desc: 'Our AI analyzes the conversation in real-time' },
                { step: '3', title: 'Generate Summary', desc: 'Get a concise summary with key points and insights' },
                { step: '4', title: 'Action Items', desc: 'Review and share action items with your team' }
              ].map((item, idx) => (
                <div key={idx} className="text-center" style={{ position: 'relative' }}>
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', category: 'Frontend' },
              { name: 'Pinecone', category: 'Vector Search (Embeddings)' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'OpenAI API', category: 'AI/ML' },
              { name: 'Next.js API Routes', category: 'Backend' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'Azure', category: 'Deployment' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center hover:scale-110 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-white/60 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Mockups */}
      <section id="screenshots" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            User Interface
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Dashboard View', desc: 'Clean and intuitive dashboard for managing all your meetings', image: '/ui/dashboard.jpg' },
              { title: 'Summary Preview', desc: 'Beautifully formatted summaries with highlighted key points', image: '/ui/summary.jpg' },
              { title: 'Action Items Panel', desc: 'Organized action items with status tracking and assignments', image: '/ui/action-items.jpg' },
              { title: 'Meeting History', desc: 'Search and filter through all your past meeting summaries', image: '/ui/history.jpg' }
            ].map((mockup, idx) => (
              <div key={idx} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div 
                  className="rounded-lg mb-4 flex items-center justify-center overflow-hidden glass-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    maxHeight: '300px',
                    aspectRatio: '16/9'
                  }}
                >
                  {mockup.image ? (
                    <Image
                      src={mockup.image}
                      alt={mockup.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-4">🖼️</div>
                      <p className="text-white/60">Screenshot Placeholder</p>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{mockup.title}</h3>
                <p className="text-white/80 text-sm">{mockup.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Team
          </h2>
          <div className="team-grid">
            {[
             { name: 'Siddhi Patel', role: 'Project Manager', bio: 'Leads project planning, execution, and cross-team coordination to ensure timely delivery.', image: '/team/team1.jpg' },

             { name: 'Nidhi Patel', role: 'Technical Lead', bio: 'Oversees technical direction and architecture while guiding developers toward scalable solutions.', image: '/team/team2.jpg' },
             
             { name: 'Sachin Tiwari', role: 'Backend Developer', bio: 'Builds robust server-side systems and optimized APIs for secure and high-performance applications.', image: '/team/team3.jpg' },
             
             { name: 'Utsav Khamar', role: 'AI/ML Engineer', bio: 'Designs and deploys machine learning models with a focus on NLP and intelligent automation.', image: '/team/team4.jpg' },
             
             { name: 'Advait Pandit', role: 'Computer Vision Engineer', bio: 'Develops computer vision pipelines and image-processing systems for real-world applications.', image: '/team/team5.jpg' },
             
             { name: 'Mansi Sutreja', role: 'MPL Engineer', bio: 'Works on model performance, optimization, and production-ready ML pipelines.', image: '/team/team6.jpg' },
             
             { name: 'Jatin Sachdeva', role: 'UI-UX Developer', bio: 'Crafts intuitive user experiences with modern, responsive interface designs.', image: '/team/team7.jpg' }
             
            ].map((member, idx) => (
              <div
                key={idx}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">👤</span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-200 mb-4">{member.role}</p>
                <p className="text-white/80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 pb-32">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h2>
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input-field"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input-field"
                  placeholder="Tell us more..."
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center text-white/60">
          <p>&copy; 2024 ClariMeet. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
