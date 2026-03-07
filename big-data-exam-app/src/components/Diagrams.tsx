'use client';

// 빅데이터 플랫폼 구조도
export function BigDataPlatformDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">빅데이터 플랫폼 구조</h4>
      <div className="space-y-2">
        <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-center text-sm">
          <div className="font-semibold text-purple-700 dark:text-purple-300">분석 및 시각화</div>
          <div className="text-xs text-purple-600 dark:text-purple-400">Tableau, Power BI, Superset</div>
        </div>
        <div className="flex justify-center text-gray-400">↑</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-center text-sm">
          <div className="font-semibold text-blue-700 dark:text-blue-300">처리/분석</div>
          <div className="text-xs text-blue-600 dark:text-blue-400">Spark, Hive, Presto, Flink</div>
        </div>
        <div className="flex justify-center text-gray-400">↑</div>
        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-center text-sm">
          <div className="font-semibold text-green-700 dark:text-green-300">저장</div>
          <div className="text-xs text-green-600 dark:text-green-400">HDFS, S3, HBase, Cassandra</div>
        </div>
        <div className="flex justify-center text-gray-400">↑</div>
        <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded text-center text-sm">
          <div className="font-semibold text-orange-700 dark:text-orange-300">수집</div>
          <div className="text-xs text-orange-600 dark:text-orange-400">Kafka, Flume, Sqoop, NiFi</div>
        </div>
      </div>
    </div>
  );
}

// MapReduce 흐름도
export function MapReduceDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">MapReduce 처리 흐름</h4>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="bg-gray-200 dark:bg-gray-700 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold">Input</div>
          <div className="text-gray-500 dark:text-gray-400">데이터</div>
        </div>
        <span className="text-gray-400">→</span>
        <div className="bg-blue-100 dark:bg-blue-900/30 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold text-blue-700 dark:text-blue-300">Split</div>
          <div className="text-blue-600 dark:text-blue-400">분할</div>
        </div>
        <span className="text-gray-400">→</span>
        <div className="bg-green-100 dark:bg-green-900/30 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold text-green-700 dark:text-green-300">Map</div>
          <div className="text-green-600 dark:text-green-400">(k, v)</div>
        </div>
        <span className="text-gray-400">→</span>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold text-yellow-700 dark:text-yellow-300">Shuffle</div>
          <div className="text-yellow-600 dark:text-yellow-400">정렬</div>
        </div>
        <span className="text-gray-400">→</span>
        <div className="bg-red-100 dark:bg-red-900/30 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold text-red-700 dark:text-red-300">Reduce</div>
          <div className="text-red-600 dark:text-red-400">집계</div>
        </div>
        <span className="text-gray-400">→</span>
        <div className="bg-gray-200 dark:bg-gray-700 px-2 py-3 rounded text-center flex-1">
          <div className="font-semibold">Output</div>
          <div className="text-gray-500 dark:text-gray-400">결과</div>
        </div>
      </div>
    </div>
  );
}

// 머신러닝 분류도
export function MLTypeDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">머신러닝 분류</h4>
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
          <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">지도학습</div>
          <div className="text-xs text-blue-600 dark:text-blue-400">레이블 O</div>
          <div className="mt-2 text-xs space-y-1 text-gray-600 dark:text-gray-400">
            <div>• 회귀</div>
            <div>• 분류</div>
          </div>
        </div>
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
          <div className="font-semibold text-green-700 dark:text-green-300 mb-1">비지도학습</div>
          <div className="text-xs text-green-600 dark:text-green-400">레이블 X</div>
          <div className="mt-2 text-xs space-y-1 text-gray-600 dark:text-gray-400">
            <div>• 군집화</div>
            <div>• 차원축소</div>
          </div>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
          <div className="font-semibold text-purple-700 dark:text-purple-300 mb-1">강화학습</div>
          <div className="text-xs text-purple-600 dark:text-purple-400">보상 기반</div>
          <div className="mt-2 text-xs space-y-1 text-gray-600 dark:text-gray-400">
            <div>• Q-Learning</div>
            <div>• Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 앙상블 기법 비교
