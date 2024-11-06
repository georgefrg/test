import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import HomeFilter from "@/components/filters/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to learn react",
    description: "I Want to learn react can anyone help me",
    tags: [
      {
        _id: "1",
        name: "react",
      },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "josh",
      image:
        "data:image/png;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Best practices for managing state in React",
    description:
      "What are the best strategies for managing state in a large React application?",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "state-management" },
    ],
    author: { _id: "2", name: "emma" },
    upvotes: 15,
    answers: 8,
    views: 150,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "React Router vs Next.js for routing",
    description:
      "Should I use React Router or Next.js for routing in a React app? What are the pros and cons?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "5", name: "next.js" },
      { _id: "6", name: "routing" },
    ],
    author: { _id: "3", name: "alex" },
    upvotes: 20,
    answers: 12,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
