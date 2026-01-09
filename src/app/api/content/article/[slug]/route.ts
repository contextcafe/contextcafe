import { NextResponse } from "next/server";
import { article14 } from "@/server/content/articles/article-14";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (slug === "article-14") {
    return NextResponse.json(article14);
  }

  return NextResponse.json(
    { error: "Article not found" },
    { status: 404 }
  );
}
