"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TextAbout from '@/components/sections/about/TextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Wrench, Hammer, Shield, Zap, Power, Wind, Award } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Precision Garage Door Pros"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Free Quote",            href: "#contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Expert Garage Door Service When You Need It Most"
          description="Fast, reliable repair and installation from certified technicians. Available 24/7 for emergencies. Same-day service in most areas."
          background={{ variant: "plain" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-16086.jpg",              alt: "professional garage door installation service"
            }
          ]}
          avatarText="Trusted by 2000+ homeowners"
          buttons={[
            {
              text: "Schedule Service",              href: "#contact"
            },
            {
              text: "Emergency Help",              href: "tel:1-800-GARAGE-1"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBento
          title="Comprehensive Garage Door Solutions"
          description="From emergency repairs to complete installations, we handle every aspect of garage door maintenance and service with precision and expertise."
          tag="Our Services"
          tagAnimation="slide-up"
          features={[
            {
              title: "Emergency Repairs",              description: "24/7 emergency response for broken springs, damaged doors, and opener failures",              bentoComponent: "reveal-icon",              icon: Wrench
            },
            {
              title: "Professional Installation",              description: "Expert installation of residential and commercial garage doors with premium materials",              bentoComponent: "reveal-icon",              icon: Hammer
            },
            {
              title: "Maintenance Programs",              description: "Regular maintenance to extend door lifespan and prevent costly repairs",              bentoComponent: "reveal-icon",              icon: Shield
            },
            {
              title: "Spring Replacement",              description: "Safe and efficient spring replacement by certified professionals",              bentoComponent: "reveal-icon",              icon: Zap
            },
            {
              title: "Door Openers",              description: "Installation and repair of all types of garage door openers",              bentoComponent: "reveal-icon",              icon: Power
            },
            {
              title: "Weatherproofing",              description: "Seal and insulate your garage door for energy efficiency",              bentoComponent: "reveal-icon",              icon: Wind
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Why Choose Us"
          tagIcon={Award}
          title="Over 20 years of professional garage door service excellence. We pride ourselves on fast response times, transparent pricing, and expert craftsmanship that keeps your garage door running smoothly."
          useInvertedBackground={false}
          buttons={[
            {
              text: "Learn Our Story",              href: "#"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Why Homeowners Trust Precision"
          description="Proven track record of reliable service and customer satisfaction"
          tag="By The Numbers"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "2000+",              title: "Happy Customers Served",              items: [
                "95% customer satisfaction rate",                "Average 4.9 star rating",                "Recommended by neighbors"
              ]
            },
            {
              id: "2",              value: "20+",              title: "Years of Experience",              items: [
                "Since 2004 in business",                "Licensed and insured",                "Certified technicians"
              ]
            },
            {
              id: "3",              value: "24/7",              title: "Emergency Service Available",              items: [
                "Same-day response",                "No hidden fees",                "Transparent pricing"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from homeowners who trusted us with their garage door service"
          tag="Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Homeowner",              company: "Springfield Heights",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blond-woman-home-with-tablet_268835-935.jpg",              imageAlt: "Sarah Mitchell satisfied customer"
            },
            {
              id: "2",              name: "James Rodriguez",              role: "Property Manager",              company: "Downtown Properties",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg",              imageAlt: "James Rodriguez business professional"
            },
            {
              id: "3",              name: "Emily Chen",              role: "Homeowner",              company: "Riverside Community",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-portrait-outdoors_23-2148603027.jpg",              imageAlt: "Emily Chen happy customer"
            },
            {
              id: "4",              name: "Margaret Thompson",              role: "Real Estate Agent",              company: "Premier Realty Group",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",              imageAlt: "Margaret Thompson professional testimonial"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our garage door services"
          textPosition="left"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How quickly can you respond to emergency repairs?",              content: "We pride ourselves on fast response times. For emergency calls during business hours, we typically arrive within 1-2 hours. 24/7 emergency service available with no additional charge for after-hours calls."
            },
            {
              id: "2",              title: "What warranty do you offer on repairs?",              content: "All repairs come with a 12-month warranty on parts and labor. New door installations include a 5-year manufacturer warranty plus our extended coverage options for peace of mind."
            },
            {
              id: "3",              title: "Do you handle commercial garage doors?",              content: "Yes, we service both residential and commercial garage door systems. Our technicians are certified for industrial-grade openers and high-cycle doors used in business applications."
            },
            {
              id: "4",              title: "Are your technicians licensed and insured?",              content: "Absolutely. All our technicians are fully licensed, insured, and background-checked. We maintain comprehensive liability insurance to protect your home and property."
            },
            {
              id: "5",              title: "What payment methods do you accept?",              content: "We accept all major credit cards, cash, checks, and digital payment methods. We also offer financing options for larger installation projects."
            }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to get your garage door working perfectly? Contact Precision Garage Door Pros today for a free quote and expert service."
          animationType="entrance-slide"
          background={{ variant: "downward-rays-static" }}
          buttons={[
            {
              text: "Call Now: 1-800-GARAGE-1",              href: "tel:1-800-427-2341"
            },
            {
              text: "Schedule Online",              href: "#"
            }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Precision Garage Door Pros"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms of Service",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}
