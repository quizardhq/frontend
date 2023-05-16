import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { YoungWomenStanding } from '@/components/assets';
import Button from '../atoms/Button';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  WaitlistState,
  addToWaitlist,
} from '../../../redux/reducer/waitlist.slice';

type WaitlistFormProps = {
  accent?: string;
  isLight?: boolean;
};

export function WaitlistForm({ accent, isLight }: WaitlistFormProps) {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const waitlistState = useAppSelector<WaitlistState>(
    (state) => state.waitlist
  );

  const dispatch = useAppDispatch();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }

    try {
      await dispatch(addToWaitlist({ email }));
    } catch (error) {
      setErrorMessage('An error occurred while submitting the form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleJoinWaitlist}>
      <div
        className={`w-full flex flex-wrap border border-[${accent}] rounded-md p-1`}
      >
        <div className="flex flex-row">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            className={`w-1/2 outline-none border border-[${accent}] p-2 bg-transparent rounded-md m-3 ${
              isLight ? 'placeholder:text-white' : ''
            }`}
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            className={`w-1/2 outline-none border border-[${accent}] p-2 bg-transparent rounded-md m-3 ${
              isLight ? 'placeholder:text-white' : ''
            }`}
          />
        </div>
        <input
          type="email"
          name="waitlist_email"
          id="waitlist_email"
          placeholder="Email address"
          className={`w-full outline-none border border-[${accent}] p-2 bg-transparent rounded-md m-3 ${
            isLight ? 'placeholder:text-white' : ''
          }`}
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
          disabled={submitting && waitlistState.status === 'loading'}
        />
        <Button
          isSubmit={false}
          className="primary-btn hover:bg-[#5DFF9E] duration-200 text-[#00210E] w-full"
          onClick={handleJoinWaitlist}
          isLoading={submitting && waitlistState.status === 'loading'}
          isDisabled={submitting && waitlistState.status === 'loading'}
        >
          Join Waitlist
        </Button>
      </div>

      {waitlistState.error ? (
        <p className="text-[#FF0000] text-sm">{waitlistState.error}</p>
      ) : (
        ''
      )}

      {waitlistState.status === 'succeeded' && !errorMessage && (
        <p className="text-white-500 text-sm mt-5">
          By the mystical powers that govern this realm, thou hast been duly
          inscribed onto the scroll of the waitlist.
        </p>
      )}
    </form>
  );
}

// Default WaitlistForm props
WaitlistForm.defaultProps = {
  accent: '#00A65B',
  isLight: false,
};

export default function JoinWaitlist() {
  return (
    <div
      className="grid lg:grid-cols-5 p-6 lg:p-12 relative bg-[#00b15e] bg-[url(/assets/images/bg_grass_green.png)] border-4 border-[#00e47a] rounded-lg"
      id="join_waitlist"
    >
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
          <WaitlistForm accent="#00e47a" isLight />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2 absolute right-0 bottom-0">
        <Image src={YoungWomenStanding} alt="young women standing" />
      </div>
    </div>
  );
}
