'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/product-card';
import CheckoutButton from "@/components/ui/checkout-button";
import {Footer} from "@/components/ui/Footer";

// --- Type Definitions ---
interface Addon {
  id: string;
  name: string;
  price: number;
}

interface AddonCategory {
  id: string;
  name: string;
  items: Addon[];
}

interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
}

// --- Data ---
const packages: Package[] = [
  { id: 'standard', name: 'Standard', price: 800, features: ['Themed Decorations', 'Premium Seating', '3-Hour slot', 'Music System'] },
  { id: 'premium', name: 'Premium', price: 1200, features: ['Custom Decorations', 'VIP Seating', '4-Hour slot', 'DJ Service'] },
  { id: 'deluxe', name: 'Deluxe', price: 2000, features: ['Full Venue Customization', 'Luxury Seating', 'All-Day Access', 'Live Band'] }
];

const addonCategories: AddonCategory[] = [
  {
    id: 'decorations',
    name: 'Decorations',
    items: [
      { id: 'balloons', name: 'Balloon Arch', price: 50 },
      { id: 'flowers', name: 'Floral Arrangements', price: 80 },
      { id: 'lighting', name: 'Mood Lighting', price: 60 },
    ],
  },
  {
    id: 'food',
    name: 'Food & Drinks',
    items: [
      { id: 'cake', name: 'Custom Birthday Cake', price: 100 },
      { id: 'catering', name: 'Full Catering Service', price: 400 },
      { id: 'bar', name: 'Open Bar', price: 300 },
    ],
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    items: [
      { id: 'magician', name: 'Magician', price: 200 },
      { id: 'photo_booth', name: 'Photo Booth', price: 150 },
      { id: 'live_music', name: 'Acoustic Duo', price: 350 },
    ],
  },
  {
    id: 'services',
    name: 'Additional Services',
    items: [
      { id: 'photography', name: 'Professional Photography', price: 250 },
      { id: 'valet', name: 'Valet Parking', price: 120 },
      { id: 'cleaning', name: 'Post-Party Cleaning', price: 90 },
    ],
  },
];

// --- Main Component ---
export default function BookingsPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [activeTab, setActiveTab] = useState<string>(addonCategories[0].id);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const handleSelectAddon = (addon: Addon) => {
    setSelectedAddons(prev =>
      prev.some(a => a.id === addon.id)
        ? prev.filter(a => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const totalCost = useMemo(() => {
    const packageCost = selectedPackage ? selectedPackage.price : 0;
    const addonsCost = selectedAddons.reduce((total, addon) => total + addon.price, 0);
    return packageCost + addonsCost;
  }, [selectedPackage, selectedAddons]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-neutral-900 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0 z-20">
        <Link href="/" className="text-3xl font-bold tracking-tight text-blue-600 cursor-pointer">BookMyBirthday</Link>
        <nav className="flex gap-10 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/bookings" className="text-blue-600 font-semibold transition-colors">Bookings</Link>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-300">Choose Your Perfect Package</h1>
          <p className="text-lg text-gray-400 mt-2">Select a package to get started with your event planning.</p>
        </div>

        {/* Packages Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              onClick={() => handleSelectPackage(pkg)}
              className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${selectedPackage?.id === pkg.id ? 'bg-blue-600 text-white ring-4 ring-blue-300' : 'bg-neutral-800 text-white hover:shadow-2xl hover:-translate-y-2'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">{pkg.name}</h3>
              <p className={`text-4xl text-center font-extrabold mb-4 ${selectedPackage?.id === pkg.id ? 'text-white' : 'text-gray-200'}`}>₹{pkg.price}</p>
              <ul className="space-y-2 mt-8">
                {pkg.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add-ons and Calculator Section */}
        {selectedPackage && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Add-ons Tabs */}
            <div className="lg:col-span-2 bg-neutral-800 p-8 rounded-xl shadow-xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-200">Customize with Add-ons</h2>
              <div className="flex border-b mb-6">
                {addonCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`py-2 px-4 text-lg font-semibold transition-colors ${activeTab === category.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-300 hover:text-blue-500'}`}>
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addonCategories.find(c => c.id === activeTab)?.items.map(addon => (
                  <Card
                    key={addon.id}
                    name={addon.name}
                    price={addon.price}
                    onClick={() => handleSelectAddon(addon)}
                    isSelected={selectedAddons.some(a => a.id === addon.id)}
                  />
                ))}
              </div>
            </div>

            {/* Cost Calculator */}
            <div className="bg-neutral-800 p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 border-b pb-4 text-gray-200">Cost Breakdown</h2>
              <div className="space-y-4">
                {selectedPackage && (
                  <div className="flex justify-between text-lg text-gray-200">
                    <span>{selectedPackage.name} Package</span>
                    <span className="font-semibold">₹{selectedPackage.price}</span>
                  </div>
                )}
                {selectedAddons.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="text-xl font-semibold mb-2 text-gray-200">Add-ons:</h4>
                    {selectedAddons.map(addon => (
                      <div key={addon.id} className="flex justify-between text-base text-gray-200">
                        <span>{addon.name}</span>
                        <span className="font-semibold">₹{addon.price}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="border-t-2 border-blue-600 pt-4 mt-4">
                  <div className="flex justify-between text-2xl font-extrabold text-gray-200">
                    <span>Total Cost:</span>
                    <span>₹{totalCost}</span>
                  </div>
                </div>
              </div>
              <CheckoutButton/>
            </div>
          </div>
        )}
      </main>

      <Footer/>
    </div>
  );
}
