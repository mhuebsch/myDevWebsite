import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import InteractivePresentationsPage from './interactive-presentations-content';

export default async function Page() {
  const cookieStore = cookies();
  const password = cookieStore.get('password');

  if (password?.value !== process.env.SECRET_PASSWORD) {
    redirect('/login');
  }

  return <InteractivePresentationsPage />;
}
