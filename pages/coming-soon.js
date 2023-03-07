import HomeLayout from '@/components/temp/layouts/HomeLayout';

export default function ComingSoon() {
  return (
    <HomeLayout>
      {/* --- Hero Section --- */}
      <section className="px-32 py-20 bg-[url(/assets/waves.svg)] bg-no-repeat bg-bottom min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
          {/* Left side */}
          <div className="grid gap-5">
            <h1 className="font-semibold text-5xl leading-snug text-[#00391B]">
              Engage & Interact with your Audience
            </h1>
            <p className="text-2xl font-light text-[#00210E]">
              Quizard is an all-in-one platform for engaging your audience with
              interactive quiz sessions and collect valuable results/feedback.
            </p>

            {/* Waitlist form */}
            <div>
              <form>
                <label htmlFor="" className="text-sm text-[#00391B]">
                  Join the waitlist to get notified when we launch
                </label>
                <div className="w-full max-w-md flex border border-[#00A65B] rounded-md p-1">
                  <input
                    type="email"
                    name="waitlist_email"
                    id="waitlist_email"
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

          {/* Right side */}
          <div>
            <img
              src="/assets/illustrations/coming-soon_hero.svg"
              alt="An illustration of four human characters interacting with each other"
            />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
