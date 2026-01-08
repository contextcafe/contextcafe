import Image from "next/image";

export default function Home() {
  return (
<main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold mb-4">
        Constitutional Law, Explained with Context
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        ContextCafe is a knowledge platform for law students, judiciary aspirants,
        and researchers to understand constitutional law beyond memorisation.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-2">What ContextCafe Is</h2>
        <p className="text-gray-700">
          ContextCafe helps learners understand why constitutional provisions exist,
          how courts interpret them, and where they are applied.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-2">Who It Is For</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>LL.B. and integrated law students</li>
          <li>Judiciary aspirants</li>
          <li>Law teachers and researchers</li>
          <li>Advocates seeking drafting clarity tools</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-2">How ContextCafe Helps</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Article-wise constitutional explanations</li>
          <li>Landmark judgment summaries</li>
          <li>Exam-oriented answer structures</li>
          <li>Language and drafting support tools</li>
        </ul>
      </section>
    </main>   
  );
}
