import { NavLink } from "react-router";
import { routes, socials } from "../../utilities/links";
import Icon from "../../components/Icon";
import { FormInput } from "../../components";

export default function CTA() {
  return (
    <section className="cta py-20 bg-base-200">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">ImageGallery</h2>
            <p className="text-base-content/70 leading-relaxed">
              Discover, share, and explore stunning images from creators around
              the world.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  className="btn btn-circle btn-sm btn-ghost bg-base-100"
                >
                  <Icon icon={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Sitemap */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {routes.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-base-content/70 hover:text-primary transition-colors capitalize"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Extra links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3 text-base-content/70">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Stay Updated</h3>
            <form className="space-y-3">
              <FormInput type="text" placeholder="Your name" />
              <FormInput type="email" placeholder="Your email" />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        <div className="divider mt-16 mb-8"></div>
        <p className="text-center text-sm text-base-content/50">
          &copy; {new Date().getFullYear()} ImageGallery. All rights reserved.
        </p>
      </div>
    </section>
  );
}
