import BlogCard from "@/components/blog/blog-card";
import Hero from "@/components/shared/Hero";
import { getBlogs } from "@/sanity/action";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export const metadata = {
  title: "Blog",
};

const BlogPage = async ({ searchParams }: Props) => {
  const resources = await getBlogs({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  return (
    <>
      <Hero title="Blog" subtitle="Explore Our Latest Insights and Stories" />
      <section>
        <div className="wrapper py-20">
          <div>
            <div className="text-center py-10 hidden last:block">
              <p className="text-3xl font-bold">No Content</p>
            </div>
            {resources?.length > 0 && (
              <div className="grid md:grid-cols-3 gap-10">
                {resources.map((resource: any) => (
                  <BlogCard key={resource._id} blog={resource} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
