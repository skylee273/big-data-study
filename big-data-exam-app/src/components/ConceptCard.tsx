'use client';

import { Concept } from '@/data/conceptsData';

interface ConceptCardProps {
  concept: Concept;
  isCompleted: boolean;
  onClick: () => void;
}

export default function ConceptCard({ concept, isCompleted, onClick }: ConceptCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-xl p-4 cursor-pointer
        border-2 transition-all duration-200
        hover:shadow-lg hover:scale-[1.02] hover:border-primary-300 dark:hover:border-primary-600
        ${isCompleted
          ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
          : 'border-gray-200 dark:border-gray-700'
        }
      `}
    >
      <div className="flex items-start gap-3">
        {/* Emoji Icon */}
        <div className="text-3xl flex-shrink-0">
          {concept.emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
              {concept.category}
            </span>
            {isCompleted && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                완료
              </span>
            )}
          </div>

          {/* Keyword */}
          <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
            {concept.keyword}
          </h3>

          {/* Preview */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {concept.simpleExplanation.split('\n')[0]}
          </p>
        </div>

        {/* Chevron */}
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
