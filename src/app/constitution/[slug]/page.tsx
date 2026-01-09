import { notFound } from "next/navigation";

type Article = {
  title: string;
  description: string;
  content: string;
};

async function getArticle(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/content/article/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | ContextCafe`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold mb-4">
        {article.title}
      </h1>

      <article className="prose prose-gray max-w-none">
        {article.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </main>
  );
}
