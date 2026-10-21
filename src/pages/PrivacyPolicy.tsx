import { Separator } from "@/components/ui/separator";
import { ShieldCheck, EyeOff, Lock, Share2 } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    { id: "collection", title: "1. Data Collection" },
    { id: "usage", title: "2. How We Use Data" },
    { id: "sharing", title: "3. Information Sharing" },
    { id: "security", title: "4. Data Security" },
    { id: "rights", title: "5. Your Rights" },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Navigation Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-slate-400">
              Contents
            </h4>
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-slate-500 hover:text-black hover:font-medium transition-all"
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
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 text-blue-600 rounded-full mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-lg">
              We value your trust. This policy explains how we handle your data
              and keep it safe.
            </p>
            <p className="text-sm text-slate-400 mt-2 italic">
              Effective Date: March 05, 2026
            </p>
          </header>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <EyeOff className="w-5 h-5 mb-2 text-slate-700" />
              <h4 className="font-bold text-sm mb-1">Minimal Tracking</h4>
              <p className="text-xs text-slate-500">
                We only collect what is strictly necessary for the service.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <Lock className="w-5 h-5 mb-2 text-slate-700" />
              <h4 className="font-bold text-sm mb-1">Secure Storage</h4>
              <p className="text-xs text-slate-500">
                Your data is encrypted using industry-standard protocols.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <Share2 className="w-5 h-5 mb-2 text-slate-700" />
              <h4 className="font-bold text-sm mb-1">No Selling</h4>
              <p className="text-xs text-slate-500">
                We never sell your personal information to third parties.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <section id="collection">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  We collect information that you provide directly to us when
                  you create an account, make a purchase, or communicate with
                  us. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Identifiers:</strong> Name, email address,
                    and billing address.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Log data, IP address, and
                    browser type.
                  </li>
                  <li>
                    <strong>Cookies:</strong> Small files used to enhance your
                    browsing experience.
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section id="usage">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. How We Use Your Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The information we collect is used strictly to provide,
                maintain, and improve our services. Specifically:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg text-slate-700 border-l-4 border-slate-900">
                "We use your data to personalize your experience and to send you
                technical notices, security alerts, and support messages."
              </div>
            </section>

            <Separator />

            <section id="sharing">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not share your personal information with companies,
                organizations, or individuals outside of our company except in
                the following cases: with your consent, for external processing
                (like payment gateways), or for legal reasons.
              </p>
            </section>

            <Separator />

            <section id="security">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We work hard to protect you and our platform from unauthorized
                access, alteration, disclosure, or destruction of information we
                hold. We use SSL encryption and regular security audits.
              </p>
            </section>

            <Separator />

            <section id="rights">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Depending on your location, you may have the right to access,
                delete, or limit the use of your personal data. You can exercise
                these rights by visiting your account settings or contacting us
                directly.
              </p>
            </section>
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400">
              Have concerns? Email us at{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-slate-900 font-medium hover:underline"
              >
                privacy@example.com
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
