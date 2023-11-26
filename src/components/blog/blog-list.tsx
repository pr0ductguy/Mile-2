import { getBlogs } from "@/sanity/action";
import { Skeleton } from "../ui/skeleton";
import BlogCard from "./blog-card";

const BlogList = async () => {
  const resources = await getBlogs({
    query: "",
    category: "",
    page: "1",
  });

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {resources.map((resource: any) => (
        <BlogCard key={resource._id} blog={resource} />
      ))}
    </div>
  );
};

export default BlogList;

BlogList.Loading = function BLogListLoading() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <Skeleton className="w-full h-[500px] rounded-[20px]" />
      <Skeleton className="w-full h-[500px] rounded-[20px] hidden md:block" />
      <Skeleton className="w-full h-[500px] rounded-[20px] hidden md:block" />
    </div>
  );
};
