"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "9647777045599";

const socialLinks = {
  instagram: "https://www.instagram.com/house_ofantiques?igsh=N3B1NmxkZGhxcTZ1",
  facebook: "https://www.facebook.com/house.of.antiques.iraq",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: "mailto:houseofantique30@gmail.com",
  website: "https://www.houseof-antiques.com/",
  maps: "https://maps.app.goo.gl/Jw3hiXZiLLTuFkEQA",
  phone: "tel:+9647777045599",
};

type Locale = "ar" | "en" | "ku";

const content = {
  ar: {
    dir: "rtl",
    brand: "بيت التحفيات",
    title: "House of Antiques",
    description:
      "قطع منتقاة من ذاكرة المكان، تحف نادرة ومقتنيات أصلية تُعرض بعناية لهواة الجمع.",
    collection: "المجموعة",
    support: "الدعم",
    contactTitle: "تواصل معنا",
    home: "الرئيسية",
    featured: "القطع المميزة",
    contact: "التواصل",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    location: "الموقع",
    fullName: "الاسم الكامل",
    contactField: "رقم الهاتف أو البريد",
    message: "الرسالة",
    send: "إرسال عبر واتساب",
    follow: "تابعنا",
    legal: {
      terms: "الشروط",
      returns: "الاسترجاع",
      shipping: "الشحن",
      privacy: "الخصوصية",
      cookies: "الكوكيز",
    },
    copyright: "© 2026 بيت التحفيات. جميع الحقوق محفوظة.",
    waMessage: "مرحبا بيت التحفيات",
  },
  en: {
    dir: "ltr",
    brand: "House of Antiques",
    title: "House of Antiques",
    description:
      "Curated heritage, rare objects, and collectible pieces selected with care for collectors.",
    collection: "Collection",
    support: "Support",
    contactTitle: "Contact us",
    home: "Home",
    featured: "Featured pieces",
    contact: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    location: "Location",
    fullName: "Full name",
    contactField: "Email or phone",
    message: "Message",
    send: "Send to WhatsApp",
    follow: "Follow us",
    legal: {
      terms: "Terms",
      returns: "Returns",
      shipping: "Shipping",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    copyright: "© 2026 House of Antiques. All rights reserved.",
    waMessage: "Hello House of Antiques",
  },
  ku: {
    dir: "rtl",
    brand: "House of Antiques",
    title: "House of Antiques",
    description:
      "پارچەی دەگمەن، کۆمەڵەی تایبەت و کەلوپەلی کۆن کە بە وردی هەڵبژێردراون.",
    collection: "کۆمەڵە",
    support: "پشتگیری",
    contactTitle: "پەیوەندی",
    home: "سەرەکی",
    featured: "پارچە تایبەتەکان",
    contact: "پەیوەندی",
    whatsapp: "واتساپ",
    email: "ئیمەیل",
    location: "شوێن",
    fullName: "ناوی تەواو",
    contactField: "ئیمەیل یان ژمارە",
    message: "نامە",
    send: "ناردن بۆ واتساپ",
    follow: "شوێنمان بکەوە",
    legal: {
      terms: "مەرجەکان",
      returns: "گەڕاندنەوە",
      shipping: "گەیاندن",
      privacy: "تایبەتمەندی",
      cookies: "کوکیز",
    },
    copyright: "© 2026 House of Antiques. هەموو مافەکان پارێزراون.",
    waMessage: "سڵاو House of Antiques",
  },
} as const;

function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];

  if (first === "ar" || first === "en" || first === "ku") {
    return first;
  }

  return "ar";
}

function getLocalePrefix(pathname: string) {
  const first = pathname.split("/").filter(Boolean)[0];

  if (first === "ar" || first === "en" || first === "ku") {
    return `/${first}`;
  }

  return "";
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.1" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.3V6.9c0-.7.2-1.1 1.1-1.1h1.5V3.2c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v1.3H8v2.9h2.6V21h3.2v-9.8h2.6l.4-2.9h-2.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.1 3.1a8.8 8.8 0 0 0-7.5 13.4L3.5 21l4.6-1.2a8.8 8.8 0 1 0 4-16.7Z" />
      <path d="M9.2 7.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.2 4.9 4.3 2.4.9 2.9.7 3.4.7s1.7-.7 1.9-1.4.2-1.3.1-1.4c-.1-.2-.3-.2-.6-.4l-1.8-.9c-.3-.1-.5-.2-.7.2s-.8.9-1 1.1-.4.2-.7.1c-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2s0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6.5-5.6 6.5-11.1A6.5 6.5 0 0 0 5.5 9.9C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="9.9" r="2.2" />
    </svg>
  );
}

