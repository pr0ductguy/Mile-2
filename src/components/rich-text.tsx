import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const sharedClasses = "dark:text-white";
const bodyClasses = "text-md ";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="mx-auto my-5 max-w-[456px]">
          <Image
            placeholder="blur"
            alt={value.alt}
            className="mb-0 cursor-pointer object-cover"
            src={urlForImage(value.asset).url()}
            width={456}
            height={311}
          />
          {value.alt && (
            <p className="text-center text-base text-gray-400">{value.alt}</p>
          )}
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className={`mb-4 text-2xl  md:text-3xl lg:text-4xl ${sharedClasses}`}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={`mb-4 text-xl md:text-2xl lg:text-3xl ${sharedClasses}`}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className={`text-xl  md:text-2xl lg:text-3xl ${sharedClasses}`}>
        {children}
      </h3>
    ),
    normal: ({ children }: any) => <p>{children}</p>,

    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-[#8F00FF] py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="decoreration-[#8F00FF] underline hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
