import Link from 'next/link';
import AplusLogo from './AplusLogo';
import Image from 'next/image';
function Logo() {
  return (
    <div className="z-10">
      <Link href="/">
        <div className="flex md:hidden">
          <Image
            src={'/logo.png'}
            width={150}
            height={150}
            className="lg:w-12 lg:h-12 w-10 h-10"
          ></Image>
        </div>
        <div className="hidden md:flex">
          <AplusLogo />
        </div>
      </Link>
    </div>
  );
}
export default Logo;
