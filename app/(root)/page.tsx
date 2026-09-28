import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
        Transform your Ideas with PixGenie: Powered by AI, Inspired by Magic!
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
      <footer className="mt-10 text-center flex flex-col items-center gap-2">
  <div>
  
    <a 
    href="https://www.producthunt.com/posts/pixgenie?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pixgenie" 
    target="_blank">
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=735037&theme=dark"
        alt="PixGenie - Transform&#0032;Images | Product Hunt"
        width={250}
        height={54}
      />
    </a>
  </div>
  <div>
    <p className="p-16-semibold text-center">
      Made with 💖 by {" "}
      <a
        href="https://github.com/RiteshS1"
        className="text-xl text-red-400 hover:text-white"
      >
       RS
      </a>
    </p>
  </div>
</footer>
    
    
    </>
  )
}

export default Home
