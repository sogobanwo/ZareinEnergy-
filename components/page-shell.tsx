import type React from "react"
import { cn } from "@/lib/utils"

interface PageShellProps {
    children: React.ReactNode
    className?: string
}

export function PageShell({ children, className }: PageShellProps) {
    return (
        <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
            <div className="relative flex flex-col justify-start items-center w-full">
                {/* Main container with proper margins */}
                <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
                    {/* Left vertical line */}
                    <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                    {/* Right vertical line */}
                    <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                    {/* Content Area */}
                    <div className={cn(
                        "self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10 w-full",
                        className
                    )}>
                        {/* Top Border Line mimicking homepage nav area */}
                        <div className="w-full h-0 absolute left-0 -top-6 sm:top-7 md:top-8 lg:top-6 border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] z-0"></div>

                        {/* Child content will need to likely have top padding to clear the "virtual header area" if not the homepage */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
