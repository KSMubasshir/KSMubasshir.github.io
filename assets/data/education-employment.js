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
     bullets         optional array of strings */
const EDU_EMP_DATA = {
  "employment": [
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws", "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2026-05", "end": "2026-08",
      "periodText": "May 2026 – Aug 2026",
      "location": "New York, NY",
      "detail": "Security, Search and Observability."
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Full-time",
      "start": "2026-01", "end": "2026-05",
      "periodText": "Spring '26",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino."
    },
    {
      "title": "Graduate Teaching Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Part-time",
      "start": "2025-08", "end": "2025-12",
      "periodText": "Fall '25",
      "location": "West Lafayette, IN",
      "detail": "Department of Computer Science.",
      "bullets": [
        "CS180: Problem Solving and Object-Oriented Programming"
      ]
    },
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws", "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2025-05", "end": "2025-08",
      "periodText": "May 2025 – Aug 2025",
      "location": "Boston, MA",
      "detail": "Security Analytics and AI Research (SAAR)."
    },
    {
      "title": "Campus Brand Ambassador (CBA)",
      "org": "Amazon",
      "url": "https://www.amazon.com/",
      "domain": "amazon.com",
      "logo": "a", "logoColor": "#232f3e",
      "employmentType": "Part-time",
      "start": "2025-03", "end": "present", "hideCurrent": true,
      "periodText": "Mar 2025 – Present",
      "location": "Purdue University · West Lafayette, IN"
    },
    {
      "title": "Graduate Teaching Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Part-time",
      "start": "2025-01", "end": "2025-05",
      "periodText": "Spring '25",
      "location": "West Lafayette, IN",
      "detail": "Department of Computer Science.",
      "bullets": [
        "CS180: Problem Solving and Object-Oriented Programming"
      ]
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Full-time",
      "start": "2024-08", "end": "2024-12",
      "periodText": "Fall '24",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino."
    },
    {
      "title": "Applied Scientist Intern",
      "org": "Amazon Web Services (AWS)",
      "url": "https://aws.amazon.com/",
      "domain": "aws.amazon.com",
      "logo": "aws", "logoColor": "#ff9900",
      "employmentType": "Internship",
      "start": "2024-05", "end": "2024-08",
      "periodText": "May 2024 – Aug 2024",
      "location": "Boston, MA",
      "detail": "Security Analytics and AI Research (SAAR), External Security Services (ESS)."
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Full-time",
      "start": "2022-08", "end": "2024-05",
      "periodText": "Fall '22 – Spring '24",
      "location": "West Lafayette, IN",
      "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino."
    },
    {
      "title": "Machine Learning Engineer",
      "org": "Advanced Chemical Industries (ACI) Ltd.",
      "url": "https://www.aci-bd.com/",
      "domain": "aci-bd.com",
      "logo": "ACI", "logoColor": "#c8102e",
      "employmentType": "Full-time",
      "start": "2020-09", "end": "2022-08",
      "periodText": "Sep 2020 – Aug 2022",
      "location": "Dhaka, Bangladesh",
      "detail": "Management Information System (MIS). NLP R&D, predictive analytics, chatbot and web development."
    },
    {
      "title": "Undergraduate Research Assistant",
      "org": "Bangladesh University of Engineering and Technology (BUET)",
      "url": "https://cse.buet.ac.bd/",
      "logoSrc": "assets/logos/buet.png",
      "logo": "B", "logoColor": "#00539b",
      "employmentType": "Research",
      "start": "2019-03", "end": "2020-09",
      "periodText": "Mar 2019 – Sep 2020",
      "location": "Dhaka, Bangladesh",
      "detail": "Rifat Shahriyar's Lab, Department of CSE. Multilingual NLP research."
    }
  ],
  "education": [
    {
      "title": "Ph.D. in Computer Science",
      "org": "Purdue University",
      "url": "https://www.cs.purdue.edu/",
      "domain": "purdue.edu",
      "logo": "P", "logoColor": "#b1810b",
      "employmentType": "Doctoral degree",
      "start": "2022-08", "end": "2027-05",
      "periodText": "Fall '22 – Spring '27 (expected)",
      "location": "West Lafayette, IN",
      "detail": "Advised by Prof. Elisa Bertino. Ph.D. candidate (passed preliminary exam, May 2026)."
    },
    {
      "title": "B.Sc. in Computer Science and Engineering",
      "org": "Bangladesh University of Engineering and Technology (BUET)",
      "url": "https://cse.buet.ac.bd/",
      "logoSrc": "assets/logos/buet.png",
      "logo": "B", "logoColor": "#00539b",
      "employmentType": "Bachelor's degree",
      "start": "2016-01", "end": "2021-04",
      "periodText": "2016 – 2021",
      "location": "Dhaka, Bangladesh",
      "detail": "CGPA 3.81 / 4.00. <a href=\"https://cse.buet.ac.bd/\">Department of Computer Science and Engineering</a>."
    }
  ]
};
