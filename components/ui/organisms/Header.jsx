import Image from 'next/image';
import Link from "next/link";
import { MenuIcon, QuizardFullLogo } from '@/components/assets';
import Button from '@/components/ui/atoms/Button';

export default function Header() {
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
          <Image src={MenuIcon} alt="Hamburger Menu" />
        </div>

        <nav className="hidden lg:flex font-medium space-x-5 items-center text-[#00210E] cursor-pointer">
          <Link href="/#features">Features</Link>
          <Link href="/#about-us">About Us</Link>
          <Link href="/#faq">FAQ</Link>
          <div>
            <Link href="/">
              <Button submit className="primary-btn text-[#00391B] font-medium">
                JOIN THE WAITLIST
              </Button>
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
}
