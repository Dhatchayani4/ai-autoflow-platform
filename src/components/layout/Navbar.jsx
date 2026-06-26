import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#F1F6F4]/80">
      <Container>
        <nav className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#172B36] text-white flex items-center justify-center font-bold">
              AI
            </div>

            <span className="font-bold text-lg">
              AutoFlow
            </span>
          </div>

          {/* Navigation */}

          <ul className="hidden md:flex gap-10 font-medium">

            <li>
              <a href="#features" className="hover:text-[#114C5A] transition">
                Features
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-[#114C5A] transition">
                Pricing
              </a>
            </li>

            <li>
              <a href="#testimonials" className="hover:text-[#114C5A] transition">
                Reviews
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-[#114C5A] transition">
                FAQ
              </a>
            </li>

          </ul>

          <Button>
            Get Started
          </Button>

        </nav>
      </Container>
    </header>
  );
}