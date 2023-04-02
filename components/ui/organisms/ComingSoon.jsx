import Image from 'next/image';
import {
  EasySharing,
  GamePreviewImage,
  GroupDiscussion,
  InteractiveSessions,
  RealtimeResults,
} from '@/components/assets';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';
import FloatingImage from '../molecules/FloatingImage';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Code to submit the form and add the email to the waitlist goes here
    setErrorMessage('Thank you for joining the waitlist!');
    setEmail('');
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
                  />
                  <Button
                    submit
                    className="primary-btn hover:bg-[#5DFF9E] duration-200 text-[#00210E]"
                  >
                    Join
                  </Button>
                </div>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
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
          <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] mb-10 ">
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
      <section className="p-5 lg:py-12 lg:px-32">
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
                <div className="text-sm lg:text-2xl">
                  Engage your audience with interactive questions that include
                  multiple-choice, true/false, and open-ended responses.
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
                <div className="text-sm lg:text-2xl">
                  See results in real-time as users complete your quizzes,
                  surveys, and polls.
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
                  Easy Sharing
                </div>
                <div className="text-sm lg:text-2xl">
                  Share your quizzes on social media, email, and other platforms
                  with just a few clicks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
