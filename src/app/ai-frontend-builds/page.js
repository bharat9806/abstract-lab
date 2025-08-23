"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function AIFrontendBuilds() {
    return (
    <Main className="ai-frontend-builds-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>AI + Frontend Builds</h1>
            <p className={styles.subtitle}>Intelligent apps, websites, and dashboards that combine aesthetics with functionality.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>3x</span>
                <span className={styles.label}>Faster Development</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>100%</span>
                <span className={styles.label}>Responsive</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>AI-Powered</span>
                <span className={styles.label}>User Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Build Intelligent Digital Experiences</h2>
            <p className={styles.sectionDescription}>
              Create stunning, intelligent applications that combine cutting-edge AI capabilities with modern, 
              responsive design to deliver exceptional user experiences.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Modern Design</h3>
                <p>Beautiful, responsive interfaces that work seamlessly across all devices and platforms.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>AI Integration</h3>
                <p>Seamlessly integrate AI capabilities into your frontend for intelligent user interactions.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3>Performance Optimized</h3>
                <p>Lightning-fast applications with optimized performance and minimal loading times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Development Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Design & Planning</h3>
                <p>Create comprehensive designs and technical specifications for your intelligent application.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>AI Integration</h3>
                <p>Integrate AI capabilities and intelligent features into your application architecture.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Development & Testing</h3>
                <p>Build and thoroughly test your application across all devices and platforms.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Deployment & Launch</h3>
                <p>Deploy your application and provide ongoing support and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Intelligent Applications for Every Need</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>Web Applications</h3>
                <p>Build intelligent web applications with AI-powered features and modern user interfaces.</p>
                <ul>
                  <li>E-commerce platforms</li>
                  <li>Business dashboards</li>
                  <li>Content management systems</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Mobile Apps</h3>
                <p>Create responsive mobile applications with AI capabilities and native performance.</p>
                <ul>
                  <li>Cross-platform development</li>
                  <li>Native performance</li>
                  <li>Offline capabilities</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Data Dashboards</h3>
                <p>Build intelligent dashboards that visualize data and provide actionable insights.</p>
                <ul>
                  <li>Real-time analytics</li>
                  <li>Interactive visualizations</li>
                  <li>AI-powered insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Build Your Intelligent Application?</h2>
            <p>Let's discuss how AI-powered frontend development can create exceptional user experiences.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
