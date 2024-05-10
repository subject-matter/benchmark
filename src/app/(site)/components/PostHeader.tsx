import React from "react";

type Tag = {
  title: string;
};

type PostHeaderProps = {
  tags?: Tag[];
  publishDate?: string;
  subtitle?: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  tags,
  publishDate,
  subtitle,
}) => {
  return (
    <>
      <h1 className="mb-20 mt-20 text-sm-lg lg:mb-large lg:mt-[300px] lg:w-2/3 lg:text-lg">
        {title}
      </h1>
      {image && (
        <Image
          className="mb-20 lg:hidden"
          src={image}
          alt={title}
          width={2000}
          height={2000}
          priority
        />
      )}

      <div className="flex">
        {tags && tags.length > 0 && (
          <div className="mb-5 flex flex-wrap w-full lg:w-1/3">
            {tags.map((tag: Tag, index: number) => (
              <span
                key={index}
                className={`feature-pill mb-[7px] md:col-span-2 ${index === 0 ? "mr-2" : ""}`}
              >
                {tag.title}
              </span>
            ))}
          </div>
        )}
        {publishDate && (
          <div className="flex w-full lg:w-2/3">
            <span className="feature-pill mb-[7px] md:col-span-2">
              {new Date(publishDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        )}
        <div className="border border-grey my-5 h-[1px] border-dashed" />
        <span className="mb-7 text-sm font-medium">{subtitle}</span>
      </div>
    </>
  );
};

export default PostHeader;
