import { notFound } from "next/navigation";
import { article14 } from "@/server/content/articles/article-14";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug !== "article-14") return {};

  return {
    title: `${article14.title} | ContextCafe`,
    description: article14.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug !== "article-14") notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold mb-4">
        {article14.title}
      </h1>

      <article className="prose prose-gray max-w-none">
        {article14.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </main>
  );
}

