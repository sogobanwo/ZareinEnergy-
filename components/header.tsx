import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-[#1a5f7a]/10 bg-white">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/zarein-logo.png" alt="Zarein Energy" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-[#1a5f7a] hover:text-[#0f4a61] text-sm font-medium transition-colors">About</a>
              <a href="/services" className="text-[#1a5f7a] hover:text-[#0f4a61] text-sm font-medium transition-colors">Services</a>
              <a href="/projects" className="text-[#1a5f7a] hover:text-[#0f4a61] text-sm font-medium transition-colors">Projects</a>
              <a href="/contact" className="text-[#1a5f7a] hover:text-[#0f4a61] text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] hover:from-[#0f4a61] hover:to-[#1f6a2f] text-white">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
