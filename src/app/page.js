import styles from "./page.module.scss";
import ScrollLink from "../components/ScrollLink";
import ThemeToggle from "../components/ThemeToggle";

export const generateMetadata = async () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Abstractive Labs',
    description: 'Enterprise AI solutions provider specializing in AI Pipelines, Smart Outreach, and Process Automation.',
    url: 'https://abstractivelabs.ai',
    logo: 'https://abstractivelabs.ai/logo.png',
    sameAs: [
      'https://twitter.com/AbstractiveLabs',
      'https://linkedin.com/company/abstractive-labs',
      'https://github.com/abstractive-labs'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@abstractivelabs.ai',
      areaServed: 'Worldwide'
    },
    offers: {
      '@type': 'AggregateOffer',
      name: 'AI Solutions for Enterprise',
      description: 'Complete range of AI solutions including pipelines, automation, and custom models.'
    }
  };

  return {
    title: 'Abstractive Labs - AI Solutions for Enterprise',
    description: 'Transform your business with cutting-edge AI solutions. Specialized in AI Pipelines, Smart Outreach, Process Automation, and Custom AI Models for enterprise.',
    keywords: 'AI Solutions, Enterprise AI, AI Pipelines, Smart Outreach, Process Automation, RAG Integration, Custom AI Models, AI Development',
    openGraph: {
      title: 'Abstractive Labs - AI Solutions for Enterprise',
      description: 'Transform your business with cutting-edge AI solutions. Specialized in AI Pipelines, Smart Outreach, Process Automation, and Custom AI Models.',
      url: 'https://abstractivelabs.ai',
      siteName: 'Abstractive Labs',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Abstractive Labs - Enterprise AI Solutions',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Abstractive Labs - AI Solutions for Enterprise',
      description: 'Transform your business with cutting-edge AI solutions. Specialized in AI Pipelines, Smart Outreach, Process Automation, and Custom AI Models.',
      images: ['/twitter-image.jpg'],
      creator: '@AbstractiveLabs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://abstractivelabs.ai',
    },
    other: {
      'application-name': 'Abstractive Labs',
      'theme-color': '#2563eb',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    structured: jsonLd,
  };
};

