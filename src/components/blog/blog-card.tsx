import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href="/blog/1">
      <article className="rounded-[20px] border border-mile-prime-100 overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1699292639215-6f34ff51daec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="blog-image"
          width={400}
          height={262}
          className="w-full"
        />
        <div className="flex flex-col p-5">
          <p className="font-sm text-mile-prime-300 uppercase mb-4">
            Environment
          </p>
          <h2 className="text-xl font-bold text-black mb-3">
            The Road to a Greener Future: Miles and Eco-Friendly Mobility
          </h2>
          <p className="line-clamp-2 text-mile-prime-400 font-medium text-sm leading-[24px] font-instrumental_sans mb-5">
            In an era of fast-paced lifestyles and environmental awareness, the
            way we travel is undergoing a significant transformation.{" "}
          </p>
          <p className="mt-autp">Oct 28 2023 . 10 Mins Read</p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
