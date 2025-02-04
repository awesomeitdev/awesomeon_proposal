// 공통 스타일 정의
export const styles = {
  // Layout
  container: "container mx-auto px-4 max-w-7xl", // max-w-6xl -> max-w-7xl로 변경하여 전체 너비를 늘림
  section: "py-16", // 섹션 상하 여백 조정 (py-20 -> py-16)
  
  // Typography
  h1: "text-5xl font-bold mb-8",
  h2: "text-4xl font-bold mb-10 text-center",
  h3: "text-2xl font-semibold mb-6",
  paragraph: "text-gray-600 text-lg mb-6 leading-relaxed whitespace-pre-line",
  
  // Cards
  card: "bg-white p-6 rounded-xl shadow-lg", // 카드 패딩 조정 (p-8 -> p-6)
  
  // Lists
  list: "space-y-4",
  listItem: "flex items-center text-lg",
  icon: "w-6 h-6 text-blue-600 mr-3",
  
  // Buttons
  primaryButton: "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",
  secondaryButton: "border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors",
  
  // Grid
  grid2Cols: "grid md:grid-cols-2 gap-8",
  grid3Cols: "grid md:grid-cols-3 gap-6",
  
  // Colors
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-600",
  bgPrimary: "bg-white",
  bgSecondary: "bg-gray-50",
  
  // Badges
  badge: "text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full border border-yellow-300"
}; 