export default function Home() {
  const services = [
    {
      title: "AI Pipelines",
      description: "End-to-end automation for workflows, streamlining your business processes with cutting-edge AI technology.",
    },
    {
      title: "Smart Outreach",
      description: "Automated Flow with cold mail, CRM, LinkedIn/X/Instagram bots, and human-like chat for B2B growth.",
    },
    {
      title: "Process Automation",
      description: "Comprehensive automation solutions from ordering systems to full backend workflows.",
    },
    {
      title: "RAG Integration",
      description: "Knowledge-augmented AI systems tailored for businesses, enhancing decision-making capabilities.",
    },
    {
      title: "Startup Solutions",
      description: "Affordable AI + backend solutions perfectly crafted for SMEs and startups.",
    },
    {
      title: "AI + Frontend Builds",
      description: "Intelligent apps, websites, and dashboards that combine aesthetics with functionality.",
    },
    {
      title: "Custom AI Models",
      description: "Specialized CNNs, LLMs, RAG, and fine-tuned models built for your specific needs.",
    },
    {
      title: "Open Ended Pre-built Chatbots",
      description: "Ready-to-deploy chatbot solutions that adapt to your business requirements.",
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Abstractive Labs</span>
          </div>
          <nav className={styles.nav}>
            <ThemeToggle />
            <ScrollLink href="#services">Services</ScrollLink>
            <ScrollLink href="#about">About</ScrollLink>
            <ScrollLink href="#case-studies">Case Studies</ScrollLink>
            <a href="#blog">Blog</a>
            <ScrollLink href="#contact" className={styles.contactBtn}>Contact Us</ScrollLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero} id="home">
          <div className={styles.companyName}>Abstractive Labs</div>
          <h1>Pioneering AI Solutions for Tomorrow's Enterprise</h1>
          <p>Transforming businesses through innovative AI automation, custom solutions, and intelligent workflows</p>
        </div>

        <div className={styles.services} id="services">
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <section className={styles.whyChooseUs} id="about">
          <div className={styles.whyChooseUsWrapper}>
            <h2>Why Choose Abstractive Labs?</h2>
            <p className={styles.sectionSubtitle}>Our commitment to excellence sets us apart</p>

            <div className={styles.advantages}>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.16 12H18v7h-4v-6H8v6H4v-7H2.84L12 4.84z" />
                  </svg>
                </div>
                <h3>Industry Expertise</h3>
                <p>Over a decade of experience in AI and automation, serving diverse industries worldwide.</p>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <h3>Rapid Deployment</h3>
                <p>Quick implementation and integration of AI solutions with minimal disruption to your operations.</p>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
                  </svg>
                </div>
                <h3>Scalable Solutions</h3>
                <p>Flexible and adaptable systems that grow with your business needs.</p>
              </div>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.4 9.16-7 10.5-3.6-1.34-7-5.67-7-10.5V6.3l7-3.12z" />
                  </svg>
                </div>
                <h3>Enterprise Security</h3>
                <p>State-of-the-art security measures ensuring your data and operations remain protected.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.caseStudies} id="case-studies">
          <h2>Success Stories</h2>
          <p className={styles.sectionSubtitle}>Real results from real clients</p>

          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyImage}>
                <div className={styles.placeholder} style={{ backgroundColor: '#e2e8f0' }}>
                  <span>FinTech</span>
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3>Global FinTech Automation</h3>
                <p className={styles.industry}>Financial Services</p>
                <p>Implemented AI pipelines reducing processing time by 75% and improving accuracy to 99.9%</p>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.number}>75%</span>
                    <span className={styles.label}>Faster Processing</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.number}>$2.5M</span>
                    <span className={styles.label}>Annual Savings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyImage}>
                <div className={styles.placeholder} style={{ backgroundColor: '#e2e8f0' }}>
                  <span>E-Commerce</span>
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3>E-Commerce Intelligence</h3>
                <p className={styles.industry}>Retail Technology</p>
                <p>Custom AI model deployment leading to 45% increase in customer engagement and 60% in sales</p>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.number}>45%</span>
                    <span className={styles.label}>More Engagement</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.number}>60%</span>
                    <span className={styles.label}>Sales Increase</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyImage}>
                <div className={styles.placeholder} style={{ backgroundColor: '#e2e8f0' }}>
                  <span>Healthcare</span>
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3>Healthcare Innovation</h3>
                <p className={styles.industry}>Medical Technology</p>
                <p>RAG integration for medical data analysis, reducing diagnosis time by 65%</p>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.number}>65%</span>
                    <span className={styles.label}>Faster Diagnosis</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.number}>98%</span>
                    <span className={styles.label}>Accuracy Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#contact"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Abstractive Labs</h4>
            <p>Pioneering AI solutions for modern enterprises, transforming businesses through innovative technology and intelligent automation.</p>
            <div className={styles.social}>
              <a href="#linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#github" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li><ScrollLink href="#services">All Services</ScrollLink></li>
              <li><ScrollLink href="#services">AI Pipelines</ScrollLink></li>
              <li><ScrollLink href="#services">Smart Outreach</ScrollLink></li>
              <li><ScrollLink href="#services">Process Automation</ScrollLink></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><ScrollLink href="#about">About Us</ScrollLink></li>
              <li><ScrollLink href="#case-studies">Case Studies</ScrollLink></li>
              <li><a href="#blog">Blog</a></li>
              <li><ScrollLink href="#contact">Contact</ScrollLink></li>
            </ul>
          </div>

          <div className={styles.footerSection} id="contact">
            <h4>Contact Us</h4>
            <p>Ready to transform your business?</p>
            <ScrollLink href="#contact" className={styles.contactButton}>Get in Touch</ScrollLink>
            <p className={styles.contact}>
              Email: info@abstractivelabs.ai<br />
              Tel: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Abstractive Labs. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
