import React, { useState } from 'react';
import { Search, Home as HomeIcon, Gamepad2, Smartphone, Download, FileText, Star, Clock, TrendingUp } from 'lucide-react';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample ROM data
  const popularRoms = [
    { id: 1, name: "Super Mario World", system: "SNES", rating: 4.9, downloads: "2.5M", size: "1.2MB" },
    { id: 2, name: "The Legend of Zelda", system: "NES", rating: 4.8, downloads: "1.8M", size: "512KB" },
    { id: 3, name: "Sonic the Hedgehog", system: "Genesis", rating: 4.7, downloads: "1.5M", size: "768KB" },
    { id: 4, name: "Pokemon Red", system: "Game Boy", rating: 4.9, downloads: "3.2M", size: "1MB" },
    { id: 5, name: "Street Fighter II", system: "SNES", rating: 4.6, downloads: "900K", size: "2.1MB" },
    { id: 6, name: "Final Fantasy VII", system: "PSX", rating: 4.9, downloads: "2.1M", size: "650MB" }
  ];

  const systems = [
    { name: "Nintendo Entertainment System (NES)", games: 854, emoji: "🎮" },
    { name: "Super Nintendo (SNES)", games: 721, emoji: "🕹️" },
    { name: "Game Boy", games: 612, emoji: "📱" },
    { name: "Sega Genesis", games: 534, emoji: "🎯" },
    { name: "PlayStation", games: 1205, emoji: "💿" },
    { name: "Nintendo 64", games: 296, emoji: "🎲" },
    { name: "Game Boy Advance", games: 842, emoji: "📲" },
    { name: "PlayStation 2", games: 2341, emoji: "💽" }
  ];

  const emulators = [
    { name: "RetroArch", platform: "Multi-Platform", description: "All-in-one emulator for multiple systems", rating: 4.8 },
    { name: "ZSNES", platform: "SNES", description: "Classic Super Nintendo emulator", rating: 4.7 },
    { name: "Project64", platform: "Nintendo 64", description: "Popular N64 emulator for PC", rating: 4.6 },
    { name: "ePSXe", platform: "PlayStation", description: "Enhanced PlayStation emulator", rating: 4.5 },
    { name: "VBA-M", platform: "Game Boy", description: "Visual Boy Advance enhanced", rating: 4.7 },
    { name: "Dolphin", platform: "GameCube/Wii", description: "High-performance GameCube and Wii emulator", rating: 4.9 }
  ];

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8" />
            <span className="text-2xl font-bold">RoMSFUN.COM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'HOME', icon: HomeIcon },
              { id: 'roms', label: 'ROMS', icon: Gamepad2 },
              { id: 'emulators', label: 'EMULATORS', icon: Smartphone },
              { id: 'request', label: 'REQUEST', icon: Download },
              { id: 'blog', label: 'BLOG', icon: FileText }
            ].map(({ id, label, icon: IconComponent }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-200 ${
                  currentPage === id ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const SearchBar = () => (
    <div className="flex max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Enter ROM name for search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-6 py-4 text-lg border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button className="bg-pink-500 text-white px-8 py-4 rounded-r-lg hover:bg-pink-600 transition-colors duration-200 flex items-center space-x-2">
        <Search className="w-5 h-5" />
        <span className="font-semibold">SEARCH</span>
      </button>
    </div>
  );

  const GameCard = ({ rom }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <Gamepad2 className="w-16 h-16 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition-colors duration-200">
          {rom.name}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
            {rom.system}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rom.rating}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Downloads: {rom.downloads}</span>
          <span>Size: {rom.size}</span>
        </div>
        <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 font-medium">
          Download ROM
        </button>
      </div>
    </div>
  );

  const SystemCard = ({ system }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group cursor-pointer">
      <div className="text-4xl mb-4">{system.emoji}</div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition-colors duration-200">
        {system.name}
      </h3>
      <p className="text-gray-600">{system.games} games available</p>
    </div>
  );

  const EmulatorCard = ({ emulator }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">{emulator.name}</h3>
          <p className="text-pink-500 font-medium">{emulator.platform}</p>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{emulator.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{emulator.description}</p>
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium">
        Download Emulator
      </button>
    </div>
  );

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-700 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            PLAY VIDEO GAME ROMS<br />
            ON YOUR COMPUTER OR PHONE
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Experience classic games from Nintendo, Sega, PlayStation and more. Download ROMs and emulators to relive gaming history.
          </p>
          <SearchBar />
        </div>
        {/* Gaming Elements Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 to-transparent opacity-20"></div>
        <div className="absolute bottom-8 left-1/4 w-16 h-16 bg-yellow-400 transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-12 right-1/3 w-12 h-12 bg-red-400 rounded-full opacity-30"></div>
      </div>

      {/* Popular ROMs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <TrendingUp className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Popular ROMs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoms.map((rom) => (
              <GameCard key={rom.id} rom={rom} />
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Systems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gaming Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <SystemCard key={index} system={system} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const RomsPage = () => (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ROM Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of classic video game ROMs from various gaming systems.
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {systems.map((system, index) => (
            <SystemCard key={index} system={system} />
          ))}
        </div>

        {/* All ROMs */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">All ROMs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoms.map((rom) => (
              <GameCard key={rom.id} rom={rom} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EmulatorsPage = () => (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Game Emulators</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download the best emulators to play your favorite classic games on modern devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emulators.map((emulator, index) => (
            <EmulatorCard key={index} emulator={emulator} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">How to Use Emulators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Download</h3>
              <p className="text-gray-600">Download the appropriate emulator for your system</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Install</h3>
              <p className="text-gray-600">Install the emulator on your computer or device</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Play</h3>
              <p className="text-gray-600">Load your ROM files and start playing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RequestPage = () => {
    const handleSubmit = () => {
      alert('Request submitted! We will review it and add the ROM if possible.');
    };

    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Request a ROM</h1>
            <p className="text-lg text-gray-600 text-center mb-8">
              Can't find the game you're looking for? Submit a request and we'll try to add it to our collection.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Game Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Enter the name of the game"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gaming System</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300">
                  <option value="">Select a system</option>
                  <option value="nes">Nintendo Entertainment System (NES)</option>
                  <option value="snes">Super Nintendo (SNES)</option>
                  <option value="gameboy">Game Boy</option>
                  <option value="genesis">Sega Genesis</option>
                  <option value="psx">PlayStation</option>
                  <option value="n64">Nintendo 64</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Any additional information about the game..."
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 font-medium"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BlogPage = () => {
    const blogPosts = [
      {
        title: "The History of Nintendo Entertainment System",
        excerpt: "Explore the revolutionary impact of the NES on the gaming industry and how it saved video games in America.",
        date: "August 25, 2025",
        emoji: "🎮",
        category: "Gaming History"
      },
      {
        title: "Best SNES Games of All Time",
        excerpt: "Our comprehensive ranking of the greatest Super Nintendo games that defined a generation of gamers.",
        date: "August 20, 2025",
        emoji: "🏆",
        category: "Game Reviews"
      },
      {
        title: "Setting Up RetroArch: Complete Guide",
        excerpt: "Step-by-step tutorial on installing and configuring RetroArch for the ultimate retro gaming experience.",
        date: "August 15, 2025",
        emoji: "⚙️",
        category: "Tutorials"
      },
      {
        title: "Legal Aspects of ROM Distribution",
        excerpt: "Understanding the legal landscape surrounding ROM files and emulation in different countries.",
        date: "August 10, 2025",
        emoji: "⚖️",
        category: "Legal"
      }
    ];

    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gaming Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, guides, and insights from the retro gaming world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-6xl">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-pink-500 transition-colors duration-200 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="text-pink-500 font-medium hover:text-pink-600 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'roms':
        return <RomsPage />;
      case 'emulators':
        return <EmulatorsPage />;
      case 'request':
        return <RequestPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-6 h-6" />
                <span className="text-xl font-bold">RoMSFUN.COM</span>
              </div>
              <p className="text-gray-300">Your ultimate destination for classic video game ROMs and emulators.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors duration-200">Popular ROMs</button></li>
                <li><button onClick={() => setCurrentPage('roms')} className="hover:text-white transition-colors duration-200">New Releases</button></li>
                <li><button onClick={() => setCurrentPage('roms')} className="hover:text-white transition-colors duration-200">Gaming Systems</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button className="hover:text-white transition-colors duration-200">FAQ</button></li>
                <li><button onClick={() => setCurrentPage('request')} className="hover:text-white transition-colors duration-200">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors duration-200">Terms of Service</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <p className="text-gray-300">Stay updated with the latest ROM releases and gaming news.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 RoMSFUN.COM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;