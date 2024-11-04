/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const RightSidebar = () => {
  const hotQuestions = [
    { id: "1", title: "How to use react?" },
    { id: "2", title: "how to use react with React" },
    { id: "3", title: "how to use react hooks" },
    { id: "4", title: "how to use react with Next.js" },
  ];

  const popularTags = [
    { _id: "1", name: "react", questions: 100 },
    { _id: "2", name: "javascript", questions: 200 },
    { _id: "3", name: "nextjs", questions: 300 },
    { _id: "4", name: "tailwindcss", questions: 400 },
    { _id: "5", name: "css", questions: 500 },
  ];
  return (
    <section
      className="custom-scrollbar background-light900_dark200 light-border sticky
  right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-32
  shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ id, title }) => (
            <Link
              href={ROUTES.PROFILE(id)}
              className="flex cursor-pointer items-center justify-between gap-7"
              key={id}
            >
              <p className="body-medium text-dark500_light700">{title}</p>

              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-1">
        <h3>Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              questions={questions}
              name={name}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
