export const experience = [
  {
    company:  'Honeywell',
    role:     'Senior Java Full Stack Developer',
    period:   'Jan 2025 — Present',
    location: 'Atlanta, GA',
    current:  true,
    bullets: [
      'Architected <strong>30+ Spring Boot microservices</strong> on AWS EKS with Helm, enabling zero-downtime blue-green and canary deployments for a communications platform processing millions of daily email, SMS, and push notifications.',
      'Engineered <strong>Apache Kafka-based event pipelines</strong> for real-time telemetry and operational workflows, cutting incident resolution time by 35%.',
      'Automated end-to-end <strong>CI/CD pipelines</strong> with Jenkins, GitLab CI, and Terraform — compressing deployment cycles from 2 days to 4 hours, a <strong>95% reduction</strong>.',
      'Improved system observability using <strong>Prometheus and Grafana</strong> dashboards, enabling proactive monitoring across 30+ distributed services.',
      'Collaborated with cross-functional Agile teams across product, QA, and DevOps to deliver reliable, production-ready releases on a 2-week sprint cadence.',
    ],
    chips: ['Spring Boot', 'AWS EKS', 'Kafka', 'Helm', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana'],
  },
  {
    company:  'JELD-WEN',
    role:     'Java Full Stack Developer',
    period:   'Jan 2024 — Dec 2024',
    location: 'Charlotte, NC',
    current:  false,
    bullets: [
      'Delivered cloud-native microservices in <strong>Java, Spring Boot, and Node.js</strong> for manufacturing execution workflows, improving system throughput by 30%.',
      'Automated <strong>Kubernetes</strong> infrastructure provisioning with Helm and Terraform, reducing environment setup time from 4 hours to under 15 minutes.',
      'Designed <strong>Kafka-driven data pipelines</strong> and optimized MongoDB queries handling high-volume operational data, boosting peak query performance by 40%.',
      'Led migration of 8+ legacy monolithic systems to a modern microservices architecture, <strong>reducing technical debt by 40%</strong> and improving team deployment velocity.',
    ],
    chips: ['Java', 'Node.js', 'Kubernetes', 'MongoDB', 'Kafka', 'Terraform'],
  },
  {
    company:  'American Express',
    role:     'Java Full Stack Developer',
    period:   'Nov 2021 — Nov 2022',
    location: 'Bangalore, India',
    current:  false,
    bullets: [
      'Designed and deployed <strong>12+ Spring Cloud microservices</strong> supporting secure, high-volume financial transactions with sub-200ms latency across millions of daily requests.',
      'Secured APIs with <strong>Spring Security and OAuth2</strong> for PCI-DSS-compliant authentication; integrated Kafka into real-time fraud detection workflows processing thousands of events per second.',
      'Built scalable backend infrastructure on <strong>AWS Aurora and DynamoDB</strong> with Jenkins-based CI/CD pipelines, improving release reliability and reducing rollback incidents.',
      'Partnered with compliance, security, and product teams in an Agile environment to deliver payment processing features meeting strict regulatory requirements.',
    ],
    chips: ['Spring Cloud', 'OAuth2', 'Kafka', 'AWS Aurora', 'DynamoDB'],
  },
  {
    company:  'Teva Pharmaceuticals',
    role:     'Java Developer',
    period:   'Jan 2020 — Oct 2021',
    location: 'Bangalore, India',
    current:  false,
    bullets: [
      'Developed <strong>Spring Boot microservices</strong> and REST/SOAP APIs supporting pharmaceutical product lifecycle management systems used across global operations in 5+ regions.',
      'Designed optimized database schemas and stored procedures in <strong>MySQL and IBM DB2</strong>, reducing critical query execution time by 35% for high-frequency reporting jobs.',
      'Modernized legacy Java enterprise services by migrating <strong>SOAP integrations to RESTful APIs</strong>, improving interoperability with internal systems and third-party partners.',
      'Supported Agile delivery of 10+ product features across cross-functional teams of developers, QA engineers, and business analysts.',
    ],
    chips: ['Spring Boot', 'REST / SOAP', 'MySQL', 'IBM DB2'],
  },
]

export const skills = [
  {
    tag:   'Core',
    title: 'Backend',
    icon:  '⚙️',
    span:  5,
    items: ['Spring Boot', 'Spring MVC', 'Spring Cloud', 'Hibernate', 'JPA', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    tag:   'Languages',
    title: 'Code',
    icon:  '💻',
    span:  3,
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    tag:   'UI',
    title: 'Frontend',
    icon:  '🎨',
    span:  4,
    items: ['React', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'SCSS', 'TailwindCSS'],
  },
  {
    tag:   'Infrastructure',
    title: 'Cloud & DevOps',
    icon:  '☁️',
    span:  7,
    items: ['AWS EC2', 'Lambda', 'RDS', 'S3', 'CloudWatch', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI', 'Helm'],
  },
  {
    tag:   'Persistence',
    title: 'Databases',
    icon:  '🗄️',
    span:  5,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Oracle', 'Cassandra', 'SQL Server'],
  },
  {
    tag:   'Events & Intelligence',
    title: 'Messaging & AI',
    icon:  '🤖',
    span:  6,
    items: ['Kafka', 'JMS', 'OpenAI API', 'LangChain', 'RAG', 'Prometheus', 'Grafana', 'ELK Stack'],
  },
  {
    tag:   'Quality',
    title: 'Testing',
    icon:  '🧪',
    span:  6,
    items: ['JUnit', 'Mockito', 'Selenium', 'Cypress'],
  },
]

export const education = [
  {
    type:    'degree',
    icon:    '🎓',
    name:    'Master of Science in Computer Science',
    org:     'University of North Carolina at Charlotte',
    period:  'Jan 2023 – May 2024',
    badge:   'GPA 3.6',
    iconBg:  'rgba(6,214,160,.1)',
    iconBdr: '1px solid rgba(6,214,160,.18)',
  },
  {
    type:   'cert',
    icon:   '☁️',
    name:   'AWS Certified Developer – Associate',
    org:    'Amazon Web Services',
    period: 'September 2024',
    iconBg: 'rgba(245,158,11,.1)',
  },
  {
    type:   'cert',
    icon:   '☕',
    name:   'Oracle Certified Professional, Java SE 11 Developer',
    org:    'Oracle',
    period: 'May 2024',
    iconBg: 'rgba(220,38,38,.1)',
  },
]

export const stats = [
  { target: 5,  suffix: '+', label: 'Years Experience',          sub: 'Backend & Full Stack' },
  { target: 30, suffix: '+', label: 'Microservices Deployed',    sub: 'On AWS EKS with Helm' },
  { target: 35, suffix: '%', label: 'Faster Incident Resolution', sub: 'Via Kafka pipelines' },
  { target: 40, suffix: '%', label: 'Performance Gains',          sub: 'DB & pipeline optimisations' },
]

export const marqueeItems = [
  'Java', 'Spring Boot', 'AWS EKS', 'Kafka', 'Kubernetes',
  'Terraform', 'Docker', 'React', 'Next.js', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Jenkins', 'Spring Cloud', 'DynamoDB',
  'GraphQL', 'LangChain', 'OpenAI API',
]
