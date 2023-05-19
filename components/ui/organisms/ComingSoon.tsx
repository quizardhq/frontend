import Image from 'next/image';
import Link from 'next/link';

// Add carousel component
import { Carousel } from 'flowbite-react';

import {
  EasySharing,
  GamePreviewImage,
  GroupDiscussion,
  InteractiveSessions,
  RealtimeResults,
  Pana,
  FAQs,
  TwitterIcon,
} from '@/components/assets';
import Divider from '@/components/ui/atoms/Divider';
import Button from '@/components/ui/atoms/Button';
import Accordion from '@/components/ui/atoms/Accordion';

import team, { faqs } from '../../assets/data';
import FloatingImage from '../molecules/FloatingImage';

// --- Coming Soon Page ---
export default function ComingSoon() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="p-5 lg:px-32 lg:pt-20 lg:pb-40 bg-[url(/assets/waves.png)] bg-no-repeat bg-bottom bg-cover">
        <div className="max-w-7xl mx-auto grid gap-10 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="grid gap-5 mt-[3rem]">
            <h1 className="text-3xl leading-snug lg:text-5xl lg:leading-[1.1] text-[#00391B] font-bold">
              <div>Engage & Interact</div>
              <div>with your Audience</div>
            </h1>
            <p className="mb-6 lg:text-xl text-[#00210E]">
              Quizard is an all-in-one platform for engaging your audience with
              interactive quiz sessions and collect valuable results/feedback.
            </p>

            {/* Waitlist form */}
            <div className="max-w-md">
              <div className="text-sm font-light mb-2 text-[#00391B]">
                <Link href="/#join_waitlist">
                  <Button
                    isSubmit
                    className="primary-btn text-[#00391B] font-normal text-lg"
                  >
                    JOIN THE WAITLIST
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div>
            <FloatingImage>
              <Image
                priority
                alt="A mobile phone and tablet each showing a Quizard game session"
                src={GamePreviewImage}
                className="w-full"
              />
            </FloatingImage>
          </div>
        </div>
      </section>

      {/* --- What is Quizard --- */}
      <section className="p-5 lg:py-12 lg:px-32" id="about-us">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] mb-10">
            What is Quizard
          </div>

          {/* Section Content */}
          <div className="grid gap-5 lg:grid-cols-5 items-center">
            {/* Illustration */}
            <div className="lg:col-span-2">
              <Image
                src={GroupDiscussion}
                alt="A vector illustration showing five people discussing"
                className="w-full"
              />
            </div>

            <div className="flex flex-col space-y-5 lg:flex-row lg:col-span-3">
              {/* Divider */}
              <Divider />

              {/* Content */}
              <div className="text-[#00522A] text-sm lg:text-xl grid gap-5">
                <p>
                  Quizard is an all-in-one platform for interactive quizzes that
                  makes it easy for you to engage your audience and collect
                  valuable feedback.
                </p>
                <p>
                  It is perfect for hosting interactive quiz games at events,
                  being it for techies or just a birthday party, corporate
                  gathering, or just hanging out with friends. An ultimate quiz
                  platform for proving who's the smartest in the room.
                </p>
                <p>
                  And guess what? It is open source, which means it's
                  customizable, flexible, and has a rebellious streak a mile
                  wide. We are currently working on V1 focusing on basics of
                  creating and hosting games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features --- */}
      <section id="features" className="p-5 lg:py-12 lg:px-32 mt-[10rem]">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] mb-10">
            Features
          </div>

          {/* Section Content */}
          <div className="grid gap-5">
            {/* Feature One */}
            <div className="grid lg:grid-cols-5 lg:gap-5 items-center">
              <div className="p-5 border-t border-x border-[#5DFF9E] lg:border-none rounded-t-lg lg:col-span-2 lg:order-2">
                <Image
                  src={InteractiveSessions}
                  alt="A vector illustration showing five people discussing"
                  className="w-full"
                />
              </div>
              <div className="text-[#00522A] p-2 border border-[#5DFF9E] lg:border-none rounded-b-lg bg-[#EAFFEB] lg:bg-transparent lg:col-span-3">
                <div className="font-medium text-2xl lg:text-4xl mb-2">
                  Interactive Sessions
                </div>
                <div className="text-sm lg:text-xl">
                  Create engaging and interactive sessions with our quizard
                  platform, allowing you to customize quizzes, surveys, and
                  polls to fit your audience's learning goals and needs.
                </div>
              </div>
            </div>

            {/* Feature Two */}
            <div className="grid lg:grid-cols-5 lg:gap-5 items-center">
              <div className="p-5 border-t border-x border-[#5DFF9E] lg:border-none rounded-t-lg lg:col-span-2">
                <Image
                  src={RealtimeResults}
                  alt="A vector illustration showing five people discussing"
                  className="w-full"
                />
              </div>
              <div className="text-[#00522A] p-2 border border-[#5DFF9E] lg:border-none rounded-b-lg bg-[#EAFFEB] lg:bg-transparent lg:col-span-3">
                <div className="font-medium text-2xl lg:text-4xl mb-2">
                  Real-time Results
                </div>
                <div className="text-sm lg:text-xl">
                  Get instant feedback and monitor performance over time with
                  our real-time results feature. Customize your feedback to
                  address misunderstandings and engage your audience.
                </div>
              </div>
            </div>

            {/* Feature Three */}
            <div className="grid lg:grid-cols-5 lg:gap-5 items-center">
              <div className="p-5 border-t border-x border-[#5DFF9E] lg:border-none rounded-t-lg lg:col-span-2 lg:order-2">
                <Image
                  src={EasySharing}
                  alt="A vector illustration showing five people discussing"
                  className="w-full"
                />
              </div>
              <div className="text-[#00522A] p-2 border border-[#5DFF9E] lg:border-none rounded-b-lg bg-[#EAFFEB] lg:bg-transparent lg:col-span-3">
                <div className="font-medium text-2xl lg:text-4xl mb-2">
                  Audio Communication
                </div>
                <div className="text-sm lg:text-xl">
                  Our audio communication feature enables you to connect with
                  your team members in real-time, regardless of where they are
                  located.
                </div>
              </div>
            </div>

            {/* Feature Four */}
            <div className="grid lg:grid-cols-5 lg:gap-5 items-center">
              <div className="p-5 border-t border-x border-[#5DFF9E] lg:border-none rounded-t-lg lg:col-span-2">
                <Image
                  src={Pana}
                  alt="A vector illustration showing five people discussing"
                  className="w-full"
                />
              </div>
              <div className="text-[#00522A] p-2 border border-[#5DFF9E] lg:border-none rounded-b-lg bg-[#EAFFEB] lg:bg-transparent lg:col-span-3">
                <div className="font-medium text-2xl lg:text-4xl mb-2">
                  Free to use
                </div>
                <div className="text-sm lg:text-xl">
                  Capitalism has nothing on us, creating and hosting quizzes on
                  Quizard will always be free, We Promise.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gradient-to-t from-[#00894A]">
        <section className="px-5 py-20 lg:px-20 lg:pb-48 bg-[url('/assets/Background.png')] bg-no-repeat bg-cover">
          <div className="max-w-full py-10 mx-auto">
            <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] my-10">
              Meet the Team
            </div>

            {/* Team Members - Desktop */}
            <div className="hidden lg:flex align-middle justify-between gap-5 flex-wrap md:justify-center sm:justify-center">
              {team.map((member) => (
                <div
                  key={`${member.name}-desktop`}
                  className="bg-[#C3FFD0] w-[380px] shadow-[4px 8px 24px rgba(170, 170, 170, 0.6)] cursor-pointer py-4 px-2 rounded-2xl mb-4"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full rounded-lg"
                  />
                  <div className="flex align-top justify-between mt-4">
                    <div>
                      <div className="text-[#00391B] font-semibold md:text-3xl text-lg">
                        {member.name}
                      </div>
                      <div className="text-lg text-[#006D3A] font-normal">
                        {member.role}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="w-6 h-6 md:w-8 md:h-8"
                          src={TwitterIcon}
                          alt="twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Members - Mobile */}
            <div className="lg:hidden h-[480px]">
              <Carousel indicators={false}>
                {team.map((member) => (
                  <div
                    key={`${member.name}-mobile`}
                    className="bg-[#C3FFD0] w-full shadow-[4px 8px 24px rgba(170, 170, 170, 0.6)] cursor-pointer py-4 px-2 rounded-2xl mb-4"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full"
                    />
                    <div className="flex align-top justify-between mt-4">
                      <div>
                        <div className="text-[#00391B] font-semibold md:text-3xl text-lg">
                          {member.name}
                        </div>
                        <div className="text-lg text-[#006D3A] font-normal">
                          {member.role}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            className="w-6 h-6 md:w-8 md:h-8"
                            src={TwitterIcon}
                            alt="twitter"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </section>

      {/* FAQs */}
      <section id="faq" className="p-5 pb-20 lg:px-20 bg-[#00894A]">
        <div className="max-w-full pb-10 mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 font-semibold text-2xl pt-2 pb-5 bg-[url(/assets/faqs-design.png)] bg-fit lg:text-4xl text-[#F5FFF3] lg:my-10">
            <div className="hidden lg:block lg:col-span-5"></div>
            <div className="lg:col-span-7 mx-auto lg:mx-4 text-2xl lg:text-4xl">
              FAQs
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-20">
            <div className="hidden lg:block lg:col-span-5">
              <Image src={FAQs} alt="" className="w-full object-contain" />
            </div>
            <div className="lg:col-span-7 text-[#fff]">
              <Accordion content={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
