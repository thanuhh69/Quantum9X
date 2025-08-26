import { Code, TrendingUp, Bot, Smartphone, Shield, Cloud, MessageCircle } from "lucide-react";

export function Courses() {
  const handleCourseClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about the courses offered at Quantum9x. Could you please provide more details?");
    window.open(`https://wa.me/918019234832?text=${message}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918019234832", "_blank");
  };

  const courses = [
    {
      icon: Code,
      title: "Python Programming",
      description: "Master Python programming from basics to advanced concepts with real-world projects.",
      testId: "course-python"
    },
    {
      icon: Code,
      title: "Java Development",
      description: "Learn Java programming fundamentals and object-oriented programming principles.",
      testId: "course-java"
    },
    {
      icon: Code,
      title: "C & C++ Programming",
      description: "Build strong foundation in C and C++ programming languages with system-level concepts.",
      testId: "course-c-cpp"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence and machine learning algorithms and applications.",
      testId: "course-aiml"
    },
    {
      icon: Bot,
      title: "AI in Data Science (AIDS)",
      description: "Explore AI applications in data science with practical hands-on experience.",
      testId: "course-aids"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect digital assets with advanced security techniques and ethical hacking practices.",
      testId: "course-cybersecurity"
    },
    {
      icon: TrendingUp,
      title: "Power BI",
      description: "Master data visualization and business intelligence with Microsoft Power BI.",
      testId: "course-powerbi"
    },
    {
      icon: Cloud,
      title: "Full Stack Web Development",
      description: "Build complete web applications using modern frontend and backend technologies.",
      testId: "course-fullstack"
    },
    {
      icon: Smartphone,
      title: "Microcontroller & Microprocessor",
      description: "Learn embedded systems programming with microcontrollers and microprocessors.",
      testId: "course-micro"
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Quantum</span> Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-quantum-red to-quantum-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your skills with our revolutionary course offerings designed for the quantum age.
          </p>
          
          {/* Course Advantages */}
          <div className="glass-effect p-6 rounded-2xl max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Additional Course Advantages</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">Daily AI Tools Series</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">Resume Building</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">Portfolio Building</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">1 Hackathon Assurance</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">LinkedIn Profile Building</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm font-semibold text-white">Git Professional</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl floating-card group cursor-pointer"
              onClick={handleCourseClick}
              data-testid={course.testId}
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <course.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{course.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">{course.description}</p>
              <div className="flex items-center text-red-500 font-semibold group-hover:text-white transition-colors">
                <span>Learn More</span>
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* WhatsApp CTA */}
        <div className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            data-testid="button-whatsapp-details"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Get Course Details on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
