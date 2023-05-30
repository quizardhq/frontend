import AuthLayout from '@/layouts/AuthLayout';
import { SignUp } from '@/components/ui/organisms/Authentication';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}
