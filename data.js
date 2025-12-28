// ============================================
// AUTHOR DATABASE
// Add author URLs here once - they'll auto-link everywhere
// ============================================
const authorInfo = {
    "Chancharik Mitra": { 
        url: "https://chancharikmitra.github.io/",
        affiliation: "CMU"
    },
    "Deva Ramanan": { 
        url: "https://www.cs.cmu.edu/~deva/",
        affiliation: "CMU"
    },
    "Trevor Darrell": { 
        url: "https://people.eecs.berkeley.edu/~trevor/",
        affiliation: "UC Berkeley"
    },
    "Roei Herzig": { 
        url: "https://roeiherz.github.io/",
        affiliation: "UC Berkeley"
    },
    "Brandon Huang": { 
        url: "https://scholar.google.com/citations?user=dyD6nsgAAAAJ&hl=en",
        affiliation: "UC Berkeley"
    },
    "Tianning Chai": { 
        url: "https://skywalkerray.github.io/",
        affiliation: "UC Berkeley"
    },
    "Dantong Niu": {
        url: "https://dantong88.github.io/",
        affiliation: "UC Berkeley"
    },
    "Anirudh Pai": {
        url: "https://www.linkedin.com/in/apai25/",
        affiliation: "UC Berkeley"
    },
    "Jesse Thomason": { 
        url: "https://jessethomason.com/",
        affiliation: "USC"
    },
    "Narges Norouzi": { 
        url: "https://nargesnorouzi.me/",
        affiliation: "UC Berkeley"
    },
    "Zhiqiu Lin": { 
        url: "https://linzhiqiu.github.io/",
        affiliation: "CMU"
    },
    "Gautam Rajendrakumar Gare": { 
        url: "https://ggare-cmu.github.io/",
        affiliation: "CMU"
    },
    "Daniel Jiang": { 
        url: "https://scholar.google.com/citations?user=dVXhd4MAAAAJ&hl=en",
        affiliation: "CMU"
    },
    "Jay Karhade": { 
        url: "https://jaykarhade.github.io/",
        affiliation: "CMU"
    },
    "Abrar Anwar": { 
        url: "https://abraranwar.github.io/",
        affiliation: "USC"
    },
    "Yusen Luo": { 
        url: "https://andreasl9z.github.io/yusenluo.github.io/",
        affiliation: "USCdanieda"
    },
    "Raj Saravanan": { 
        url: "https://www.linkedin.com/in/raj-saravanan-204854222/",
        affiliation: "CMU"
    },
    "Siyuan Cen": { 
        url: "https://sy77777en.github.io/",
        affiliation: "CMU"
    },
    "Isaac Li": { 
        url: "https://www.linkedin.com/in/isaac-li-bb381b284/",
        affiliation: "CMU"
    },
    "Yu Tong Tiffany Ling": { 
        url: "https://www.yttldesign.com/",
        affiliation: "CMU"
    },
    "Hewei Wang": {
        url: "https://github.com/WangHewei16",
        affiliation: "Apple"
    },
    "Rodolfo Corona": { 
        url: "https://rcorona.github.io/",
        affiliation: "UC Berkeley"
    },
    "Dan Klein": { 
        url: "https://people.eecs.berkeley.edu/~klein/",
        affiliation: "UC Berkeley"
    },
    "Gireeja Ranade": { 
        url: "https://people.eecs.berkeley.edu/~gireeja/",
        affiliation: "UC Berkeley"
    },
    "Yilun Du": { 
        url: "https://yilundu.github.io/",
        affiliation: "Harvard"
    },
    "Bhiksha Raj": { 
        url: "http://www.cs.cmu.edu/~bhiksha/",
        affiliation: "CMU"
    },
    "Leonid Karlinsky": { 
        url: "https://www.linkedin.com/in/leonid-karlinsky/",
        affiliation: "Xero"
    },
    "Rogerio Feris": { 
        url: "https://rogerioferis.com/",
        affiliation: "IBM Research"
    },
    "Assaf Arbelle": { 
        url: "https://www.linkedin.com/in/assafarbelle/?originalSubdomain=il",
        affiliation: "Apple"
    },
    "Rushikesh Zawar": { 
        url: "https://scholar.google.com/citations?user=Qaol8LoAAAAJ&hl=en",
        affiliation: "CMU"
    },
    "Xue Bai": { 
        url: "https://sites.google.com/view/xuebai/home",
        affiliation: "Adobe"
    },
    "Chuang Gan": { 
        url: "https://embodied-agi.cs.umass.edu/",
        affiliation: "UMass Amherst"
    },
    "Abdul Waheed": { 
        url: "https://macabdul9.github.io/",
        affiliation: "CMU"
    },
    "Laurie Z. Wang": { 
        url: "https://www.linkedin.com/in/lauriewangzh/",
        affiliation: "CMU"
    },
    "Meenakshi Mittal": { 
        url: "https://www.linkedin.com/in/meenakshi-mittal-404087191/",
        affiliation: "UC Berkeley"
    },
    "Mihran Miroyan": { 
        url: "https://mmiroyan.github.io/",
        affiliation: "UC Berkeley"
    },
    "Rishi Jain": { 
        url: "https://www.linkedin.com/in/rishi-rj/",
        affiliation: "UC Berkeley"
    },
    "Jin Young Yoo": { 
        url: "https://scholar.google.com/citations?user=b-GnHO0AAAAJ",
        affiliation: "UIUC"
    },
    "Zeynep Madak-Erdogan": { 
        url: "https://mel.fshn.illinois.edu/",
        affiliation: "UIUC"
    },
    "Aiman Soliman": { 
        url: "https://aimansoliman.com/",
        affiliation: "UIUC"
    },
   
    // Add more authors as needed...
};

