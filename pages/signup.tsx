import { SignUp } from '@/components/ui/organisms/Authentication';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function SignUpPage() {
  return (
    <div>
      <MetaTag
        title="Quizard - Create an Account"
        description="Discover the fun and engaging world of personalized learning with Quizard, the open-source quiz platform. Create, share and play custom quizzes with ease. Join our community today!"
        url="/signup"
      />
      <SignUp />
    </div>
  );
}
