import Header from '@/components/header';
import './globals.css'
import { Roboto_Slab } from 'next/font/google'
import Home from './page';
import Social from '@/components/social';
import ActiveSectionContextProvider from '@/context/active-section';
import { Toaster } from 'react-hot-toast';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const metadata = {
  title: 'Inakshi | Personal Portfolio',
  description: 'Full Stack Developer, undergrad student at University of Moratuwa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${robotoSlab.className} bg-slate-50 text-gray-950 pt-[110px] relative`}> {/* Added 'relative' */}
        <div className='bg-[#EA8A8A] absolute -z-10 top-[4rem] right-[5rem] h-[15rem] w-[15rem] md:top-[9rem] md:right-[15rem] md:h-[15rem] md:w-[20rem] lg:right-[25rem] rounded-full blur-[8rem]'></div>
        <div className='bg-[#FFF0DB] absolute -z-10 top-[12rem] right-[5rem] h-[15rem] w-[12rem] md:top-[20rem] md:right-[1rem] md:h-[20rem] md:w-[20rem] rounded-full blur-[8rem] sm:w-[15rem] lg:right-[18rem]'></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Toaster position='bottom-right'/>
       </ActiveSectionContextProvider>
       
        <div className='fixed z-10 bottom-0 left-0'>
          <Social />
        </div>
      </body>
    </html>
  );
}
