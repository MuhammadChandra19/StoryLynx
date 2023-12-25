import Image from 'next/image'
import Link from 'next/link'

const Topbar = () => {
  return (
    <nav className="navbar z-50 bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/" >
          <Image src="/assets/storylynx-logo.svg" alt="logo" width={36} height={36}/>
        </Link>
        <div className="flex gap-4">
          <Image 
            width={24} 
            height={24} 
            alt="write-story"
             src="/assets/icons/pencil-square.svg" 
             className="cursor-pointer"
          />
          <Image 
            width={36} 
            height={36} 
            alt="user-circle" 
            src="/assets/icons/user-circle.svg" 
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  )
}

export default Topbar