"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [mode, setMode] = useState<"grammar" | "rephrase">("grammar");
  const [tone, setTone] = useState("formal");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <main className="max-w-5xl mx-auto px-4 py-14">
      {/* Page Header */}
      <section className="mb-10">
        <h1 className="text-3xl font-semibold mb-3">
          Drafting & Language Support Tools
        </h1>
        <p className="text-gray-700 max-w-3xl">
          These tools assist with improving clarity, grammar, and structure in
          academic and legal writing. They are intended for educational and
          drafting support purposes only.
        </p>
      </section>

      {/* Tool Selector */}
      <section className="mb-8">
        <label className="block text-sm font-medium mb-2">
          Select Tool
        </label>
        <select
          value={mode}
          onChange={(e) =>
            setMode(e.target.value as "grammar" | "rephrase")
          }
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="grammar">Grammar & Clarity Check</option>
          <option value="rephrase">Rephrasing (Formal / Exam-ready)</option>
        </select>
      </section>

      {/* Input */}
      <section className="mb-8">
        <label className="block text-sm font-medium mb-2">
          Paste your text
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste academic or legal text here..."
          className="w-full border border-gray-300 rounded p-3 text-sm min-h-[160px]"
        />
      </section>

      {/* Tone Selector */}
      {mode === "rephrase" && (
        <section className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Rephrasing Tone
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="formal">Formal</option>
            <option value="simplified">Simplified</option>
            <option value="exam">Exam-ready</option>
          </select>
        </section>
      )}

      {/* Action Button */}
      <section className="mb-10">
        <button
          onClick={() =>
            setOutput(
              "This is a placeholder output. The processing logic will be connected via a secure server-side API."
            )
          }
          className="bg-gray-900 text-white px-5 py-2 rounded text-sm"
        >
          Improve Text
        </button>
      </section>

      {/* Output */}
      <section className="mb-12">
        <label className="block text-sm font-medium mb-2">
          Output
        </label>
        <textarea
          value={output}
          readOnly
          className="w-full border border-gray-300 rounded p-3 text-sm min-h-[160px] bg-gray-50"
        />
      </section>

      {/* Disclaimer */}
      <section className="border-t pt-6 text-sm text-gray-600">
        <p>
          These tools assist with language, grammar, and drafting clarity only.
          They do not provide legal advice, opinions, or client-specific
          guidance.
        </p>
      </section>
    </main>
  );
}
