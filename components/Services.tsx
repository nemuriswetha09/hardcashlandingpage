"use client";

import { useState } from "react";
import {
  Briefcase,
  CreditCard,
  ShieldCheck,
  FileText,
  Car,
  MapPin,
  Scale,
  BookOpen,
  Calculator,
  Search,
  Map,
  Wallet,
  ChevronRight,
  Phone,
  UserCheck,
  MapPin as VisitIcon,
  Handshake
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "B2B Debt Collection",
      description: "Recover unpaid invoices from businesses with strategic approaches.",
      more: "We specialize in structured B2B collection strategies backed by compliance and professional expertise.",
      expandedContent: "Our B2B debt collection service employs a multi-phase approach starting with amicable resolution attempts, escalating to formal demand letters, and if necessary, legal proceedings. We maintain professional relationships while ensuring your business receives what it's owed.",
      icon: Briefcase,
    },
    {
      title: "Credit Score Repair",
      description: "Improve low credit scores efficiently with proven methodologies.",
      more: "Our advisors work with clients to rebuild and maintain strong credit ratings for long-term benefits.",
      expandedContent: "Our credit repair process includes comprehensive credit report analysis, dispute resolution for inaccurate items, debt validation, and personalized coaching to help you build healthier financial habits. We work with all major credit bureaus to ensure your profile accurately reflects your creditworthiness.",
      icon: CreditCard,
    },
    {
      title: "Credit Risk Management",
      description: "Assess borrower's risk & payment behavior comprehensively.",
      more: "We analyze credit profiles and provide insights to reduce risks in lending and investments.",
      expandedContent: "Our risk assessment tools evaluate multiple data points including payment history, outstanding debts, credit utilization patterns, and economic factors. We provide detailed risk scoring and recommendations to protect your financial interests when extending credit.",
      icon: ShieldCheck,
    },
    {
      title: "Enforcement of SARFAESI Act",
      description: "Full compliance & enforcement support with legal expertise.",
      more: "We assist secured creditors in repossession and recovery under SARFAESI Act regulations.",
      expandedContent: "Our legal team specializes in SARFAESI Act proceedings, handling everything from issuing demand notices to taking physical possession of secured assets. We ensure full regulatory compliance while expediting the recovery process for financial institutions.",
      icon: FileText,
    },
    {
      title: "Vehicle Loan Recovery",
      description: "Interstate & customized recovery services for auto loans.",
      more: "Dedicated teams ensure efficient recovery of vehicles while following compliance protocols.",
      expandedContent: "Our vehicle recovery specialists operate across state lines with proper documentation and authorization. We utilize advanced tracking technology and coordinated efforts with local authorities when necessary to recover assets while maintaining strict adherence to legal protocols.",
      icon: Car,
    },
    {
      title: "Skip Tracing Services",
      description: "Fast, accurate tracking of missing/unresponsive debtors.",
      more: "We leverage advanced databases and AI-powered tools for accurate debtor tracing.",
      expandedContent: "Our skip tracing methodology combines database searches, public records analysis, social media monitoring, and field investigation to locate individuals who have changed locations without providing forwarding information. We maintain strict compliance with privacy regulations throughout the process.",
      icon: MapPin,
    },
    {
      title: "Legal Collection Services",
      description: "End-to-end legal support for debt recovery processes.",
      more: "From legal notices to litigation, we manage collections with legal backing and compliance.",
      expandedContent: "Our legal collections team handles the entire process from demand letters to court proceedings. We work with a network of attorneys across jurisdictions to ensure proper legal action is taken while maximizing recovery rates and minimizing legal expenses.",
      icon: Scale,
    },
    {
      title: "Accounts Receivable Services",
      description: "Efficient management of outstanding receivables.",
      more: "We streamline accounts receivable processes to boost your company's cash flow.",
      expandedContent: "We implement customized receivables management strategies including invoice processing, payment tracking, aging report analysis, and customized communication protocols to accelerate collections while maintaining customer relationships.",
      icon: BookOpen,
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Reliable financial record-keeping services.",
      more: "Our experts ensure accuracy and compliance in bookkeeping and financial reporting.",
      expandedContent: "Our accounting professionals provide comprehensive bookkeeping services including accounts payable/receivable management, bank reconciliation, financial statement preparation, and compliance reporting. We utilize cloud-based platforms for real-time financial visibility.",
      icon: Calculator,
    },
    {
      title: "Background Check Services",
      description: "Ensure transparency with professional verification.",
      more: "We offer comprehensive employee, tenant, and client verification services.",
      expandedContent: "Our background verification services include criminal record checks, employment history verification, education credential validation, reference checks, and credit history reviews. We provide detailed reports to help you make informed decisions about potential employees, tenants, or business partners.",
      icon: Search,
    },
    {
      title: "Field Tracking System",
      description: "Real-time monitoring and management of field operations.",
      more: "Our advanced GPS tracking and field agent management system ensures complete visibility and efficiency in your field operations.",
      expandedContent: "Our field tracking platform provides real-time location monitoring, route optimization, visit verification, and performance analytics. The system includes mobile apps for field agents and a comprehensive dashboard for managers to oversee operations and improve efficiency.",
      icon: Map,
    },
    {
      title: "Payment Pickups",
      description: "Secure and convenient payment collection services.",
      more: "We provide reliable payment collection agents who ensure secure and timely pickups from your clients or customers.",
      expandedContent: "Our trained collection agents follow strict protocols for payment collection including proper identification, receipt issuance, and secure transport of funds. We offer scheduled and on-demand pickup services with real-time tracking and confirmation for complete transparency.",
      icon: Wallet,
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section id="services" className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive debt management solutions tailored to your specific needs
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl transition-all duration-300 ${activeService === idx ? 'bg-gray-900/50' : 'hover:bg-gray-900/30'}`}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Icon */}
                <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {service.description}
                  </p>
                  <div className={`overflow-hidden transition-all duration-500 ${activeService === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 text-sm">
                      {service.more}
                    </p>
                    <button 
                      className="mt-3 text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors flex items-center"
                      onClick={() => toggleExpand(idx)}
                    >
                      Learn more <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${expandedService === idx ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedService === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-800/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-300 text-sm">
                        {service.expandedContent}
                      </p>
                      <button 
                        className="mt-3 text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors flex items-center"
                        onClick={() => toggleExpand(idx)}
                      >
                        Show less <ChevronRight className="w-4 h-4 ml-1 rotate-180" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to recover your debts?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you with customized debt recovery solutions.
          </p>
          <button className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}