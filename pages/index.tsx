import ComingSoon from '@/components/ui/organisms/ComingSoon';
import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function Home() {
  return (
    <HomeLayout>
      <MetaTag
        title="Quizard - Engage and Interact with your Audience"
        description="Quizard is an all-in-one platform for engaging your audience with interactive quiz sessions "
        url="/"
      />
      <ComingSoon />
    </HomeLayout>
  );
}
