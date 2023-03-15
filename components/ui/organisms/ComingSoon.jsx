import Image from 'next/image';
import { GamePreviewImage, GroupDiscussion } from '@/components/assets';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';

export default function ComingSoon() {
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
              <form className="hidden lg:block">
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
                  />
                  <Button submit className="primary-btn text-[#00210E]">
                    Join
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Illustration */}
          <div>
            <Image
              priority
              alt="A mobile phone and tablet each showing a Quizard game session"
              src={GamePreviewImage}
            />
          </div>
        </div>
      </section>

      {/* What is Quizard */}
      <section className="p-5 lg:py-12">
        {/* Section Title */}
        <div className="text-center font-semibold text-2xl lg:text-4xl text-[#00A65B] mb-10">
          What is Quizard
        </div>

        {/* Section Content */}
        <div className="grid gap-5">
          {/* Illustration */}
          <div>
            <Image
              src={GroupDiscussion}
              alt="A vector illustration showing five people discussing"
            />
          </div>

          {/* Divider */}
          <Divider />

          {/* Content */}
          <div className="text-[#00522A] text-sm grid gap-5">
            <p>
              Quizard is an all-in-one platform for interactive quizzes that
              makes it easy for you to engage your audience and collect valuable
              feedback.
            </p>
            <p>
              It is perfect for hosting interactive quiz games at events, being
              it for techies or just a birthday party, corporate gathering, or
              just hanging out with friends. An ultimate quiz platform for
              proving who's the smartest in the room.
            </p>
            <p>
              And guess what? It is open source, which means it's customizable,
              flexible, and has a rebellious streak a mile wide. We are
              currently working on V1 focusing on basics of creating and hosting
              games.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
