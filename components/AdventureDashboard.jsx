"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AdventureDashboard = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('sports');
  const [sportsData, setSportsData] = useState([]);
  const [treksData, setTreksData] = useState([]);
  const [gearData, setGearData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [sports, treks, gear] = await Promise.all([
        supabase.from('sports_achievements').select('*').order('created_at', { ascending: false }),
        supabase.from('treks').select('*').order('created_at', { ascending: false }),
        supabase.from('gear_items').select('*').order('created_at', { ascending: false })
      ]);

      if (sports.data) setSportsData(sports.data);
      if (treks.data) setTreksData(treks.data);
      if (gear.data) setGearData(gear.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSportIcon = (sport) => {
    const icons = {
      swimming: '🏊',
      football: '⚽',
      basketball: '🏀',
      padel: '🎾',
      badminton: '🏸',
      tabletennis: '🏓'
    };
    return icons[sport] || '🏆';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'from-green-500 to-emerald-600',
      Moderate: 'from-blue-500 to-cyan-600',
      Hard: 'from-orange-500 to-red-600',
      Extreme: 'from-red-600 to-purple-700'
    };
    return colors[difficulty] || 'from-gray-500 to-gray-700';
  };

  const getStatusBadge = (status) => {
    const badges = {
      completed: 'bg-green-500/20 text-green-300 border-green-500/50',
      planned: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      upcoming: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
    };
    return badges[status] || badges.planned;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black opacity-90"></div>

      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/70 hover:text-white transition-all duration-300 hover:rotate-90 z-50"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full h-full overflow-auto px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slideDown">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Adventure Archive
            </h1>
            <p className="text-gray-400 text-lg">Where passion meets adventure</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 animate-slideUp">
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'sports'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setActiveTab('treks')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'treks'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              Treks
            </button>
            <button
              onClick={() => setActiveTab('gear')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'gear'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              Gear
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            <div className="animate-fadeIn">
              {activeTab === 'sports' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sportsData.map((sport, index) => (
                    <div
                      key={sport.id}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-5xl mb-4">{getSportIcon(sport.icon)}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{sport.sport_name}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{sport.achievement}</p>
                      <div className="flex gap-2 mb-3">
                        {sport.level && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">
                            {sport.level}
                          </span>
                        )}
                        {sport.year && (
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/50">
                            {sport.year}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{sport.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'treks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treksData.map((trek, index) => (
                    <div
                      key={trek.id}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {trek.image_url && (
                        <div className="h-48 overflow-hidden">
                          <img src={trek.image_url} alt={trek.trek_name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold text-white">{trek.trek_name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(trek.status)}`}>
                            {trek.status}
                          </span>
                        </div>
                        <p className="text-green-400 mb-2">📍 {trek.location}</p>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {trek.difficulty && (
                            <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(trek.difficulty)} text-white rounded-full text-sm font-semibold`}>
                              {trek.difficulty}
                            </span>
                          )}
                          {trek.duration && (
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                              ⏱️ {trek.duration}
                            </span>
                          )}
                          {trek.date && (
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                              📅 {trek.date}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{trek.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'gear' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gearData.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.image_url && (
                        <div className="h-48 overflow-hidden bg-white/5">
                          <img src={item.image_url} alt={item.item_name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-white">{item.item_name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.gear_type === 'sports'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                              : 'bg-green-500/20 text-green-300 border border-green-500/50'
                          }`}>
                            {item.gear_type}
                          </span>
                        </div>
                        {item.brand && (
                          <p className="text-purple-400 font-semibold mb-2">{item.brand}</p>
                        )}
                        {item.category && (
                          <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm mb-3 border border-white/20">
                            {item.category}
                          </span>
                        )}
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdventureDashboard;
