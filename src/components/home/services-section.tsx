'use client';

import { GlowCard } from '@/components/ui/spotlight-card';

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-amber-100">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
        <GlowCard className="flex-1 bg-blue-50 rounded-lg p-8 shadow-sm text-center justify-center items-center">
          <h3 className="text-xl font-semibold mb-2 text-amber-400">Birthday Planning</h3>

        </GlowCard>
        <GlowCard className="flex-1 bg-blue-50 rounded-lg p-8 shadow-sm text-center justify-center items-center">
          <h3 className="text-xl font-semibold mb-2 text-red-400">Corporate Events</h3>

        </GlowCard>
        <GlowCard className="flex-1 bg-blue-50 rounded-lg p-8 shadow-sm text-center justify-center items-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-300">Private Celebrations</h3>
        </GlowCard>
      </div>
    </section>
  );
}
