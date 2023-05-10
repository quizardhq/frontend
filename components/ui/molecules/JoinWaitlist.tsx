import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { YoungWomenStanding } from '@/components/assets';
import Button from '../atoms/Button';

type WaitlistFormProps = {
  accent?: string;
};

export function WaitlistForm({ accent }: WaitlistFormProps) {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [successMessage, setSuccessMessage] = useState<string | null>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }

    try {
      // Code to submit the form and add the email to the waitlist goes here
      setEmail('');
      setSuccessMessage("You've been added to the waitlist");
    } catch (error) {
      setErrorMessage('An error occurred while submitting the form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleJoinWaitlist}>
      <div className={`w-full flex border border-[${accent}] rounded-md p-1`}>
        <input
          type="email"
          name="waitlist_email"
          id="waitlist_email"
          placeholder="Email address"
          className="w-full outline-none bg-transparent rounded-md m-3 placeholder:text-[#FFFFFF]"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
          disabled={submitting}
        />
        <Button
          isSubmit={false}
          className="primary-btn hover:bg-[#5DFF9E] duration-200 text-[#00210E]"
          onClick={handleJoinWaitlist}
          isLoading={submitting}
          isDisabled={submitting}
        >
          Join
        </Button>
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      {successMessage && (
        <p className="text-white-500 text-sm">{successMessage}</p>
      )}
    </form>
  );
}

// Default WaitlistForm props
WaitlistForm.defaultProps = {
  accent: '#00A65B',
};

export default function JoinWaitlist() {
  return (
    <div className="grid lg:grid-cols-5 p-6 lg:p-12 relative bg-[#00b15e] bg-[url(/assets/images/bg_grass_green.png)] border-4 border-[#00e47a] rounded-lg">
      <div className="flex flex-col gap-6 text-[#F5FFF3] lg:col-span-3">
        <div className="text-2xl lg:text-4xl font-semibold">
          JOIN THE WAITLIST
        </div>
        <div className="lg:text-xl">
          Want to be among the first to know when Quizard is live? Sign up for
          our waiting list below. We'll notify you as soon as Quizard is ready
          to launch.
        </div>
        <div>
          <WaitlistForm accent="#00e47a" />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2 absolute right-0 bottom-0">
        <Image src={YoungWomenStanding} alt="young women standing" />
      </div>
    </div>
  );
}