// ============================================
// NEWS DATA
// Most recent first
// ============================================
const newsItems = [
    {
        date: "Dec 2025",
        content: "🎉 <em>CameraBench</em> received a <strong>Spotlight</strong> at <strong>NeurIPS 2025</strong> Datasets & Benchmarks track!",
        links: [
            { text: "Paper", url: "https://arxiv.org/abs/2504.15376" }
        ]
    },

    // Add more news items here...
];

// ============================================
// PUBLICATIONS DATA
// ============================================
const publications = [
    {
        title: "Mechanistic Finetuning of Vision-Language-Action Models via Few-Shot Demonstrations",
        authors: ["Chancharik Mitra*", "Yusen Luo*", "Raj Saravanan*", "Dantong Niu", "Anirudh Pai", "Jesse Thomason", "Trevor Darrell", "Abrar Anwar", "Deva Ramanan", "Roei Herzig"],
        venue: "Submitted 2026",
        year: 2026,
        tags: ["few-shot", "mech-interp", "robotics", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/pdf/2511.22697", project: "https://chancharikmitra.github.io/robosteering/"},
        bibtex: `@article{mitra2026robotic,
  title={Mechanistic Finetuning of Vision-Language-Action Models via Few-Shot Demonstrations},
  author={Mitra, Chancharik and Luo, Yusen and Saravanan, Raj and Niu, Dantong and Pai, Anirudh and Thomason, Jesse and Darrell, Trevor and Anwar, Abrar and Ramanan, Deva and Herzig, Roei},
  journal={arXiv preprint},
  year={2026}
}`
    },
    {
        title: "Building a Precise Video Language with Human-AI Oversight",
        authors: ["Chancharik Mitra*", "Siyuan Cen*", "Zhiqiu Lin*", "Isaac Li", "Yuhan Huang", "Yu Tong Tiffany Ling", "Hewei Wang", "Irene Pi", "Shihang Zhu", "Yili Han", "Yilun Du", "Deva Ramanan"],
        venue: "Submitted 2026",
        year: 2026,
        tags: ["compositionality", "vision-language"],
        image: null,
        links: { paper: "https://drive.google.com/file/d/1iwHsYMTDz23Kk7gCC4Dxyt9gsJ0h-vUV/view?usp=sharing"},
        bibtex: `@article{mitra2026building,
  title={Building a Precise Video Language with Human-AI Oversight},
  author={Mitra, Chancharik and Cen, Siyuan and Lin, Zhiqiu and Li, Isaac and Huang, Yuhan and Ling, Yu Tong Tiffany and Wang, Hewei and Pi, Irene and Zhu, Shihang and Han, Yili and Du, Yilun and Ramanan, Deva},
  journal={arXiv preprint},
  year={2026}
}`
    },
    {
        title: "Activation Reward Models for Few-Shot Model Alignment",
        authors: ["Tianning Chai*", "Chancharik Mitra*", "Brandon Huang", "Gautam Rajendrakumar Gare", "Zhiqiu Lin", "Assaf Arbelle", "Leonid Karlinsky", "Rogerio Feris", "Trevor Darrell", "Deva Ramanan", "Roei Herzig"],
        venue: "Submission to Annual Meeting of the Association for Computational Linguistics (ACL), 2026",
        year: 2026,
        tags: ["few-shot", "mech-interp", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2507.01368" },
        bibtex: `@article{chai2025activation,
  title={Activation Reward Models for Few-Shot Model Alignment},
  author={Chai, Tianning and Mitra, Chancharik and Huang, Brandon and Gare, Gautam Rajendrakumar and Lin, Zhiqiu and Arbelle, Assaf and Karlinsky, Leonid and Feris, Rogerio and Darrell, Trevor and Ramanan, Deva and others},
  journal={arXiv preprint arXiv:2507.01368},
  year={2025}
}`
    },
    {
        title: "Enhancing Few-Shot Vision-Language Classification with Sparse Attention Vectors",
        authors: ["Chancharik Mitra", "Brandon Huang", "Tianning Chai", "Zhiqiu Lin", "Assaf Arbelle", "Rogerio Feris", "Leonid Karlinsky", "Trevor Darrell", "Deva Ramanan", "Roei Herzig"],
        venue: "International Conference on Computer Vision (ICCV), 2025",
        year: 2025,
        tags: ["few-shot", "mech-interp", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2412.00142" },
        bibtex: `@inproceedings{mitra2025enhancing,
  title={Enhancing Few-Shot Vision-Language Classification with Sparse Attention Vectors},
  author={Mitra, Chancharik and Huang, Brandon and Chai, Tianning and Lin, Zhiqiu and Arbelle, Assaf and Feris, Rogerio and Karlinsky, Leonid and Darrell, Trevor and Ramanan, Deva and Herzig, Roei},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  year={2025}
}`
    },
    {
        title: "CameraBench: Towards Understanding Camera Motions in Any Video",
        authors: ["Zhiqiu Lin*", "Siyuan Cen*", "Daniel Jiang", "Jay Karhade", "Hewei Wang", "Chancharik Mitra", "Yu Tong Tiffany Ling", "Yuhan Huang", "Sifan Liu", "Mingyu Chen", "Rushikesh Zawar", "Xue Bai", "Yilun Du", "Chuang Gan", "Deva Ramanan"],
        venue: "Conference on Neural Information Processing Systems (NeurIPS) Datasets and Benchmarks Track (Spotlight), 2025",
        year: 2025,
        tags: ["compositionality", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2504.15376" },
        bibtex: `@article{lin2025camerabench,
  title={CameraBench: Towards Understanding Camera Motions in Any Video},
  author={Lin, Zhiqiu and Cen, Siyuan and Jiang, Daniel and Karhade, Jay and Wang, Hewei and Mitra, Chancharik and Ling, Tiffany and Huang, Yuhan and Liu, Sifan and Chen, Mingyu and others},
  journal={arXiv preprint arXiv:2504.15376},
  year={2025}
}`
    },
    {
        title: "Less is More Tokens: Efficient Math Reasoning via Difficulty-Aware Chain-of-Thought Distillation",
        authors: ["Abdul Waheed*", "Chancharik Mitra*", "Laurie Z. Wang*", "Deva Ramanan", "Bhiksha Raj"],
        venue: "NeurIPS Workshop on Multimodal Algorithmic Reasoning, 2025",
        year: 2025,
        tags: ["compositionality"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2509.05226" },
        bibtex: `@article{waheed2025less,
  title={Less is More Tokens: Efficient Math Reasoning via Difficulty-Aware Chain-of-Thought Distillation},
  author={Waheed, Abdul and Mitra, Chancharik and Wang, Laurie Z and Ramanan, Deva and Raj, Bhiksha},
  journal={arXiv preprint arXiv:2509.05226},
  year={2025}
}`
    },
    {
        title: "Analyzing Pedagogical Quality and Efficiency of LLM Responses with TA Feedback to Live Student Questions",
        authors: ["Chancharik Mitra*", "Mihran Miroyan*", "Rishi Jain*", "Gireeja Ranade", "Narges Norouzi"],
        venue: "ACM Technical Symposium on Computer Science Education (SIGCSE), 2025",
        year: 2025,
        tags: ["edai"],
        image: null,
        links: { paper: "https://dl.acm.org/doi/abs/10.1145/3626253.3635609" },
        bibtex: `@inproceedings{mitra2025analyzing,
  title={Analyzing Pedagogical Quality and Efficiency of LLM Responses with TA Feedback to Live Student Questions},
  author={Mitra, Chancharik and Miroyan, Mihran and Jain, Rishi and Ranade, Gireeja and Norouzi, Narges},
  booktitle={Proceedings of the 56th ACM Technical Symposium on Computer Science Education V. 1},
  pages={770--776},
  year={2025}
}`
    },
    {
        title: "Raising the Bar: Automating Consistent and Equitable Student Support with LLMs",
        authors: ["Meenakshi Mittal*", "Azalea Bailey*", "Victoria Phelps*", "Rose Niousha", "Mihran Miroyan", "Chancharik Mitra", "Rishi Jain", "Gireeja Ranade", "Narges Norouzi"],
        venue: "ACM Technical Symposium on Computer Science Education (SIGCSE) Poster, 2025",
        year: 2025,
        tags: ["edai"],
        image: null,
        links: { paper: "https://dl.acm.org/doi/abs/10.1145/3641555.3705237" },
        bibtex: `@inproceedings{mittal2025raising,
  title={Raising the Bar: Automating Consistent and Equitable Student Support with LLMs},
  author={Mittal, Meenakshi and Bailey, Azalea and Phelps, Victoria and Niousha, Rose and Miroyan, Mihran and Mitra, Chancharik and Jain, Rishi and Ranade, Gireeja and Norouzi, Narges},
  booktitle={Proceedings of the 56th ACM Technical Symposium on Computer Science Education V. 2},
  pages={1549--1550},
  year={2025}
}`
    },
    {
        title: "EduMod-LLM: A Modular Approach for Designing Flexible and Transparent Educational Assistants",
        authors: ["Meenakshi Mittal", "Rishi Khare", "Mihran Miroyan", "Chancharik Mitra", "Narges Norouzi"],
        venue: "AAAI Conference on Artificial Intelligence, 2025",
        year: 2025,
        tags: ["edai"],
        image: null,
        links: { paper: "https://www.arxiv.org/abs/2511.21742" },
        bibtex: `@inproceedings{mittal2025edumod,
  title={EduMod-LLM: A Modular Approach for Designing Flexible and Transparent Educational Assistants},
  author={Mittal, Meenakshi and Khare, Rishi and Miroyan, Mihran and Mitra, Chancharik and Norouzi, Narges},
  booktitle={AAAI Conference on Artificial Intelligence},
  year={2025}
}`
    },
    {
        title: "Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning",
        authors: ["Brandon Huang*", "Chancharik Mitra*", "Assaf Arbelle", "Leonid Karlinsky", "Trevor Darrell", "Roei Herzig"],
        venue: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
        year: 2024,
        tags: ["few-shot", "mech-interp", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2406.15334" },
        bibtex: `@inproceedings{huang2024multimodal,
  title={Multimodal Task Vectors Enable Many-Shot Multimodal In-Context Learning},
  author={Huang, Brandon and Mitra, Chancharik and Arbelle, Assaf and Karlinsky, Leonid and Darrell, Trevor and Herzig, Roei},
  booktitle={Conference on Neural Information Processing Systems (NeurIPS)},
  year={2024}
}`
    },
    {
        title: "Compositional Chain-of-Thought Prompting for Large Multimodal Models",
        authors: ["Chancharik Mitra", "Brandon Huang", "Trevor Darrell", "Roei Herzig"],
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
        year: 2024,
        tags: ["compositionality", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2311.17076" },
        bibtex: `@inproceedings{mitra2024compositional,
  title={Compositional Chain-of-Thought Prompting for Large Multimodal Models},
  author={Mitra, Chancharik and Huang, Brandon and Darrell, Trevor and Herzig, Roei},
  booktitle={IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2024}
}`
    },
    {
        title: "Which One? Leveraging Context Between Objects and Multiple Views for Language Grounding",
        authors: ["Chancharik Mitra*", "Abrar Anwar*", "Rodolfo Corona", "Dan Klein", "Trevor Darrell", "Jesse Thomason"],
        venue: "North American Chapter of the Association for Computational Linguistics (NAACL), 2024",
        year: 2024,
        tags: ["pragmatics", "vision-language"],
        image: null,
        links: { paper: "https://arxiv.org/abs/2311.06694" },
        bibtex: `@inproceedings{mitra2024whichone,
  title={Which One? Leveraging Context Between Objects and Multiple Views for Language Grounding},
  author={Mitra, Chancharik and Anwar, Abrar and Corona, Rodolfo and Klein, Dan and Darrell, Trevor and Thomason, Jesse},
  booktitle={North American Chapter of the Association for Computational Linguistics (NAACL)},
  year={2024}
}`
    },
    {
        title: "RetLLM-E: Retrieval-Prompt Strategy for Question-Answering on Student Discussion Forums",
        authors: ["Chancharik Mitra*", "Mihran Miroyan*", "Rishi Jain*", "Vedant Kumud", "Gireeja Ranade", "Narges Norouzi"],
        venue: "AAAI Conference on Artificial Intelligence, 2024",
        year: 2024,
        tags: ["edai"],
        image: null,
        links: { paper: "https://ojs.aaai.org/index.php/AAAI/article/view/30368" },
        bibtex: `@inproceedings{mitra2024retllm,
  title={RetLLM-E: Retrieval-Prompt Strategy for Question-Answering on Student Discussion Forums},
  author={Mitra, Chancharik and Miroyan, Mihran and Jain, Rishi and Kumud, Vedant and Ranade, Gireeja and Norouzi, Narges},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={38},
  number={21},
  pages={23215--23223},
  year={2024}
}`
    },
    {
        title: "Elevating Learning Experiences: Leveraging Large Language Models as Student-Facing Assistants in Discussion Forums",
        authors: ["Chancharik Mitra*", "Mihran Miroyan*", "Rishi Jain*", "Vedant Kumud", "Gireeja Ranade", "Narges Norouzi"],
        venue: "ACM Technical Symposium on Computer Science Education (SIGCSE) Poster, 2024",
        year: 2024,
        tags: ["edai"],
        image: null,
        links: { paper: "https://dl.acm.org/doi/abs/10.1145/3626253.3635609" },
        bibtex: `@inproceedings{mitra2024elevating,
  title={Elevating Learning Experiences: Leveraging Large Language Models as Student-Facing Assistants in Discussion Forums},
  author={Mitra, Chancharik and Miroyan, Mihran and Jain, Rishi and Kumud, Vedant and Ranade, Gireeja and Norouzi, Narges},
  booktitle={Proceedings of the 55th ACM Technical Symposium on Computer Science Education V. 2},
  pages={1752--1753},
  year={2024}
}`
    },
    {
        title: "Geospatial Analysis To Quantify Spatial Heterogeneity Of Tumor Microenvironment",
        authors: ["Jin Young Yoo", "Chancharik Mitra", "Yang Yue", "Aiman Soliman", "Zeynep Madak-Erdogan"],
        venue: "Journal of the Endocrine Society, 2023",
        year: 2023,
        tags: [],
        image: null,
        links: { paper: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10554056/" },
        bibtex: `@article{yoo2023geospatial,
  title={Geospatial Analysis To Quantify Spatial Heterogeneity Of Tumor Microenvironment},
  author={Yoo, Jin Young and Mitra, Chancharik and Yue, Yang and Soliman, Aiman and Madak-Erdogan, Zeynep},
  journal={Journal of the Endocrine Society},
  volume={7},
  number={Supplement\_1},
  pages={bvad114--2128},
  year={2023},
  publisher={Oxford University Press US}
}`
    },
    {
        title: "Spatial Analysis of Tumor Heterogeneity Using Machine Learning Techniques",
        authors: ["Chancharik Mitra", "Jin Young Yoo", "Zeynep Madak-Erdogan", "Aiman Soliman"],
        venue: "IEEE International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2022 (Best Paper Award at REUNS Workshop)",
        year: 2022,
        tags: [],
        image: null,
        links: { paper: "https://ieeexplore.ieee.org/document/9973650" },
        bibtex: `@inproceedings{mitra2022spatial,
  title={Spatial Analysis of Tumor Heterogeneity Using Machine Learning Techniques},
  author={Mitra, Chancharik and Yoo, Jin Young and Madak-Erdogan, Zeynep and Soliman, Aiman},
  booktitle={2022 IEEE 19th International Conference on Mobile Ad Hoc and Smart Systems (MASS)},
  pages={781--786},
  year={2022},
  organization={IEEE}
}`
    }
];

// Tag display labels
const tagLabels = {
    'few-shot': 'Few-Shot',
    'mech-interp': 'Mech. Interp.',
    'compositionality': 'Compositionality',
    'pragmatics': 'Pragmatics',
    'vision-language': 'Vision-Language',
    'robotics': 'Robotics',
    'edai': 'EdAI'
};
