"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowRight, ArrowLeft, Check, Building2, Wrench, User } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import Footer from "@/components/Footer";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const BUSINESS_TYPES = [
  "HVAC / Heating & Cooling",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping / Lawn Care",
  "Restaurant / Food Service",
  "Retail / E-commerce",
  "Healthcare / Medical",
  "Legal / Professional Services",
  "Real Estate",
  "Construction / Contracting",
  "Other",
];

const SERVICES = [
  { id: "Free Demo Site", label: "Free Demo Site", description: "See your new site before you pay" },
  { id: "Website Design", label: "Website Design", description: "Custom site built from scratch" },
  { id: "SEO Optimization", label: "SEO & Rankings", description: "Get found on Google" },
  { id: "Hosting & Maintenance", label: "Hosting & Maintenance", description: "Keep your site fast & updated" },
  { id: "Full Package", label: "Full Package", description: "Website + SEO + maintenance" },
];

type FormData = {
  businessType: string;
  service: string;
  firstName: string;
  lastName: string;
  email: string;
  business: string;
  phone: string;
  message: string;
};

const STEP_LABELS = ["Your Business", "What You Need", "Contact Info"];
const STEP_ICONS = [Building2, Wrench, User];

function ContactPageInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    businessType: "",
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [direction, setDirection] = useState(1);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service && SERVICES.find((s) => s.id === service)) {
      setForm((prev) => ({ ...prev, service }));
      setStep(1);
    }
  }, [searchParams]);

  // Capture UTM params from URL
  const utmSource = searchParams.get("utm_source") || "";
  const utmMedium = searchParams.get("utm_medium") || "";
  const utmCampaign = searchParams.get("utm_campaign") || "";

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function back() {
    setDirection(-1);
    setStep((s) => s - 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        business: form.business,
        service: form.service,
        phone: form.phone,
        message: `Business Type: ${form.businessType}\nPhone: ${form.phone}\n\n${form.message}`,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        ...(turnstileToken && { turnstileToken }),
      }),
    });
    if (res.ok) {
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", { send_to: "AW-17993946041" });
      }
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  const canProceedStep0 = form.businessType !== "";
  const canProceedStep1 = form.service !== "";

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  if (status === "success") {
    return (
      <main className="bg-white text-gray-900 pt-24 min-h-screen">
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <h2 className="text-3xl font-extrabold mb-3">We got your message!</h2>
              <p className="text-gray-500 mb-8">We'll be in touch within 24 hours. Keep an eye on your inbox.</p>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-left">
                <p className="text-blue-800 font-semibold text-sm mb-1">Want to move faster?</p>
                <p className="text-blue-700 text-sm mb-4">
                  Fill out our onboarding form now so we can hit the ground running when we connect.
                </p>
                <a
                  href="https://www.jotform.com/form/260581311492049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Fill Out Onboarding Form →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-gray-500 text-lg mb-6">
              Tell us about your project — takes less than 2 minutes.
            </p>
            <a
              href="https://calendly.com/apexgrowthmanagement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              <CalendarDays className="w-4 h-4" /> Prefer to talk? Book a free 15-min call
            </a>
          </div>

          {/* Step Progress */}
          <div className="flex items-center justify-center gap-0 mb-10">
            {STEP_LABELS.map((label, i) => {
              const Icon = STEP_ICONS[i];
              const isComplete = i < step;
              const isActive = i === step;
              return (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isComplete
                          ? "bg-blue-600 text-white"
                          : isActive
                          ? "bg-blue-600 text-white ring-4 ring-blue-100"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isComplete ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? "text-blue-600" : isComplete ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEP_LABELS.length - 1 && (
                    <div
                      className={`w-16 sm:w-24 h-0.5 mx-2 mb-4 transition-all duration-500 ${
                        i < step ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                    <h2 className="text-xl font-bold mb-2">What type of business do you run?</h2>
                    <p className="text-gray-400 text-sm mb-6">This helps us tailor our approach to your industry.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {BUSINESS_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => set("businessType", type)}
                          className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            form.businessType === type
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={next}
                      disabled={!canProceedStep0}
                      className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full text-base transition-colors"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                    <h2 className="text-xl font-bold mb-2">What are you looking for?</h2>
                    <p className="text-gray-400 text-sm mb-6">Select the service that best fits your goals.</p>
                    <div className="flex flex-col gap-3">
                      {SERVICES.map((svc) => (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => set("service", svc.id)}
                          className={`text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                            form.service === svc.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >
                          <div>
                            <p className={`font-semibold text-sm ${form.service === svc.id ? "text-blue-700" : "text-gray-800"}`}>
                              {svc.label}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5">{svc.description}</p>
                          </div>
                          {form.service === svc.id && (
                            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-8">
                      <button
                        type="button"
                        onClick={back}
                        className="flex items-center gap-2 px-5 py-4 rounded-full border border-gray-200 text-gray-500 hover:border-gray-300 font-medium text-sm transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        onClick={next}
                        disabled={!canProceedStep1}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full text-base transition-colors"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                      <h2 className="text-xl font-bold mb-2">Last step — your contact info</h2>
                      <p className="text-gray-400 text-sm mb-6">We'll reach out within 24 hours.</p>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-500 font-medium">First Name *</label>
                            <input
                              name="firstName"
                              value={form.firstName}
                              onChange={(e) => set("firstName", e.target.value)}
                              required
                              type="text"
                              placeholder="John"
                              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-500 font-medium">Last Name *</label>
                            <input
                              name="lastName"
                              value={form.lastName}
                              onChange={(e) => set("lastName", e.target.value)}
                              required
                              type="text"
                              placeholder="Smith"
                              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm text-gray-500 font-medium">Email *</label>
                          <input
                            name="email"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            required
                            type="email"
                            placeholder="john@example.com"
                            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-500 font-medium">Business Name</label>
                            <input
                              name="business"
                              value={form.business}
                              onChange={(e) => set("business", e.target.value)}
                              type="text"
                              placeholder="Your Business LLC"
                              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm text-gray-500 font-medium">Phone</label>
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={(e) => set("phone", e.target.value)}
                              type="tel"
                              placeholder="(919) 555-0123"
                              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm text-gray-500 font-medium">Anything else we should know?</label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={(e) => set("message", e.target.value)}
                            rows={4}
                            placeholder="Current website URL, goals, timeline, budget range..."
                            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                          />
                        </div>
                      </div>
                      {TURNSTILE_SITE_KEY && (
                        <div className="flex justify-center mt-4">
                          <Turnstile
                            ref={turnstileRef}
                            siteKey={TURNSTILE_SITE_KEY}
                            onSuccess={setTurnstileToken}
                            onExpire={() => setTurnstileToken("")}
                          />
                        </div>
                      )}
                      {status === "error" && (
                        <p className="text-red-500 text-sm mt-4 text-center">
                          Something went wrong. Please try again.
                        </p>
                      )}
                      <div className="flex gap-3 mt-6">
                        <button
                          type="button"
                          onClick={back}
                          className="flex items-center gap-2 px-5 py-4 rounded-full border border-gray-200 text-gray-500 hover:border-gray-300 font-medium text-sm transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-base transition-colors"
                        >
                          {status === "sending" ? "Sending..." : "Send Message"}
                          {status !== "sending" && <ArrowRight className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact details */}
          <div className="flex flex-col items-center gap-2 mt-8 text-sm text-gray-400">
            <p>
              Call or text:{" "}
              <a href="tel:9197440504" className="text-blue-600 hover:text-blue-500 transition-colors">
                (919) 744-0504
              </a>{" "}
              ·{" "}
              <a href="tel:9196065609" className="text-blue-600 hover:text-blue-500 transition-colors">
                (919) 606-5609
              </a>
            </p>
            <p>
              Or email:{" "}
              <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:text-blue-500 transition-colors">
                admin@apexgrowthmanagement.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return <Suspense><ContactPageInner /></Suspense>;
}
