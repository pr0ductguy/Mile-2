import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <div className="wrapper flex flex-col py-20 prose prose-xl ">
        <Skeleton className="h-20 mb-5" />
        <Skeleton className="h-14 mb-5 w-full max-w-md mx-auto" />
        <Skeleton className="h-[540px]" />
        <div className="max-w-4xl mx-auto w-full  space-y-4 mt-5">
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default loading;
