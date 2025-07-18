import Link from "next/link";
import { ServicesSection } from "@/components/home/services-section";
import {InteractiveHoverButton} from "@/components/ui/interactive-button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import ExploreButton from "@/components/ui/explore-button";
import {GooeyText} from "@/components/ui/gooey-text-morphing";
import {TypingAnimation} from "@/components/ui/typing-animation";

import ContactForm from "@/components/ui/contact";
import Social from "@/components/ui/social";
import {Footer} from "@/components/ui/Footer";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans  text-gray-900">
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-56 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 ">
          <div className="h-[160px] flex items-center justify-center">
            <GooeyText
              texts={["Illuminate", "Your", "Birthday", "Experience"]}
              morphTime={1.6}
              cooldownTime={0.4}
              className="font-bold font-mono"
              textClassName="text-white"
            />
          </div>
          <TypingAnimation
              className="text-4xl text-white"
              text="Crafting Unforgettable Moments with Style & Elegance"
          />
          <Link href="/bookings" passHref className="mt-8">
            <InteractiveHoverButton />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-amber-100">About BookMyBirthday</h2>
          <p className="text-lg mb-6 text-gray-300 font-playfair leading-[40px]">At BookMyBirthday, we believe that every occasion deserves to shine. With our passion for perfection and years of experience, we transform your vision into reality. Our team of dedicated professionals works tirelessly to ensure that every detail of your event is meticulously planned and flawlessly executed.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-100">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Choose
            </span>
            <p className="text-[15px] font-bold mt-5 text-gray-200 font-playfair">Choose your perfect package from the Basic, Standard, Premium options. Each package is carefully crafted to suit different celebration styles and budgets.</p>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Customize
            </span>
            <p className="text-[15px] font-bold mt-5 text-gray-200 font-playfair">Personalize your celebration with our AMAZING Add-Ons. Choose from Entertainment, Food, Decorations and Additional Services to make your event unique.</p>
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Celebrate
            </span>
            <p className="text-[15px] font-bold mt-5 text-gray-200 font-playfair">Sit back and enjoy your perfectly planned celebration! Our professional team handles every detail, ensuring your special day is unforgettable and stress-free.</p>
          </NeonGradientCard>
        </div>
        <div className="flex justify-center mt-15">
          <Link href="/bookings" passHref><ExploreButton/></Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center flex">
          <ContactForm/>
          <div className="flex justify-center items-center gap-6 mt-6 text-2xl">
            <Social/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

    </div>
  );
}
