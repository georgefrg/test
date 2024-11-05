import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

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
    author: { _id: "1", name: "josh" },
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
  const { query = "" } = await searchParams;

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
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
