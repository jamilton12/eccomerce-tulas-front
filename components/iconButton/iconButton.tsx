import { cn } from "@/lib/utils"

interface IconButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export const IconButton = ({children, onClick, className}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={cn("rounded-full flex items-center bg-white border shadow-sm p-2 hover:scale-110 transition-transform", className)}>
      {children}
    </button>
  )
}