import Image from 'next/image';
import Link from 'next/link';
import { QuizardFullLogo } from '@/components/assets';

export default function AuthLayout({ children }) {
  return (
    <div>
      <header className="bg-[#C4FBDD] bg-[url(https://res.cloudinary.com/dpkreativ/image/upload/q_auto:low/v1684919930/quizard-frontend/public/noise_dhu9fl.png)] p-5 lg:px-32 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          {/* Logo */}
          <Link href="/" className="h-6 lg:h-max cursor-pointer">
            <Image
              src={QuizardFullLogo}
              alt="Quizard logo"
              className="h-full w-max"
            />
          </Link>
        </div>
      </header>
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
