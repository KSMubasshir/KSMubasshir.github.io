/* Awards & honors data — edit this file to add/update entries.
   Renders as a timeline (newest first, sorted by "start": "YYYY-MM").
   Fields: title, org, url?, domain? (favicon) or logoSrc? (local image),
   logo/logoColor (monogram fallback), category, start, end?, periodText?, detail? 
   Categories: travel | grant | scholarship | honor (chip colors in style.css). */
const AWARDS_DATA = [
  {
    "title": "Graduate Student Travel Award",
    "org": "Purdue Graduate Student Government (PGSG)",
    "url": "https://www.purduegradstudents.com/",
    "domain": "purdue.edu",
    "logo": "P", "logoColor": "#b1810b",
    "category": "travel",
    "start": "2025-07",
    "periodText": "Summer 2025"
  },
  {
    "title": "USENIX Security Student Grant",
    "org": "USENIX Association",
    "url": "https://www.usenix.org/",
    "domain": "usenix.org",
    "logo": "U", "logoColor": "#8c1d40",
    "category": "grant",
    "start": "2025-07",
    "periodText": "2025",
    "detail": "Student grant to attend USENIX Security '25 in Seattle."
  },
  {
    "title": "Graduate Student Travel Grant",
    "org": "Purdue College of Science (CoS)",
    "url": "https://www.purdue.edu/science/",
    "domain": "purdue.edu",
    "logo": "P", "logoColor": "#b1810b",
    "category": "travel",
    "start": "2025-07",
    "periodText": "2025"
  },
  {
    "title": "University Technical Scholarship",
    "org": "Bangladesh University of Engineering and Technology (BUET)",
    "url": "https://www.buet.ac.bd/",
    "logoSrc": "assets/logos/buet.png",
    "logo": "B", "logoColor": "#00539b",
    "category": "scholarship",
    "start": "2016-01", "end": "2021-04",
    "periodText": "2016 – 2021",
    "detail": "Merit-based technical scholarship held throughout the B.Sc. program."
  },
  {
    "title": "Dean's List",
    "org": "Dept. of CSE, Bangladesh University of Engineering and Technology (BUET)",
    "url": "https://cse.buet.ac.bd/",
    "logoSrc": "assets/logos/buet.png",
    "logo": "B", "logoColor": "#00539b",
    "category": "honor",
    "start": "2016-01", "end": "2021-04",
    "periodText": "2016 – 2021",
    "detail": "For 4 consecutive academic years."
  }
];
