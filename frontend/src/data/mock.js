// Mock data for Arnav Kumar's Portfolio

export const personalInfo = {
  name: "Arnav Kumar",
  title: "Data Analyst & ML Engineer",
  location: "Mumbai, India",
  email: "arnav9637@gmail.com",
  phone: "+91 7038606744",
  github: "https://github.com/Arnav-Kumar1",
  linkedin: "https://www.linkedin.com/in/arnav-kumar1/",
  bio: "Data Analyst with 1+ years of experience in fintech and SaaS analytics, skilled in Python, SQL, and BI tools. Proven ability to work directly with leadership teams, transforming raw datasets into strategic insights that drive growth, operational efficiency, and decision-making.",
  tagline: "Transforming Data into Actionable Insights",
  yearsOfExperience: "1+",
  projectsCompleted: "10+",
  companies: "4"
};

export const experiences = [
  {
    id: 1,
    company: "Recro",
    role: "Data Operations Analyst",
    location: "Bengaluru, India",
    type: "Contract Role",
    duration: "Nov 2024 - Jan 2025",
    logo: "R",
    achievements: [
      "Built automated SQL+Python pipelines for daily/monthly transaction data (3,000+), ensuring 100% reconciliation and error-free reporting",
      "Automated data validation and error fixing using Python, improving report accuracy by 15%",
      "Analyzed and resolved portfolio discrepancies during corporate actions with 100% accuracy",
      "Partnered with business teams to track key product KPIs including transactions per user, retention anomalies, and portfolio performance"
    ]
  },
  {
    id: 2,
    company: "Cointab",
    role: "Data Analyst",
    location: "Mumbai, India",
    type: "Full-time",
    duration: "May 2024 - Aug 2024",
    logo: "C",
    achievements: [
      "Analyzed customer transaction flows to detect anomalies, improving fraud detection accuracy and reducing manual investigation time",
      "Automated multi-stage financial reconciliation workflows using Python and SQL, improving accuracy and reducing manual effort by 100+ hours/month",
      "Configured the in-house tool using Python and SQL to automate reconciliation logic for financial audits",
      "Collaborated with marketing/sales to design BI reports on churn patterns, cohort behavior, and transaction volume trends"
    ]
  },
  {
    id: 3,
    company: "Happymonk AI Labs",
    role: "Data Science Intern",
    location: "Remote, India",
    type: "Internship",
    duration: "May 2023 - Mar 2024",
    logo: "H",
    achievements: [
      "Built 98% accurate object detection models (YOLO/Faster R-CNN) by aggregating multi-source data",
      "Led large-scale data annotation (100,000+ images) with rigorous QA checks to optimize model accuracy",
      "Deployed real-time detection systems on 50+ concurrent video streams achieving <200ms latency with 95%+ inference accuracy"
    ]
  },
  {
    id: 4,
    company: "Healthcare Technology Innovation Center",
    role: "Research Intern",
    location: "Remote, India",
    type: "Internship",
    duration: "Jun 2023 - Sep 2023",
    logo: "HTIC",
    achievements: [
      "Contributed to ML/AI-based techniques for vascular health assessment using ARTSENS, an innovative image-free ultrasound system",
      "Developed Python scripts for automating ultrasound data screening and generating motion mode images",
      "Applied signal processing and machine learning skills to design and evaluate models for carotid artery wall dynamics"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "SmartDoc AI - Document Intelligence Platform",
    description: "A full-stack generative AI platform utilizing Retrieval Augmented Generation (RAG) for intelligent Q&A and document summarization with secure authentication and real-time analytics.",
    duration: "Mar 2025 - May 2025",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Streamlit", "Docker", "JWT"],
    liveUrl: "https://smartdoc-ai-user.streamlit.app/",
    githubUrl: "https://github.com/Arnav-Kumar1",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    featured: true,
    achievements: [
      "Engineered secure FastAPI backend with JWT authentication for robust user, document, and API key management",
      "Delivered intuitive user/admin dashboards with real-time analytics via Streamlit",
      "Containerized application with Docker Compose for scalable deployment"
    ]
  },
  {
    id: 2,
    title: "Boosting Gym Membership Engagement",
    description: "Comprehensive data analysis project performing cohort analysis and churn prediction on 100K+ customer records, identifying retention drivers and implementing data-driven strategies.",
    duration: "Jul 2022 - Oct 2022",
    tags: ["Python", "SQL", "Power BI", "Churn Prediction", "Cohort Analysis"],
    githubUrl: "https://github.com/Arnav-Kumar1/The-Track-Fitness-Club",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    featured: true,
    achievements: [
      "Improved client retention by 15% through targeted promotions",
      "Reduced overcrowding by 15% with data-driven scheduling strategies",
      "Presented insights via Power BI dashboards supporting business decision-making"
    ]
  },
  {
    id: 3,
    title: "AI App for Forecasting Malaria",
    description: "International collaboration to develop an AI-powered application for malaria prediction and forecasting in Liberia, West Africa, using XGBoost models.",
    duration: "Jan 2024 - Apr 2024",
    tags: ["Python", "XGBoost", "Streamlit", "Docker", "ML"],
    liveUrl: "https://malaria-prediction.streamlit.app/",
    githubUrl: "https://github.com/Arnav-Kumar1",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: true,
    achievements: [
      "Collaborated internationally as ML Engineer with Omdena",
      "Built and optimized XGBoost models for malaria prediction",
      "Contributing to an expected 12-15% reduction in deaths in Liberia",
      "Deployed app via Streamlit and containerized with Docker"
    ]
  },
  {
    id: 4,
    title: "Live Attendance Monitoring System",
    description: "Real-time facial recognition system for tracking attendance, integrating with Firebase NoSQL cloud database for face matching and verification.",
    tags: ["Python", "Computer Vision", "Firebase", "Face Recognition"],
    githubUrl: "https://github.com/Arnav-Kumar1/Live-Attendence-Monitoring-System",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
  },
  {
    id: 5,
    title: "Stock Price Prediction",
    description: "Time series prediction using LSTM neural networks for stock market analysis and forecasting.",
    tags: ["Python", "LSTM", "TensorFlow", "Time Series"],
    githubUrl: "https://github.com/Arnav-Kumar1/stock-price-prediction",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    id: 6,
    title: "Marketing Strategy - Personalized Offer",
    description: "Machine learning model to predict driver behavior and offer acceptance during trips, utilizing Random Forest classification.",
    tags: ["Python", "Random Forest", "Scikit-learn", "ML"],
    githubUrl: "https://github.com/Arnav-Kumar1/Marketing-Strategy---Personalised-Offer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 7,
    title: "MNIST Digit Prediction",
    description: "Handwritten digit recognition system using CNN deployed on Amazon EC2 with Flask backend and interactive HTML canvas frontend.",
    tags: ["Python", "CNN", "Flask", "AWS EC2"],
    githubUrl: "https://github.com/Arnav-Kumar1/mnist_digit_prediction",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
  },
  {
    id: 8,
    title: "Titanic Survival Prediction",
    description: "Binary classification model using Random Forest to predict passenger survival on the Titanic dataset.",
    tags: ["Python", "Random Forest", "Scikit-learn"],
    githubUrl: "https://github.com/Arnav-Kumar1/titanic_survival",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80"
  }
];

export const skills = {
  languages: ["Python", "SQL (PostgreSQL)", "MongoDB"],
  frameworks: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Statsmodels", "Matplotlib", "Seaborn"],
  tools: ["Power BI", "Tableau", "Excel", "Git", "Docker", "Airflow"],
  ml: ["Neural Networks", "Random Forest", "XGBoost", "LSTM", "CNN", "YOLO", "Transfer Learning"],
  specializations: ["Data Cleaning", "ETL Pipelines", "Predictive Modeling", "Data Visualization", "Statistical Analysis", "Feature Engineering"]
};

export const education = [
  {
    id: 1,
    degree: "Diploma in Data Science",
    institution: "Indian Institute of Technology (IIT), Madras",
    duration: "2021 - 2022",
    cgpa: "8.2",
    logo: "IIT"
  },
  {
    id: 2,
    degree: "B.E. in Electronics & Telecommunication",
    institution: "Smt. Kashibai Navale College of Engineering, Pune",
    duration: "2016 - 2020",
    cgpa: "7.0",
    logo: "SKNCOE"
  }
];

export const achievements = [
  "100% reconciliation accuracy for 3,000+ daily financial transactions",
  "15% improvement in report accuracy through automation",
  "100+ analyst hours saved per month with automated workflows",
  "98% accuracy in object detection models",
  "95%+ inference accuracy with <200ms latency on real-time systems",
  "15% improvement in client retention through data-driven strategies",
  "12-15% expected reduction in malaria deaths in Liberia"
];