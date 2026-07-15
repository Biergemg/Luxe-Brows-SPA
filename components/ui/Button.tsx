import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  // Dark variants — reserved for the servicios cards (ServiceCard.tsx), which keep the original black theme.
  primary: "bg-luxe-gray text-white border border-white/10 shadow-[0_12px_32px_rgba(89,89,89,0.28)] hover:-translate-y-0.5 hover:bg-[#6A6A6A] hover:shadow-[0_18px_44px_rgba(89,89,89,0.34)]",
  secondary: "bg-luxe-dark-gray text-luxe-white border border-white/10 hover:-translate-y-0.5 hover:border-luxe-gray/50",
  outline: "border border-luxe-gray/60 text-luxe-white hover:-translate-y-0.5 hover:bg-white/[0.04] hover:border-white/25",
  ghost: "text-luxe-white hover:text-luxe-gray hover:bg-white/5",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20BE5A] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]",
  // Nude variants — used everywhere else on the site.
  "primary-nude": "bg-nude-accent text-nude-bg border border-nude-text/10 shadow-[0_12px_32px_rgba(58,44,34,0.18)] hover:-translate-y-0.5 hover:bg-[#7C5C3F] hover:shadow-[0_18px_44px_rgba(58,44,34,0.24)]",
  "secondary-nude": "bg-nude-surface text-nude-text border border-nude-text/10 hover:-translate-y-0.5 hover:border-nude-accent/50",
  "outline-nude": "border border-nude-accent/50 text-nude-text hover:-translate-y-0.5 hover:bg-nude-text/[0.05] hover:border-nude-text/40",
  "ghost-nude": "text-nude-text hover:text-nude-accent hover:bg-nude-text/5"
}

const buttonSizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "h-12 w-12"
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-luxe-gray disabled:pointer-events-none disabled:opacity-50 min-h-[44px]", // min-h for touch targets
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
