import React, { useState } from 'react';
import { Clock, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

const trustIndicators = [
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock service when you need it most"
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full coverage for your peace of mind"
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently top-rated by our customers"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We don't leave until you're happy"
  }
];

export default function TrustGrid() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
