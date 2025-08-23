"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function SmartOutreach() {
    return (
    <Main className="smart-outreach-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>Smart Outreach</h1>
            <p className={styles.subtitle}>Automated Flow with cold mail, CRM, LinkedIn/X/Instagram bots, and human-like chat for B2B growth.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>300%</span>
                <span className={styles.label}>Response Rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Engagement</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>5x</span>
                <span className={styles.label}>Lead Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Revolutionize Your B2B Outreach Strategy</h2>
            <p className={styles.sectionDescription}>
              Our intelligent outreach solutions combine AI-powered automation with human-like interactions 
              to maximize engagement and drive meaningful business relationships.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3>Cold Email Automation</h3>
                <p>Personalized email campaigns that adapt to recipient behavior and optimize for maximum engagement.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.33.44-.49.98-.49 1.53V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z" />
                  </svg>
                </div>
                <h3>Social Media Bots</h3>
                <p>Intelligent bots for LinkedIn, X, and Instagram that engage prospects naturally and build relationships.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>CRM Integration</h3>
                <p>Seamless integration with your existing CRM to track leads, manage contacts, and automate follow-ups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Smart Outreach Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Target Identification</h3>
                <p>AI-powered analysis identifies your ideal prospects based on industry, role, and engagement patterns.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Personalized Messaging</h3>
                <p>Generate tailored messages that resonate with each prospect's specific needs and interests.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Multi-Channel Engagement</h3>
                <p>Engage prospects across email, social media, and messaging platforms with consistent messaging.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Lead Nurturing</h3>
                <p>Automated follow-up sequences that nurture relationships and convert prospects into customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Outreach Solutions for Every Business</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>B2B Sales</h3>
                <p>Scale your sales outreach with intelligent automation that identifies and engages qualified prospects.</p>
                <ul>
                  <li>Lead qualification</li>
                  <li>Meeting scheduling</li>
                  <li>Follow-up automation</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Recruitment</h3>
                <p>Find and engage top talent with personalized outreach campaigns across multiple platforms.</p>
                <ul>
                  <li>Candidate sourcing</li>
                  <li>Interview scheduling</li>
                  <li>Employer branding</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Partnership Development</h3>
                <p>Build strategic partnerships through intelligent outreach and relationship management.</p>
                <ul>
                  <li>Partner identification</li>
                  <li>Proposal automation</li>
                  <li>Relationship tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Scale Your Outreach?</h2>
            <p>Let's discuss how smart outreach can transform your lead generation and business growth.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
