import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex md:hidden lg:flex items-center h-[90%] md:space-x-4 ">
        <Link href={'/'}>
        <Image
            src='/images/logo/new-logo-transformed.webp'
            alt='logo'
            width={120}
            height={95}
            layout="intrinsic"
            className='mr-8'
        />
        </Link>
    </div>

    );
};

export default Logo;
