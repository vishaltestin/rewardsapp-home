"use client";

import { Counter } from "@/components/Counter";
import FoodCard from "@/components/Home/FoodCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCheckIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const giftBoxes = [
  {
    id: "hr-teams",
    category: "HR TEAMS",
    title: "Empower Your Employees",
    bgColor: "bg-blue-500",
    buttonBg: "bg-white/20",
  },
  {
    id: "marketing-teams",
    category: "MARKETING TEAMS",
    title: "Enrich your marketing efforts",
    bgColor: "bg-pink-500",
    buttonBg: "bg-white/20",
  },
  {
    id: "sales-teams",
    category: "SALES TEAMS",
    title: "Lead your sales team to success",
    bgColor: "bg-yellow-500",
    buttonBg: "bg-white/20",
  },
  {
    id: "Channel Partners",
    category: "DEVELOPERS",
    title: "Build trust and drive partner engagement",
    bgColor: "bg-green-500",
    buttonBg: "bg-white/20",
  },
];

const Welcome = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <style>
          {`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        .animate-gradient-x {
          background: linear-gradient(-45deg, #1e3a8a, #7e22ce, #0e7490, #1e3a8a);
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        `}
        </style>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-gradient-x" />

        {/* Enhanced Animated Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow" />

        {/* New Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-400/5 rounded-full blur-2xl"
          style={{
            animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
          style={{
            animation: "bounce 4s infinite",
          }}
        />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            animation: "pulse 2s ease-in-out infinite alternate",
          }}
        />

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Rewards • Experiences • Loyalty
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Smart Gifting
              <br />
              <span className="text-white">for Smart Workplaces</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create Lasting Impressions With Purpose-Driven Gifting
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="group h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                asChild
              >
                <Link to="/signup">
                  Get Started for Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 bg-transparent border-white/20 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:text-white"
              >
                <Link to="/ecom/today">See Store</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative rounded-b-3xl custom-bg-gradient-2 min-h-[100vh] overflow-hidden flex justify-center items-center flex-col px-4"
        id="platform"
      >
        <div className="custom-bg-gradient-wrapper pointer-events-none">
          <div className="custom-bg-gradient pointer-events-none"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Built for teams that drive culture and business growth
          </h2>
        </div>
        <div className="max-w-6xl mx-auto -mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {giftBoxes.map((box) => (
              <div
                key={box.id}
                className="relative h-[370px] bottom-[-90px] hover:bottom-0 cursor-pointer group overflow-hidden transition-all ease-out"
              >
                <div className="w-full flex justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/67ebfd6792ff5801a295a16d/680147d4207f00c55d9c73cd_gift-bow-blue.svg"
                    alt=""
                  />
                </div>
                <div
                  className={`${box.bgColor} h-full rounded-t-3xl p-6 text-white`}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="text-xs font-semibold opacity-90 mb-3 tracking-wider uppercase">
                      {box.category}
                    </div>

                    <h3 className="text-2xl font-bold mb-5 leading-tight whitespace-pre-line">
                      {box.title}
                    </h3>

                    <div className="mb-3">
                      <button
                        className={`inline-flex items-center justify-center w-24 border border-white h-14 rounded-full ${box.buttonBg} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30`}
                      >
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="self-end">
                      <img
                        className="size-20"
                        src="images/gift-box.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="catalog"
        className="container min-h-screen overflow-hidden flex justify-center items-center flex-col px-4 mb-10 max-w-6xl mx-auto"
      >
        <FoodCard />
      </section>

      <section
        id="solutions"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30"
      >
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible rewards, delivered your way
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Points, codes, or links—fast, easy, and ready for teams of any
              size.
            </p>
          </div>

          {/* Rewards Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Reward Points Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reward Points
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Simple, scalable recognition for every team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Let users redeem points anytime across rewards
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Perfect for ongoing recognition and loyalty programs
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">
                  Ideal for: Employee recognition, loyalty programs, performance
                  bonuses
                </p>
              </div>
            </div>

            {/* Reward Codes Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reward Codes
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Easy, instant gifting for any audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Share unique codes users can redeem fully or partially
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Combine multiple codes for flexible redemption
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Perfect for surveys, contests, and marketing campaigns
                </li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <p className="text-sm text-purple-700 font-medium">
                  Ideal for: Surveys, contests, promotions, event giveaways
                </p>
              </div>
            </div>

            {/* Reward Links Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reward Links
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send instant rewards with a single click.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Share trackable links via email, SMS, or WhatsApp
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Instant delivery with real-time tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Perfect for sales outreach and one-time gifting
                </li>
              </ul>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-sm text-green-700 font-medium">
                  Ideal for: Sales outreach, customer appreciation, one-time
                  gifts
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your reward strategy?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-2 border-gray-300 hover:border-gray-400 bg-transparent text-gray-700 hover:text-gray-900 transition-all duration-300"
                asChild
              >
                <Link to="/book-a-demo">
                  Get a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  All-in-One Gifting Platform
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                One-stop shop for the perfect gift,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  every time
                </span>
                , for any occasion
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Lukit Gifts makes gifting simple—bringing joy, expressing
                appreciation, and handling everything end-to-end.
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {/* Global Shipping */}
                <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCheckIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Global Shipping & Delivery
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCheckIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Automated Gifting
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCheckIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Customized Experiences & Notifications
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCheckIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Gifts They Really Want
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCheckIcon className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mobile optimization for gifting on the go
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              {/* Main Card with Gradient Border */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  {/* Mobile Device Mockup */}
                  <div className="bg-gray-900 rounded-2xl p-4 mx-auto max-w-xs">
                    {/* Notch */}
                    <div className="w-24 h-6 bg-gray-900 rounded-b-lg mx-auto mb-4"></div>

                    {/* Screen Content */}
                    <div className="bg-white rounded-lg p-4 space-y-4">
                      {/* Header */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900">
                          All Features Included
                        </h4>
                        <p className="text-xs text-gray-600">
                          Complete gifting solution
                        </p>
                      </div>

                      {/* Feature Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-medium text-gray-700">
                            Global Shipping
                          </p>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-medium text-gray-700">
                            Automated
                          </p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-medium text-gray-700">
                            Customized
                          </p>
                        </div>
                        <div className="text-center p-2 bg-orange-50 rounded-lg">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-orange-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-medium text-gray-700">
                            AI Gifts
                          </p>
                        </div>
                      </div>

                      {/* Reward Types */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium text-gray-900">
                            Reward Types
                          </p>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            All Included
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Points</span>
                          <span>Codes</span>
                          <span>Links</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                          See All Features
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 text-sm font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          View Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-float-slow"></div>

              {/* Feature Icons */}
              <div className="absolute top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div className="absolute bottom-8 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="results"
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container px-4 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lukit Gifts helps teams achieve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                measurable growth
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real customers. Watch the numbers grow.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Engagement Rate */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-green-400 text-sm font-semibold">
                  Engagement
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={92} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Rewards that truly motivate employees & partners
              </p>
            </div>

            {/* Reward Utilization */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-blue-400 text-sm font-semibold">
                  Utilization
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={88} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Most recipients redeem their rewards instantly
              </p>
            </div>

            {/* Loyalty Increase */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <span className="text-purple-400 text-sm font-semibold">
                  Loyalty
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={35} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Stronger relationships with customers & channel partners
              </p>
            </div>

            {/* Sales Performance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span className="text-orange-400 text-sm font-semibold">
                  Sales
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={42} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Incentive-led growth for sales teams
              </p>
            </div>

            {/* Program Participation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-cyan-400 text-sm font-semibold">
                  Participation
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={3} duration={2000} />×
              </h3>
              <p className="text-gray-300 text-sm">
                More involvement in contests, surveys & R&R programs
              </p>
            </div>

            {/* Reward Distribution Speed */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-red-400 text-sm font-semibold">
                  Speed
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={70} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Automated workflows reduce manual effort
              </p>
            </div>

            {/* Employee Satisfaction */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <span className="text-pink-400 text-sm font-semibold">
                  Satisfaction
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={55} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Appreciation that builds lasting culture
              </p>
            </div>

            {/* Brand Recall */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <span className="text-yellow-400 text-sm font-semibold">
                  Brand Recall
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={60} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                Branded gifts that stay top-of-mind
              </p>
            </div>

            {/* ROI */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <span className="text-emerald-400 text-sm font-semibold">
                  ROI
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={2.4} duration={2000} />×
              </h3>
              <p className="text-gray-300 text-sm">
                Better outcomes with measurable performance
              </p>
            </div>

            {/* Channel Partner Activation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                    />
                  </svg>
                </div>
                <span className="text-indigo-400 text-sm font-semibold">
                  Partners
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <Counter value={47} duration={2000} />%
              </h3>
              <p className="text-gray-300 text-sm">
                More engaged, high-performing partners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-ping"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Transform Your Workplace Culture
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to upgrade your workplace experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                effortlessly?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Simplify how you reward, recognise, and delight your teams.
            </p>

            <p className="text-lg text-gray-400 mb-12 font-light italic">
              One smart platform, endless impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="group h-14 px-10 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl border-0"
                asChild
              >
                <Link to="/book-a-demo">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book a Demo Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-400/10 rounded-full blur-2xl animate-float-slow"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
