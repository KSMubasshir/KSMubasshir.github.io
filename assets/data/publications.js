/* Publications data — edit this file to add/update papers.
   "citations": use a number, or null if not yet cited.
   "topics": drives the filter chips on the page — new topic names appear automatically.
   "abstract": optional; when present, a collapsible "Abstract" dropdown is shown.
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
      "abstract": "Voice over WiFi (VoWiFi) lets cellular subscribers place calls over untrusted WiFi networks by tunneling signaling and media to the operator core through an IPsec tunnel established with the Evolved Packet Data Gateway (ePDG). Despite its wide deployment, the security of the user equipment (UE) side of this stack has received little systematic scrutiny. We present VWAttacker, a systematic security testing framework that exercises the VoWiFi attach, IKE/IPsec negotiation, and call-setup procedures of commercial UEs. VWAttacker combines a controllable ePDG testbed with a property-guided test generator to elicit and check for insecure behaviors, and uncovers a range of specification-compliance and implementation weaknesses across multiple devices that can lead to downgrade, information leakage, and denial-of-service. We responsibly disclosed the findings and discuss mitigations.",
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
      "abstract": "Machine learning based anomaly detection is increasingly used to secure 5G networks, but the opacity of these models makes their alerts hard to trust and act upon. In this work we go beyond raw detection and study the full path from feature attribution to mitigation. Using explainability techniques to attribute anomaly scores back to the input features that drive them, we show how these explanations can be turned into concrete, actionable mitigation steps for 5G anomalies rather than being left as post-hoc justifications. We evaluate the approach on 5G anomaly-detection data and demonstrate that feature-level explanations both improve analyst trust and guide effective remediation.",
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
      "abstract": "Fake base stations (FBSes) remain a potent threat to cellular networks, acting as the entry point for a wide range of attacks including IMSI catching, location tracking, and multi-step protocol exploits. Existing FBS detectors are largely heuristic, device-specific, or focus on a single attack step, and struggle to generalize. We present FBSDetector, a machine-learning based system that detects fake base stations and the multi-step attacks they launch directly from cellular network traces. We build a large, labeled dataset of benign and malicious traces, engineer features that capture the stateful behavior of the attach and connection procedures, and train models that identify both the presence of an FBS and the specific attack being carried out. FBSDetector achieves high accuracy with low false positives and runs on commodity devices, providing practical, deployable protection against fake base stations.",
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
      "abstract": "Cellular protocol standards are written as long, informal natural-language specifications, making it difficult to systematically reason about the security properties they intend to guarantee. In this poster, we present early work on automatically extracting security properties from protocol specifications. We use natural-language processing to identify security-relevant statements in the specification text and translate them into structured, machine-checkable properties that can drive downstream testing and formal analysis. We report preliminary results on cellular specification documents and outline how automated property extraction can reduce the manual effort required to build security testing and verification tools.",
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
      "abstract": "5G is the fifth-generation cellular network protocol, and its specifications are documented in thousands of pages of natural-language text that are the ground truth for how the protocol should behave. Analyzing these specifications for security and correctness has so far been an almost entirely manual effort. We present SPEC5G, the first publicly available 5G dataset curated for NLP research on cellular network protocols, comprising millions of sentences collected from 5G specification and related documents. Using this dataset, we study two downstream tasks — security-related text classification and summarization — and show that models trained and fine-tuned on SPEC5G can automatically surface security-relevant content and condense lengthy specifications. SPEC5G aims to enable data-driven, automated analysis of protocol specifications and to bridge the NLP and cellular-security communities.",
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
      "abstract": "In this work, we introduce BanglaBERT, a BERT-based natural language understanding (NLU) model pretrained in Bangla, a widely spoken yet low-resource language. To pretrain it, we collect 27.5 GB of Bangla text from a diverse set of sources and build a large corpus. Along the way we identify and quantify an \"embedding barrier\": naively initializing a monolingual model from a multilingual checkpoint transfers poorly because of mismatched sub-word vocabularies, which degrades downstream performance. We propose strategies to combat this barrier and, to evaluate our model, assemble the Bangla Language Understanding Benchmark (BLUB) covering tasks such as classification, natural language inference, and named-entity recognition. BanglaBERT sets a new state of the art on these tasks, substantially outperforming multilingual baselines, and we release the model, data, and benchmark to spur further research in low-resource NLU.",
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
      "abstract": "Contemporary works on abstractive text summarization have focused primarily on high-resource languages like English, mostly due to the limited availability of datasets for low- and mid-resource languages. In this work, we present XL-Sum, a comprehensive and diverse dataset comprising 1 million professionally annotated article-summary pairs from the BBC, extracted using a set of carefully designed heuristics. The dataset covers 44 languages ranging from low- to high-resource, for many of which no public dataset is currently available. XL-Sum is highly abstractive, concise, and of high quality, as indicated by human and intrinsic evaluation. We fine-tune a multilingual pretrained model on XL-Sum and obtain competitive results on all languages, demonstrating that a single model can summarize across dozens of languages, including strong zero-shot transfer to low-resource ones. We release the dataset and models to encourage future multilingual abstractive summarization research.",
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
      "abstract": "Despite being the seventh most widely spoken language in the world, Bengali has received comparatively little attention in machine translation, largely due to the scarcity of clean parallel data. In this work we show that Bengali-English translation is no longer a genuinely low-resource problem. We build a customized sentence segmenter for Bangla and propose two novel techniques for parallel-corpus creation from noisy web sources: aligner ensembling, which combines multiple sentence aligners to improve alignment quality, and batch filtering, which prunes low-quality pairs at scale. Using these methods we assemble the largest Bengali-English parallel corpus to date and, training standard neural machine translation models on it, achieve substantial BLEU improvements over previous systems and strong publicly available baselines in both directions. We release the tools, corpus, and models to support further work on Bengali and other low-resource languages.",
      "citations": 125,
      "year": 2020,
      "topics": ["Natural Language Processing"]
    }
  ]
};
