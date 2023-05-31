import AuthLayout from '@/layouts/AuthLayout';
import { Login } from '@/components/ui/organisms/Authentication';

export default function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
