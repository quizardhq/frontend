import AuthLayout from '@/layouts/AuthLayout';
import { Login } from '@/components/ui/organisms/Authentication';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function LoginPage() {
  return (
    <AuthLayout>
      <MetaTag
        title="Quizard - Welcome Back"
        description="Discover the fun and engaging world of personalized learning with Quizard, the open-source quiz platform. Create, share and play custom quizzes with ease. Join our community today!"
        url="/login"
      />
      <Login />
    </AuthLayout>
  );
}
