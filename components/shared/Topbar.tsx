import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@clerk/nextjs';

const Topbar = () => {
  const { userId } = auth()

  return (
    <nav className="navbar z-[99999] bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Image src="/assets/storylynx-logo.svg" alt="logo" width={36} height={36}/>
        </Link>
        <div className="flex gap-4">
          <Link href="/write" className="p-2">
            <Image 
              width={24} 
              height={24} 
              alt="write-story"
              src="/assets/icons/pencil-square.svg" 
              className="cursor-pointer"
            />
          </Link>
          <div className="p-1">
          {
            userId ? ( <UserButton afterSignOutUrl="/"/> ) : (
              <Link href="/sign-in">
                  <Image 
                    width={32} 
                    height={32} 
                    alt="user-circle" 
                    src="/assets/icons/user-circle.svg" 
                    className="cursor-pointer"
                  />
              </Link>
            )
          }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar