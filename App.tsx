import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      <div className="group relative">
        {/* Glow effect - adjusted for light background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Card Content */}
        <div className="relative bg-white border border-slate-100 rounded-2xl p-16 shadow-2xl flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-pulse">
            Hello World
          </h1>
          <p className="text-slate-600 text-xl font-medium max-w-md">
            Welcome to your new React application. 
            <br />
            <span className="text-sm uppercase tracking-widest text-slate-400 mt-2 block">Built with Tailwind & TypeScript</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;