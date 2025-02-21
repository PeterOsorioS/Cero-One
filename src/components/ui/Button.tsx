import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "square" | "rounded" |  "semi-rounded"
  color?: "red" | "white" |  "dark-red"
}

export function Button({ children = "Hola mundo", variant = "square", color = "red", className, ...props }: ButtonProps) {

  const colorClasses = {
    "red": "bg-[#E63946] hover:bg-[#A12831] text-white",
    "white": "bg-white hover:bg-gray-200 text-black",
    "dark-red": "bg-[#8F232B] hover:bg-[#701C22] text-white",
  };

  const variantClasses = {
    "square": "rounded-none",
    "rounded": "rounded-full",
    "semi-rounded": "rounded-lg",
  };

  return (
    <button
      className={cn(
        "px-6 py-2  font-medium transition-colors cursor-pointer",
        colorClasses[color],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

