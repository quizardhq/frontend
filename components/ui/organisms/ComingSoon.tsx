import { useState } from 'react';
import Image from 'next/image';
import {
  EasySharing,
  GamePreviewImage,
  GroupDiscussion,
  InteractiveSessions,
  RealtimeResults,
  Pana,
  LinkedIn,
  FAQs,
  TwitterIcon,
} from '@/components/assets';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';
import team, { faqs } from '../../assets/data';
import FloatingImage from '../molecules/FloatingImage';
import Accordion from '../atoms/Accordion';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [submiting, setSubmiting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    setSubmiting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmiting(false);
      return;
    }
    // Code to submit the form and add the email to the waitlist goes here
    setEmail('');
    setSubmiting(false);
    setSuccessMessage("You've been added to the waitlist");
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="p-5 lg:px-32 lg:pt-20 lg:pb-40 bg-[url(/assets/waves.svg)] bg-no-repeat bg-bottom bg-cover">
        <div className="max-w-7xl mx-auto grid gap-10 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="grid gap-5">
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
              {/* On Mobile view */}
              <div className="lg:hidden">
                <Button className="primary-btn text-[#00210E]">
                  JOIN THE WAITLIST
                </Button>
              </div>

              {/* On Desktop view */}
              <form className="hidden lg:block" onSubmit={handleJoinWaitlist}>
                <div className="text-sm font-light mb-2 text-[#00391B]">
                  Join the waitlist to get notified when we launch
                </div>
                <div className="w-full flex border border-[#00A65B] rounded-md p-1">
                  <input
                    type="email"
                    name="waitlist_email"
                    id="waitlist_email"
                    placeholder="Email address"
                    className="w-full outline-none bg-transparent rounded-md m-3 placeholder:text-[#006D3A]"
                    autoComplete="off"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={submiting}
                  />
                  <Button
                    submit={false}
                    className="primary-btn hover:bg-[#5DFF9E] duration-200 text-[#00210E]"
                    onClick={handleJoinWaitlist}
                    isLoading={submiting}
                    isDisabled={submiting}
                  >
                    Join
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-white-500 text-sm">{successMessage}</p>
                )}
              </form>
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
      <section className="p-5 lg:py-12 lg:px-32">
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
      <section className="p-20 bg-[url('/assets/Background.svg')] bg-no-repeat bg-cover">
        <div className="max-w-full py-10 mx-auto">
          <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] my-10">
            Meet the Team
          </div>

          {/* Team Members */}
          <div className="flex align-middle justify-between gap-5 flex-wrap md:justify-center sm:justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#C3FFD0] w-[380px] shadow-[4px 8px 24px rgba(170, 170, 170, 0.6)] cursor-pointer py-4 px-2 rounded-2xl mb-4"
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
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8"
                      src={TwitterIcon}
                      alt="twitter"
                    />
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8"
                      src={LinkedIn}
                      alt="LinkedIn"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="p-20 bg-[#00894A]">
        <div className="max-w-full py-10 mx-auto">
          <div className="grid md:grid-cols-12 gap-20 font-semibold text-2xl lg:text-4xl text-[#F5FFF3] my-10">
            <div className="col-span-5"></div>
            <div className="col-span-7">FAQs</div>
          </div>

          <div className="grid md:grid-cols-12 gap-20">
            <div className="col-span-5">
              <Image src={FAQs} alt="" className="w-full object-contain" />
            </div>
            <div className="col-span-7 text-white">
              <Accordion content={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
