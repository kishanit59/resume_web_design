import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kishan Kanani",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "IT Engineer. I love building things and helping people. Active on Linkedin, Twitter.",
  summary:
    "I am currently working as a PHP Laravel Developer at Brainstream Technolabs. I have expertise in Solidity and smart contract development on the Ethereum blockchain, including NFT minting. Additionally, I have developed six different extensions for Bagisto, an open-source Laravel eCommerce framework. I am also proficient in Nextjs, a framework built on Reactjs.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG9KMP_HuQYqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683214452050?e=2147483647&v=beta&t=74l-1Jg92Y2r94SuP6_xMZlNRmwYrHsLWrDMTtPG84M",
  skills: [
   
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "Strapi CMS",
    "Bagisto Extension Developer",
    "Solidity",
    "NFT Minting",
    "Smart Contract Develop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }, 
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kishankanani59@gmail.com",
    tel: "+919624194952",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kishanit59",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kishankanani59",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Onpointe Risk Analyzer",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Backend Developer",
      start: "July 2023",
      end: "Feb 2024",
      description:
        "● The Onpoint Risk Analyzer is a comprehensive retirement planning tool that allows users to input financial data, policies, insurance, and tax filings, generate a PDF document with this information, and assess their investment risk through a calculated risk score based on factors like mutual funds, ETFs, asset allocation, market conditions, and historical performance.",
    },
    {
      company: "Medvault - Hospital Management System",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Backend Developer",      
      start: "Feb 2024",
      end: "April 2024",
      description:
        "● MedVAULT is a comprehensive Hospital Management System that supports various roles such as Investor, Doctor, Administrator, Nurse, Receptionist, and Patient, with distinct logins and permissions, enabling appointment creation, doctor approval, invoice generation, multi-hospital logins, and push notifications for medication reminders, appointments, and invoicing.",
    },
    {
      company: "Bagisto Extension Development",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Backend Developer",   
      start: "May 2024",
      end: "Sep 2024",
      description:
        "● I have developed several extensions for the Bagisto open-source eCommerce platform, including Gift Cards, ImageCrop, ImageZoom, Supplier Info, ConvertStoreToWeb, and Product PDF Generate, to enhance functionality and customization for online stores.",
    },
    {
      company: "Blockchain Solidity Smart Contract",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Blockchain NFT Development",
      start: "Sep 2024",
      end: "Oct 2024",
      description:
        "● I have learned Solidity for blockchain development, which is used to create smart contracts, as well as for NFT trading and creation. I have also gained experience with the transaction process in MetaMask as a testing account and learned how to transfer cryptocurrency. Additionally, I have learned to develop smart contracts for various applications, including decentralized finance (DeFi), asset tokenization, supply chain management, insurance, governance and voting systems, real estate transactions, and legal agreements.",
    },
    {
      company: "Online Casino and Sport Betting Platform",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Software Engineer",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "● I have worked on an online casino and sports betting platform, focusing on developing and implementing features to ensure a seamless user experience, secure transactions, and real-time betting options for both casino games and sports events. Additionally, I worked on fetching data from APIs and saving it to the database to display real-time match information to users.",
    },
    {
      company: "Leads CRM with WordPress",
      href: "#",
      badges: [],
      logoUrl: "#",
      title: "Software Engineer",
      start: "Jan 2025",
      description:
        "● Developed and enhanced a CRM system integrated with WordPress forms to streamline lead generation and supplier allocation. The system supports dynamic lead categorization, location-based supplier assignment, and flexible pricing, ensuring efficient data flow, real-time supplier matching, and optimized performance.",
    },
  ],
  education: [
    {
      school: "St Mary's School",
      degree: "10th Standard - SSC",
      start: "2012",
      end: "2013",
      href: "#",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CPLUfuO2c2jjOaC0gqniVuIauEE8FN6opw&s",
    },
    {
      school: "St Mary's School",
      degree: "12th Standard - HSC",
      start: "2014",
      end: "2015",
      href: "#",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CPLUfuO2c2jjOaC0gqniVuIauEE8FN6opw&s",
    },
    {
      school: "VVP Enginerering College",
      degree: "Bachelor's Degree of Information Technologe (BE-IT)",
      start: "2016",
      end: "2019",
      href: "#",
      logoUrl: "https://vvpedulink.ac.in/wp-content/uploads/2020/09/VVPLogoFi.png",
    },
  ],
  projects: [
    {
      title: "Onpointe Risk Analyzer",
      href: "#",
      dates: "July 2023 - Feb 2024",
      active: true,
      description:
      " The Onpoint Risk Analyzer is a comprehensive retirement planning tool that allows users to input financial data, policies, insurance, and tax filings, generate a PDF document with this information, and assess their investment risk through a calculated risk score based on factors like mutual funds, ETFs, asset allocation, market conditions, and historical performance.",
      technologies: [
        "Html,CSS",
        "Bootstrap",
        "PHP",
        "Laravel",
        "Javascript",
        "Jquery"
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Medvault - Hospital Management System",
      href: "#",
      dates: "Feb 2024 - April 2024",
      active: true,
      description:
        "MedVAULT is a comprehensive Hospital Management System that supports various roles such as Investor, Doctor, Administrator, Nurse, Receptionist, and Patient, with distinct logins and permissions, enabling appointment creation, doctor approval, invoice generation, multi-hospital logins, and push notifications for medication reminders, appointments, and invoicing.",
      technologies: [
        "PHP",
        "Laravel",
        "Javascript",
        "Jquery",
        "Fiirebase API",
        "Google Maps API"
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bagisto Extension Development",
      href: "#",
      dates: "May 2024 - Sep 2024",
      active: true,
      description:
        "I have developed several extensions for the Bagisto open-source eCommerce platform, including Gift Cards, ImageCrop, ImageZoom, Supplier Info, ConvertStoreToWeb, and Product PDF Generate, to enhance functionality and customization for online stores, Built an Instant Product View feature for instant product detail display and direct purchases, ensuring seamless UX with real-time data and intuitive navigation.",
      technologies: [
        "Bootstrap",
        "Php",
        "Laravel",
        "Javascript",
        "VueJs",
        "Paypal"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blockchain Solidity & Smart Contract Learn",
      href: "",
      dates: " Sep 2024- Oct 2024",
      active: true,
      description:
        "I have learned Solidity for blockchain development, which is used to create smart contracts, as well as for NFT trading and creation. I have also gained experience with the transaction process in MetaMask as a testing account and learned how to transfer cryptocurrency. Additionally, I have learned to develop smart contracts for various applications, including decentralized finance (DeFi), asset tokenization, supply chain management, insurance, governance and voting systems, real estate transactions, and legal agreements.",
      technologies: [
        "Solidity",
        "BLockchain",
        "NFT Minting",
        "Metamask Wallet",
        "OpenZeppelin Library",
        "ERC Smart Contract"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "NextJs Framework & Strapi CMS Learn",
      href: "#",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "I have learned the Next.js framework for React.js, including how to use popular libraries like Aceternity UI and Shadcn UI. I created a sample project using these technologies and also learned Strapi CMS, a free and open-source content management system built with Node.js that focuses on managing and delivering content through APIs.",
      technologies: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "Acternity UI Library",
        "Shadcn UI Library",
        "Strapi CMS"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Online Casino and Sport Betting Platform",
      href: "",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "I have worked on an online casino and sports betting platform, focusing on developing and implementing features to ensure a seamless user experience, secure transactions, and real-time betting options for both casino games and sports events. Additionally, I worked on fetching data from APIs and saving it to the database to display real-time match information to users.",
      technologies: [
        "Html,CSS",
        "Bootstrap",
        "Php",
        "Laravel",
        "VueJs",
        "3rd Party API Integrate",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      "title": "Leads CRM with WordPress",
      "href": "",
      "dates": "Jan 2025 - Present",
      "active": true,
      "description": "Developed and enhanced a CRM system integrated with WordPress forms to streamline lead generation and supplier allocation. The system supports dynamic lead categorization, location-based supplier assignment, and flexible pricing, ensuring efficient data flow, real-time supplier matching, and optimized performance.",
      "technologies": [
        "Laravel",
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      "links": [
        {
          "type": "Website",
          "href": "",
          "icon": <Icons.globe className="size-3" />
        }
      ],
      "image": "",
      "video": ""
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
};
