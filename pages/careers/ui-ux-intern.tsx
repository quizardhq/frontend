import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function UIUXIntern() {
  return (
    <HomeLayout>
      <MetaTag
        title="UI/UX Design Intern at Quizard"
        description="We are looking for a highly motivated and talented UI/UX Design Intern to join our team. The successful candidate will work with our experienced design team to create stunning user interfaces and engaging experiences for our web applications. "
        url="/ui-ux-intern"
      />

      <div className="h-[100vh] text-center px-5">
        <h1 className="text-4xl py-[1rem]">UI/UX Designer Intern</h1>
        <h2 className="text-xl py-[1rem] font-bold">
          Location: Remote (Nigeria)
        </h2>
        <h2 className="text-xl py-[1rem] font-bold">Job Summary</h2>
        We are looking for a highly motivated and talented UI/UX Design Intern
        to join our team. The successful candidate will work with our
        experienced design team to create stunning user interfaces and engaging
        experiences for our web applications. We use Figma as our primary design
        tool and prioritize female applicants for this position.
        <h2 className="text-xl py-[1rem] font-bold">Key Responsibilities:</h2>
        <ul className="left">
          <li>
            - Collaborate with the design team to create user interfaces and
            experiences for our web applications
          </li>
          <li>
            - Create illustrations and other creative designs that enhance the
            user experience
          </li>
          <li>- Design and iterate on wireframes and prototypes using Figma</li>
          <li>
            - Collaborate with the development team to ensure designs are
            implemented accurately and effectively
          </li>
          <li>
            - Conduct user research and usability testing to inform design
            decisions
          </li>
          <li>
            - Stay up-to-date with emerging design trends and technologies
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <a
            rel="noreferrer"
            href="https://www.notion.so/codemon/UI-UX-Design-Intern-00f0e49eb3f04111971e84e6a1982810"
            target="_blank"
            className="primary-btn text-[#00210E] mt-[1rem] block w-[max-content]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </HomeLayout>
  );
}
