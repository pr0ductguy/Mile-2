import BlurImage from "@/components/BlurImage";
import RichTextComponents from "@/components/rich-text";
import { Blog, getBlogBySlug } from "@/sanity/action";
import { readClient } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
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

export const generateMetadata = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const blog: Blog = await getBlogBySlug(slug);
  return {
    title: blog?.title,
    description: blog?.summary,
    openGraph: {
      images: blog.image,
      title: blog?.title,
      description: blog?.summary,
      url: `https://www.milerides.com/blog/${slug}`,
      siteName: blog?.title,
      type: "website",
    },
  };
};

export const generateStaticParams = async () => {
  try {
    const blogs = await readClient.fetch(
      groq`*[_type=='blog']{
       title,
        _id,
        "image": poster.asset->url,
        "slug":slug.current,
        category,
        summary,
        'createdAt':_createdAt
      }`
    );

    const params = blogs.map((blog: Blog) => {
      return {
        slug: blog.slug,
      };
    });

    return params;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching posts");
  }
};

const SingleBlogPage = async (props: Props) => {
  const blog: BlogContent = await getBlogBySlug(props.params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <div className="wrapper flex flex-col py-20 prose prose-xl ">
        <h2 className=" text-[28px] md:text-[38px] lg:text-[56px] text-mile-black text-center mb-5 font-bold capitalize">
          {blog.title}
        </h2>
        <p className="text-center text-mile-prime-200 font-manrope font-medium text-xs md:text-2xl">
          {new Date(blog.createdAt).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <BlurImage
          alt="banner"
          width={1277}
          height={540}
          className="max-h-[540px] min-h-[281px]  rounded-[30px] my-10 object-cover"
          src={blog.image}
          priority
        />
        <div className="max-w-4xl mx-auto w-full  ">
          <PortableText value={blog.content} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
