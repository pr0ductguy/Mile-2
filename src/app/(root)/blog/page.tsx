import BlogList from "@/components/blog/blog-list";
import Hero from "@/components/shared/Hero";
import { Suspense } from "react";

export const revalidate = 3600;

export const metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  return (
    <>
      <Hero title="Blog" subtitle="Explore Our Latest Insights and Stories" />
      <section>
        <div className="wrapper py-20">
          <div>
            <div className="text-center py-10 hidden last:block">
              <p className="text-3xl font-bold">No Content</p>
            </div>
            <Suspense fallback={<BlogList.Loading />}>
              <BlogList />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
