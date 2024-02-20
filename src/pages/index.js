
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { URLBar } from '@/components/URLBar';
import { UserRegister } from '@/components/UserRegister';
export default function Home() {
  return (
    <>
      <main
        className={`flex flex-col w-full items-center justify-centre p-24 ${inter.className}`}
      >
      {/* <URLBar/>     */}
      <UserRegister/>
      </main>
    </>
  );
}