export function EnsembleDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">앙상블 기법 비교</h4>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
          <div className="font-semibold text-blue-700 dark:text-blue-300">배깅 (Bagging)</div>
          <div className="mt-2 text-xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">방식:</span>
              <span className="text-gray-600 dark:text-gray-400">병렬</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">효과:</span>
              <span className="text-gray-600 dark:text-gray-400">분산 감소</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">예시:</span>
              <span className="text-gray-600 dark:text-gray-400">Random Forest</span>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
          <div className="font-semibold text-orange-700 dark:text-orange-300">부스팅 (Boosting)</div>
          <div className="mt-2 text-xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">방식:</span>
              <span className="text-gray-600 dark:text-gray-400">순차</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">효과:</span>
              <span className="text-gray-600 dark:text-gray-400">편향 감소</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">예시:</span>
              <span className="text-gray-600 dark:text-gray-400">XGBoost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 데이터 척도 다이어그램
export function DataScaleDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">데이터 척도 (측정 수준)</h4>
      <div className="flex items-center gap-2 text-xs">
        <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded text-center flex-1">
          <div className="font-semibold">명목</div>
          <div className="text-gray-500 dark:text-gray-400">=, ≠</div>
        </div>
        <span className="text-gray-400">&lt;</span>
        <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded text-center flex-1">
          <div className="font-semibold text-blue-700 dark:text-blue-300">서열</div>
          <div className="text-blue-600 dark:text-blue-400">&lt;, &gt;</div>
        </div>
        <span className="text-gray-400">&lt;</span>
        <div className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded text-center flex-1">
          <div className="font-semibold text-green-700 dark:text-green-300">등간</div>
          <div className="text-green-600 dark:text-green-400">+, -</div>
        </div>
        <span className="text-gray-400">&lt;</span>
        <div className="bg-orange-100 dark:bg-orange-900/30 px-3 py-2 rounded text-center flex-1">
          <div className="font-semibold text-orange-700 dark:text-orange-300">비율</div>
          <div className="text-orange-600 dark:text-orange-400">×, ÷</div>
        </div>
      </div>
    </div>
  );
}

// 분류 평가지표 다이어그램
export function ConfusionMatrixDiagram() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">혼동 행렬 (Confusion Matrix)</h4>
      <div className="grid grid-cols-3 gap-1 text-xs text-center max-w-xs mx-auto">
        <div></div>
        <div className="font-semibold text-gray-600 dark:text-gray-400 py-1">예측 양성</div>
        <div className="font-semibold text-gray-600 dark:text-gray-400 py-1">예측 음성</div>

        <div className="font-semibold text-gray-600 dark:text-gray-400 py-2">실제 양성</div>
        <div className="bg-green-200 dark:bg-green-900/50 p-2 rounded">
          <div className="font-bold text-green-700 dark:text-green-300">TP</div>
          <div className="text-green-600 dark:text-green-400">True Positive</div>
        </div>
        <div className="bg-red-200 dark:bg-red-900/50 p-2 rounded">
          <div className="font-bold text-red-700 dark:text-red-300">FN</div>
          <div className="text-red-600 dark:text-red-400">False Negative</div>
        </div>

        <div className="font-semibold text-gray-600 dark:text-gray-400 py-2">실제 음성</div>
        <div className="bg-red-200 dark:bg-red-900/50 p-2 rounded">
          <div className="font-bold text-red-700 dark:text-red-300">FP</div>
          <div className="text-red-600 dark:text-red-400">False Positive</div>
        </div>
        <div className="bg-green-200 dark:bg-green-900/50 p-2 rounded">
          <div className="font-bold text-green-700 dark:text-green-300">TN</div>
          <div className="text-green-600 dark:text-green-400">True Negative</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-600 dark:text-gray-400 space-y-1">
        <div><strong>정밀도</strong> = TP / (TP + FP)</div>
        <div><strong>재현율</strong> = TP / (TP + FN)</div>
        <div><strong>F1</strong> = 2 × (정밀도 × 재현율) / (정밀도 + 재현율)</div>
      </div>
    </div>
  );
}

// Diagram mapping for study items
const diagramMap: Record<string, React.ComponentType> = {
  'bigdata-platform': BigDataPlatformDiagram,
  'hadoop-mapreduce': MapReduceDiagram,
  'ml-types': MLTypeDiagram,
  'ml-ensemble': EnsembleDiagram,
  'data-types': DataScaleDiagram,
  'ml-classification': ConfusionMatrixDiagram,
};

export default diagramMap;
