export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Desktop - fuld logo */}
      <div className="hidden md:block">
        <img 
          src="/logo.png" 
          alt="Wisuals" 
          className="h-10"
        />
      </div>
      
      {/* Mobile - bare W ikon */}
      <div className="md:hidden">
        <img 
          src="/logo-ikon.png" 
          alt="Wisuals" 
          className="h-12"
        />
      </div>
    </div>
  )
}