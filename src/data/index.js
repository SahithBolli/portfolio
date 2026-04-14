export const experience = [
  {
    company:  'Honeywell',
    role:     'Java Full Stack Developer',
    period:   'Jan 2024 — Present',
    location: 'Charlotte, NC',
    current:  true,
    bullets: [
      'Built and optimised Spring Boot microservices and REST APIs for a communications platform handling email, SMS, and push notifications at scale.',
      'Designed and deployed <strong>30+ microservices</strong> on AWS EKS using Helm, enabling zero-downtime blue-green and canary releases.',
      'Integrated Kafka-based event pipelines for real-time telemetry, <strong>reducing incident resolution time by 35%</strong>.',
      'Automated CI/CD with Jenkins, GitLab CI, and Terraform — <strong>cutting deployment cycles from 2 days to 4 hours</strong>.',
    ],
    chips: ['Spring Boot', 'AWS EKS', 'Kafka', 'Helm', 'Terraform', 'Jenkins', 'GitLab CI'],
  },
  {
    company:  'JELD-WEN',
    role:     'Java Full Stack Developer',
    period:   'Apr 2023 — Dec 2023',
    location: 'Charlotte, NC',
    current:  false,
    bullets: [
      'Built cloud-native microservices in Java, Spring Boot, and Node.js for manufacturing workflows — <strong>30% throughput improvement</strong>.',
      'Automated Kubernetes deployments with Helm and Terraform — <strong>provisioning from 4 hrs to under 15 min</strong>.',
      'Kafka-driven pipelines and MongoDB query optimisation — <strong>40% peak performance gain</strong>.',
      'Migrated 8+ legacy systems to modern microservices architecture, <strong>reducing technical debt by 40%</strong>.',
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
      'Deployed 12+ Spring Cloud microservices for high-volume financial transactions with <strong>sub-200ms latency</strong>.',
      'Implemented Spring Security and OAuth2 for PCI-compliant auth; Kafka for fraud detection workflows.',
      'Backend solutions via AWS Aurora, DynamoDB, and Jenkins CI/CD pipelines.',
    ],
    chips: ['Spring Cloud', 'OAuth2', 'Kafka', 'AWS Aurora', 'DynamoDB'],
  },
  {
    company:  'Teva Pharmaceuticals',
    role:     'Java Developer',
    period:   'Mar 2019 — Oct 2021',
    location: 'Bangalore, India',
    current:  false,
    bullets: [
      'Built Spring Boot microservices, REST/SOAP APIs, and Java enterprise services for product lifecycle systems.',
      'Optimised MySQL and IBM DB2 schemas and stored procedures — <strong>35% faster query execution</strong>.',
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
