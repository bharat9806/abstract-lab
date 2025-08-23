"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function StartupSolutions() {
    return (
    <Main className="startup-solutions-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>Startup Solutions</h1>
            <p className={styles.subtitle}>Affordable AI + backend solutions perfectly crafted for SMEs and startups.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>50%</span>
                <span className={styles.label}>Cost Reduction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>2x</span>
                <span className={styles.label}>Faster Launch</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Accelerate Your Startup Growth</h2>
            <p className={styles.sectionDescription}>
              Tailored AI and backend solutions designed specifically for startups and SMEs, 
              helping you scale efficiently without breaking the bank.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Cost-Effective Solutions</h3>
                <p>Premium AI and backend services at startup-friendly prices with flexible payment options.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Rapid Deployment</h3>
                <p>Quick implementation and setup to get your startup running with AI capabilities in weeks, not months.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3>Scalable Architecture</h3>
                <p>Solutions that grow with your business, from MVP to enterprise-level capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Startup-Focused Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Discovery & Planning</h3>
                <p>Understand your startup's unique needs and create a tailored solution roadmap.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>MVP Development</h3>
                <p>Build a minimum viable product to validate your concept and gather user feedback.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Iteration & Growth</h3>
                <p>Continuously improve and scale your solution based on user feedback and business growth.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Ongoing Support</h3>
                <p>Provide continuous support and optimization as your startup scales and evolves.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Solutions for Every Startup Stage</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>MVP Development</h3>
                <p>Build and launch your minimum viable product with AI capabilities to validate your market.</p>
                <ul>
                  <li>Rapid prototyping</li>
                  <li>User feedback integration</li>
                  <li>Market validation</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Growth Scaling</h3>
                <p>Scale your operations efficiently with AI-powered automation and optimization tools.</p>
                <ul>
                  <li>Process automation</li>
                  <li>Customer acquisition</li>
                  <li>Operational efficiency</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Market Expansion</h3>
                <p>Expand into new markets and customer segments with intelligent market analysis and outreach.</p>
                <ul>
                  <li>Market research</li>
                  <li>Localization support</li>
                  <li>International scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Accelerate Your Startup?</h2>
            <p>Let's discuss how our startup solutions can help you scale efficiently and cost-effectively.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
