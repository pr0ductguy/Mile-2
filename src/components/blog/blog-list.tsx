import { getBlogs } from "@/sanity/action";
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
      <div className="h-[500px] w-full overflow-hidden rounded-[20px] flex-col animate-pulse">
        <div className="flex items-center w-full justify-center  h-[260px] bg-gray-300 rounded  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full pt-5">
          <div className="h-3 w-48 bg-gray-200  dark:bg-gray-700 mb-8" />
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-4" />{" "}
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-8" />{" "}
          <div className="h-2.5 bg-gray-200  dark:bg-gray-700 w-48 mb-4" />{" "}
        </div>
      </div>{" "}
      <div className="h-[500px] w-full overflow-hidden rounded-[20px] flex-col animate-pulse">
        <div className="flex items-center w-full justify-center  h-[260px] bg-gray-300 rounded  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full pt-5">
          <div className="h-3 w-48 bg-gray-200  dark:bg-gray-700 mb-8" />
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-4" />{" "}
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-8" />{" "}
          <div className="h-2.5 bg-gray-200  dark:bg-gray-700 w-48 mb-4" />{" "}
        </div>
      </div>{" "}
      <div className="h-[500px] w-full overflow-hidden rounded-[20px] flex-col animate-pulse">
        <div className="flex items-center w-full justify-center  h-[260px] bg-gray-300 rounded  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full pt-5">
          <div className="h-3 w-48 bg-gray-200  dark:bg-gray-700 mb-8" />
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-4" />{" "}
          <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-8" />{" "}
          <div className="h-2.5 bg-gray-200  dark:bg-gray-700 w-48 mb-4" />{" "}
        </div>
      </div>
    </div>
  );
};
