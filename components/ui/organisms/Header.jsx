import Image from 'next/image';
import { MenuIcon, QuizardFullLogo } from '@/components/assets';
import Button from '@/components/ui/atoms/Button';

export default function Header() {
  return (
    <header className="bg-[#C4FBDD] bg-[url(/assets/noise.svg)] p-5 lg:px-32 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
        {/* Logo */}
        <div className="h-6 lg:h-max">
          <Image
            src={QuizardFullLogo}
            alt="Quizard logo"
            className="h-full w-max"
          />
        </div>

        {/* Nav */}
        <div className="lg:hidden">
          <Image src={MenuIcon} alt="Hamburger Menu" />
        </div>

        <nav className="hidden lg:flex font-medium space-x-5 items-center text-[#00210E]">
          <div>Features</div>
          <div>About Us</div>
          <div>FAQ</div>
          <div>
            <Button submit className="primary-btn text-[#00391B] font-medium">
              JOIN THE WAITLIST
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
