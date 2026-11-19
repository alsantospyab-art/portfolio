// Edit this file to update the Skills section. Source: resume.
export const profile = {
  name: "Alberto S. Payabyab",
  title: "Software Developer | Full-Stack | AWS & IT Infrastructure",
  summary:
    "I build and support remittance and payment systems with Elixir/Phoenix, Next.js and TypeScript, run them on AWS, and test and secure them before they reach production.",
  email: "al.santospayab@gmail.com",
  github: "https://github.com/alsantospyab-art",
};

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "Development", items: ["Elixir", "Phoenix", "Next.js", "TypeScript", "JavaScript", "React", "HTML", "CSS", "PHP (basic)", "REST APIs"] },
  { group: "Cloud & Infrastructure", items: ["EC2", "VPC", "IAM", "S3", "EBS", "RDS/Aurora", "Lambda", "SNS", "CloudFormation", "Amplify", "WAF", "CloudWatch", "Route 53", "Auto Scaling"] },
  { group: "DevOps", items: ["Git", "GitHub", "GitLab", "CI/CD workflows"] },
  { group: "Security", items: ["WAF/firewall configuration", "SSL/TLS certificates", "OWASP practices", "Snyk", "Vulnerability assessment", "Phishing simulations"] },
  { group: "QA & Testing", items: ["Manual QA", "Appium", "Selenium", "Regression testing", "Jira", "Trello", "Defect tracking"] },
  { group: "Databases", items: ["PostgreSQL", "Amazon RDS/Aurora"] },
  { group: "Integrations", items: ["Third-party APIs", "GCash", "Ventaja", "OAuth", "Twilio/SMS"] },
  { group: "IT Operations", items: ["LAN/WAN/VPN", "Servers and workstations", "Backups", "Runbooks and playbooks"] },
];

// Honest status per language: "Work" = used in real work (resume), "Sample" = proven by code in this repo.
export const languages = [
  { name: "Next.js + TypeScript", status: "Work", note: "Remittance frontend and payment forms.", code: "export async function getPosts(): Promise<Post[]> {\n  const res = await fetch(`${API}/posts`);\n  return res.json();\n}" },
  { name: "Elixir / Phoenix", status: "Work", note: "Payment backend and API endpoints.", code: "def index(conn, _params) do\n  json(conn, Posts.list_posts())\nend" },
  { name: "Python", status: "Sample", note: "FastAPI CRUD API with tests (apis/python).", code: "@app.get(\"/posts\")\ndef list_posts():\n    return list(DB.values())" },
  { name: "PHP", status: "Basic", note: "Basic experience. Sample API planned.", code: "<?php\nheader('Content-Type: application/json');\necho json_encode($posts);" },
  { name: "Java", status: "Planned", note: "Sample API planned for phase 2.", code: "@GetMapping(\"/posts\")\npublic List<Post> list() {\n  return repo.findAll();\n}" },
];

export const experience = {
  company: "BC Remit and Money Exchange Service Inc.",
  role: "IT Programmer",
  period: "2021 – June 2026",
  points: [
    "Built payment workflows for SSS, PhilHealth and Pag-IBIG, and integrated GCash and Ventaja.",
    "Helped migrate features from a legacy Next.js/TypeScript app to Elixir/Phoenix.",
    "Supported AWS infrastructure: EC2, VPC, IAM, RDS/Aurora, Lambda, WAF, CloudWatch, Route 53.",
    "Ran regression and production testing with Jira, Appium and Selenium, and applied OWASP practices with Snyk.",
  ],
};

export const projects = [
  { name: "Payment Processing Platform", tech: "Elixir, Phoenix, Next.js, TypeScript, AWS", text: "Dynamic forms and workflows for government payments, with external payment partners integrated and production issues resolved." },
  { name: "Remittance Platform", tech: "Next.js, TypeScript, Backend APIs, AWS", text: "Responsive customer transaction features, with bug fixes and performance improvements." },
];

export const stats = [
  { value: "5 yrs", label: "Building payment and remittance systems at BC Remit" },
  { value: "14", label: "AWS services supported in production" },
  { value: "3", label: "Government payment services integrated: SSS, PhilHealth, Pag-IBIG" },
];

