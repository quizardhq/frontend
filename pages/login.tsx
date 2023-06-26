import { Login } from '@/components/ui/organisms/Authentication';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function LoginPage() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dre30otmq/image/upload/v1687784754/Pattern_1_hymp1z.png)] bg-no-repeat bg-cover bg-origin-border">
      <MetaTag
        title="Quizard - Welcome Back"
        description="Discover the fun and engaging world of personalized learning with Quizard, the open-source quiz platform. Create, share and play custom quizzes with ease. Join our community today!"
        url="/login"
      />
      <Login />
    </div>
  );
}
