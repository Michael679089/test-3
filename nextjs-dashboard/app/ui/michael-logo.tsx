import { SparklesIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function MichaelLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center gap-2 leading-none text-blue-600`}
    >
      <p className="text-white text-[40px] font-extrabold tracking-tight">Michael 👀</p> 
    </div>
  );
}