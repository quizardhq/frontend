import Image from 'next/image';
import Button from '../atoms/btn/Button';
import IpadPreview from '../../../public/assets/Wireframe/Mockups.svg';

export default function ComingSoon() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="p-5 lg:px-32 lg:py-20 bg-[url(/assets/waves.png.svg)] bg-no-repeat bg-bottom bg-cover min-h-screen">
        <div className="max-w-7xl mx-auto grid gap-20 lg:grid-cols-2 items-center">
          {/* Illustration */}
          <div className="w-full h-full lg:order-2">
            <Image
              priority
              // width={3000}
              // height={3000}
              alt="Quizard game play"
              src={IpadPreview} //  TODO: replace with a better cropped image
              style={{
                maxWidth: '100%',
                height: '100%',
              }}
            />
          </div>

          {/* Content */}
          <div className="grid gap-5 text-center lg:text-left">
            <h1 className="text-3xl leading-snug lg:text-5xl lg:leading-[1.1] text-[#00391B] font-bold">
              <div>Engage & Interact</div>
              <div>with your Audience</div>
            </h1>
            <p className="mb-6 text-base lg:text-xl font-thin text-[#00210E]">
              Quizard is an all-in-one platform for engaging your audience with
              interactive quiz sessions and collect valuable results/feedback.
            </p>

            {/* Waitlist form */}
            <div className="max-w-md">
              <form>
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
                  <Button
                    submit
                    text="Join"
                    className="primary-btn text-[#00210E]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
