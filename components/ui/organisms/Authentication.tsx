import Link from 'next/link';
import Button from '../atoms/Button';

export function SignUp() {
  return (
    <div className="p-5 py-20 grid gap-8 max-w-xl mx-auto">
      {/* Heading */}
      <section className="text-center mx-auto grid gap-2">
        <h1 className="font-bold text-2xl lg:text-3xl">Create an Account</h1>
        <p className="text-xs lg:text-base">
          Sign up now and get the best Quizard experience
        </p>
      </section>

      {/* Social Auth */}
      <section className="w-full grid gap-3">
        <Button className="border border-primary w-full gap-3 p-3 rounded-md">
          <img
            src="https://res.cloudinary.com/dpkreativ/image/upload/v1685373410/quizard-frontend/components/icons/image-removebg-preview_n2ry61.png"
            alt="google logo"
            className="w-5 h-5"
          />
          <div>Continue with Google</div>
        </Button>

        <Button className="border border-primary w-full gap-3 p-2 rounded-md">
          <img
            src="https://github.githubassets.com/favicons/favicon.png"
            alt="github logo"
            className="w-5 h-5"
          />
          <div>Continue with GitHub</div>
        </Button>
      </section>

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
            <label htmlFor="signUp_firstName">
              <div className="text-sm mb-1">First Name</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="text"
                  name="firstName"
                  id="signUp_firstName"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="John"
                />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_lastName">
              <div className="text-sm mb-1">Last Name</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="text"
                  name="lastName"
                  id="signUp_lastName"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="Doe"
                />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_email">
              <div className="text-sm mb-1">Email</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="email"
                  name="email"
                  id="signUp_email"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_password">
              <div className="text-sm mb-1">Password</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="password"
                  name="password"
                  id="signUp_password"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="******"
                />
              </div>
            </label>
          </div>

          <div>
            <label
              htmlFor="signUp_receiveQuizardInfo"
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                name="receiveQuizardInfo"
                id="signUp_receiveQuizardInfo"
              />
              <div className="text-sm">
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
  return (
    <div className="p-5 py-20 grid gap-8 max-w-xl mx-auto bg-[#C4FBDD] bg-[url(https://res.cloudinary.com/dpkreativ/image/upload/q_auto:low/v1684919930/quizard-frontend/public/noise_dhu9fl.png)]">
      {/* Heading */}
      <section className="text-center mx-auto grid gap-2">
        <h1 className="font-bold text-2xl lg:text-3xl">Welcome Back</h1>
        <p className="text-xs lg:text-base">
          Sign in get the best Quizard experience
        </p>
      </section>

      {/* Social Auth */}
      <section className="w-full grid gap-3">
        <Button className="border border-primary w-full gap-3 p-3 rounded-md">
          <img
            src="https://res.cloudinary.com/dpkreativ/image/upload/v1685373410/quizard-frontend/components/icons/image-removebg-preview_n2ry61.png"
            alt="google logo"
            className="w-5 h-5"
          />
          <div>Continue with Google</div>
        </Button>

        <Button className="border border-primary w-full gap-3 p-2 rounded-md">
          <img
            src="https://github.githubassets.com/favicons/favicon.png"
            alt="github logo"
            className="w-5 h-5"
          />
          <div>Continue with GitHub</div>
        </Button>
      </section>

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
            <label htmlFor="login_email">
              <div className="text-sm mb-1">Email</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="email"
                  name="email"
                  id="login_email"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="login_password">
              <div className="text-sm mb-1">Password</div>
              <div className="border border-black rounded-md px-1 py-2">
                <input
                  type="password"
                  name="password"
                  id="login_password"
                  className="w-full bg-transparent outline-none placeholder:text-sm"
                  placeholder="******"
                />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label
              htmlFor="login_keepLoggedIn"
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                name="receiveQuizardInfo"
                id="login_keepLoggedIn"
              />
              <div className="text-sm">Keep me logged in</div>
            </label>

            <Link href="/forgot-password" className="text-xs text-primary">
              Forgot password?
            </Link>
          </div>

          <div>
            <Button
              isSubmit
              className="w-full bg-[#00A65B] rounded-md text-white p-3"
            >
              Sign in
            </Button>
          </div>
        </form>
      </section>

      {/* Choose to login instead */}
      <section className="flex gap-3 justify-center items-center text-sm">
        <div>Don't have an account?</div>
        <Link href="/signup" className="text-primary font-medium">
          Sign up
        </Link>
      </section>
    </div>
  );
}
