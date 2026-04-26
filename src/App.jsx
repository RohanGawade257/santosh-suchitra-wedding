import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, ChevronDown, ChevronUp, Heart, Flower2, Music, Sparkles, Mail, Users } from 'lucide-react';

// Decorative Elements
const Divider = () => (
  <div className="flex justify-center items-center my-8 opacity-70">
    <div className="h-px w-16 bg-brand-gold-border/50"></div>
    <Flower2 size={16} className="mx-4 text-brand-maroon/60" />
    <div className="h-px w-16 bg-brand-gold-border/50"></div>
  </div>
);

const ToranBorder = () => (
  <div className="w-full h-8 flex justify-around items-start overflow-hidden opacity-80" aria-hidden="true">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="relative w-8 h-8 flex justify-center">
        <div className="w-6 h-8 bg-brand-maroon/90 rounded-b-full"></div>
        <div className="absolute top-0 w-2 h-2 bg-brand-gold rounded-full z-10 translate-y-1"></div>
      </div>
    ))}
  </div>
);

const BottomNav = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'invite', label: 'INVITE', icon: Mail },
    { id: 'rituals', label: 'RITUALS', icon: Flower2 },
    { id: 'venue', label: 'VENUE', icon: MapPin },
    { id: 'family', label: 'FAMILY', icon: Users },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-cream rounded-t-3xl border-t-2 border-brand-saffron shadow-[0_-10px_30px_rgba(143,78,0,0.15)] pb-safe">
      <div className="flex justify-between items-center px-4 py-2">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex flex-col items-center justify-center w-[72px] h-[64px] rounded-2xl transition-all duration-300 ease-out ${isActive
                ? 'bg-gradient-to-br from-brand-saffron to-brand-maroon text-white shadow-[0_4px_12px_rgba(178,43,29,0.3)] -translate-y-2'
                : 'text-brand-muted hover:text-brand-primary bg-transparent'
                }`}
            >
              <Icon size={isActive ? 24 : 22} className={`mb-1 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] font-bold tracking-wide transition-all ${isActive ? 'text-white' : 'font-medium'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Components
const RevealOnScroll = ({ children }) => {
  return (
    <div className="animate-fade-up">
      {children}
    </div>
  );
};

export default function App() {
  const [isFamilyListOpen, setIsFamilyListOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('invite');
  const [pulseVenue, setPulseVenue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-30% 0px -50% 0px' }
    );

    const sections = ['invite', 'rituals', 'venue', 'family'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header and extra spacing
      const y = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);

      if (id === 'venue') {
        // Trigger pulse after scrolling finishes (approx 800ms)
        setTimeout(() => {
          setPulseVenue(true);
          setTimeout(() => setPulseVenue(false), 1500);
        }, 800);
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-text flex justify-center overflow-x-hidden selection:bg-brand-saffron/30">
      <div className="w-full max-w-md bg-brand-cream relative shadow-2xl min-h-screen pb-24 border-x border-brand-gold-border/20">

        {/* Sticky Header/Nav (Optional) */}
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <div className="w-full max-w-md bg-brand-cream/95 backdrop-blur-md py-3 px-6 shadow-sm border-b border-brand-gold-border/30 flex justify-between items-center">
            <span className="font-serif font-bold text-brand-maroon">विवाह सोहळा</span>
            <span className="text-sm font-medium text-brand-primary">संतोष व सुचित्रा</span>
          </div>
        </div>

        {/* Top Decorative Border */}
        <div className="w-full bg-brand-maroon relative">
          <ToranBorder />
        </div>

        <main className="px-6 py-8 space-y-12 pb-32">

          {/* Section: Invite */}
          <div id="invite" className="space-y-12 scroll-mt-24">
            {/* 1. Hero */}
            <RevealOnScroll>
              <section className="text-center space-y-6">
                <div className="space-y-1 text-sm md:text-base font-semibold text-brand-primary">
                  <p>।। श्री गजानन प्रसन्न ।।</p>
                  <p>।। श्री चैतन्य कुलदेवताय प्रसन्न ।। श्री देवी सातेरी भगवती प्रसन्न ।।</p>
                  <p>।। श्री देव मुळपुरुष प्रसन्न || श्री देव रामरटकार प्रसन्न ।।</p>
                </div>

                <div className="py-4">
                  <Sparkles className="inline-block text-brand-gold-border mb-2 animate-pulse-slow" size={24} />
                  <h1 className="text-3xl font-bold text-brand-maroon mb-2">शुभ विवाह</h1>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 py-4">
                  <h2 className="text-4xl font-bold text-brand-text leading-tight">
                    चि. संतोष
                  </h2>
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <div className="w-8 h-px bg-brand-primary"></div>
                    <span className="text-lg">व</span>
                    <div className="w-8 h-px bg-brand-primary"></div>
                  </div>
                  <h2 className="text-4xl font-bold text-brand-text leading-tight">
                    चि. सौ. कां. सुचित्रा
                  </h2>
                </div>

                <p className="text-lg font-medium text-brand-primary mt-6">
                  आपले सहर्ष स्वागत आहे
                </p>
              </section>
            </RevealOnScroll>

            <Divider />

            {/* 2. Couple Introduction */}
            <RevealOnScroll>
              <section className="space-y-6">
                {/* Groom */}
                <div className="glass-card pt-6 px-4 sm:px-6 pb-0 border-t-4 border-t-brand-primary relative overflow-hidden group">
                  <div className="absolute top-2 right-4 p-2 opacity-[0.04] pointer-events-none">
                    <Heart size={100} />
                  </div>
                  <div className="absolute bottom-0 right-4 w-32 h-32 bg-brand-primary/15 blur-3xl rounded-full pointer-events-none"></div>
                  
                  <div className="flex items-end justify-between gap-2 relative z-10">
                    <div className="text-center flex-1 pb-6">
                      <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary font-bold text-sm rounded-full mb-3">
                        वर
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-3 drop-shadow-sm">चि. संतोष</h3>
                      <p className="text-[13px] sm:text-sm leading-relaxed text-brand-muted font-medium">
                        सौ. व श्री. भिवसेन तुकाराम गावडे<br />
                        रा. सरमळे – नांगरतास, शितपवाडी,<br />
                        ता. सावंतवाडी, जि. सिंधुदुर्ग<br />
                        यांचा सुपुत्र
                      </p>
                    </div>
                    <div className="w-32 sm:w-40 flex-shrink-0 relative z-10 flex justify-center translate-y-1">
                      <img src="/groom.png" alt="संतोष" className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(143,78,0,0.3)]" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x300/transparent/8f4e00?text=Groom' }} />
                    </div>
                  </div>
                </div>

                {/* Bride */}
                <div className="glass-card pt-6 px-4 sm:px-6 pb-0 border-t-4 border-t-brand-saffron relative overflow-hidden group">
                  <div className="absolute top-2 left-4 p-2 opacity-[0.04] pointer-events-none">
                    <Heart size={100} />
                  </div>
                  <div className="absolute bottom-0 left-4 w-32 h-32 bg-brand-saffron/15 blur-3xl rounded-full pointer-events-none"></div>

                  <div className="flex items-end justify-between gap-2 relative z-10">
                    <div className="w-32 sm:w-40 flex-shrink-0 relative z-10 flex justify-center translate-y-1">
                      <img src="/bride.png" alt="सुचित्रा" className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(178,43,29,0.3)]" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x300/transparent/8f4e00?text=Bride' }} />
                    </div>
                    <div className="text-center flex-1 pb-6">
                      <span className="inline-block px-4 py-1 bg-brand-saffron/10 text-brand-primary font-bold text-sm rounded-full mb-3">
                        वधू
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-3 drop-shadow-sm">चि. सौ. कां. सुचित्रा</h3>
                      <p className="text-[13px] sm:text-sm leading-relaxed text-brand-muted font-medium">
                        कै. सुरेश राऊळ<br />
                        मु. आरोंदा – गावेळवाडी,<br />
                        ता. सावंतवाडी<br />
                        यांची कनिष्ठ कन्या
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </RevealOnScroll>

            {/* 3. Blessing / Invitation message */}
            <RevealOnScroll>
              <section className="text-center px-4 py-8 bg-brand-maroon/5 rounded-2xl border border-brand-maroon/10">
                <p className="text-lg leading-relaxed font-serif text-brand-maroon font-medium">
                  आपल्या शुभ आशीर्वादाने आणि उपस्थितीने या मंगल सोहळ्याची शोभा वाढवावी, ही नम्र विनंती.
                </p>
              </section>
            </RevealOnScroll>
          </div>

          <Divider />

          {/* Section: Rituals (4 & 5) */}
          <RevealOnScroll>
            <section id="rituals" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-bold text-center text-brand-primary mb-6">कार्यक्रम</h2>

              {/* Haldi */}
              <div className="flex items-start p-4 bg-brand-surface rounded-xl shadow-sm border border-brand-gold-border/20">
                <div className="bg-brand-gold/20 p-3 rounded-full mr-4 text-brand-primary mt-1">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-maroon mb-2">हळदी समारंभ</h3>
                  <div className="space-y-1 text-sm text-brand-muted">
                    <p className="flex items-center"><Calendar size={14} className="mr-2" /> मंगळवार दि. ५ मे २०२६ रोजी</p>
                    <p className="flex items-center"><Clock size={14} className="mr-2" /> संध्याकाळी ५ वाजता</p>
                  </div>
                </div>
              </div>

              {/* Muhurat */}
              <div className="flex items-start p-4 bg-brand-surface rounded-xl shadow-sm border border-brand-gold-border/20">
                <div className="bg-brand-saffron/20 p-3 rounded-full mr-4 text-brand-maroon mt-1">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-maroon mb-2">विवाह मुहूर्त</h3>
                  <div className="space-y-1 text-sm text-brand-muted">
                    <p className="font-medium text-brand-primary mb-1">मिती वैशाख कृ. ४ शके १९४८</p>
                    <p className="flex items-center"><Calendar size={14} className="mr-2" /> बुधवार दि. ६ मे २०२६ रोजी</p>
                    <p className="flex items-center"><Clock size={14} className="mr-2" /> दुपारी १२ वा. ३१ मि.</p>
                  </div>
                </div>
              </div>
            </section>
          </RevealOnScroll>

          <Divider />

          {/* Section: Venue (6 & 7) */}
          <div id="venue" className="space-y-12 scroll-mt-24">
            <RevealOnScroll>
              <section className="glass-card p-6 text-center">
                <div className="inline-flex justify-center items-center bg-brand-primary/10 p-3 rounded-full mb-4 text-brand-primary">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold text-brand-maroon mb-4">विवाह स्थळ</h3>
                <p className="font-bold text-lg mb-2">देवांगी मंगल कार्यालय</p>
                <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                  इन्सुली<br />
                  (मुंबई गोवा हायवे) पेट्रोल पंपाजवळ<br />
                  ता. सावंतवाडी, जि. सिंधुदुर्ग
                </p>
                <a
                  href="https://maps.app.goo.gl/hLBfQwrqyoQcV1VP6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-brand-primary to-brand-saffron text-white rounded-xl font-semibold shadow-md active:scale-95 transition-transform ${pulseVenue ? 'pulse-map-button' : ''}`}
                >
                  <MapPin size={18} className="mr-2" /> Google Maps वर पहा
                </a>
              </section>
            </RevealOnScroll>

            {/* 7. Residence */}
            <RevealOnScroll>
              <section className="bg-brand-surface p-6 rounded-xl text-center border border-brand-gold-border/20">
                <h3 className="text-xl font-bold text-brand-primary mb-3">निवासस्थान</h3>
                <p className="text-sm leading-relaxed text-brand-muted mb-4">
                  श्री. भिवसेन तुकाराम गावडे,<br />
                  सरमळे – नांगरतास,<br />
                  शितपवाडी,<br />
                  ता. सावंतवाडी, जि. सिंधुदुर्ग
                </p>
                <div className="bg-brand-cream/80 py-2 px-4 rounded-lg inline-block text-xs font-medium text-brand-maroon border border-brand-maroon/20 mb-4">
                  टीप: निवासस्थानाहून बस सकाळी ९.०० वाजता सुटेल.
                </div>

                <div className="pt-4 mt-2 border-t border-brand-gold-border/20 text-sm">
                  <p className="font-bold text-brand-maroon mb-1">व्यवस्थापक:</p>
                  <p className="text-brand-muted">सरमळे-नांगरतास - शितपवाडी ग्रामविकास मंडळ</p>
                </div>
              </section>
            </RevealOnScroll>
          </div>

          <Divider />

          {/* Section: Family (8, 9, 10) */}
          <div id="family" className="space-y-12 scroll-mt-24">
            <RevealOnScroll>
              <section className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-brand-maroon">आपले स्नेहांकित</h3>

                <div className="space-y-1 font-medium text-brand-primary">
                  <p>श्री. भिवसेन तुकाराम गावडे</p>
                  <p>सौ. यशोदा भिवसेन गावडे</p>
                </div>

                <p className="text-sm text-brand-muted px-4 font-medium">
                  समस्त गावडे, माधव देसाई, सावंत परिवार, आप्तेष्ट व मित्रमंडळी
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setIsFamilyListOpen(!isFamilyListOpen)}
                    className="inline-flex items-center text-sm font-semibold text-brand-primary bg-brand-primary/5 py-2 px-6 rounded-full border border-brand-primary/20 hover:bg-brand-primary/10 transition-colors"
                  >
                    स्नेहांकितांची यादी पहा
                    {isFamilyListOpen ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFamilyListOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 gap-2 text-sm text-brand-muted bg-brand-surface p-4 rounded-xl border border-brand-gold-border/20">
                      {[
                        "सौ. व श्री. विठ्ठल सि. गावडे",
                        "सौ. व श्री. नारायण रा. गावडे",
                        "सौ. व श्री. सगुण रा. गावडे",
                        "सौ. व श्री. अनंत ज. गावडे",
                        "सौ. व श्री. अशोक अ. गावडे",
                        "सौ. व श्री. आत्माराम द. गावडे",
                        "सौ. व श्री. प्रकाश ल. गावडे",
                        "सौ. व श्री. कृष्णा ग. गावडे",
                        "सौ. व श्री. रामकृष्ण बा. गावडे",
                        "सौ. व श्री. गुरुदास श्री. गावडे",
                        "सौ. व श्री. रामचंद्र रा. गावडे",
                        "सौ. व श्री. सहदेव श्री. गावडे",
                        "सौ. व श्री. जिवाजी वि. गावडे",
                        "सौ. व श्री. राजेश बा. गावडे",
                        "सौ. व श्री. अर्जुन सि. गावडे",
                        "सौ. व श्री. गणपत सि. गावडे",
                        "सौ. व श्री. लवू शि. गावडे(काका)",
                        "सौ. व श्री. प्रथमेश द. चुडजी(सावंत)",
                        "सौ. व श्री. रुक्मिणी कृ. सावंत(आत्या)",
                        "सौ. व श्री. गुरुनाथ मो. गावडे(मामा)",
                        "सौ. व श्री. मदन मो. गावडे(मामा)",
                        "सौ. व श्री. विनोद मो. गावडे(मामा)",
                        "सौ. व श्री. देविदास मो. गावडे(मामा)",
                        "सौ. व श्री. दत्तात्रय कृ. चुडजी (सावंत)",
                        "सौ. व श्री. संदेश मो. गावडे(मामा)",
                        "सौ. व श्री. मोहन भि. गावडे(आजोबा)"
                      ].map((name, i) => (
                        <p key={i} className="py-1 border-b border-brand-cream last:border-0">{name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </RevealOnScroll>

            {/* 9. Children section */}
            <RevealOnScroll>
              <section className="bg-brand-gold/10 p-6 rounded-2xl text-center relative mt-12 border border-brand-gold-border/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cream px-4 text-brand-saffron">
                  <Heart size={24} fill="currentColor" />
                </div>
                <h3 className="text-lg font-bold text-brand-maroon mb-4 mt-2">आमच्या दादा / मामाच्या लग्नाला यायचं हं...!</h3>
                <p className="text-sm font-medium leading-relaxed text-brand-primary">
                  नक्श, गणेश, सोहम, रोहन, रितिक, मयुरी, तनमयी, कनिष्का, श्रावणी, श्रेया, श्रेयश, गौरी
                </p>
              </section>
            </RevealOnScroll>

            {/* 10. Inviters */}
            <RevealOnScroll>
              <section className="text-center py-6">
                <h3 className="text-xl font-bold text-brand-primary mb-3">निमंत्रक</h3>
                <p className="font-medium text-brand-muted">
                  सागर, आश्लेष, गणेश, गौरेश, निलेश
                </p>
              </section>
            </RevealOnScroll>
          </div>

        </main>

        {/* 11. Footer */}
        <footer className="mt-12 text-center pb-8 px-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold-border to-transparent"></div>
          <div className="pt-8 space-y-4">
            <p className="text-sm font-medium text-brand-muted leading-relaxed max-w-[280px] mx-auto">
              आपली उपस्थिती हीच आमच्यासाठी सर्वात मोठा आशीर्वाद आहे.
            </p>
            <p className="text-xl font-bold text-brand-maroon font-serif pt-4">॥ शुभ विवाह ॥</p>
          </div>
        </footer>

      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
}
