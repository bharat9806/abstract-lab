"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function ProcessAutomation() {
  return (
    <Main className="process-automation-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>Process Automation</h1>
            <p className={styles.subtitle}>Comprehensive automation solutions from ordering systems to full backend workflows.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>90%</span>
                <span className={styles.label}>Time Saved</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>100%</span>
                <span className={styles.label}>Accuracy</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Streamline Your Business Operations</h2>
            <p className={styles.sectionDescription}>
              From simple task automation to complex workflow orchestration, our solutions eliminate manual processes 
              and optimize your business efficiency across all departments.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Workflow Automation</h3>
                <p>Design and implement custom workflows that automate complex business processes and decision trees.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Order Management</h3>
                <p>Automated order processing, inventory management, and fulfillment systems for seamless operations.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Backend Integration</h3>
                <p>Connect and automate all your backend systems for unified data flow and process management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Automation Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Process Analysis</h3>
                <p>We analyze your current processes to identify automation opportunities and efficiency gains.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Solution Design</h3>
                <p>Design custom automation solutions tailored to your specific business needs and requirements.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Implementation</h3>
                <p>Deploy automation solutions with minimal disruption to your existing operations.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Optimization</h3>
                <p>Continuous monitoring and optimization to ensure maximum efficiency and ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Automation Solutions for Every Industry</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>E-commerce</h3>
                <p>Automate order processing, inventory management, and customer service workflows.</p>
                <ul>
                  <li>Order fulfillment</li>
                  <li>Inventory tracking</li>
                  <li>Customer support</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Manufacturing</h3>
                <p>Streamline production processes, quality control, and supply chain management.</p>
                <ul>
                  <li>Production scheduling</li>
                  <li>Quality assurance</li>
                  <li>Supply chain tracking</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Healthcare</h3>
                <p>Automate patient management, appointment scheduling, and administrative tasks.</p>
                <ul>
                  <li>Patient registration</li>
                  <li>Appointment booking</li>
                  <li>Billing automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Automate Your Processes?</h2>
            <p>Let's discuss how process automation can transform your business operations and efficiency.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
