
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { Check, Mail, Zap, Shield, Bell, X, Slack } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [slackHandle, setSlackHandle] = useState('');
  const [slotsProgress, setSlotsProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar to 70% over 2 seconds
    const timer = setTimeout(() => {
      setSlotsProgress(70);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Simulate form submission
    toast.success('🎉 You\'re on the list! Check your email for next steps.');
    setEmail('');
    setSlackHandle('');
  };

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .duration-2000 {
            transition-duration: 2000ms;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            The AI agent that makes you drop Gmail.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Human-in-the-loop AI Agent that filters spam, labels what matters, pings you on Slack, and even clicks 'Unsubscribe' for you. ✉️
          </p>
          <Button 
            onClick={scrollToSignup}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            Reserve my spot ⚡
          </Button>
        </div>
      </section>

      {/* Urgency Block */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">100 beta slots—first come, first served</h2>
            <div className="mb-4">
              <div className="bg-slate-700 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-2000 ease-out rounded-full"
                  style={{ width: `${slotsProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-slate-400 mt-2">{slotsProgress} of 100 slots filled</p>
            </div>
            <p className="text-slate-300">⏰ Limited beta access to ensure quality and comply with Google's security requirements</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How it works (the magic ✨)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 mb-6 border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-3">1. Connect Gmail safely</h3>
                <p className="text-slate-300">OAuth with restricted scopes—we only see what we need to help you</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 mb-6 border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-3">2. The AI agent sorts everything</h3>
                <p className="text-slate-300">Smart labels: Read Now / Read Later / Archive / Invoices / Marketing / Newsletters</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-2xl p-8 mb-6 border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <Bell className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                <h3 className="text-xl font-semibold mb-3">3. Get pinged on Slack</h3>
                <p className="text-slate-300">Urgent stuff like 2FA codes reach you instantly where you actually work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Superpowers included 💌
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Auto-unsubscribe on request",
              "Spam obliteration (better than Gmail's)",
              "'Teach me' feedback loop—agent learns your prefs",
              "Slack/Discord/Teams integration",
              "Invoice & receipt auto-filing",
              "Newsletter digest mode"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Founders-club pricing</h2>
            <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              $40 <span className="text-lg text-slate-400">one-time</span>
            </div>
            <p className="text-lg text-slate-300 mb-6">For beta access + lifetime updates</p>
            <p className="text-sm text-slate-400">
              Price gets you lifetime beta + first-year of v1. Cancel anytime. 
              <br />Normal price will be $15/month after launch.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What beta testers will say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
              <p className="text-lg mb-4">"Finally, an inbox that doesn't make me want to throw my laptop out the window. This AI actually gets it."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">FH</span>
                </div>
                <div>
                  <p className="font-semibold">Future Happy Beta Tester</p>
                  <p className="text-sm text-slate-400">@startup_founder</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
              <p className="text-lg mb-4">"I went from 10,000 unread emails to inbox zero in a week. The AI even found important emails I'd missed for months."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">AB</span>
                </div>
                <div>
                  <p className="font-semibold">Another Beta Tester</p>
                  <p className="text-sm text-slate-400">@productivity_guru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ (the important stuff)</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                Why only 100 users?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                Google's restricted scopes require a closed beta + security review. We need to prove the system works perfectly before opening to everyone. Quality {'>'}quantity.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                Is my data safe?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                Yes. All data stored encrypted, human reviewers sign NDAs, and we only access emails with explicit consent. We're SOC 2 compliant and use the same security standards as major email providers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                What happens to my Gmail account?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                Nothing changes! We just add labels and organize. You keep using Gmail normally, but now it's actually organized. Disconnect anytime and everything stays as-is.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                How long is the beta?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                3-6 months. Beta users get lifetime access to all features and help shape the final product. Your feedback directly influences what we build.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                Can I get a refund?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                100% money-back guarantee within 30 days, no questions asked. We're confident you'll love it, but if not, full refund.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-slate-800/30 rounded-xl border border-slate-600/30">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                What about other email providers?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-300">
                Starting with Gmail (80% of our target users). Outlook and Apple Mail support coming in v2 based on beta feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-md mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join the waitlist
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Slack className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">Slack handle (optional)</span>
                </div>
                <Input
                  type="text"
                  placeholder="@yourhandle"
                  value={slackHandle}
                  onChange={(e) => setSlackHandle(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Reserve my spot ⚡
              </Button>
              <p className="text-xs text-slate-400 text-center">
                We'll email next steps—watch for an OAuth link from us.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-2xl">This is fine ☕🔥</span>
            <p className="text-sm text-slate-400 mt-2">Your inbox doesn't have to be</p>
          </div>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <X className="w-4 h-4 inline" /> @inboxbreakup
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            © 2024 Inbox Breakup. Making email suck less, one inbox at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
