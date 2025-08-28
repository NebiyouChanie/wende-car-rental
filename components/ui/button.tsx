import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        luxury:
          "border border-white bg-transparent text-white px-8 py-2 text-base uppercase tracking-widest font-light transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group",
        "luxury-white":
          "border-2 border-white bg-transparent text-white px-8 py-2 text-base uppercase tracking-widest font-light transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group",
      },
      size: {
        default: "px-4 py-1",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-10 px-6",
        xl: "h-12 px-10 lg:px-16 py-3 text-base",
        icon: "size-9",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
})

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <>
      <style jsx global>{`
        .luxury-car-button {
          position: relative;
          isolation: isolate;
          z-index: 1;
        }
        
        .luxury-car-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          z-index: -1;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 1s ease-out;
        }
        
        .luxury-car-button:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .luxury-car-button::after {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.4) 50%,
            rgba(255,255,255,0) 100%
          );
          z-index: -2;
          opacity: 0;
          transform: translateX(-100%) skewX(-15deg);
          transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .luxury-car-button:hover {
          color: #111;
          box-shadow: 0 0 10px rgba(255,255,255,0.2);
        }
        
        .luxury-car-button:hover::after {
          opacity: 0.8;
          transform: translateX(100%) skewX(-15deg);
        }
        
        .luxury-car-button .button-text {
          position: relative;
          transition: all 0.6s ease-out;
        }
        
        .luxury-car-button:hover .button-text {
          letter-spacing: 0.12em;
        }
      `}</style>
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          "luxury-car-button"
        )}
        {...props}
      >
        <span className="button-text">{props.children}</span>
      </Comp>
    </>
  )
}

export { Button, buttonVariants }