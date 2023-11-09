import BlogCard from "@/components/blog/blog-card";
import Hero from "@/components/shared/Hero";

const BlogPage = () => {
  return (
    <>
      <Hero title="Blog" subtitle="Explore Our Latest Insights and Stories" />
      <section>
        <div className="wrapper py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
