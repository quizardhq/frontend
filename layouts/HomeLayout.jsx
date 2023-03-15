import Header from '@/components/ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <div className="bg-[#F5FFF3]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
