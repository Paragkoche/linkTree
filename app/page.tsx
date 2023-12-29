import Link from "next/link";
import links from "@/database/Links";
import Logo from "@/components/svg/Logo";
import VectorArrow from "@/components/link/VectorArrow";
import "./style.scss";
import Image from "next/image";

const bg =
  "https://images.unsplash.com/photo-1605106925746-22f723ca945b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Home() {
  return (
    <section id="home-main">
      <div className="bg-container">
        <Image
          src={bg}
          alt="background image"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
        />
      </div>
      <div className="home-container">
        <div className="heading-container">
          <Logo />
          Links
        </div>
        <div className="links-container">
          {links.map((link, index) => (
            <Link key={index} href={link.link} id="defaultButton">
              <div className="arrow">
                <link.icon />
              </div>
              <div className="title">{link.title}</div>
              <div className="arrow arrow-hover">
                <link.icon />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="info">
        <p>
          Powered by <span>Webstack</span>
        </p>
      </div>
    </section>
  );
}
