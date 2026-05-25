'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-sm pr-4 leading-snug">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
