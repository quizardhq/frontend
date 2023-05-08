import {
  GitHubIcon,
  MailIcon,
  PhoneIcon,
  QuizardFullLogo,
  SlackIcon,
  TwitterIcon,
} from '@/components/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#5DFF9E] p-5 lg:px-32">
      <div className="w-5/6 mx-auto grid grid-cols-12 py-16">
        {/* Logo */}
        <div className="col-span-4">
          <Link href="/" className="cursor-pointer">
            <Image src={QuizardFullLogo} alt="Quizard logo" />
          </Link>
        </div>

        {/* Menus */}
        <div className="col-span-8 grid grid-cols-12">
          {/* Contact */}
          <div className="col-span-6 flex flex-col gap-3">
            <div className="flex space-x-2 items-center">
              <div>
                <Image src={PhoneIcon} alt="phone icon" />
              </div>
              <div>+234 812 345 6790</div>
            </div>
            <div className="flex space-x-2 items-center">
              <div>
                <Image src={MailIcon} alt="mail icon" />
              </div>
              <div>support@quizzardhq.com</div>
            </div>
          </div>

          {/* Site Links */}
          <div className="col-span-3 justify-self-end flex flex-col gap-3">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/">About Us</Link>
            </div>
            <div>
              <Link href="/">Features</Link>
            </div>
            <div>
              <Link href="/">FAQs</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="col-span-3 justify-self-end flex flex-col gap-3">
            <div>
              <Link href="/">
                <div className="flex space-x-2 items-center">
                  <div>
                    <Image src={TwitterIcon} alt="phone icon" />
                  </div>
                  <div>Twitter</div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="flex space-x-2 items-center">
                  <div>
                    <Image src={GitHubIcon} alt="phone icon" />
                  </div>
                  <div>GitHub</div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="flex space-x-2 items-center">
                  <div>
                    <Image src={SlackIcon} alt="phone icon" />
                  </div>
                  <div>Slack</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="w-4/5 border border-[#00A65B] mb-5 mx-auto"></div>
        <div>&copy; Quizard 2023. All right reserved</div>
      </div>
    </footer>
  );
}
