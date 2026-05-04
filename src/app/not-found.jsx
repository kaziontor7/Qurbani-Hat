
import Link from 'next/link';
import { PiCowFill } from 'react-icons/pi';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9faf5] via-[#fdfbf6] to-[#f0f6ea] flex flex-col items-center justify-center p-6  text-center">
            <div className="relative mb-8">
              <PiCowFill className='text-9xl primary' />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#f59e0b" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                    </svg>
                </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold primary mb-2 tracking-wide">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold gray mb-4">
                Pasture Not Found
            </h2>
            <p className="text-gray-500 max-w-lg mb-8 leading-relaxed text-sm md:text-base">
                It looks like the herd has moved on. The page you are looking for has been misplaced, deleted, or never existed in our marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/" className="flex items-center justify-center gap-2 px-8 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded shadow-sm transition-colors font-medium w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                </Link>
                <Link href="/all-animals" className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-[#1c3f1a] text-[#1c3f1a] hover:bg-[#1c3f1a] hover:text-white rounded shadow-sm transition-colors font-medium w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    All Animals
                </Link>
            </div>
        </div>
    );
};

export default NotFound;