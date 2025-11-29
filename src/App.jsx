import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Cpu, 
  Brain, 
  Moon, 
  Sun,
  Menu,
  X,
  Instagram,
  Database,
  Globe,
  Wifi,
  Server,
  Sparkles,
  Send,
  Bot,
  Terminal,
  CheckCircle,
  Zap
} from 'lucide-react';

// --- KOMPONEN: SCROLL REVEAL (Efek Muncul saat Scroll) ---
const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// --- KOMPONEN UTAMA ---
const Portfolio = () => {
  // --- STATE LOADINGS (SPLASH SCREEN) ---
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [logs, setLogs] = useState([]);
  
  // --- STATE UTAMA ---
  const [activeTab, setActiveTab] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- STATE AI CHATBOT ---
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'model', text: 'Halo! Saya asisten virtual Putra. Mau tanya tentang pendidikan, pengalaman, atau proyek saya? Silakan! 👋' }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatEndRef = useRef(null);

  // --- EFEK: ADVANCED BOOT SEQUENCE ANIMATION ---
  useEffect(() => {
    // FIX 1: Matikan scroll restoration bawaan browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // FIX 2: Paksa scroll ke paling atas
    window.scrollTo(0, 0);

    // FIX 3: Bersihkan hash (#contact) dari URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    const bootSequence = [
      "Initializing Core Systems...",
      "Loading React Engine v18.2...",
      "Connecting to GitHub API...",
      "Fetching IoT Protocols...",
      "Calibrating Neural Networks...",
      "Optimizing UI/UX Modules...",
      "System Check: 100% OK",
      "ACCESS GRANTED"
    ];

    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < bootSequence.length) {
        setLogs(prev => [...prev, bootSequence[currentStep]]);
        setLoadingStep(prev => prev + 1);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          // Scroll ke atas lagi sesaat setelah loading selesai untuk memastikan
          window.scrollTo(0, 0); 
        }, 800); 
      }
    }, 400); 

    return () => clearInterval(interval);
  }, []);

  // Handle scroll navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // --- HANDLE SMOOTH SCROLL ---
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  // Data Proyek
  const projects = [
    {
      id: 1,
      title: "Titik Ruang Sambat Website (TRS)",
      category: "Website",
      image: "/trs.png",
      description: "Platform digital aman dan anonim untuk menampung aspirasi serta keresahan mahasiswa, dilengkapi dashboard admin untuk manajemen tindak lanjut yang efisien dan notifikasi real-time.",
      tech: ["PHP (Native)", "MySQL", "Tailwind CSS","PHPMailer"],
      link: "https://titikruangsambat.42web.io/login.php"
    },
    {
      id: 2,
      title: "Smart Pet Feeder",
      category: "IoT",
      image: "/iot.jpg",
      description: "Smart Pet Feeder Sistem pemberi pakan hewan otomatis berbasis IoT yang memungkinkan pengguna mengatur jadwal makan dan memantau ketersediaan pakan secara real-time melalui aplikasi mobile (Flutter). Menggunakan protokol MQTT untuk komunikasi data yang cepat dan efisien.",
      tech: ["C++", "Arduino", "FireBase"],
      link: "https://github.com/Rex4Red/Project_IoT_SmartPetFeeder.git"
    },
    {
      id: 3,
      title: "Paw Feeder App",
      category: "Mobile App",
      image: "/mobile_iot.jpg",
      description: "Smart Pet Feeder App Aplikasi pengendali berbasis Flutter yang dirancang untuk memberikan pengalaman manajemen pakan hewan yang intuitif. Terhubung langsung dengan perangkat keras melalui API Firebase, aplikasi ini memungkinkan pengguna memantau sisa pakan dan mengatur jadwal pemberian makan secara real-time dengan latensi yang sangat rendah.",
      tech: ["Flutter(Dart)", "Firebase"],
      link: "https://github.com/Rex4Red/Project_IoT_SmartPetFeeder.git"
    },
    {
      id: 4,
      title: "Intel Image Classification Model",
      category: "Machine Learning",
      image: "/Streamlit_ml.png",
      description: "Aplikasi web Deep Learning berbasis CNN yang mampu mengklasifikasikan 6 jenis pemandangan alam secara real-time dengan akurasi tinggi.",
      tech: ["Python", "TensorFlow", "FastAPI", "Streamlit"],
      link: "https://klasifikasi-gambar-intel-machinelearning-epqbpcy83gxy25drfczfr.streamlit.app/"
    },
  ];

  // Logic AI Chat
  const handleSendChat = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsAiLoading(true);

    // --- ISI BIODATA KAMU DISINI (Agar AI Pintar) ---
    const portfolioContext = `
      Kamu adalah Asisten AI Virtual untuk portofolio Mohammad Thalib Agus Saputra (panggilan: Putra).
      Tugasmu adalah menjawab pertanyaan pengunjung seolah-olah kamu mengenal Putra dengan sangat baik.

      DATA PRIBADI PUTRA:
      - Nama Lengkap: Mohammad Thalib Agus Saputra
      - Panggilan: Putra
      - Email: mthalibagus@gmail.com
      - Domisili/Lokasi: Sleman, Yogyakarta, Indonesia
      - Pendidikan: Mahasiswa S1 Teknik Informatika di UPN Veteran Yogyakarta
      - Status: Open for Freelance
      - Hobi: Coding, Eksperimen IoT, Gaming

      KEAHLIAN (TECH STACK):
      - Web: PHP Native, React.js, Tailwind CSS, MySQL, HTML, CSS, JavaScript
      - Mobile: Flutter (Dart)
      - IoT: Arduino, ESP32, MQTT, Firebase
      - AI/ML: Python, TensorFlow, Computer Vision (CNN)

      DETAIL PROYEK (Gunakan ini untuk menjawab detail teknis):
      ${projects.map(p => `- Proyek "${p.title}" (Kategori: ${p.category}): ${p.description}. Tech Stack: ${p.tech.join(', ')}`).join('\n')}

      GAYA BICARA AI:
      - Gunakan Bahasa Indonesia yang sopan, ramah, dan profesional.
      - Gunakan emoji sesekali (seperti ✨, 🚀, 💻) agar tidak kaku.
      - Jawablah dengan ringkas (maksimal 3-4 kalimat) kecuali user meminta penjelasan panjang.
      - Jika ditanya hal pribadi yang tidak ada di data di atas (misal "pacarnya siapa?"), jawab dengan bercanda sopan bahwa kamu hanya tahu info profesional.
    `;

    try {
      const apiKey = "AIzaSyBTOis5RZhC2mRwQpT_mt3_lGsox12EPAI"; // API Key
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }],
            systemInstruction: { parts: [{ text: portfolioContext }] }
          })
        }
      );
      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, error.";
      setChatHistory(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'model', text: "Koneksi error." }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const categories = ['All', 'Website', 'Mobile App', 'IoT', 'Machine Learning'];
  const filteredProjects = activeTab === 'All' ? projects : projects.filter(project => project.category === activeTab);
  
  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'Website': return <Code size={16} />;
      case 'Mobile App': return <Smartphone size={16} />;
      case 'IoT': return <Cpu size={16} />;
      case 'Machine Learning': return <Brain size={16} />;
      default: return <Code size={16} />;
    }
  };

  const FloatingIcon = ({ icon: Icon, delay, position, color, size = 24 }) => (
    <div 
      className={`absolute ${position} p-3 rounded-2xl backdrop-blur-md border shadow-xl animate-float z-20`}
      style={{
        animationDelay: `${delay}s`,
        backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        borderColor: isDarkMode ? 'rgba(71, 85, 105, 0.5)' : 'rgba(226, 232, 240, 0.8)',
      }}
    >
      <Icon size={size} className={color} />
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* --- STYLE ANIMASI --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Grid Background Animation */
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        }
      `}</style>

      {/* --- SPLASH SCREEN: TERMINAL BOOT SEQUENCE --- */}
      <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono transition-all duration-1000 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="w-full max-w-lg p-6">
          <div className="flex items-center gap-2 mb-6 border-b border-green-900 pb-2">
            <Terminal className="text-green-500 animate-pulse" />
            <span className="text-green-500 font-bold tracking-wider">SYSTEM_BOOT_SEQUENCE</span>
          </div>
          
          <div className="space-y-2 mb-8 h-48 overflow-hidden relative">
            {logs.map((log, index) => (
              <div key={index} className="text-green-400 text-sm flex items-center gap-2 animate-slide-up">
                <span className="text-green-700">[{new Date().toLocaleTimeString()}]</span>
                <span>{log}</span>
                {index === logs.length - 1 && <span className="w-2 h-4 bg-green-500 animate-pulse inline-block ml-1"></span>}
              </div>
            ))}
          </div>

          {/* Loading Bar */}
          <div className="w-full h-1 bg-green-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300 ease-out"
              style={{ width: `${(loadingStep / 8) * 100}%` }}
            ></div>
          </div>
          <div className="mt-2 text-right text-xs text-green-600">
            {Math.min(Math.round((loadingStep / 8) * 100), 100)}% COMPLETE
          </div>
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-white/90 shadow-lg backdrop-blur-md') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tighter bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DEV.PORTO
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Projects', 'AI Chat', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase().replace(' ', '-'))}
                    className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
                >
                  {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}
              >
                {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden absolute w-full ${isDarkMode ? 'bg-slate-900' : 'bg-white'} border-b border-slate-700`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Projects', 'AI Chat', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleSmoothScroll(e, item.toLowerCase().replace(' ', '-'))}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-opacity-10 hover:bg-blue-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[90vh] overflow-hidden`}>
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        <div className="md:w-1/2 space-y-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 font-medium text-sm mb-4 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Available for Hire
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, Saya <br/>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Putra</span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Full Stack Developer yang mengubah baris kode menjadi solusi cerdas dan inovatif.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4 text-sm font-medium pt-4">
              {['Web Developer', 'IoT Enthusiast', 'ML Engineer', 'Mobile App Developer'].map((role) => (
                <span key={role} className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-300 bg-white/50'} backdrop-blur-sm`}>
                  <Zap size={14} className="text-yellow-500" /> {role}
                </span>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={800}>
            <div className="pt-8 flex gap-4">
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
              >
                Lihat Portfolio
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`px-8 py-3 rounded-full font-medium transition-all border ${isDarkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'} transform hover:-translate-y-1`}
              >
                Kontak Saya
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative perspective-1000">
          {/* Ikon-ikon Teknologi yang Melayang */}
          <FloatingIcon icon={Database} position="-top-6 left-10 md:left-20" color="text-blue-500" delay={0} />
          <FloatingIcon icon={Wifi} position="top-20 -right-4 md:right-10" color="text-green-500" delay={2} />
          <FloatingIcon icon={Brain} position="-bottom-8 left-14 md:left-24" color="text-purple-500" delay={1} />
          <FloatingIcon icon={Globe} position="bottom-12 -right-2 md:right-16" color="text-cyan-500" delay={3} />
          <FloatingIcon icon={Server} position="top-1/2 -left-6 md:left-10" color="text-orange-500" delay={4} />

          <div className={`w-72 h-72 md:w-96 md:h-96 rounded-full absolute blur-3xl opacity-20 animate-pulse ${isDarkMode ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
          
          <div className={`relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-3xl rotate-3 overflow-hidden border-4 transition-all duration-500 hover:rotate-0 hover:scale-105 ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-white bg-white'} shadow-2xl group`}>
             <img src="/fotoku.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             {/* Overlay Gradient on Hover */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className={`absolute z-20 -bottom-6 -right-6 md:right-10 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms] ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'}`}>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-full">
                <Code className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold">Experience</p>
                <p className="font-bold">3+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-100'}`}>
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Menggabungkan Hardware & Software
                </h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                  Saya adalah pengembang yang bersemangat dengan latar belakang Teknik Informatika. Perjalanan saya dimulai dari membangun website sederhana hingga kini mengeksplorasi dunia IoT dan Machine Learning.
                </p>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                  Saya percaya bahwa teknologi terbaik adalah yang dapat memecahkan masalah nyata. Saat ini saya fokus mengembangkan solusi smart system yang terintegrasi.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Web Dev", icon: <Code />, color: "text-blue-500", desc: "React, Laravel" },
                  { title: "Mobile", icon: <Smartphone />, color: "text-green-500", desc: "Flutter, Firebase" },
                  { title: "IoT", icon: <Cpu />, color: "text-orange-500", desc: "ESP32, MQTT" },
                  { title: "AI / ML", icon: <Brain />, color: "text-purple-500", desc: "Python, TensorFlow" }
                ].map((skill, idx) => (
                  <div key={idx} className={`p-6 rounded-xl border transition-all hover:-translate-y-2 hover:scale-105 duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500 hover:shadow-lg'}`}>
                    <div className={`${skill.color} mb-3 transform transition-transform group-hover:rotate-12`}>{skill.icon}</div>
                    <h4 className="font-bold">{skill.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyek Terbaru</h2>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Beberapa karya terbaik yang pernah saya buat.</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : isDarkMode 
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' 
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <div className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700 shadow-black/50 hover:shadow-blue-900/20' : 'bg-white border-slate-100 shadow-slate-200'}`}>
                <div className="relative overflow-hidden h-48 bg-slate-50/50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium group/link ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-black'}`}
                  >
                    Lihat Detail <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-chat" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/50' : 'bg-blue-50'}`}>
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tanya Asisten Virtual</h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Penasaran dengan detail teknis atau ingin saran proyek? Tanya langsung ke AI saya.
              </p>
            </div>

            <div className={`rounded-2xl overflow-hidden shadow-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="h-80 md:h-96 overflow-y-auto p-6 space-y-4 no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blend-overlay">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                    <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                        {msg.role === 'user' ? <div className="text-white text-xs font-bold">You</div> : <Bot size={18} className="text-white" />}
                      </div>
                      <div className={`p-3 md:p-4 rounded-2xl text-sm md:text-base leading-relaxed shadow-md ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : (isDarkMode ? 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none' : 'bg-slate-100 text-slate-800 rounded-bl-none')
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className={`p-4 border-t ${isDarkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                <form onSubmit={handleSendChat} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Tanya tentang pengalaman, tech stack, atau proyek..."
                    disabled={isAiLoading}
                    className={`flex-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-purple-500 outline-none transition-all ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                  <button 
                    type="submit" 
                    disabled={isAiLoading}
                    className={`px-4 md:px-6 rounded-xl font-bold text-white flex items-center gap-2 transition-all ${
                      isAiLoading 
                        ? 'bg-slate-600 cursor-not-allowed' 
                        : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30'
                    }`}
                  >
                    {isAiLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> <span className="hidden md:inline">Kirim ✨</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 relative z-10">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Mari Bekerja Sama!</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Tertarik membuat proyek Web, IoT, atau AI? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi dan peluang baru.
                </p>
                <div className="space-y-4">
                  <a href="mailto:mthalibagus@gmail.com" className="flex items-center gap-3 hover:text-blue-200 transition-colors group">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                    <span>mthalibagus@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mohammad-thalib-agus-saputra-667b7031a"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-blue-200 transition-colors group"
                  >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform"><Linkedin size={20} /></div>
                  <span>Lihat Profil LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/thalib.saputra/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-200 transition-colors group">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform"><Instagram size={20} /></div>
                    <span>@thalibsaputra</span>
                  </a>
                </div>
              </div>
              
              <div className={`p-10 md:p-14 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} text-slate-800`}>
                <form className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Nama</label>
                    <input type="text" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300'}`} placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                    <input type="email" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300'}`} placeholder="email@anda.com" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pesan</label>
                    <textarea rows="4" className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300'}`} placeholder="Tulis pesan Anda disini..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm ${isDarkMode ? 'bg-slate-950 text-slate-500' : 'bg-slate-100 text-slate-500'}`}>
        <p>&copy; 2024 Putra. Dibuat dengan React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;