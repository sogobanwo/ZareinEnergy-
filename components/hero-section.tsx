import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#1a5f7a] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Powering Tomorrow with Zarein Energy
              </h1>
              <p className="max-w-[506px] text-center text-[#1a5f7a]/80 text-lg font-medium leading-7">
                Leading the global transition to sustainable energy through innovative renewable power solutions
                and advanced grid technologies.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="h-10 px-12 bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] hover:from-[#0f4a61] hover:to-[#1f6a2f] text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