export default function StoreFooter() {
  const pathname = usePathname();

  const locale = getLocaleFromPath(pathname);
  const prefix = getLocalePrefix(pathname);
  const t = content[locale];

  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const legalLinks = useMemo(
    () => [
      { href: `${prefix}/terms`, label: t.legal.terms },
      { href: `${prefix}/returns`, label: t.legal.returns },
      { href: `${prefix}/shipping`, label: t.legal.shipping },
      { href: `${prefix}/privacy`, label: t.legal.privacy },
      { href: `${prefix}/cookies`, label: t.legal.cookies },
    ],
    [prefix, t]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `
${t.waMessage}
الاسم: ${form.name || "غير مذكور"}
رقم الهاتف / الإيميل: ${form.contact || "غير مذكور"}
الرسالة: ${form.message || "غير مذكورة"}
    `.trim();

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
  <>
  

    <footer id="contact" className="footer" dir={t.dir}>
      
      <div className="watermark">H O A </div>

      <div className="inner">
        <section className="brand">
          <div className="logoMark">
            <img src="/loading-stamp.png" alt="House of Antiques" />
          </div>

          <h2>{t.title}</h2>
          <p>{t.description}</p>

          <div className="socialLabel">{t.follow}</div>

          <div className="socials">
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href={socialLinks.email} aria-label="Email">
              <MailIcon />
            </a>
            <a href={socialLinks.website} target="_blank" rel="noreferrer" aria-label="Website">
              <GlobeIcon />
            </a>
            <a href={socialLinks.maps} target="_blank" rel="noreferrer" aria-label="Location">
              <PinIcon />
            </a>
          </div>
        </section>

        <nav className="footerNav" aria-label="Footer navigation">
          <div>
            <h3>{t.collection}</h3>
            <Link href={`${prefix || "/"}`}>{t.home}</Link>
            <Link href={`${prefix}/#featured`}>{t.featured}</Link>
            <Link href={`${prefix}/#contact`}>{t.contact}</Link>
          </div>

          <div>
            <h3>{t.support}</h3>
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
              {t.whatsapp}
            </a>
            <a href={socialLinks.email}>{t.email}</a>
            <a href={socialLinks.maps} target="_blank" rel="noreferrer">
              {t.location}
            </a>
          </div>
        </nav>

        <section className="formWrap">
          <h3>{t.contactTitle}</h3>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t.fullName}
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
            />

            <input
              type="text"
              placeholder={t.contactField}
              value={form.contact}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, contact: event.target.value }))
              }
            />

            <textarea
              placeholder={t.message}
              rows={5}
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
            />

            <button type="submit">{t.send}</button>
          </form>
        </section>
      </div>

      <div className="bottom">
        <div className="legal">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <p>{t.copyright}</p>
      </div>

     <style jsx>{`
          
        .footer {
          position: relative;
          overflow: hidden;
          background: #020202;
          color: #fff;
          padding: 30px 20px 18px;
          border-top: 0;
          margin-top: 0;
        }
  }

  .footer {
    position: relative;
    overflow: hidden;
    background: #020202;
    color: #fff;
    padding: 42px 20px 18px;
    border-top: 0;
    margin-top: 0;
  }
        .footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 14% 20%, rgba(214, 185, 120, 0.07), transparent 28%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025), transparent 38%);
          pointer-events: none;
        }

        .watermark {
          position: absolute;
          inset-inline-start: 28px;
          bottom: -32px;
          font-size: clamp(3.4rem, 12vw, 11rem);
          line-height: 0.8;
          font-weight: 900;
          letter-spacing: -0.08em;
          color: rgba(255, 255, 255, 0.028);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .inner {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.08fr 0.88fr 1fr;
          gap: 52px;
          align-items: start;
        }

        .brand {
          text-align: start;
        }

        .logoMark {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.075);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .logoMark img {
          width: 32px;
          height: auto;
          display: block;
        }

        .brand h2,
        .footerNav h3,
        .formWrap h3 {
          margin: 0;
          color: #fff;
        }

        .brand h2 {
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .brand p {
          max-width: 300px;
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.82rem;
          line-height: 1.8;
        }

        .socialLabel {
          margin-top: 24px;
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.76rem;
          font-weight: 700;
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .socials a {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.075);
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease;
        }

        .socials a:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.16);
        }

               .socials a {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(255, 255, 255, 0.075);
          border: 1px solid rgba(255, 255, 255, 0.12);
          opacity: 1 !important;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease;
        }

        .socials a:hover {
          transform: translateY(-2px);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.13);
          border-color: rgba(255, 255, 255, 0.22);
        }

        :global(.socials svg) {
          width: 16px;
          height: 16px;
          display: block;
          color: currentColor;
          opacity: 1 !important;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        :global(.socials a:nth-child(2) svg),
        :global(.socials a:nth-child(3) svg) {
          fill: currentColor;
          stroke: none;
        }

                .footerNav {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 38px;
          text-align: start;
        }

        .footerNav h3,
        .formWrap h3 {
          margin-bottom: 14px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #fff;
        }

        :global(.footerNav a) {
          display: block !important;
          width: fit-content !important;
          margin-bottom: 9px !important;
          color: rgba(255, 255, 255, 0.81) !important;
          font-size: 0.74rem !important;
          line-height: 1.45 !important;
          font-weight: 400 !important;
          text-decoration: none !important;
          white-space: normal !important;
          transition: color 0.18s ease;
        }

        :global(.footerNav a:hover) {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .formWrap {
          text-align: start;
        }

        .form {
          display: grid;
          gap: 8px;
        }

        .form input,
        .form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 0;
          outline: none;
          border-radius: 7px;
          background: #000000;
          color: #fff;
          padding: 12px 13px;
          font-size: 0.78rem;
          resize: none;
        }

        .form input::placeholder,
        .form textarea::placeholder {
          color: rgba(255, 255, 255, 0.42);
        }

        .form input:focus,
        .form textarea:focus {
          background: #000000;
          box-shadow: 0 0 0 1px rgba(214, 185, 120, 0.2);
        }

        .form button {
          margin-top: 4px;
          height: 43px;
          border: 0;
          border-radius: 7px;
          background: #fff;
          color: #050505;
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            opacity 0.18s ease;
        }

        .form button:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .bottom {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          margin: 42px auto 0;
          padding-top: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-top: 1px solid rgba(255, 255, 255, 0.025);
        }

                .legal {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 8px;
          opacity: 0.72;
          transform: scale(0.9);
          transform-origin: center;
        }

        :global(.legal a) {
          color: rgb(255, 255, 255) !important;
          font-size: 7.5px !important;
          line-height: 1 !important;
          font-weight: 400 !important;
          text-decoration: none !important;
          letter-spacing: 0.01em !important;
          opacity: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
          white-space: nowrap !important;
          transition:
            color 0.18s ease,
            opacity 0.18s ease;
        }

        :global(.legal a:hover) {
          color: rgba(235, 210, 155, 0.95) !important;
        }

        .bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.18);
          font-size: 7px;
          line-height: 1.3;
          font-weight: 300;
          text-align: center;
        }


        @media (max-width: 980px) {
          .inner {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .brand p {
            max-width: 520px;
          }

          .footerNav {
            max-width: 460px;
          }
        }

        @media (max-width: 560px) {
          .footer {
            padding: 40px 18px 18px;
          }

          .inner {
            gap: 30px;
          }

          .footerNav {
            grid-template-columns: 1fr 1fr;
            gap: 22px;
          }

          .watermark {
            inset-inline-start: 14px;
            bottom: -10px;
            font-size: 3.3rem;
          }

          .bottom {
            margin-top: 28px;
            padding-top: 7px;
            gap: 3px;
          }

                   .legal {
            gap: 6px;
            opacity: 0.68;
            transform: scale(0.84);
          }

          :global(.legal a) {
            font-size: 7px !important;
            color: rgb(255, 255, 255) !important;
          }

          .bottom p {
            font-size: 6.5px;
      
        }
            
      `}</style>
    </footer>
     </>
  );
}