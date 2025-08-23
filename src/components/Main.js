"use client";

import React from "react";
import Link from "next/link";
import styles from "./Main.module.scss";
import ScrollLink from "./ScrollLink";

export default function Main({ children, className = "" }) {
  return (
    <div className={`${styles.page} ${className}`}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoText}>Abstractive Labs</Link>
          </div>
          <nav className={styles.nav}>
            <div className={styles.servicesDropdown}>
              <button className={styles.dropdownTrigger}>Services</button>
              <div className={styles.dropdownMenu}>
                <Link href="/ai-pipelines" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>🤖</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>AI Pipelines</span>
                    <span className={styles.serviceDesc}>Intelligent automation workflows</span>
                  </div>
                </Link>
                <Link href="/smart-outreach" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>📧</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>Smart Outreach</span>
                    <span className={styles.serviceDesc}>AI-powered communication</span>
                  </div>
                </Link>
                <Link href="/process-automation" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>⚙️</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>Process Automation</span>
                    <span className={styles.serviceDesc}>Workflow optimization</span>
                  </div>
                </Link>
                <Link href="/rag-integration" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>🔍</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>RAG Integration</span>
                    <span className={styles.serviceDesc}>Knowledge systems</span>
                  </div>
                </Link>
                <Link href="/ai-frontend-builds" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>🖥️</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>AI Frontend Builds</span>
                    <span className={styles.serviceDesc}>Intelligent applications</span>
                  </div>
                </Link>
                <Link href="/custom-ai-models" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>🎯</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>Custom AI Models</span>
                    <span className={styles.serviceDesc}>Specialized solutions</span>
                  </div>
                </Link>
                <Link href="/chatbots" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>💬</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>Chatbots</span>
                    <span className={styles.serviceDesc}>Intelligent conversations</span>
                  </div>
                </Link>
                <Link href="/startup-solutions" className={styles.dropdownItem}>
                  <div className={styles.serviceIcon}>🚀</div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceName}>Startup Solutions</span>
                    <span className={styles.serviceDesc}>Growth acceleration</span>
                  </div>
                </Link>
              </div>
            </div>
            <ScrollLink href="/#about">About</ScrollLink>
            <ScrollLink href="/#dashboard">Dashboard</ScrollLink>
            <ScrollLink href="/#contact" className={styles.contactBtn}>Contact Us</ScrollLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>About Abstractive Labs</h4>
            <p>Pioneering AI solutions for tomorrow's enterprise. We transform businesses through intelligent automation, data-driven insights, and cutting-edge technology.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <div className={styles.servicesGrid}>
              <div className={styles.servicesColumn}>
                <ul>
                  <li><Link href="/ai-pipelines">AI Pipelines</Link></li>
                  <li><Link href="/smart-outreach">Smart Outreach</Link></li>
                  <li><Link href="/process-automation">Process Automation</Link></li>
                  <li><Link href="/rag-integration">RAG Integration</Link></li>
                </ul>
              </div>
              <div className={styles.servicesColumn}>
                <ul>
                  <li><Link href="/ai-frontend-builds">AI Frontend Builds</Link></li>
                  <li><Link href="/custom-ai-models">Custom AI Models</Link></li>
                  <li><Link href="/chatbots">Chatbots</Link></li>
                  <li><Link href="/startup-solutions">Startup Solutions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: info@abstractivelabs.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Abstractive Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
