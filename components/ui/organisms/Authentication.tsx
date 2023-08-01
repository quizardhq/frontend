import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { Eye, EyeSlash } from '@/components/assets/Icons';
import { LogoVariant1 } from '@/components/assets';
import Input from '@/components/ui/atoms/Input';
import Button from '../atoms/Button';

interface ILoginForm {
  email: string;
  password: string;
}

interface ISignUpForm extends ILoginForm {
  firstName: string;
  lastName: string;
}

function OAuthButton() {
  return (
    <section className="w-full grid gap-3">
      <Button className="font-[500] text-[#005F32] border border-primary w-full gap-3 p-3 rounded-[4px] h-[48px] md:h-[56px]">
        <img
          src="https://res.cloudinary.com/dpkreativ/image/upload/v1685373410/quizard-frontend/components/icons/image-removebg-preview_n2ry61.png"
          alt="google logo"
          className="w-6 h-6"
        />
        <div>Continue with Google</div>
      </Button>

      <Button className="font-[500] text-[#005F32] border border-primary w-full gap-3 p-2 rounded-[4px] h-[48px] md:h-[56px]">
        <img
          src="https://github.githubassets.com/favicons/favicon.png"
          alt="github logo"
          className="w-5 h-5"
        />
        <div>Continue with GitHub</div>
      </Button>
    </section>
  );
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState<ISignUpForm>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className="min-h-[100vh] p-5 py-10 grid gap-4 max-w-xl mx-auto">
      {/* Heading */}
      <section className="text-center mx-auto grid gap-2">
        <h1 className="font-bold md:text-[32px] text-3xl">Create Account</h1>
        <p className="md:text-[14px] text-[#586059] text-xs">
          Sign up now and get the best Quizard experience
        </p>
      </section>

      {/* Quizard logo */}
      <div className="max-w-xl mx-auto my-5">
        <Link href="/" className="cursor-pointer">
          <Image src={LogoVariant1} priority alt="Quizard logo" />
        </Link>
      </div>

      {/* Social Auth */}
      <OAuthButton />

      {/* Divider */}
      <section className="flex gap-3 items-center">
        <div className="w-full bg-[#8B938A] h-[1px]"></div>
        <div className="text-[#131313] text-sm">OR</div>
        <div className="w-full bg-[#8B938A] h-[1px]"></div>
      </section>

      {/* Form Auth */}
      <section>
        <form className="grid gap-5">
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="signUp_firstName">
              <div className="text-sm md:text-[16px] mb-1">First Name</div>
              <div className="h-[44px] md:h-[56px] border border-black rounded-[4px] px-2 py-2">
                <Input
                  type="text"
                  name="firstName"
                  id="signUp_firstName"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="John"
                  value={formState.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="signUp_lastName">
              <div className="text-sm md:text-[16px] mb-1">Last Name</div>
              <div className="h-[56px] border border-black rounded-[4px] px-2 py-2">
                <Input
                  type="text"
                  name="lastName"
                  id="signUp_lastName"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="Doe"
                  value={formState.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="signUp_email">
              <div className="text-sm md:text-[16px] mb-1">Email</div>
              <div className="h-[56px] border border-black rounded-[4px] px-2 py-2">
                <Input
                  type="email"
                  name="email"
                  id="signUp_email"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="hello@gmail.com"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_password">
              <div className="text-sm md:text-[16px] mb-1">Password</div>
              <div className="h-[56px] border border-black rounded-[4px] px-2 py-2 flex items-center">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="signUp_password"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="******"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label
              htmlFor="signUp_receiveQuizardInfo"
              className="grid grid-cols-[1.4rem_auto] gap-2"
            >
              <input
                type="checkbox"
                name="signUp_receiveQuizardInfo"
                id="signUp_receiveQuizardInfo"
                className='appearance-none bg-transparent border-2 border-primary rounded-md grid place-content-center before:content-[""] before:w-3.5 before:h-3.5 before:shadow-[inset_1em_1em_#005F32] before:scale-0 checked:before:scale-100 before:origin-bottom-left before:clip-path h-[24px] w-[24px]'
              />
              <div className="text-sm pt-[2px]">
                I wish to receive information, offers, and updates from Quizard
              </div>
            </label>
          </div>

          <div>
            <Button
              isSubmit
              className="w-full bg-[#00A65B] rounded-md text-white p-3"
            >
              Sign up
            </Button>
          </div>
        </form>
      </section>

      {/* Choose to login instead */}
      <section className="flex gap-3 justify-center items-center text-sm">
        <div>Already have an account?</div>
        <Link href="/login" className="text-primary font-medium">
          Log in
        </Link>
      </section>
    </div>
  );
}

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formState, setFormState] = useState<ILoginForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="min-h-[100vh] p-5 py-20 grid gap-8 max-w-xl mx-auto">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="cursor-pointer">
          <Image src={LogoVariant1} priority alt="Quizard logo" />
        </Link>
      </div>

      {/* Heading */}
      <section className="text-center mx-auto grid gap-1">
        <h1 className="font-bold text-2xl lg:text-4xl">Welcome Back!</h1>
        <p className="text-[14px] lg:text-base text-[#586059]">
          Sign in get the best Quizard experience
        </p>
      </section>

      {/* Social Auth */}
      <OAuthButton />

      {/* Divider */}
      <section className="flex gap-3 items-center">
        <div className="w-full bg-[#8B938A] h-[1px]"></div>
        <div className="text-[#131313] text-sm">OR</div>
        <div className="w-full bg-[#8B938A] h-[1px]"></div>
      </section>

      {/* Form Auth */}
      <section>
        <form className="grid gap-5">
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="login_email">
              <div className="text-sm mb-1 font-[500]">Email</div>
              <div className="h-[56px] border border-black rounded-[4px] px-2 py-2">
                <Input
                  type="email"
                  name="email"
                  id="login_email"
                  className="w-full bg-transparent outline-none placeholder:text-sm placeholder:text-slate-500 h-full"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="login_password">
              <div className="text-sm mb-1m font-[500]">Password</div>
              <div className="h-[56px] border border-black rounded-[4px] px-2 py-2 flex items-center">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="login_password"
                  className="w-full bg-transparent outline-none placeholder:text-sm placeholder-center placeholder:text-slate-500 h-full"
                  placeholder="******"
                  autoComplete="off"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <Button
                  className="h-full"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="login_keepLoggedIn"
              className="grid grid-cols-[1.4rem_auto] gap-2"
            >
              <input
                type="checkbox"
                name="login_keepLoggedIn"
                id="login_keepLoggedIn"
                className='appearance-none bg-transparent border-2 border-primary rounded-md grid place-content-center before:content-[""] before:w-3.5 before:h-3.5 before:shadow-[inset_1em_1em_#005F32] before:scale-0 checked:before:scale-100 before:origin-bottom-left before:clip-path'
              />
              <div className="text-sm pt-[2px]">Keep me logged in</div>
            </label>

            <Link href="/forgot-password" className="text-xs text-primary">
              Forgot password?
            </Link>
          </div>

          <div>
            <Button
              isSubmit
              className="w-full bg-[#00A65B] h-[56px] rounded-[4px] text-white p-3"
            >
              Sign in
            </Button>
          </div>
        </form>
      </section>

      {/* Choose to login instead */}
      <section className="flex gap-2 justify-center items-center text-sm">
        <div>Don't have an account?</div>
        <Link href="/signup" className="text-primary font-medium">
          Sign up
        </Link>
      </section>
    </div>
  );
}
