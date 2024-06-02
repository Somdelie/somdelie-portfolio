import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-8">
          My <span className="text-orange-500">Services</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="Building responsive and high-performance websites using modern web technologies like React, Next.js, and Tailwind CSS."
            imageUrl="/svc1.jpg"
          />
          <ServiceCard
            title="UI/UX Design"
            description="Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility."
            imageUrl="/svc2.jpg"
          />
          <ServiceCard
            title="Backend Development"
            description="Developing scalable and efficient backend systems with Node.js, Express, and database management."
            imageUrl="/svc4.jpg"
          />
          <ServiceCard
            title="Mobile App Development"
            description="Designing and developing cross-platform mobile applications using React Native."
            imageUrl="/svc5.jpg"
          />
          <ServiceCard
            title="E-commerce Solutions"
            description="Building robust e-commerce platforms with seamless payment integrations and user-friendly interfaces."
            imageUrl="/svc6.jpg"
          />
          <ServiceCard
            title="SEO Optimization"
            description="Improving website visibility and search engine rankings through effective SEO strategies."
            imageUrl="/svc7.jpg"
          />
          {/* Add more ServiceCard components as needed */}
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, imageUrl }: ServiceProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Services;
