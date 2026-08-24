/* Home page content — edit this file to update the hero, about text, and artifact cards.
   "paragraphs", "meta", and "bullets" may contain inline HTML links. */
const HOME_DATA = {
  "social": [
    { "label": "LinkedIn", "url": "https://www.linkedin.com/in/kazi-samin-mubasshir/", "domain": "linkedin.com" },
    { "label": "Twitter", "url": "https://twitter.com/MubasshirSamin", "domain": "twitter.com" },
    { "label": "GitHub", "url": "https://github.com/KSMubasshir", "domain": "github.com" },
    { "label": "CV", "url": "cv.html", "icon": "doc" }
  ],
  "roles": [
    {
      "org": "Purdue University: Ph.D. Candidate (Fall '22 – Spring '27)",
      "detail": "Graduate Research Assistant (Fall '22 – Fall '24, Spring '26, Fall '26) <br> Graduate Teaching Assistant (Spring '25, Fall '25) <br> Department of Computer Science",
      "domain": "purdue.edu", "logo": "P", "logoColor": "#b1810b"
    },
    {
      "org": "AWS: Applied Scientist Intern (Summer '24, '25, '26)",
      "detail": "Security Analytics and AI Research (SAAR), Boston, MA ('24, '25)<br>Security, Search and Observability, New York, NY ('26)",
      "domain": "aws.amazon.com", "logo": "aws", "logoColor": "#ff9900"
    }
  ],
  "sections": [
    {
      "heading": "About Me",
      "paragraphs": [
        "I am a Ph.D. candidate in the Department of Computer Science at <a href=\"https://www.purdue.edu/\">Purdue University</a>. I started my Ph.D. in Fall '22 under the supervision of Professor <a href=\"https://www.cs.purdue.edu/homes/bertino/\">Elisa Bertino</a>. My expected graduation date is July 2027.",
        "My research addresses some of the most critical security challenges in modern cellular systems (4G/5G), focusing on detecting fake base stations and defending against complex multi-step attacks within both traditional cellular networks and more recent ORAN environments.",
        "I combine network security, machine learning, and large-scale data analysis to design detection frameworks that can seamlessly integrate into existing infrastructures without disrupting operations. My work aims to create scalable, trustworthy security solutions that protect billions of connected devices worldwide.",
        "Alongside research, I actively contribute to my community as a teaching assistant and graduate student mentor within Purdue's CS. My long-term goal is to bridge academia and industry to build future-proof, secure wireless networks that connect the global community."
      ]
    },
    {
      "heading": "Research Interests",
      "paragraphs": [
        "My research interests lie at the intersection of network security and machine learning applications. The primary focus of my research is on developing innovative solutions to enhance the security landscape of cellular networks. I am particularly intrigued by the challenges posed by adaptive adversaries against cellular networks and aim to leverage machine learning techniques to build defenses against them. I also explore federated learning for network security and the use of foundation models and retrieval-augmented generation (RAG) for protocol analysis, vulnerability detection, and automated threat intelligence. I am also interested in securing large-scale distributed and cloud infrastructures, with emphasis on LLM-powered security analytics and threat intelligence. In the future, I want to explore Android Security and the prospect of developing on-device security solutions."
      ]
    }
  ],
  "artifacts": [
    {
      "title": "SPEC5G",
      "meta": "<a href=\"https://github.com/SysNetS/SPEC5G\">github.com/SysNetS/SPEC5G</a>"
    },
    {
      "title": "FBSDetector",
      "bullets": [
        "Website: <a href=\"https://fbsdetector.github.io/\">fbsdetector.github.io</a>",
        "GitHub: <a href=\"https://github.com/SysNetS/fbsdetector\">github.com/SysNetS/fbsdetector</a>",
        "<a href=\"https://advancedwireless.org/outreach/fake-base-station-detection-research-on-powder/\">News in Platforms for Advanced Wireless Research</a>",
        "<a href=\"https://www.cs.purdue.edu/news/articles/2023/researchers-uncover-fake-base-stations-in-cellular-networks-using-machine-learning.html\">News in Purdue Computer Science</a>"
      ]
    }
  ]
};
