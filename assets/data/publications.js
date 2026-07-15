/* Publications data — edit this file to add/update papers.
   "citations": use a number, or null if not yet cited.
   "topics": drives the filter chips on the page — new topic names appear automatically.
   "authors"/"venue" may contain inline HTML (e.g. the .me highlight span). */
const PUBLICATIONS_DATA = {
  "stats": [
    { "num": "1,261", "lbl": "Citations" },
    { "num": "5", "lbl": "h-index" },
    { "num": "5", "lbl": "i10-index" },
    { "num": "8", "lbl": "Papers" }
  ],
  "note": "Citation metrics as of July 2026.",
  "papers": [
    {
      "title": "VWAttacker: A Systematic Security Testing Framework for Voice over WiFi User Equipments",
      "url": "https://arxiv.org/pdf/2508.01469",
      "authors": "Imtiaz Karim, Hyunwoo Lee, Hassan Asghar, <span class=\"me\">Kazi Samin Mubasshir</span>, Seulgi Han, Mashroor Hasan Bhuiyan, Elisa Bertino",
      "venue": "IEEE International Conference on Computer Communications (INFOCOM), 2026",
      "badges": [{ "type": "rank", "label": "CCF A" }],
      "links": [
        { "label": "Paper", "url": "https://arxiv.org/pdf/2508.01469" },
        { "label": "arXiv", "url": "https://arxiv.org/abs/2508.01469" },
        { "label": "Code", "url": "https://github.com/hw5773/vowifi-ue-testing-framework" }
      ],
      "citations": null,
      "year": 2026,
      "topics": ["Cellular Network Security"]
    },
    {
      "title": "Mission Explainable: From Feature Attribution to Mitigation in 5G Anomaly Detection",
      "url": "https://www.ida.liu.se/labs/rtslab/publications/2026/federica.pdf",
      "authors": "Federica Uccello, Imtiaz Karim, <span class=\"me\">Kazi Samin Mubasshir</span>, Elisa Bertino, Simin Nadjm-Tehrani",
      "venue": "International Conference on Computing, Networking and Communication (ICNC), 2026",
      "badges": [],
      "links": [
        { "label": "Paper", "url": "https://www.ida.liu.se/labs/rtslab/publications/2026/federica.pdf" }
      ],
      "citations": 1,
      "year": 2026,
      "topics": ["Cellular Network Security", "Machine Learning"]
    },
    {
      "title": "Gotta Detect 'Em All: Fake Base Station and Multi-Step Attack Detection in Cellular Networks",
      "url": "https://www.usenix.org/conference/usenixsecurity25/presentation/mubasshir",
      "authors": "<span class=\"me\">Kazi Samin Mubasshir</span>*, Imtiaz Karim*, Elisa Bertino &nbsp;(*joint first authors)",
      "venue": "The 34th USENIX Security Symposium (USENIX Sec), 2025",
      "badges": [
        { "type": "rank", "label": "CORE A*" },
        { "type": "rank", "label": "CCF A" }
      ],
      "links": [
        { "label": "Paper", "url": "https://www.usenix.org/conference/usenixsecurity25/presentation/mubasshir" },
        { "label": "arXiv", "url": "https://arxiv.org/pdf/2401.04958" },
        { "label": "Code", "url": "https://github.com/SysNetS/fbsdetector" },
        { "label": "Website", "url": "https://fbsdetector.github.io/" }
      ],
      "citations": 38,
      "year": 2025,
      "topics": ["Cellular Network Security", "Machine Learning"]
    },
    {
      "title": "Poster: Automated Security Property Extraction from Protocol Specifications",
      "url": null,
      "authors": "Hassan Asghar, MH Hwang, J Joo, H Kang, YJ Kwon, <span class=\"me\">Kazi Samin Mubasshir</span>, Imtiaz Karim, et al.",
      "venue": "IEEE 33rd International Conference on Network Protocols (ICNP), 2025",
      "badges": [{ "type": "type", "label": "Poster" }],
      "links": [],
      "citations": null,
      "year": 2025,
      "topics": ["Cellular Network Security", "Natural Language Processing"]
    },
    {
      "title": "SPEC5G: A Dataset for 5G Cellular Network Protocol Analysis",
      "url": "https://aclanthology.org/2023.findings-ijcnlp.3/",
      "authors": "Imtiaz Karim, <span class=\"me\">Kazi Samin Mubasshir</span>, Mirza Masfiqur Rahman, Elisa Bertino",
      "venue": "Findings of the Association for Computational Linguistics: IJCNLP-AACL, 2023",
      "badges": [{ "type": "era", "label": "ERA 2023" }],
      "links": [
        { "label": "Paper", "url": "https://aclanthology.org/2023.findings-ijcnlp.3/" },
        { "label": "arXiv", "url": "https://arxiv.org/pdf/2301.09201.pdf" },
        { "label": "Code", "url": "https://github.com/SysNetS/SPEC5G" }
      ],
      "citations": 49,
      "year": 2023,
      "topics": ["Cellular Network Security", "Natural Language Processing"]
    },
    {
      "title": "BanglaBERT: Combating Embedding Barrier for Low-Resource Language Understanding",
      "url": "https://aclanthology.org/2022.findings-naacl.98/",
      "authors": "Abhik Bhattacharjee, Tahmid Hasan, <span class=\"me\">Kazi Samin</span>, Md Saiful Islam, M. Sohel Rahman, Anindya Iqbal, Rifat Shahriyar",
      "venue": "Findings of the Association for Computational Linguistics: NAACL, 2022",
      "badges": [{ "type": "era", "label": "ERA 2023" }],
      "links": [
        { "label": "Paper", "url": "https://aclanthology.org/2022.findings-naacl.98/" },
        { "label": "Code", "url": "https://github.com/csebuetnlp/banglabert" }
      ],
      "citations": 417,
      "year": 2022,
      "topics": ["Natural Language Processing"]
    },
    {
      "title": "XL-Sum: Large-Scale Multilingual Abstractive Summarization for 44 Languages",
      "url": "https://aclanthology.org/2021.findings-acl.413/",
      "authors": "Tahmid Hasan, Abhik Bhattacharjee, Md Saiful Islam, <span class=\"me\">Kazi Samin</span>, Yuan-Fang Li, Yong-Bin Kang, M. Sohel Rahman, Rifat Shahriyar",
      "venue": "Findings of the Association for Computational Linguistics: ACL-IJCNLP, 2021",
      "badges": [{ "type": "era", "label": "ERA 2023" }],
      "links": [
        { "label": "Paper", "url": "https://aclanthology.org/2021.findings-acl.413/" },
        { "label": "Code", "url": "https://github.com/csebuetnlp/xl-sum" }
      ],
      "citations": 616,
      "year": 2021,
      "topics": ["Natural Language Processing"]
    },
    {
      "title": "Not Low-Resource Anymore: Aligner Ensembling, Batch Filtering, and New Datasets for Bengali-English Machine Translation",
      "url": "https://aclanthology.org/2020.emnlp-main.207/",
      "authors": "Tahmid Hasan, Abhik Bhattacharjee, <span class=\"me\">Kazi Samin</span>, Masum Hasan, Madhusudan Basak, M. Sohel Rahman, Rifat Shahriyar",
      "venue": "Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
      "badges": [],
      "links": [
        { "label": "Paper", "url": "https://aclanthology.org/2020.emnlp-main.207/" },
        { "label": "Code", "url": "https://github.com/csebuetnlp/banglanmt" }
      ],
      "citations": 125,
      "year": 2020,
      "topics": ["Natural Language Processing"]
    }
  ]
};
