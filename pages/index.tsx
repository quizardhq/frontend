import ComingSoon from '@/components/ui/organisms/ComingSoon';
import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function Home() {
  return (
    <HomeLayout>
      <MetaTag
        title="Quizard - Engage and Interact with your Audience"
        description="Discover the fun and engaging world of personalized learning with Quizard, the open-source quiz platform. Create, share and play custom quizzes with ease. Join our community today!"
        url="/"
      />
      <ComingSoon />
    </HomeLayout>
  );
}
