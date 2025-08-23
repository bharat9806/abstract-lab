"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function CustomAIModels() {
    return (
    <Main className="custom-ai-models-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>Custom AI Models</h1>
            <p className={styles.subtitle}>Specialized CNNs, LLMs, RAG, and fine-tuned models built for your specific needs.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>99%</span>
                <span className={styles.label}>Accuracy</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>Custom</span>
                <span className={styles.label}>Tailored Solutions</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Deployment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Build AI Models Tailored to Your Business</h2>
            <p className={styles.sectionDescription}>
              From computer vision to natural language processing, we develop custom AI models that are 
              specifically designed to solve your unique business challenges and requirements.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Computer Vision</h3>
                <p>Custom CNNs for image recognition, object detection, and visual analysis tasks.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Language Models</h3>
                <p>Specialized LLMs and fine-tuned models for text analysis and generation.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3>RAG Systems</h3>
                <p>Knowledge-augmented models that combine your data with advanced AI capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our Model Development Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Requirements Analysis</h3>
                <p>Understand your specific use case and define the model requirements and success metrics.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Data Preparation</h3>
                <p>Collect, clean, and prepare your data for model training and validation.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Model Development</h3>
                <p>Design, train, and optimize custom AI models for your specific requirements.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Deployment & Monitoring</h3>
                <p>Deploy your model and provide ongoing monitoring, maintenance, and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>Custom AI Solutions for Every Industry</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>Healthcare</h3>
                <p>Medical image analysis, patient data processing, and diagnostic assistance models.</p>
                <ul>
                  <li>Medical imaging</li>
                  <li>Patient monitoring</li>
                  <li>Drug discovery</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Manufacturing</h3>
                <p>Quality control, predictive maintenance, and production optimization models.</p>
                <ul>
                  <li>Defect detection</li>
                  <li>Predictive maintenance</li>
                  <li>Process optimization</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Finance</h3>
                <p>Risk assessment, fraud detection, and market analysis models.</p>
                <ul>
                  <li>Fraud detection</li>
                  <li>Credit scoring</li>
                  <li>Market prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Build Your Custom AI Model?</h2>
            <p>Let's discuss how custom AI models can solve your specific business challenges.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
