import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    profilePicture: string;
  };
  slug: string;
};

const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

const HeroPost = ({
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
    <section className="grid grid-cols-1 gap-5">
      <div className="col-span-1">
        <CoverImage
          title={title}
          src={coverImage || DEFAULT_COVER}
          slug={slug}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-2">
        <h3 className="text-xl font-bold leading-snug lg:text-3xl text-slate-800 dark:text-neutral-50">
          <Link
            as={postURL}
            href={postURL}
            className="leading-tight tracking-tight hover:underline hover:text-primary-600 dark:hover:text-primary-500"
          >
            {title}
          </Link>
        </h3>
        <Link as={postURL} href={postURL}>
          <p className="leading-snug text-md text-slate-500 dark:text-neutral-400">
            {excerpt}
          </p>
        </Link>
        <div className="text-sm text-slate-500 dark:text-neutral-300">
          <Link as={postURL} href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
        {/* <div className="flex flex-row items-center gap-2">
          <Link as={postURL} href={postURL}>
            <Avatar
              size={8}
              name={author.name}
              picture={author.profilePicture}
            />
          </Link>
          <span className="text-sm text-slate-500 dark:text-neutral-300">
            &middot;
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default HeroPost;
