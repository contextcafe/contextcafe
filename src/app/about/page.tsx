export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold mb-6">
        About ContextCafe
      </h1>

      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          ContextCafe was created to address a common challenge in legal
          education: constitutional law is often studied as information rather
          than as a system of principles shaped by history, judicial reasoning,
          and social context.
        </p>

        <p className="text-gray-700 mb-4">
          The platform follows a context-first approach to learning. Instead of
          focusing solely on memorisation, ContextCafe encourages understanding
          why constitutional provisions exist, how courts interpret them, and
          how constitutional principles evolve over time.
        </p>

        <p className="text-gray-700">
          ContextCafe is intended for law students, judiciary aspirants,
          researchers, and legal professionals who seek clarity in constitutional
          concepts and legal language.
        </p>
      </section>

      <section className="border-t pt-6">
        <h2 className="text-xl font-medium mb-3">
          Academic & Educational Purpose
        </h2>
        <p className="text-gray-700">
          ContextCafe is an independent educational platform. All content and
          tools provided are designed strictly for academic learning, research,
          and drafting support. The platform does not offer legal advice or
          client-specific guidance.
        </p>
      </section>
    </main>
  );
}
