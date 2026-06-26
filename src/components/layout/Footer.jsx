import Container from "../layout/Container";

import link from "../../assets/icons/link.svg";
import linkSolid from "../../assets/icons/link-solid.svg";
import cube from "../../assets/icons/cube-16-solid.svg";

export default function Footer() {
  return (
    <footer className="bg-[#172B36] text-white pt-20 pb-10">
      <Container>

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <img
                src={cube}
                alt="AutoAI"
                className="w-8"
              />

              <h2 className="text-2xl font-bold font-mono">
                AutoAI
              </h2>

            </div>

            <p className="text-gray-300 leading-8">
              AI-powered workflow automation platform helping
              businesses automate smarter and scale faster.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold mb-6">
              Product
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-2">

                <img src={link} alt="" className="w-4" />

                Features

              </li>

              <li className="flex items-center gap-2">

                <img src={link} alt="" className="w-4" />

                Pricing

              </li>

              <li className="flex items-center gap-2">

                <img src={link} alt="" className="w-4" />

                Integrations

              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-2">

                <img src={linkSolid} alt="" className="w-4" />

                About

              </li>

              <li className="flex items-center gap-2">

                <img src={linkSolid} alt="" className="w-4" />

                Careers

              </li>

              <li className="flex items-center gap-2">

                <img src={linkSolid} alt="" className="w-4" />

                Contact

              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold mb-6">
              Resources
            </h3>

            <ul className="space-y-4">

              <li>Documentation</li>

              <li>API</li>

              <li>Support</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-[#114C5A] mt-16 pt-8 text-center text-gray-400">

          © 2026 AutoAI. Built for FrontEnd Battle 3.0.

        </div>

      </Container>
    </footer>
  );
}