import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#C4FBDD] bg-[url(/assets/noise.svg)] px-32 py-5 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
        {/* Logo */}
        <div>
          <img src="/assets/logo-full.svg" alt="Quizard logo" />
        </div>

        {/* Nav */}
        <nav className="flex space-x-5 items-center text-[#00210E]">
          <div>Features</div>
          <div>About us</div>
          <div>FAQ</div>
          <div>
            <button className="bg-[#00ED85] text-[#00391B] px-4 py-3 rounded-md">
              JOIN THE WAITLIST
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
