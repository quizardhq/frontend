import HomeLayout from '@/components/temp/layouts/HomeLayout';

export default function ComingSoon() {
  return (
    <HomeLayout>
      {/* --- Hero Section --- */}
      <section className="p-5 lg:px-32 lg:py-20 bg-[url(/assets/waves.svg)] bg-no-repeat bg-bottom bg-cover min-h-screen">
        <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-2 items-center">
          {/* Illustration */}
          <div className="w-full lg:order-2">
            <img
              src="/assets/illustrations/coming-soon_hero.svg"
              alt="An illustration of four human characters interacting with each other"
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="grid gap-5 text-center lg:text-left">
            <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-[#00391B]">
              Engage & Interact with your Audience
            </h1>
            <p className="text-base lg:text-2xl font-light text-[#00210E]">
              Quizard is an all-in-one platform for engaging your audience with
              interactive quiz sessions and collect valuable results/feedback.
            </p>

            {/* Waitlist form */}
            <div className="max-w-md">
              <form>
                <label
                  htmlFor="waitlistEmail"
                  className="text-sm text-[#00391B]"
                >
                  Join the waitlist to get notified when we launch
                </label>
                <div className="w-full flex border border-[#00A65B] rounded-md p-1">
                  <input
                    type="email"
                    name="waitlistEmail"
                    id="waitlistEmail"
                    placeholder="Email address"
                    className="w-full outline-none bg-transparent rounded-md m-3 placeholder:text-[#006D3A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#00ED85] text-[#006D3A] px-8 py-3 rounded-md"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
