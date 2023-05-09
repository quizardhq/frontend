import Link from 'next/link';
import HomeLayout from '@/layouts/HomeLayout';

export default function Custom404() {
  return (
    <HomeLayout>
      <div className="p-5 lg:p-32 min-h-[80vh] grid items-center">
        <div className="text-center flex flex-col gap-8">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-xl">This page doesn't exist yet.</p>
          <p className="text-sm">
            <span>Check your browser's URL, or go to the </span>
            <span className="underline underline-offset-4">
              <Link href="/">home page</Link>
            </span>
          </p>
        </div>
      </div>
    </HomeLayout>
  );
}
