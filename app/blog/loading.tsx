export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050508]">
      <div className="relative">
        
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-white/10"></div>

        {/* Spinning part */}
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin blur-[1px]" />

      </div>
    </div>
  )
}