"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function Chatbots() {
    return (
    <Main className="chatbots-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>Open Ended Pre-built Chatbots</h1>
            <p className={styles.subtitle}>Ready-to-deploy chatbot solutions that adapt to your business requirements.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Availability</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>95%</span>
                <span className={styles.label}>Satisfaction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>Instant</span>
                <span className={styles.label}>Deployment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Intelligent Chatbots for Every Business</h2>
            <p className={styles.sectionDescription}>
              Deploy sophisticated chatbot solutions that provide instant customer support, 
              lead generation, and business automation with minimal setup time.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Instant Deployment</h3>
                <p>Ready-to-use chatbot solutions that can be deployed in minutes, not months.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Customizable</h3>
                <p>Adapt and customize chatbots to match your brand voice and business requirements.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3>Multi-Platform</h3>
                <p>Deploy across websites, mobile apps, social media, and messaging platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Chatbot Implementation Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Requirement Analysis</h3>
                <p>Understand your business needs and select the most suitable chatbot solution.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Customization</h3>
                <p>Customize the chatbot to match your brand, tone, and specific use cases.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Integration</h3>
                <p>Integrate the chatbot with your existing systems and platforms.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Launch & Monitor</h3>
                <p>Deploy the chatbot and provide ongoing monitoring and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Chatbot Solutions for Every Business Need</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>Customer Support</h3>
                <p>Provide instant, 24/7 customer support with intelligent FAQ handling and issue resolution.</p>
                <ul>
                  <li>FAQ automation</li>
                  <li>Ticket creation</li>
                  <li>Issue escalation</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Lead Generation</h3>
                <p>Capture and qualify leads through intelligent conversations and data collection.</p>
                <ul>
                  <li>Lead qualification</li>
                  <li>Appointment booking</li>
                  <li>Product recommendations</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>E-commerce</h3>
                <p>Enhance shopping experiences with product recommendations and order assistance.</p>
                <ul>
                  <li>Product search</li>
                  <li>Order tracking</li>
                  <li>Payment assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Deploy Your Chatbot?</h2>
            <p>Let's discuss how our pre-built chatbot solutions can enhance your customer experience.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
