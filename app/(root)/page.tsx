import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex lg:flex-row flex-col justify-between gap-8 items-center md:h-fit h-auto mb-20">
        <div className="text-center max-w-md md:max-w-2xl mt-5">
          <h1 className="text-heading2-semibold mb-8">
            Share Your Stories, Connect with Readers
          </h1>
          <h3 className="text-base-medium ">
            Discover a platform where every story finds its voice. Join a
            vibrant community of writers and readers, where stories spark
            conversations and connections
          </h3>
        </div>
        <div className="md:h-96 md:w-96 h-64 w-64 relative">
          <Image
            src="/assets/storylynx-heroin.png"
            alt="hero"
            layout="fill" // required
            objectFit="cover"
            className="rounded-full" // change to suit your needs
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col max-w-xs m-auto p-3 rounded border-gray-400 border">
          <div className="text-base-semibold mb-2">Featured Stories</div>
          <div className="text-base-regular text-gray-600">
            Explore captivating and diverse stories handpicked for you.
          </div>
        </div>
        <div className="flex flex-col max-w-xs m-auto p-3 rounded border-gray-400 border">
          <div className="text-base-semibold mb-2">Explore Section</div>
          <div className="text-base-regular text-gray-600 rounded">
            Dive into your favorite topics or discover new ones.
          </div>
        </div>
        <div className="flex flex-col max-w-xs m-auto p-3 rounded border-gray-400 border">
          <div className="text-base-semibold mb-2">Writing Tools or Guides</div>
          <div className="text-base-regular text-gray-600">
            Craft your masterpiece with our writing resources and tips.
          </div>
        </div>
      </section>
    </>
  );
}
