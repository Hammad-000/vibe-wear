import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 min-h-[75vh] flex items-center justify-center px-4 text-white relative overflow-hidden">
      
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full text-center z-10 space-y-6">
        
        {/* Big Neon 404 Header */}
        <div className="relative inline-block">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-b from-red-400 to-rose-600 bg-clip-text text-transparent select-none animate-pulse">
            404
          </h1>
          <span className="absolute -bottom-2 right-2 bg-cyan-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-md">
            Vibe Check Failed
          </span>
        </div>

        {/* Error Messages */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            LOST IN THE SUB-CULTURE?
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
            Oops! The page you are looking for doesn't exist or has been dropped from the collection.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm tracking-wide"
          >
            <span>BACK TO SHOPPING</span>
            <span>🛍️</span>
          </Link>
        </div>

        {/* Subtle Decorative Footer Text */}
        <p className="text-[10px] text-slate-600 uppercase tracking-widest pt-8">
          Error Code: ERR_PAGE_NOT_FOUND
        </p>

      </div>
    </div>
  );
}

export default Error;