/* Education & employment data — edit this file to add/update entries.

   EDUCATION entries (timeline): role, org, location, period, type:"edu", detail?, bullets?

   EMPLOYMENT is grouped by company (LinkedIn-style). Each company has:
     company, logo (1–2 letter monogram), logoColor (hex), location?, url?
     roles: [ { title, employmentType, period, detail?, bullets? } ]
   A company with multiple roles renders them stacked under one logo. */
const EDU_EMP_DATA = {
  "employment": [
    {
      "company": "Amazon Web Services (AWS)",
      "logo": "aws",
      "logoColor": "#ff9900",
      "location": "Boston, MA & New York, NY",
      "url": "https://aws.amazon.com/",
      "roles": [
        {
          "title": "Applied Scientist Intern",
          "employmentType": "Internship",
          "period": "Summer '24 – Summer '26",
          "detail": "Security Analytics and AI Research (SAAR), Boston (Summer '24 & '25). Security, Search and Observability, New York (Summer '26, May – Aug)."
        }
      ]
    },
    {
      "company": "Amazon",
      "logo": "a",
      "logoColor": "#232f3e",
      "location": "Purdue University · West Lafayette, IN",
      "url": "https://www.amazon.com/",
      "roles": [
        {
          "title": "Campus Brand Ambassador (CBA)",
          "employmentType": "Part-time",
          "period": "Mar 2025 – Present"
        }
      ]
    },
    {
      "company": "Purdue University",
      "logo": "P",
      "logoColor": "#b1810b",
      "location": "West Lafayette, IN",
      "url": "https://www.cs.purdue.edu/",
      "roles": [
        {
          "title": "Graduate Teaching Assistant",
          "employmentType": "Part-time",
          "period": "Spring '25, Fall '25",
          "detail": "Department of Computer Science.",
          "bullets": [
            "CS180: Problem Solving and Object-Oriented Programming (Spring '25, Fall '25)"
          ]
        },
        {
          "title": "Graduate Research Assistant",
          "employmentType": "Full-time",
          "period": "Fall '22 – Fall '24, Spring '26",
          "detail": "Cyber2SLab, Department of Computer Science. Advised by Prof. Elisa Bertino."
        }
      ]
    },
    {
      "company": "Advanced Chemical Industries (ACI) Ltd.",
      "logo": "ACI",
      "logoColor": "#c8102e",
      "location": "Dhaka, Bangladesh",
      "url": "https://www.aci-bd.com/",
      "roles": [
        {
          "title": "Machine Learning Engineer",
          "employmentType": "Full-time",
          "period": "Sep 2020 – Aug 2022",
          "detail": "Management Information System (MIS). NLP R&D, predictive analytics, chatbot and web development."
        }
      ]
    },
    {
      "company": "Bangladesh University of Engineering and Technology (BUET)",
      "logo": "B",
      "logoColor": "#00539b",
      "location": "Dhaka, Bangladesh",
      "url": "https://cse.buet.ac.bd/",
      "roles": [
        {
          "title": "Undergraduate Research Assistant",
          "employmentType": "Research",
          "period": "Mar 2019 – Sep 2020",
          "detail": "Rifat Shahriyar's Lab, Department of CSE. Multilingual NLP research."
        }
      ]
    }
  ],
  "education": [
    {
      "role": "Ph.D. in Computer Science",
      "org": "Purdue University",
      "location": "West Lafayette, IN",
      "period": "Fall '22 – Spring '27",
      "type": "edu",
      "detail": "Advised by Prof. Elisa Bertino. Ph.D. candidate (passed preliminary exam, May 2026)."
    },
    {
      "role": "B.Sc. in Computer Science and Engineering",
      "org": "Bangladesh University of Engineering and Technology (BUET)",
      "location": "Dhaka, Bangladesh",
      "period": "2016 – 2021",
      "type": "edu",
      "detail": "CGPA 3.81 / 4.00. <a href=\"https://cse.buet.ac.bd/\">Department of Computer Science and Engineering</a>."
    }
  ]
};
