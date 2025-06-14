import { ChevronRight } from 'lucide-react';

interface ChevronIconProps {
  className?: string;
}

export default function ChevronIcon({ className = '' }: ChevronIconProps) {
  return (
    <ChevronRight className={`text-gray-400 ${className}`} size={20} />
  );
}
