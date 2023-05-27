import {
  GitHubIcon,
  MailIcon,
  PhoneIcon,
  QuizardFullLogo,
  SlackIcon,
  TwitterIcon,
  LinkedIn,
} from '@/components/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import JoinWaitlist from '../molecules/JoinWaitlist';

export default function Footer() {
  return (
    <footer className="bg-[#5DFF9E] p-5 lg:px-32">
      <div className="-mt-20">
        <JoinWaitlist />
      </div>
      <div className="lg:w-5/6 mx-auto grid lg:grid-cols-12 py-16">
        {/* Logo */}
        <div className="lg:col-span-4">
          <Link href="/" className="cursor-pointer">
            <Image src={QuizardFullLogo} alt="Quizard logo" />
          </Link>
        </div>

        {/* Menus */}
        <div className="lg:col-span-8 grid grid-cols-12">
          {/* Contact */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-10 mb-3 text-xl text-[#00522A] font-semibold lg:hidden">
              Contact
            </div>
            <div className="flex flex-col gap-3">
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
                <div>
                  <a href="mailto:quizard.hq@gmail.com">quizard.hq@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Site Links */}
          <div className="col-span-6 lg:col-span-3 lg:justify-self-end">
            <div className="mt-10 mb-3 text-xl text-[#00522A] font-semibold lg:hidden">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <Link href="/">Home</Link>
              </div>
              <div>
                <Link href="/#about-us">About Us</Link>
              </div>
              <div>
                <Link href="/#features">Features</Link>
              </div>
              <div>
                <Link href="/#faq">FAQs</Link>
              </div>
              <div>
                <Link href="/privacy-and-policy">Privacy</Link>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="col-span-6 lg:col-span-3 lg:justify-self-end">
            <div className="mt-10 mb-3 text-xl text-[#00522A] font-semibold lg:hidden">
              Socials
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/quizardHQ"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <Image src={TwitterIcon} alt="Twitter icon" />
                    </div>
                    <div>Twitter</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/quizardhq"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <Image
                        className="w-6 h-6 md:w-6 md:h-6"
                        src={LinkedIn}
                        alt="LinkedIn icon"
                      />
                    </div>
                    <div>LinkedIn</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/quizardhq/frontend"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <Image src={GitHubIcon} alt="GitHub icon" />
                    </div>
                    <div>GitHub</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://join.slack.com/t/quizardhq/shared_invite/zt-1uys4uo7k-PNdgNv0bdsk7Ezb52HMhfg"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <Image src={SlackIcon} alt="Slack icon" />
                    </div>
                    <div>Slack</div>
                  </div>
                </a>
              </div>
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
