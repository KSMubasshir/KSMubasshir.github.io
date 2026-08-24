/* Education & employment data — edit this file to add/update entries.

   Both sections render as a LinkedIn-style timeline, sorted newest-first by "start".
   Fields per entry:
     title           role or degree name
     org             organization (plain text)
     url             org link (optional)
     domain          org website domain, used to fetch its favicon/logo
     logo            1–3 letter monogram fallback if the favicon fails
     logoColor       fallback monogram background
     employmentType  Internship | Part-time | Full-time | Research | Degree ...
     start / end     "YYYY-MM"; end may be "present" or omitted (= present)
     periodText      optional display override for the date range
     location        city/campus
     detail          optional sentence (may contain HTML)
     bullets         optional array of strings
     topics          optional array of short work-topic tags (employment only; feeds the summary panel) */
const EDU_EMP_DATA = {
  "employment": [
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2026-08",
      "end": "2026-12",
      "periodText": "Fall '26",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino.",
      "bullets": [
        "Working on AI for Cellular Network Security."
      ],
      "topics": ["Cellular Network Security", "AI/ML"]
    },
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws",
      "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2026-05",
      "end": "2026-08",
      "periodText": "May 2026 – Aug 2026",
      "location": "New York, NY",
      "detail": "Security, Search and Observability.",
      "bullets": [
        "Developing agentic AI methods that automate security triage workflows over large-scale search and observability data, reducing manual analyst effort."
      ],
      "topics": ["Agentic AI", "Security Analytics"]
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2026-01",
      "end": "2026-05",
      "periodText": "Spring '26",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino.",
      "bullets": [
        "Contributed to VWAttacker, a systematic security-testing framework for Voice-over-WiFi user equipment that uncovered downgrade, information-leakage, and denial-of-service weaknesses across commercial devices (IEEE INFOCOM 2026).",
        "Co-authored work that turns feature-attribution explanations of 5G anomaly-detection models into concrete, actionable mitigation steps for analysts (IEEE ICNC 2026)."
      ],
      "topics": ["Cellular Network Security", "AI/ML"]
    },
    {
      "title": "Graduate Teaching Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2025-08",
      "end": "2025-12",
      "periodText": "Fall '25",
      "location": "West Lafayette, IN",
      "detail": "Department of Computer Science.",
      "bullets": [
        "Taught CS 180 (Problem Solving and Object-Oriented Programming) to a ~900-student course by leading labs, grading projects, and holding weekly office hours."
      ]
    },
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws",
      "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2025-05",
      "end": "2025-08",
      "periodText": "May 2025 – Aug 2025",
      "location": "Boston, MA",
      "detail": "Security Analytics and AI Research (SAAR).",
      "bullets": [
        "Designed an LLM-based approach for automatically identifying high-severity vulnerability classes in cloud environments without requiring labeled training data, achieving high accuracy and consistency in evaluations."
      ],
      "topics": ["LLM Security", "Cloud Security"]
    },
    {
      "title": "Graduate Teaching Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2025-01",
      "end": "2025-05",
      "periodText": "Spring '25",
      "location": "West Lafayette, IN",
      "detail": "Department of Computer Science.",
      "bullets": [
        "Taught CS 180 (Problem Solving and Object-Oriented Programming) to a ~900-student course by leading labs, grading projects, and holding weekly office hours."
      ]
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2024-08",
      "end": "2024-12",
      "periodText": "Fall '24",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino.",
      "bullets": [
        "Completed large-scale evaluations and open-source artifacts for FBSDetector, showing high-accuracy, low-false-positive detection that runs on commodity devices, leading to a USENIX Security 2025 paper (joint first author)."
      ],
      "topics": ["Cellular Network Security", "AI/ML"]
    },
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws",
      "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2024-05",
      "end": "2024-08",
      "periodText": "May 2024 – Aug 2024",
      "location": "Boston, MA",
      "detail": "Security Analytics and AI Research (SAAR), External Security Services (ESS).",
      "bullets": [
        "Built an LLM-based research prototype that augments security investigations with relevant context retrieved in real time from cloud data sources."
      ],
      "topics": ["LLM Security", "Retrieval-Augmented Generation"]
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "start": "2022-08",
      "end": "2024-05",
      "periodText": "Fall '22 – Spring '24",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino.",
      "bullets": [
        "Built FBSDetector, an ML system that detects fake base stations and the multi-step attacks they launch directly from LTE/5G network traces, by curating a large labeled trace dataset and engineering stateful protocol features, published at USENIX Security 2025 (joint first author).",
        "Co-created SPEC5G, the first public NLP dataset for 5G protocol analysis (3.5M+ sentences from specification documents), enabling automated security text classification and summarization, published at IJCNLP-AACL 2023."
      ],
      "topics": ["Cellular Network Security", "AI/ML", "Natural Language Processing"]
    },
    {
      "title": "Machine Learning Engineer",
      "org": "Advanced Chemical Industries (ACI) Ltd.",
      "url": "https://www.aci-bd.com/",
      "domain": "aci-bd.com",
      "logo": "ACI",
      "logoColor": "#c8102e",
      "start": "2020-09",
      "end": "2022-08",
      "periodText": "Sep 2020 – Aug 2022",
      "location": "Dhaka, Bangladesh",
      "detail": "Management Information System (MIS). NLP R&D, predictive analytics, chatbot and web development.",
      "bullets": [
        "Shipped customer-purchase prediction models (lapsed-customer and next-purchase-amount) that guided retail business decisions, collaborating with a ten-person MIS analytics team.",
        "Built a speech-to-sentiment pipeline for the ACI call center, automating customer sentiment analysis and FAQ mining.",
        "Forecast Yamaha motorbike warranty claims to guide inventory planning and show results in a business dashboard using Python and Django as backend."
      ],
      "topics": ["Predictive Analytics", "Natural Language Processing"]
    },
    {
      "title": "Undergraduate Research Assistant",
      "org": "Bangladesh University of Engineering and Technology (BUET)",
      "url": "https://cse.buet.ac.bd/",
      "logoSrc": "assets/logos/buet.png",
      "logo": "B",
      "logoColor": "#00539b",
      "employmentType": "Research",
      "start": "2019-03",
      "end": "2020-09",
      "periodText": "Mar 2019 – Sep 2020",
      "location": "Dhaka, Bangladesh",
      "detail": "Rifat Shahriyar's Lab, Department of CSE. Multilingual NLP research.",
      "bullets": [
        "Helped build the largest Bengali–English parallel corpus to date via novel aligner-ensembling and batch-filtering techniques, achieving substantial BLEU improvements over prior translation systems, published at EMNLP 2020.",
        "Co-authored BanglaBERT, a Bangla language model that set a new state of the art on Bangla language-understanding benchmarks (NAACL 2022), and XL-Sum, a 1M-article abstractive summarization dataset covering 44 languages (ACL-IJCNLP 2021)."
      ],
      "topics": ["Natural Language Processing", "Machine Translation"]
    }
  ],
  "education": [
    {
      "title": "Ph.D. in Computer Science",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P",
      "logoColor": "#b1810b",
      "employmentType": "Doctoral degree",
      "start": "2022-08",
      "end": "2027-05",
      "periodText": "Fall '22 – Spring '27 (expected)",
      "location": "West Lafayette, IN",
      "detail": "Advised by Prof. Elisa Bertino. Ph.D. candidate (passed preliminary exam, May 2026)."
    },
    {
      "title": "B.Sc. in Computer Science and Engineering",
      "org": "Bangladesh University of Engineering and Technology (BUET)",
      "url": "https://cse.buet.ac.bd/",
      "logoSrc": "assets/logos/buet.png",
      "logo": "B",
      "logoColor": "#00539b",
      "employmentType": "Bachelor's degree",
      "start": "2016-01",
      "end": "2021-04",
      "periodText": "2016 – 2021",
      "location": "Dhaka, Bangladesh",
      "detail": "CGPA 3.81 / 4.00. <a href=\"https://cse.buet.ac.bd/\">Department of Computer Science and Engineering</a>."
    }
  ]
};
