import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function FrontEndIntern() {
  return (
    <HomeLayout>
      <MetaTag
        title="Front-End Intern at QuizardHQ"
        description="We are seeking a highly motivated Front-end Intern to join our team. The successful candidate will work with our team of experienced developers to develop, maintain and improve our web applications using Next.js, React, Cypress, Storybook, Redux Toolkit, REST APIs, and TypeScript."
        url="/frontend-intern"
      />

      <div className="h-[100vh] text-center px-5">
        <h1 className="text-4xl py-[1rem]">Front-End Intern</h1>
        <h2 className="text-xl py-[1rem] font-bold">
          Location: Remote (Nigeria)
        </h2>
        <h2 className="text-xl py-[1rem] font-bold">Job Summary</h2>
        We are seeking a highly motivated Front-end Intern to join our team. The
        successful candidate will work with our team of experienced developers
        to develop, maintain and improve our web applications using Next.js,
        React, Cypress, Storybook, Redux Toolkit, REST APIs, and TypeScript.
        <h2 className="text-xl py-[1rem] font-bold">Key Responsibilities:</h2>
        <ul className="left">
          <li>
            - Collaborate with the development team to build, test and deploy
            web applications
          </li>
          <li>
            - Develop and maintain user interfaces using Next.js, React, and
            TypeScript
          </li>
          <li>
            - Write tests using Cypress and Storybook to ensure code quality
          </li>
          <li>- Implement REST APIs and integrate with back-end systems</li>
          <li>
            - Contribute to code reviews, design discussions, and team meetings
          </li>
          <li>
            - Continuously learn and improve your skills to stay up to date with
            emerging technologies and trends
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <a
            rel="noreferrer"
            href="https://www.notion.so/codemon/Frontend-Engineer-Intern-9cded5f5772141e4bb4e6254295dbba9"
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
