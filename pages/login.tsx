import { Login } from '@/components/ui/organisms/Authentication';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function LoginPage() {
  return (
    <div className="bg-[#C4FBDD] bg-[url(https://res.cloudinary.com/dpkreativ/image/upload/q_auto:low/v1684919930/quizard-frontend/public/noise_dhu9fl.png)]">
      <MetaTag
        title="Quizard - Welcome Back"
        description="Discover the fun and engaging world of personalized learning with Quizard, the open-source quiz platform. Create, share and play custom quizzes with ease. Join our community today!"
        url="/login"
      />
      <Login />
    </div>
  );
}
