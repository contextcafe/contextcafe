export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14">
      {/* Hero Section */}
      <section className="mb-14">
        <h1 className="text-4xl font-semibold mb-4">
          Constitutional Law, Explained with Context
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          ContextCafe is a constitutional law knowledge platform designed for law
          students, judiciary aspirants, and researchers who want to understand
          constitutional principles beyond memorisation.
        </p>
      </section>

      {/* What ContextCafe Is */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">What ContextCafe Is</h2>
        <p className="text-gray-700 max-w-4xl">
          ContextCafe focuses on explaining constitutional provisions, doctrines,
          and judgments by placing them in their proper legal and judicial
          context. The aim is to help learners understand why a provision exists,
          how courts interpret it, and how it is applied in practice.
        </p>
      </section>

      {/* Who It Is For */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">Who It Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>LL.B. and integrated law students</li>
          <li>Judiciary aspirants</li>
          <li>Law teachers and academic researchers</li>
          <li>Advocates seeking clarity in drafting and legal language</li>
        </ul>
      </section>

      {/* How It Helps */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">How ContextCafe Helps</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Article-wise explanations of constitutional provisions</li>
          <li>Structured summaries of landmark judgments</li>
          <li>Conceptual clarity for exam and research writing</li>
          <li>Language and drafting support tools for legal writing</li>
        </ul>
      </section>

      {/* Philosophy */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-medium mb-3">Our Philosophy</h2>
        <p className="text-gray-700 max-w-4xl">
          Law is not meant to be memorised in isolation. Constitutional law, in
          particular, must be understood in the context of its history, judicial
          interpretation, and evolving social realities. ContextCafe follows a
          context-first approach to legal learning.
        </p>
      </section>
    </main>
  );
}
