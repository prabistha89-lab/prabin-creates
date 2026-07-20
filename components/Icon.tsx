import {
  ArrowRight, BookOpen, Check, ChevronDown, ChevronRight, CircleCheck,
  Clock3, Mail, MapPin, Menu, MessageCircle,
  MessagesSquare, MonitorSmartphone, Palette, PenTool, Phone, Printer,
  Quote, Search, Send, Sparkles, Target, X, Zap, Megaphone, type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight, "book-open": BookOpen, check: Check,
  "chevron-down": ChevronDown, "chevron-right": ChevronRight,
  "circle-check": CircleCheck, clock: Clock3, mail: Mail, "map-pin": MapPin,
  menu: Menu, "message-circle": MessageCircle, "messages-square": MessagesSquare,
  "monitor-smartphone": MonitorSmartphone, palette: Palette, "pen-tool": PenTool,
  phone: Phone, printer: Printer, quote: Quote, search: Search, send: Send,
  sparkles: Sparkles, target: Target, x: X, zap: Zap, megaphone: Megaphone,
};

export function Icon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Component = icons[name] || Sparkles;
  return <Component size={size} className={className} aria-hidden="true" />;
}
