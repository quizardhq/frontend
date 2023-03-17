import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, QuizardFullLogo } from "@/components/assets";
import Button from "@/components/ui/atoms/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-[#C4FBDD] bg-[url(/assets/noise.svg)] p-5 lg:px-32 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between font-medium flex-col lg:flex-row">
        {/* Logo */}
        <div className="h-6 lg:h-max">
          <Image
            src={QuizardFullLogo}
            alt="Quizard logo"
            className="h-full w-max"
          />
        </div>

        {/* Nav */}
        <div
          className="lg:hidden ml-auto mr-0"
          onClick={toggleNavbar}
          aria-hidden="true"
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === "") {
              toggleNavbar();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <Image src={MenuIcon} alt="Hamburger Menu" />
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex font-medium space-x-5 space-y-2 items-center text-[#00210E]`}
        >
          <div></div>
          <div className="lg:ml-8">Features</div>
          <div className="lg:ml-8">About Us</div>
          <div className="lg:ml-8">FAQ</div>
          <div className="lg:ml-8">
            <Button submit className="primary-btn text-[#00391B] font-medium">
              JOIN THE WAITLIST
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
