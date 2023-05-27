import Footer from '@/components/ui/organisms/Footer';
import Header from '@/components/ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
