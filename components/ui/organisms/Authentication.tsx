import Button from '../atoms/Button';

export function SignUp() {
  return (
    <div className="p-5 my-20 grid gap-8">
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
        <form>
          <div>
            <label htmlFor="signUp_firstName">
              <div>First Name</div>
              <div>
                <input type="text" name="firstName" id="signUp_firstName" />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_email">
              <div>Email</div>
              <div>
                <input type="email" name="email" id="signUp_email" />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_password">
              <div>Password</div>
              <div>
                <input type="password" name="password" id="signUp_password" />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="signUp_receiveQuizardInfo">
              <input
                type="checkbox"
                name="receiveQuizardInfo"
                id="signUp_receiveQuizardInfo"
              />
              <div>
                I wish to receive information, offers, and updates from Quizard
              </div>
            </label>
          </div>

          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </section>

      {/* Choose to login instead */}
      <section>
        <div>Already have an account?</div>
        <div>log in</div>
      </section>
    </div>
  );
}

export function Login() {
  return <div>Login here</div>;
}
