import Image from "next/image";
import Link from "next/link";

interface Props {
  blog: {
    slug: string;
    category: string;
    title: string;
    _id: string;
    image: string;
    summary: string;
    createdAt: string;
  };
}

const BlogCard = ({ blog }: Props) => {
  const { slug, image, category, title, summary, createdAt } = blog;
  return (
    <Link href={`/blog/${slug}`}>
      <article className="rounded-[20px] border border-mile-prime-100 overflow-hidden">
        <Image
          src={image}
          alt="blog-image"
          width={400}
          height={282}
          className="w-full"
        />
        <div className="flex flex-col p-5">
          <p className="font-sm text-mile-prime-300 uppercase mb-4">
            {category}
          </p>
          <h2 className="text-xl font-bold text-black mb-3">{title}</h2>
          <p className="line-clamp-2 text-mile-prime-400 font-medium text-sm leading-[24px] font-instrumental_sans mb-5">
            {summary}
          </p>
          <p className="mt-autp">
            {new Date(createdAt).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
