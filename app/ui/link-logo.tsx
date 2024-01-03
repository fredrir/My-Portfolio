import { CodeBracketIcon} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function LinkLogo() {
    return (
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6  hover:scale-110" />
      </div>
    );
  }
  
  export function GitLogo() {
    return (
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <img src="/github-mark-white.svg" alt="Github" className="h-6 w-6 hover:scale-110" />
      </div>
    );
  }




