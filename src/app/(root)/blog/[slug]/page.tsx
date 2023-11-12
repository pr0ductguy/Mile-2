import RichTextComponents from "@/components/rich-text";
import { getBlogBySlug } from "@/sanity/action";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 900;

interface BlogContent {
  content: any;
  image: string;
  createdAt: string;
  slug: string;
  summary: string;
  category: string;
  title: string;
  _id: string;
}

interface Props {
  params: { slug: string };
}

const SingleBlogPage = async (props: Props) => {
  const blog: BlogContent = await getBlogBySlug(props.params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <div className="wrapper flex flex-col py-20 prose prose-xl ">
        <h2 className=" text-[22px] md:text-[38px] lg:text-[56px] text-mile-black text-center mb-5 font-bold capitalize">
          {blog.title}
        </h2>
        <p className="text-center text-mile-prime-200 font-manrope font-medium text-xs md:text-2xl">
          {new Date(blog.createdAt).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <Image
          alt="banner"
          width={1277}
          height={540}
          className="max-h-[540px] rounded-[30px] my-10 object-cover"
          src={blog.image}
        />
        <div className="max-w-4xl mx-auto w-full  ">
          <PortableText value={blog.content} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
