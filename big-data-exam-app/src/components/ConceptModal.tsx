'use client';

import { Concept, getConceptById } from '@/data/conceptsData';
import { useEffect, useCallback } from 'react';

interface ConceptModalProps {
  concept: Concept;
  isCompleted: boolean;
  onClose: () => void;
  onToggleComplete: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  onSelectConcept: (id: string) => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function ConceptModal({
  concept,
  isCompleted,
  onClose,
  onToggleComplete,
  onNavigate,
  onSelectConcept,
  hasPrev,
  hasNext,
}: ConceptModalProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate('prev');
    if (e.key === 'ArrowRight' && hasNext) onNavigate('next');
  }, [onClose, onNavigate, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  // Format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {/* Navigation */}
          <button
            onClick={() => onNavigate('prev')}
            disabled={!hasPrev}
            className={`p-2 rounded-lg ${
              hasPrev
                ? 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Title */}
          <div className="flex-1 text-center px-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">{concept.emoji}</span>
              <h2 className="font-bold text-gray-900 dark:text-white text-lg">
                {concept.keyword}
              </h2>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {concept.category}
            </span>
          </div>

          {/* Navigation & Close */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onNavigate('next')}
              disabled={!hasNext}
              className={`p-2 rounded-lg ${
                hasNext
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                  : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Diagram (if exists) */}
          {concept.diagram && (
            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre">
                {concept.diagram}
              </pre>
            </div>
          )}

          {/* Simple Explanation */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💡</span>
              <h3 className="font-bold text-blue-800 dark:text-blue-300">쉬운 설명</h3>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
              {formatText(concept.simpleExplanation)}
            </p>
          </div>

          {/* Real Life Example */}
          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🏠</span>
              <h3 className="font-bold text-green-800 dark:text-green-300">실생활 예시</h3>
            </div>
            <p className="text-sm text-green-700 dark:text-green-200 leading-relaxed">
              {formatText(concept.realLifeExample)}
            </p>
          </div>

          {/* Exam Tip */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📝</span>
              <h3 className="font-bold text-yellow-800 dark:text-yellow-300">시험 암기 포인트</h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-200 font-medium leading-relaxed">
              {formatText(concept.examTip)}
            </p>
          </div>

          {/* Related Concepts */}
          {concept.relatedConcepts && concept.relatedConcepts.length > 0 && (
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🔗</span>
                <h3 className="font-bold text-purple-800 dark:text-purple-300">연관 개념</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {concept.relatedConcepts.map((relatedId) => {
                  const related = getConceptById(relatedId);
                  if (!related) return null;
                  return (
                    <button
                      key={relatedId}
                      onClick={() => onSelectConcept(relatedId)}
                      className="px-3 py-1.5 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
                    >
                      {related.emoji} {related.keyword}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Complete Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onToggleComplete}
            className={`w-full py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
              isCompleted
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                : 'bg-primary-500 text-white hover:bg-primary-600'
            }`}
          >
            {isCompleted ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                학습 완료됨 (클릭하여 취소)
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                학습 완료
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
