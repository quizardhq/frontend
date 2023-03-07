import React from 'react';

export default function Header() {
  return (
    <div className="bg-green-300 bg-[url(/assets/noise.svg)] flex justify-between px-32 py-5 items-center text-[#00391B] font-medium">
      {/* Logo */}
      <div>
        <img src="/assets/logo-full.svg" alt="Quizard logo" />
      </div>

      {/* Nav */}
      <div className="flex space-x-5 items-center">
        <div>Features</div>
        <div>About us</div>
        <div>FAQ</div>
        <div>
          <button className="bg-[#00ED85] px-4 py-3 rounded-md">
            JOIN THE WAITLIST
          </button>
        </div>
      </div>
    </div>
  );
}
