"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function AIPipelines() {
    return (
    <Main className="ai-pipelines-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>AI Pipelines</h1>
            <p className={styles.subtitle}>End-to-end automation for workflows, streamlining your business processes with cutting-edge AI technology.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>75%</span>
                <span className={styles.label}>Faster Processing</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>99.9%</span>
                <span className={styles.label}>Accuracy Rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Transform Your Business with Intelligent Automation</h2>
            <p className={styles.sectionDescription}>
              Our AI pipelines seamlessly integrate with your existing systems to automate complex workflows, 
              reduce manual errors, and accelerate decision-making processes.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.16 12H18v7h-4v-6H8v6H4v-7H2.84L12 4.84z" />
                  </svg>
                </div>
                <h3>Seamless Integration</h3>
                <p>Connect with your existing tools and platforms without disrupting current operations.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <h3>Real-time Processing</h3>
                <p>Handle data and tasks in real-time with minimal latency and maximum efficiency.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
                  </svg>
                </div>
                <h3>Scalable Architecture</h3>
                <p>Grow your automation capabilities as your business expands without performance issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our AI Pipeline Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Analysis & Planning</h3>
                <p>We analyze your current workflows and identify automation opportunities to maximize efficiency.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Custom Development</h3>
                <p>Our team develops tailored AI solutions that integrate seamlessly with your existing systems.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Testing & Deployment</h3>
                <p>Rigorous testing ensures reliability before deploying to your production environment.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Monitoring & Optimization</h3>
                <p>Continuous monitoring and optimization ensure peak performance and ongoing improvements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Common Use Cases</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>Data Processing</h3>
                <p>Automate data extraction, cleaning, and analysis from multiple sources with AI-powered accuracy.</p>
                <ul>
                  <li>Document processing</li>
                  <li>Image recognition</li>
                  <li>Text analysis</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Customer Service</h3>
                <p>Enhance customer experience with intelligent chatbots and automated response systems.</p>
                <ul>
                  <li>24/7 support</li>
                  <li>Ticket routing</li>
                  <li>Sentiment analysis</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Financial Operations</h3>
                <p>Streamline financial processes with automated fraud detection and transaction processing.</p>
                <ul>
                  <li>Fraud detection</li>
                  <li>Invoice processing</li>
                  <li>Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Automate Your Workflows?</h2>
            <p>Let's discuss how AI pipelines can transform your business operations.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
