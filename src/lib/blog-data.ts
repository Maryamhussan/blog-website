export type BlogSection = {
  type: 'paragraph' | 'list' | 'image'; // Type of content section (paragraph, list, or image)
  content?: string; // Text content for paragraphs
  items?: string[]; // Array of strings for list items
  src?: string; // Source URL for images
  alt?: string; // Alt text for images
  title?: string; // Title for a section (e.g., "Introduction", "Key Benefits")
};

// Type definition for a blog post
export type Blog = {
  id: string; // Unique identifier for the blog post
  slug: string; // URL-friendly identifier for the blog post
  title: string; // Title of the blog post
  description: string; // Short description for preview/summary
  mainImage: string; // Path to the main featured image for the blog post
  date: string; // Publication date of the blog post
  category: string; // Category the blog post belongs to (e.g., Technology, Travel)
  sections: BlogSection[]; // Array of content sections that make up the blog post
};

// Array of blog post data
export const blogs: Blog[] = [
  {
    id: 'blog1',
    slug: 'future-of-ai-society',
    title: "How AI is Changing Our Daily Lives",
    description: "Artificial Intelligence is no longer just for science fiction. It is here, helping us solve complex problems and making our lives easier.",
    mainImage: "/blog1.webp",
    date: "May 12, 2026",
    category: "Technology",
    sections: [
      { type: 'paragraph', title: "The New Normal", content: "Artificial Intelligence (AI) is quietly changing how we live and work. From the smart assistants in our pockets to the tools businesses use to stay organized, AI is becoming a part of everything we do. It helps us save time and make better decisions." },
      { type: 'list', title: "Key Benefits of AI Today", items: ["Personalized Learning: AI helps students learn at their own pace.", "Better Healthcare: Doctors use AI to find diseases early and save lives.", "Smart Travel: AI helps us find the fastest routes and reduces traffic."] },
      { type: 'image', src: "/blog1.3.webp", alt: "Advanced AI visualization" },
      { type: 'paragraph', title: "Understanding the Ethics", content: "As AI grows, we must think about how to use it fairly. It is important to protect our privacy and ensure that AI tools are built to help everyone equally. Technology should be a tool that empowers people, not one that creates new problems." },
      { type: 'image', src: "/blog1.2.webp", alt: "AI and Human Collaboration" },
      { type: 'list', title: "Looking Ahead", items: ["AI will work alongside humans to solve global challenges like climate change.", "New jobs will focus on creativity and human connection.", "Technology will become more intuitive and easier for everyone to use."] }
    ]
  },
  {
    id: 'blog2',
    slug: 'adventure-travel-guide-2026',
    title: "Top 2026 Destinations for Modern Explorers",
    description: "Travel is about more than just seeing new places; it is about finding yourself. Discover the most inspiring destinations for your next journey.",
    mainImage: "/blog2.webp",
    date: "June 05, 2026",
    category: "Travel",
    sections: [
      { type: 'paragraph', title: "The Spirit of Adventure", content: "In 2026, travel is shifting toward meaningful experiences. People are looking for places that offer a deep connection to nature and local cultures. Whether you are trekking through mountains or exploring hidden coastal towns, the goal is to find inspiration." },
      { type: 'list', title: "Must-Visit Locations", items: ["Patagonia, Argentina: A dream for hikers and nature lovers.", "Kyoto, Japan: Where ancient traditions meet modern innovation.", "The Swiss Alps: Perfect for those seeking both adventure and peace."] },
      { type: 'image', src: "/blog2.3.webp", alt: "Stunning mountain landscape" },
      { type: 'paragraph', title: "Traveling with Purpose", content: "Modern travel is also about being responsible. We are seeing a rise in 'slow travel,' where explorers spend more time in one place to truly understand it. This helps support local communities and protects the environment for future generations." },
      { type: 'image', src: "/blog2.2.webp", alt: "Sustainable travel experience" },
      { type: 'list', title: "Pro Tips for Your Next Trip", items: ["Pack light and focus on essentials.", "Learn a few local phrases to connect with people.", "Always leave a place better than you found it."] }
    ]
  },
  {
    id: 'blog3',
    slug: 'digital-marketing-mastery',
    title: "Simple Strategies for Digital Marketing Success",
    description: "Marketing in the digital age can be overwhelming. We break down the most effective ways to grow your brand and connect with your audience.",
    mainImage: "/blog3.webp",
    date: "July 15, 2026",
    category: "Marketing",
    sections: [
      { type: 'paragraph', title: "Building Real Connections", content: "Great marketing is not about selling; it is about helping. In today's world, people want to support brands they trust. By sharing valuable content and being honest, you can build a community that stays with you for the long term." },
      { type: 'list', title: "Focus on These Three Things", items: ["Authenticity: Be yourself and show the humans behind the brand.", "Consistency: Post regularly to stay at the top of people's minds.", "Value: Always give your audience something they can use."] },
      { type: 'image', src: "/blog3.3.webp", alt: "Modern marketing strategy" },
      { type: 'paragraph', title: "The Power of Data", content: "You don't need to be a math expert to use data. Simple tools can show you what your audience likes most. By paying attention to what works, you can spend more time on the things that actually help your business grow." },
      { type: 'image', src: "/blog3.2.webp", alt: "Analytics and insights" },
      { type: 'list', title: "Future Trends", items: ["Short-form video will continue to dominate social media.", "AI will help create more personalized experiences for customers.", "Community-led growth will be more important than ever."] }
    ]
  },
  {
    id: 'blog4',
    slug: 'healthy-living-made-easy',
    title: "A Simple Guide to Living a Healthier Life",
    description: "Health is not a destination; it is a way of life. Learn how small, daily choices can lead to big changes in your energy and happiness.",
    mainImage: "/blog4.webp",
    date: "August 20, 2026",
    category: "Lifestyle",
    sections: [
      { type: 'paragraph', title: "The Foundation of Wellness", content: "Living a healthy life does not have to be complicated. It starts with the basics: good food, regular movement, and enough sleep. When you take care of your body, your mind follows, and you find yourself more productive and positive." },
      { type: 'list', title: "Daily Habits for Success", items: ["Start your day with a glass of water.", "Take a 15-minute walk in the fresh air.", "Practice gratitude for five minutes before bed."] },
      { type: 'image', src: "/blog4.3.webp", alt: "Fresh and healthy meal" },
      { type: 'paragraph', title: "Mindful Eating", content: "Eating well is about balance, not restriction. Focus on whole foods like fruits, vegetables, and lean proteins. Listen to your body and eat when you are hungry, but also enjoy the foods you love in moderation. It is about feeling good, not perfect." },
      { type: 'image', src: "/blog4.2.webp", alt: "Balanced lifestyle" },
      { type: 'list', title: "Mental Health Matters", items: ["Set boundaries with your digital devices.", "Connect with friends and family regularly.", "Don't be afraid to ask for help when you need it."] }
    ]
  },
  {
    id: 'blog5',
    slug: 'future-of-work-2026',
    title: "Navigating the Future of Work and Career",
    description: "The way we work is changing forever. Discover the skills you need to thrive in a world that values flexibility and innovation.",
    mainImage: "/blog5.webp",
    date: "September 10, 2026",
    category: "Business",
    sections: [
      { type: 'paragraph', title: "The Rise of Flexibility", content: "Work is no longer a place you go; it is something you do. In 2026, more people than ever are working from home or choosing flexible schedules. this allows for a better work-life balance and gives companies access to talent from all over the world." },
      { type: 'list', title: "Essential Skills for 2026", items: ["Digital Literacy: Being comfortable with new tech tools.", "Emotional Intelligence: Building strong relationships, even remotely.", "Adaptability: Being ready to learn and change as the world does."] },
      { type: 'image', src: "/blog5.3.webp", alt: "Modern home office" },
      { type: 'paragraph', title: "Human-Centric Leadership", content: "As technology takes over repetitive tasks, the most important skills are human ones. Leaders are focusing on empathy, clear communication, and building strong cultures. The future of work is about making sure people feel valued and inspired." },
      { type: 'image', src: "/blog5.2.webp", alt: "Collaborative work environment" },
      { type: 'list', title: "Career Growth Tips", items: ["Never stop learning; take a short course every year.", "Build a strong personal brand online.", "Focus on solving problems, not just doing tasks."] }
    ]
  },
  {
    id: 'blog6',
    slug: 'start-coding-guide-2026',
    title: "Your First Steps into the World of Coding",
    description: "Learning to code is like learning a new language that lets you build anything you can imagine. Here is how to get started today.",
    mainImage: "/blog6.webp",
    date: "October 05, 2026",
    category: "Education",
    sections: [
      { type: 'paragraph', title: "The Power of Creation", content: "Coding is one of the most powerful skills you can learn today. It is not just for computer experts; it is for anyone who wants to create tools, websites, or apps. The best part is that you can start for free using the many resources available online." },
      { type: 'list', title: "Where to Begin", items: ["Python: Great for beginners and used in AI and data.", "JavaScript: The language of the web, perfect for building sites.", "HTML & CSS: The foundation for everything you see online."] },
      { type: 'image', src: "/blog6.3.webp", alt: "Coding on a laptop" },
      { type: 'paragraph', title: "Learning by Doing", content: "The secret to learning coding is to build projects. Don't just read books; start by making a simple website or a basic calculator. When you solve real problems, you learn much faster and stay more motivated. Every expert was once a beginner." },
      { type: 'image', src: "/blog6.2.webp", alt: "Developer workspace" },
      { type: 'list', title: "Top Learning Resources", items: ["FreeCodeCamp: Amazing free courses for all levels.", "YouTube: A goldmine for step-by-step tutorials.", "Community Forums: Places like Stack Overflow to ask questions."] }
    ]
  }
];