export const pillars = [
  { title: "Build", text: "Full-stack features and APIs for payment and remittance workflows.", tags: ["Elixir", "Phoenix", "Next.js", "TypeScript", "React", "REST APIs"] },
  { title: "Run", text: "AWS infrastructure, DNS, monitoring and production support.", tags: ["EC2", "VPC", "IAM", "RDS/Aurora", "Lambda", "CloudWatch", "Route 53"] },
  { title: "Test and secure", text: "Regression testing, test automation and OWASP-based security checks.", tags: ["Appium", "Selenium", "Jira", "OWASP", "Snyk", "WAF", "SSL/TLS"] },
];

// AWS layers from the resume ("supported"), grouped by role. Edit freely.
export const infraLayers = [
  { name: "Edge", text: "DNS, certificates and the firewall in front of the app.", items: ["Route 53", "WAF", "SSL/TLS certificates"] },
  { name: "Compute", text: "Where the applications run and scale.", items: ["EC2", "Auto Scaling", "Lambda", "Amplify"] },
  { name: "Data", text: "Managed databases, object storage and disks.", items: ["RDS/Aurora", "PostgreSQL", "S3", "EBS"] },
  { name: "Network and access", text: "Private networking and who can touch what.", items: ["VPC", "IAM", "LAN/WAN/VPN"] },
  { name: "Operate", text: "Monitoring, alerts and repeatable setup.", items: ["CloudWatch", "SNS", "CloudFormation", "Runbooks"] },
];

export const securityWork = [
  { title: "Protect the app", points: ["Configured WAF and firewall controls", "Managed SSL/TLS certificates and DNS", "Applied OWASP practices in code and review"] },
  { title: "Find weaknesses early", points: ["Snyk checks on code and dependencies", "Vulnerability identification and monitoring", "Regression and production validation before release"] },
  { title: "Prepare people", points: ["Ran phishing simulations", "Security awareness on social engineering", "Wrote step-by-step runbooks and playbooks"] },
  { title: "Keep it recoverable", points: ["Data backup practices", "Documented network configs and inventories", "Production troubleshooting on AWS and databases"] },
];

// Status uses the same labels as languages: Work, Sample, Basic, Planned.
// Change a status to "Sample" only after the repo is public and deployed once.
export const infraRepos = [
  { name: "aws-secure-baseline", status: "Planned", text: "CloudFormation baseline: VPC with public and private subnets, least-privilege IAM, CloudTrail and a billing alarm.", tech: "CloudFormation, VPC, IAM, CloudTrail" },
  { name: "aws-hosting-reference", status: "Planned", text: "Web app behind Route 53, WAF and a load balancer, on Auto Scaling EC2 with an RDS database in private subnets.", tech: "Route 53, WAF, EC2, Auto Scaling, RDS" },
  { name: "server-hardening", status: "Planned", text: "Linux hardening script or playbook: SSH settings, firewall, patching and audit logging, with a checklist.", tech: "Linux, Bash, SSH, firewall" },
  { name: "monitoring-and-alerts", status: "Planned", text: "CloudWatch alarms and dashboards that notify through SNS, defined as code with a short runbook.", tech: "CloudWatch, SNS, CloudFormation" },
];

// Live projects shown in the carousel. Add a new object here to add a slide.
export const liveProjects = [
  {
    name: "AWS infrastructure showcase",
    url: "https://alsantospyab-art.github.io/aws-showcase/",
    repo: "https://github.com/alsantospyab-art/aws-showcase",
    text: "An interactive page for two CloudFormation projects: a secure account baseline, and a hosting setup with a firewall, load balancer, Auto Scaling and a private database. Select any tool to see what it does and why.",
    tags: ["AWS", "CloudFormation", "WAF", "Route 53", "RDS"],
  },
  {
    name: "Bug tracker",
    url: "https://alsantospyab-art.github.io/crud/",
    repo: "https://github.com/alsantospyab-art/crud",
    text: "A simple ticketing system for tracking bugs. Create, edit and delete bugs, switch between board and list views, and set status, assignee, priority and severity. Each bug has comments.",
    tags: ["Board view", "List view", "Comments", "CRUD"],
  },
];
