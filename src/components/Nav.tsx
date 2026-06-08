import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/web-design', label: 'Web Design' },
  { href: '/seo',        label: 'SEO' },
  { href: '/pricing',    label: 'Pricing' },
  { href: '/about',      label: 'About' },
  { href: '/blog',       label: 'Blog' },
];

interface NavProps {
  pathname: string;
}

export default function Nav({ pathname }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300',
        scrolled
          ? 'bg-[rgba(12,27,51,0.96)] backdrop-blur-md border-b border-white/[0.07]'
          : 'bg-transparent border-b border-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto h-full flex items-center gap-4 px-5 md:px-8 xl:px-10 max-w-[1200px]">
        {/* Logo */}
        <a href="/" className="flex flex-col gap-[0.3rem] leading-none shrink-0" aria-label="Hallmark Studio, home">
          <span className="font-sans text-[0.9rem] font-black tracking-[0.15em] text-white uppercase">Hallmark</span>
          <span className="font-sans text-[0.6rem] font-normal tracking-[0.32em] text-white uppercase">Studio</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center ml-auto" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  'flex items-center h-[72px] px-3.5 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-150',
                  pathname.startsWith(href) ? 'text-white' : 'text-white/[0.72] hover:text-white'
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone */}
        <a
          href="tel:07570947291"
          className="hidden md:block lg:block text-[0.875rem] font-semibold text-white whitespace-nowrap px-5 border-r border-white/10 mr-2 hover:text-accent transition-colors duration-150"
          aria-label="Call us: 07570 947291"
        >
          07570 947291
        </a>

        {/* Desktop CTA */}
        <a
          href="/free-audit"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-[10px] bg-accent text-white text-[0.8125rem] font-bold shrink-0 hover:bg-accent/90 transition-colors duration-150"
        >
          Get Free Audit
        </a>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-auto text-white hover:bg-white/10"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy text-white border-white/10 w-72 pt-16">
            <nav className="flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-3.5 px-4 text-[1.0625rem] font-semibold border-b border-white/[0.07] transition-colors',
                    pathname.startsWith(href) ? 'text-white' : 'text-white/[0.78] hover:text-white'
                  )}
                >
                  {label}
                </a>
              ))}
              <a
                href="/free-audit"
                onClick={() => setOpen(false)}
                className="mt-4 mx-4 flex items-center justify-center py-3.5 px-5 rounded-[10px] bg-accent text-white font-bold text-[0.9375rem] hover:bg-accent/90 transition-colors"
              >
                Get a Free 15-Minute Audit
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
