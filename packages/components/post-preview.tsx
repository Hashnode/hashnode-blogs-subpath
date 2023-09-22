import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "./interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  url: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const postURL = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;
  return (
    <div className="grid grid-cols-1 gap-5">
      {coverImage && (
        <div className="col-span-1">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      )}
      <div className="flex flex-col col-span-1 gap-2">
        <h3 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
          <Link
            as={postURL}
            href={postURL}
            className="hover:underline hover:text-primary-600 dark:hover:text-primary-500"
          >
            {title}
          </Link>
        </h3>
        <Link as={postURL} href={postURL}>
          <p className="leading-snug text-md text-slate-500 dark:text-neutral-400">
            {excerpt.length > 140 ? excerpt.substring(0, 140) + "…" : excerpt}
          </p>
        </Link>
        <div className="text-sm text-slate-500 dark:text-neutral-300">
          <Link as={postURL} href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
