import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';
import PrivacyPolicyPage from '@/components/ui/organisms/PrivacyPolicy';

export default function PrivacyPolicy() {
  return (
    <HomeLayout>
      <MetaTag
        title="Privacy Policy"
        description="We are committed to respecting your privacy and safeguarding your personal information. Please read this Privacy Policy carefully to understand our practices."
        url="/privacy-and-policy"
      />
      <PrivacyPolicyPage />
    </HomeLayout>
  );
}
