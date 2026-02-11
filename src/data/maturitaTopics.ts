import env3a from "@/assets/maturita-env-3a.jpg";
import env3b from "@/assets/maturita-env-3b.jpg";
import env3c from "@/assets/maturita-env-3c.jpg";
import env3d from "@/assets/maturita-env-3d.jpg";
import env3e from "@/assets/maturita-env-3e.jpg";
import env3f from "@/assets/maturita-env-3f.jpg";

export interface LearnItem {
  title: string;
  content: string;
}

export interface PracticeQA {
  question: string;
  answer: string;
}

export interface ExamImage {
  label: string;
  src: string;
  description: string;
}

export interface ExamPractice {
  taskDescription: string;
  promptPoints: string[];
  images: ExamImage[];
  followUpQuestions: string[];
}

export interface WarmUpCategory {
  category: string;
  questions: string[];
}

export interface MaturitaTopic {
  id: string;
  title: string;
  description: string;
  available: boolean;
  interlocutorIntro?: string;
  interlocutorPart1?: string;
  warmUpQuestions?: WarmUpCategory[];
  learn?: LearnItem[];
  practice?: PracticeQA[];
  exam?: ExamPractice;
}

export const maturitaTopics: MaturitaTopic[] = [
  {
    id: "environment",
    title: "Environment",
    description: "Nature, weather, seasons, environmental protection, pollution, and your personal contribution",
    available: true,
    interlocutorIntro: "Hello. Sit down, please. Would you tell me your task sheet number so I can check it, please? First, could you briefly introduce yourself to the committee? Thank you. Now, let's go to Part One.",
    interlocutorPart1: "I am going to ask you some questions about different topics. If possible, give detailed answers. If you don't understand a question, please ask me to repeat it. Are you ready?",
    warmUpQuestions: [
      {
        category: "School and Education",
        questions: [
          "Was it easy to choose the secondary school?"
        ]
      },
      {
        category: "Family and Relationships",
        questions: [
          "Do you meet your distant relatives? On what occasions?",
          "How much time did you spend at grandparents' when you were a child?",
          "Would you change anything about your parents' behaviour?",
          "What should your future family look like?",
          "Have you ever used social networks to make friends?",
          "In your opinion, what qualities are necessary to make friends?",
          "What should people do if they want to get on well with neighbours?",
          "In your opinion, what should a flatmate be like?"
        ]
      },
      {
        category: "Pets and Nature",
        questions: [
          "Do you think children should keep a pet?",
          "What are some disadvantages of having plants at home?"
        ]
      },
      {
        category: "Technology and Internet",
        questions: [
          "Do you think that teenagers are too dependent on computers?",
          "Can you imagine living without your mobile phone?",
          "In your opinion, can the internet be dangerous for teenagers?",
          "In your opinion, will electronic books or newspapers become more popular than paper ones?",
          "Would you buy a six-year-old a mobile phone?",
          "Can you imagine your life without the Internet?",
          "Should mobile phones be banned at school?"
        ]
      },
      {
        category: "Travel and Transport",
        questions: [
          "What should you pack when you go on a skiing holiday?",
          "Where would you travel if you could go anywhere?",
          "What is your favourite means of transport?",
          "What means of transport would you choose for a trip to London?",
          "What are the advantages/disadvantages of public transport?",
          "Should everybody have a driving licence nowadays?",
          "What has been your longest journey so far?",
          "Would you use public transport more if it was free?",
          "When you went on your last holiday, did you travel with a travel agency?"
        ]
      },
      {
        category: "Shopping and Money",
        questions: [
          "Have you ever bought anything online?",
          "What would you do if someone stopped you in the street and asked you for money?",
          "Have you ever borrowed money from your friend?",
          "Would you ever give money to a charity?"
        ]
      },
      {
        category: "Daily Life and Leisure",
        questions: [
          "What would your ideal weekend be like?",
          "In your opinion, are typical weekdays different for girls and boys? Why? Why not?",
          "How is your everyday life different to that of your parents?",
          "Do you think people today have enough leisure time?",
          "Have you ever kept a diary?"
        ]
      },
      {
        category: "Home and Housing",
        questions: [
          "Would you like to share a flat with a friend?",
          "Do you walk at night in your town?",
          "Where can tourists stay overnight in your town?",
          "If you could change anything about the services in your hometown, what would it be?"
        ]
      },
      {
        category: "Health and Wellbeing",
        questions: [
          "What do you personally do to protect your health?",
          "Have you ever felt frightened before seeing a doctor/dentist?",
          "What should people do against stress?"
        ]
      },
      {
        category: "Culture and Media",
        questions: [
          "Have you ever watched a science documentary on TV?",
          "Is music important to you?",
          "Should cities/towns support organising cultural events such as concerts or festivals?",
          "Have you ever borrowed a book from a library?",
          "Where do you look when you want to find something important?"
        ]
      },
      {
        category: "Weather and Seasons",
        questions: [
          "Can you imagine living in a country where there is no snow in winter?",
          "Why do you think so many people like talking about the weather?"
        ]
      },
      {
        category: "Personal Qualities",
        questions: [
          "What are your good and bad qualities?",
          "Have you ever tried to change anything about yourself?"
        ]
      }
    ],
    learn: [
      {
        title: "What is an ecosystem?",
        content: "An ecosystem is a group of living things and the whole place where they live. They all live together and need each other. For example, one kind of ecosystem is a desert. It has special plants that can live only there, lizards, snakes, vultures, and special insects."
      },
      {
        title: "Environmental problems in your region",
        content: "You should be ready to talk about local issues. For example: \"Yes, there are some problems. The main problem is water pollution / air pollution. There are many factories in my region, and many people drive cars / burn coal.\" Think about your own area and what specific problems exist there."
      },
      {
        title: "Global warming",
        content: "Global warming is the general increase in air and water temperatures around the world. It's normal for temperatures to sometimes be cooler for many hundreds of years, and then sometimes to be warmer. But this time, humans have caused the increase, with carbon from cars and factories. Most scientists agree that it could seriously harm our lives, unless we stop it. Glaciers and polar ice are melting, rain forests are dying, and farms are turning into desert."
      },
      {
        title: "The Greenhouse Effect",
        content: "The Greenhouse Effect is when the air or atmosphere gets too hot. Air warmed by the sun gets trapped close to the ground. It can't escape. It is caused by too much carbon in the air, from factories, electricity plants, and cars."
      },
      {
        title: "The ozone layer",
        content: "The ozone layer protects us from the harmful rays of the sun. It is in the atmosphere and surrounds the Earth like a clear blanket. Scientists think that too much carbon has destroyed part of it, creating a hole. It is very dangerous because it lets strong sunlight through to the Earth's surface, which can cause cancer in humans."
      },
      {
        title: "Rainforests",
        content: "Cutting down rainforests is dangerous for many reasons. We need the oxygen that comes from rainforests. Rainforests are the homes of many insects, plants, and animals that we need for medicine and other reasons. Rainforests help catch water and give it back to the Earth in the form of clouds, which bring us water. The roots of trees and plants keep water and soil in place; without them, there are problems like floods and mudslides."
      },
      {
        title: "Extreme weather",
        content: "Be ready to describe extreme weather you've experienced. For example: \"I've seen a flood in [place, year]. It was scary – water came down our street like a river.\" or \"There was a lot of wind damage when there was a tornado/hurricane.\" Extreme weather is a part of nature but many scientists believe it is connected with environmental problems."
      },
      {
        title: "Chemicals at home",
        content: "At home we use many chemical products. Refrigerators contain the gas called 'freon,' which is very harmful to the atmosphere. We also have cleaning products which contain strong chemicals. Being aware of these helps us make better choices for the environment."
      },
      {
        title: "Environmentally friendly products",
        content: "You can look on the package and see if it has symbols for recycling, whether the product uses recycled materials, and so on. You can read about different products on the internet, and find out where to buy recycled things like ink cartridges for your printer."
      },
      {
        title: "Personal contribution to the environment",
        content: "There are many ways you can help the environment: use special light bulbs, turn off the TV or radio when not paying attention, put your computer on stand-by mode to save electricity. Ride your bike or walk instead of taking the car or bus to save petrol. Recycle all your paper, glass, and plastic."
      },
      {
        title: "Recycling terminology",
        content: "\"Recycled\" means that some or all of the materials in something have been cleaned and can be used again – for example, a glass bottle. \"Recycling\" is the activity of putting something into a special bin where it will be taken away and used again. \"Recyclable\" means it's possible to be used again, but it's up to you to put it into the recycling bin."
      },
      {
        title: "Alternative energy",
        content: "There is nuclear energy, water and steam power for electricity, solar energy from the sun, and wind power. Some cars can run on alternative energy like electricity or hydrogen. Be ready to say which you prefer and why."
      }
    ],
    practice: [
      {
        question: "What is an ecosystem?",
        answer: "An ecosystem is a group of living things and the whole place where they live. They all live together and need each other. For example, a desert has special plants, lizards, snakes, vultures, and special insects."
      },
      {
        question: "Are there any environmental problems in your region? What are they caused by?",
        answer: "Yes, there are some problems. The main problem is air pollution. There are many factories in my region, and many people drive cars and burn coal for heating."
      },
      {
        question: "Are you aware of any global environmental issues? Which is most serious and why?",
        answer: "Yes, I know about global warming. This is a very serious problem. Most scientists agree that it could seriously harm our lives unless we stop it. Glaciers and polar ice are melting, rain forests are dying, and farms are turning into desert."
      },
      {
        question: "Tell me about global warming. What is it?",
        answer: "Global warming is the general increase in air and water temperatures around the world. While it's normal for temperatures to change over centuries, this time humans have caused the increase with carbon from cars and factories."
      },
      {
        question: "What is the Greenhouse Effect? What is it caused by?",
        answer: "The Greenhouse Effect is when the atmosphere gets too hot. Air warmed by the sun gets trapped close to the ground and can't escape. It is caused by too much carbon in the air from factories, electricity plants, and cars."
      },
      {
        question: "What is the ozone layer and what is its function?",
        answer: "The ozone layer protects us from the harmful rays of the sun. It is in the atmosphere and surrounds the Earth like a clear blanket."
      },
      {
        question: "There is a hole in the ozone layer. How did it get there? Is it dangerous?",
        answer: "Scientists think that too much carbon has destroyed part of it. It is very dangerous because it lets strong sunlight through to the Earth's surface, which can cause cancer in humans."
      },
      {
        question: "Why is it dangerous to cut down the rainforests?",
        answer: "We need the oxygen from rainforests. They are homes to many species we need for medicine. Rainforests help catch water and return it as clouds. The roots keep water and soil in place; without them there are floods and mudslides."
      },
      {
        question: "What types of extreme weather have you experienced? Is it connected with environmental problems?",
        answer: "I've experienced heavy flooding in my area. Water came down the streets like a river. Extreme weather is part of nature but I believe it is connected with environmental problems like climate change."
      },
      {
        question: "Which chemicals do you use at home? Are they harmful?",
        answer: "We have a refrigerator which contains freon, which is harmful to the atmosphere. We also have cleaning products with strong chemicals that can damage the environment."
      },
      {
        question: "How can you tell that a product is 'environmentally friendly'?",
        answer: "I can look on the package for recycling symbols, check whether the product uses recycled materials, and read about products online to find out where to buy recycled items."
      },
      {
        question: "What can you do to help the environment as an individual?",
        answer: "I can use energy-saving light bulbs, turn off electronics when not in use, ride my bike or walk instead of driving, and recycle paper, glass, and plastic."
      },
      {
        question: "What is the difference between 'recycled,' 'recycling,' and 'recyclable'?",
        answer: "'Recycled' means materials have been cleaned and used again. 'Recycling' is the activity of putting things in special bins to be reused. 'Recyclable' means something can be used again, but you need to put it in the recycling bin."
      },
      {
        question: "What are some types of alternative energy?",
        answer: "There is nuclear energy, water and steam power, solar energy from the sun, and wind power. Some cars can also run on electricity or hydrogen."
      }
    ],
    exam: {
      taskDescription: "Give a short presentation about the environment, environmental problems and the protection of the environment. Use pictures 3A–3F to illustrate your speech.",
      promptPoints: [
        "Environmental problems of today, their causes",
        "Health concerns",
        "Recent environmental disasters",
        "Helping the environment",
        "Environmental organizations",
        "Other"
      ],
      images: [
        { label: "3A", src: env3a, description: "Water pollution" },
        { label: "3B", src: env3b, description: "Nuclear power plant – sources of energy" },
        { label: "3C", src: env3c, description: "Air pollution, heavy traffic" },
        { label: "3D", src: env3d, description: "Cutting down forests / rainforests, reducing biodiversity" },
        { label: "3E", src: env3e, description: "Bio farm / Bio products" },
        { label: "3F", src: env3f, description: "Climate changes" }
      ],
      followUpQuestions: [
        "What should be done about air pollution in big cities?",
        "What are the best ways to prevent global warming / water pollution?",
        "What sources of electricity do you know?",
        "Do you try to save electrical energy? How?",
        "What means of transport are eco-friendly?",
        "Can you explain the term biodiversity?",
        "What are bio-products?",
        "Do you know any environmental organizations? Do you consider them useful?",
        "Do you think supermarkets should give away plastic bags for free? Why or why not?",
        "Do you do anything to help the environment? What?",
        "Can you explain the following phrase: \"reduce, reuse, recycle\"?",
        "Can you think of any environmental problems in the place you live / your neighbourhood?",
        "Do you think some things should be banned to help the environment? Which ones?"
      ]
    }
  },
  { id: "course-of-life", title: "Course of Life", description: "Key points in human lives, legal age, generation gap", available: false },
  { id: "social-issues", title: "Social Issues", description: "Drug abuse, terrorism, crime, bullying, homelessness", available: false },
  { id: "holidays-traditions", title: "Holidays, Traditions, Feast Days", description: "Christmas, Easter, Thanksgiving, national holidays", available: false },
  { id: "transport-travelling", title: "Transport, Travelling", description: "Means of transport, tourist destinations, immigration", available: false },
  { id: "medical-care", title: "Medical Care, Health and Diseases", description: "Healthcare, illnesses, vaccination, first aid", available: false },
  { id: "sports-games", title: "Sports and Games", description: "Olympics, national sports, extreme sports", available: false },
  { id: "shopping-services", title: "Shopping and Services", description: "Shopping centres, banking, financial terms", available: false },
  { id: "food-meals", title: "Food, Meals, Restaurants", description: "Typical meals, table manners, eating disorders", available: false },
  { id: "nature-weather", title: "Nature, Weather, Environmental Protection", description: "Climate, natural beauties, pollution, personal contribution", available: false },
  { id: "arts", title: "Arts: Fine Arts, Music, Theatre, Cinema", description: "Cultural life, fine arts, Oscar awards, theatre", available: false },
  { id: "education", title: "Education", description: "Education systems, home schooling, tuition fees", available: false },
  { id: "ostrava", title: "Ostrava, Town and Region", description: "Geography, history, transport, culture of Ostrava", available: false },
  { id: "czech-republic", title: "The Czech Republic", description: "Geography, political system, cities, natural beauties", available: false },
  { id: "prague", title: "Prague, Czech History", description: "Capital city, sights, key historical events", available: false },
  { id: "mass-media", title: "Mass Media", description: "Press, TV, advertising, power of mass media", available: false },
  { id: "home-housing", title: "Home and Housing", description: "Types of houses, mortgages, architecture", available: false },
  { id: "united-kingdom", title: "The United Kingdom", description: "Geography, political system, places of interest", available: false },
  { id: "london-washington", title: "London, Washington D.C.", description: "Historical sights, culture, entertainment", available: false },
  { id: "english-speaking-countries", title: "English-Speaking Countries", description: "Commonwealth, Canada, Australia, New Zealand, Ireland", available: false },
  { id: "english-lit-early", title: "English Literature – up to 1800", description: "Shakespeare, Chaucer, Defoe, Swift, Austen", available: false },
  { id: "english-lit-modern", title: "English Literature – 19th & 20th Century", description: "Dickens, Wilde, Orwell, Tolkien, Rowling", available: false },
  { id: "american-lit-early", title: "American Literature – up to 1900", description: "Poe, Twain, Whitman, London", available: false },
  { id: "american-lit-modern", title: "American Literature – 20th Century", description: "Hemingway, Fitzgerald, Steinbeck, Kerouac", available: false },
  { id: "usa-geography", title: "The USA, Geography, Political System", description: "Geography, cities, national parks, presidential system", available: false },
  { id: "british-history-early", title: "History of Great Britain – up to 1800", description: "Celts, Romans, Magna Charta, Shakespeare era", available: false },
  { id: "british-history-modern", title: "History of Great Britain – 19th & 20th Century", description: "Industrial Revolution, Victorian era, World Wars", available: false },
  { id: "us-history-early", title: "History of the USA – up to 1900", description: "Columbus, Pilgrim Fathers, Independence, Civil War", available: false },
  { id: "us-history-modern", title: "History of the USA – 20th Century", description: "World Wars, Cold War, Civil Rights, modern presidents", available: false }
];
