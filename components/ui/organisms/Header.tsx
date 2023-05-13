import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubIcon, MenuIcon, QuizardFullLogo } from '@/components/assets';
import Button from '@/components/ui/atoms/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#C4FBDD] bg-[url(/assets/noise.svg)] p-5 lg:px-32 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
        {/* Logo */}
        <Link href="/" className="h-6 lg:h-max cursor-pointer">
          <Image
            src={QuizardFullLogo}
            alt="Quizard logo"
            className="h-full w-max"
          />
        </Link>

        {/* Nav */}
        <div className="lg:hidden">
          <Image
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleToggle();
              }
            }}
            onClick={handleToggle}
            src={MenuIcon}
            alt="Hamburger Menu"
          />
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-[#C4FBDD] bg-[url(/assets/noise.svg)] fixed top-0 left-0 w-screen h-screen z-50 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
            >
              <button
                type="button"
                className="absolute top-10 p-2"
                onClick={handleToggle}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col items-center justify-center h-full text-xl font-normal">
                <li className="my-5">
                  <Link
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleToggle();
                      }
                    }}
                    onClick={handleToggle}
                    href="/#about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li className="my-5 ">
                  <Link
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleToggle();
                      }
                    }}
                    onClick={handleToggle}
                    href="/#features"
                  >
                    Features
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleToggle();
                      }
                    }}
                    onClick={handleToggle}
                    href="/#faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={handleToggle}>
                    <Button
                      isSubmit
                      className="primary-btn text-[#00391B] font-normal text-lg"
                    >
                      JOIN THE WAITLIST
                    </Button>
                  </Link>
                </li>
                <li className="w-[100%]">
                  <div
                    className="w-[100%] mt-[1rem] text-center border-[1px] p-2 rounded-md border-primary font-normal"
                    style={{ border: '1px solid #00522A' }}
                  >
                    <Link href="https://github.com/quizardhq">
                      <Image
                        className="inline"
                        src={GitHubIcon}
                        alt="Github"
                        width="28"
                        height="26"
                      />{' '}
                      <span className="pl-4">Github</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="hidden lg:flex font-medium space-x-5 items-center text-[#00210E] cursor-pointer">
          <Link href="/#about-us">About Us</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#faq">FAQ</Link>
          <div>
            <Link href="/">
              <Button className="primary-btn text-[#00391B] font-medium">
                JOIN THE WAITLIST
              </Button>
            </Link>
          </div>
          <div
            className="border-2 p-2 rounded-md border-primary"
            style={{ border: '1px solid #00522A' }}
          >
            <Link href="https://github.com/quizardhq">
              <Image src={GitHubIcon} alt="Github" width="28" height="26" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
