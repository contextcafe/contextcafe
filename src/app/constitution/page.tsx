export default function ConstitutionPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-3xl font-semibold mb-4">
          Constitutional Law
        </h1>
        <p className="text-gray-700 max-w-3xl">
          This section organises constitutional provisions, doctrines, and
          landmark judgments in a structured and context-based manner. The focus
          is on understanding judicial reasoning and constitutional development,
          rather than rote learning.
        </p>
      </section>

      {/* Fundamental Rights */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">
          Fundamental Rights
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Article 14 – Equality Before Law</strong>
            <p className="text-sm text-gray-600">
              Core idea: Equality permits reasonable classification. The scope of
              Article 14 has evolved from formal equality to the doctrine of
              arbitrariness.
            </p>
          </li>

          <li>
            <strong>Article 19 – Freedoms</strong>
            <p className="text-sm text-gray-600">
              Core idea: Fundamental freedoms are subject to reasonable
              restrictions based on constitutional grounds.
            </p>
          </li>

          <li>
            <strong>Article 21 – Life and Personal Liberty</strong>
            <p className="text-sm text-gray-600">
              Core idea: Article 21 has been expanded through judicial
              interpretation to include substantive due process.
            </p>
          </li>
        </ul>
      </section>

      {/* Constitutional Doctrines */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">
          Constitutional Doctrines
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Doctrine of Basic Structure</strong>
            <p className="text-sm text-gray-600">
              Limits the amending power of Parliament by protecting the core
              features of the Constitution.
            </p>
          </li>

          <li>
            <strong>Doctrine of Severability</strong>
            <p className="text-sm text-gray-600">
              Allows valid portions of a law to survive if invalid provisions
              can be separated.
            </p>
          </li>

          <li>
            <strong>Doctrine of Eclipse</strong>
            <p className="text-sm text-gray-600">
              Addresses the operation of pre-constitutional laws that are
              inconsistent with fundamental rights.
            </p>
          </li>
        </ul>
      </section>

      {/* Landmark Judgments */}
      <section>
        <h2 className="text-2xl font-medium mb-3">
          Landmark Judgments
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Kesavananda Bharati v. State of Kerala</strong>
            <p className="text-sm text-gray-600">
              Established the doctrine of basic structure and reshaped
              constitutional amendment jurisprudence.
            </p>
          </li>

          <li>
            <strong>Maneka Gandhi v. Union of India</strong>
            <p className="text-sm text-gray-600">
              Expanded the scope of Article 21 and integrated Articles 14, 19,
              and 21 into a unified framework.
            </p>
          </li>

          <li>
            <strong>ADM Jabalpur v. Shivkant Shukla</strong>
            <p className="text-sm text-gray-600">
              A controversial judgment highlighting the tension between
              fundamental rights and emergency powers.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
