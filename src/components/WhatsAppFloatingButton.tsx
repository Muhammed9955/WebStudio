import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloatingButton({ lang }: { lang: string }) {
  const phoneNumber = "+201032137085"; 
  
  const defaultMessage = encodeURIComponent(
    lang === "ar"
      ? "مرحباً، أنا مهتم بالحصول على موقع إلكتروني احترافي لعملي."
      : "Hello, I'm interested in getting a professional website for my business."
  );
  
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <Link 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 animate-bounce-short"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
