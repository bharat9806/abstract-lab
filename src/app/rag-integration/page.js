"use client";

import React from "react";
import styles from "./page.module.scss";
import ScrollLink from "../../components/ScrollLink";
import Main from "../../components/Main";

export default function RAGIntegration() {
    return (
    <Main className="rag-integration-page">
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1>RAG Integration</h1>
            <p className={styles.subtitle}>Knowledge-augmented AI systems tailored for businesses, enhancing decision-making capabilities.</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>95%</span>
                <span className={styles.label}>Accuracy</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>10x</span>
                <span className={styles.label}>Faster Insights</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>Real-time</span>
                <span className={styles.label}>Knowledge Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview} id="overview">
          <div className={styles.container}>
            <h2>Transform Your Data into Intelligent Insights</h2>
            <p className={styles.sectionDescription}>
              Our RAG (Retrieval-Augmented Generation) solutions combine your proprietary knowledge with advanced AI 
              to deliver accurate, contextual, and actionable insights for your business.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Knowledge Retrieval</h3>
                <p>Intelligent search and retrieval of relevant information from your knowledge base in real-time.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3>Contextual Generation</h3>
                <p>Generate accurate, contextually relevant responses based on your specific business knowledge.</p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3>Continuous Learning</h3>
                <p>Systems that continuously learn and improve from new data and user interactions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process} id="process">
          <div className={styles.container}>
            <h2>Our RAG Implementation Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Knowledge Base Setup</h3>
                <p>Organize and structure your existing knowledge base for optimal retrieval and processing.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Model Integration</h3>
                <p>Integrate advanced language models with your knowledge base for intelligent responses.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>System Training</h3>
                <p>Train the system on your specific domain knowledge and business context.</p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Deployment & Optimization</h3>
                <p>Deploy the system and continuously optimize for better performance and accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases} id="use-cases">
          <div className={styles.container}>
            <h2>RAG Solutions for Every Business Need</h2>
            <div className={styles.useCasesGrid}>
              <div className={styles.useCaseCard}>
                <h3>Customer Support</h3>
                <p>Provide instant, accurate responses to customer queries using your knowledge base.</p>
                <ul>
                  <li>FAQ automation</li>
                  <li>Technical support</li>
                  <li>Product information</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Research & Analysis</h3>
                <p>Accelerate research processes with intelligent document analysis and insights generation.</p>
                <ul>
                  <li>Document analysis</li>
                  <li>Market research</li>
                  <li>Competitive intelligence</li>
                </ul>
              </div>
              
              <div className={styles.useCaseCard}>
                <h3>Decision Support</h3>
                <p>Enhance decision-making with AI-powered insights from your business data.</p>
                <ul>
                  <li>Risk assessment</li>
                  <li>Strategy planning</li>
                  <li>Performance analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <h2>Ready to Enhance Your Knowledge Systems?</h2>
            <p>Let's discuss how RAG integration can transform your business intelligence and decision-making.</p>
            <div className={styles.contactActions}>
              <ScrollLink href="/#contact" className={styles.primaryBtn}>Get Started</ScrollLink>
              <ScrollLink href="/#services" className={styles.secondaryBtn}>View All Services</ScrollLink>
            </div>
          </div>
        </section>
     </Main>
   );
 }
