"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import ScrollLink from "../components/ScrollLink";
import Main from "../components/Main";
import TaskBoard from "../components/TaskBoard";



export default function Home() {
  const humanoidSectionRef = useRef(null);
  const humanoidCardsRef = useRef([]);
  const humanoidHeaderRef = useRef(null);
  const humanoidChipRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!humanoidSectionRef.current) return;

      const sectionRect = humanoidSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;

      // Check if section is in viewport
      const isInViewport = sectionTop < windowHeight && (sectionTop + sectionHeight) > 0;

      if (!isInViewport) {
        // Reset cards when section is out of view
        humanoidCardsRef.current.forEach((card, index) => {
          if (!card) return;
          card.style.transform = `translate(-50%, -50%) translateY(100vh)`;
          card.style.opacity = '0';
          card.style.zIndex = index + 10;
        });
        return;
      }

      // Calculate scroll progress through the section (0 to 1)
      // Adjusted for better timing - cards animate through middle portion of section
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.3)));

      // Animate header elements
      if (humanoidHeaderRef.current) {
        const headerOpacity = Math.max(0.2, 1 - scrollProgress * 0.8);
        humanoidHeaderRef.current.style.opacity = headerOpacity;
        humanoidHeaderRef.current.style.transform = `translateY(${scrollProgress * 30}px)`;
      }

      if (humanoidChipRef.current) {
        humanoidChipRef.current.style.transform = `translateY(${scrollProgress * 50}px)`;
      }

      // Fixed stacked card animation
      const totalCards = humanoidCardsRef.current.length;

      humanoidCardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Calculate when this card should start animating
        // Card 0 starts at 0, Card 1 starts at 0.33, Card 2 starts at 0.66
        const cardStartProgress = (index / totalCards);
        const cardEndProgress = ((index + 1) / totalCards);

        // Calculate progress for this specific card
        const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));

        // Set z-index so later cards appear on top
        card.style.zIndex = index + 10;

        if (scrollProgress < cardStartProgress) {
          // Card hasn't started animating yet - keep it below screen
          card.style.transform = `translate(-50%, -50%) translateY(100vh)`;
          card.style.opacity = '0';
        } else if (scrollProgress >= cardStartProgress && scrollProgress < cardEndProgress) {
          // Card is currently animating in from bottom
          const translateY = (1 - cardProgress) * 100; // From 100vh to 0
          const opacity = Math.min(1, cardProgress * 1.5); // Fade in
          const scale = 0.9 + (cardProgress * 0.1); // Scale from 0.9 to 1

          card.style.transform = `translate(-50%, -50%) translateY(${translateY}vh) scale(${scale})`;
          card.style.opacity = opacity;
        } else {
          // Card is fully visible and stays fixed in center
          card.style.transform = `translate(-50%, -50%) translateY(0) scale(1)`;
          card.style.opacity = '1';
        }
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

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
    <Main className="home-page">
      <div className={styles.hero} id="home">
        <div className={styles.wrapper}>
          <div className={styles.companyName}>Abstractive Labs</div>
          <h1>Pioneering AI Solutions for Tomorrow's Enterprise</h1>
          <p>Transforming businesses through innovative AI automation, custom solutions, and intelligent workflows</p>
        </div>
      </div>

      <div className={styles.services} id="services">
        <div className={styles.wrapper}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const serviceLinks = [
                "/ai-pipelines",
                "/smart-outreach",
                "/process-automation",
                "/rag-integration",
                "/startup-solutions",
                "/ai-frontend-builds",
                "/custom-ai-models",
                "/chatbots"
              ];

              return (
                <ScrollLink key={index} href={serviceLinks[index]} className={styles.serviceCard}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </ScrollLink>
              );
            })}
          </div>
        </div>
      </div>

      <section className={styles.whyChooseUs} id="about">
        <div className={styles.wrapper}>
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
        <div className={styles.wrapper}>
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
        </div>
      </section>

      <section className={styles.taskBoard} id="task-board">
        <div className={styles.wrapper}>
          <h2>Project Management Dashboard</h2>
          <p className={styles.sectionSubtitle}>Interactive task management with drag-and-drop functionality</p>
          <TaskBoard className={styles.taskBoardContainer} />
        </div>
      </section>

      <div className={styles.ctas}>
        <div className={styles.ctasWrapper}>
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
      </div>
    </Main>
  );
}
