import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "license", title: "2. Use License" },
    { id: "disclaimer", title: "3. Disclaimer" },
    { id: "limitations", title: "4. Limitations" },
    { id: "privacy", title: "5. Privacy Policy" },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-500">
              On this page
            </h4>
            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-slate-500">
              Last updated on <time dateTime="2026-03-05">March 05, 2026</time>
            </p>
          </header>

          <div className="prose prose-slate max-w-none space-y-12">
            <section id="acceptance">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing this website, you are agreeing to be bound by these
                website Terms and Conditions of Use, all applicable laws and
                regulations, and agree that you are responsible for compliance
                with any applicable local laws. The materials contained in this
                website are protected by applicable copyright and trademark law.
              </p>
            </section>

            <Separator />

            <section id="license">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Use License
              </h2>
              <div className="text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on our platform for
                  personal, non-commercial transitory viewing only.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may not modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose;</li>
                  <li>
                    Attempt to decompile or reverse engineer any software;
                  </li>
                  <li>Remove any copyright or other proprietary notations.</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section id="disclaimer">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Disclaimer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The materials on our website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <Separator />

            <section id="limitations">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Limitations
              </h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall our company or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our Internet site, even
                if an authorized representative has been notified orally or in
                writing of the possibility of such damage.
              </p>
            </section>

            <Separator />

            <section id="privacy">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Your privacy is important to us. It is our policy to respect
                your privacy regarding any information we may collect from you
                across our website. We only ask for personal information when we
                truly need it to provide a service to you.
              </p>
            </section>
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-400">
              Questions about our Terms?{" "}
              <a
                href="mailto:support@example.com"
                className="underline hover:text-primary"
              >
                Contact our legal team
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;
