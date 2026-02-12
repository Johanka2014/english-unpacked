import env3a from "@/assets/maturita-env-3a.jpg";
import topicEnvironment from "@/assets/topic-environment.jpg";
import maturitaExamHall from "@/assets/maturita-exam-hall.jpg";
import env3b from "@/assets/maturita-env-3b.jpg";
import env3c from "@/assets/maturita-env-3c.jpg";
import env3d from "@/assets/maturita-env-3d.jpg";
import env3e from "@/assets/maturita-env-3e.jpg";
import env3f from "@/assets/maturita-env-3f.jpg";
import envPart2a from "@/assets/maturita-env-part2-a.jpg";
import envPart2b from "@/assets/maturita-env-part2-b.jpg";

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

export interface Part2Task1 {
  promptPoints?: string[];
  followUpQuestions: string[];
  images?: { label: string; src: string; description: string }[];
}

export interface Part2Task2 {
  promptPoints?: string[];
  comparisonQuestions: string[];
}

export interface Part2Task3 {
  question: string;
}

export interface Part2Data {
  task1: Part2Task1;
  task2: Part2Task2;
  task3: Part2Task3;
}

export interface MaturitaTopic {
  id: string;
  title: string;
  description: string;
  available: boolean;
  thumbnail?: string;
  interlocutorIntro?: string;
  interlocutorPart1?: string;
  warmUpQuestions?: WarmUpCategory[];
  learn?: LearnItem[];
  practice?: PracticeQA[];
  exam?: ExamPractice;
  part2?: Part2Data;
}

export const maturitaTopics: MaturitaTopic[] = [
  {
    id: "environment",
    title: "Environment",
    description: "Nature, weather, seasons, environmental protection, pollution, and your personal contribution",
    available: true,
    thumbnail: topicEnvironment,
    learn: [
      {
        title: "Water Pollution",
        content: "Water pollution happens when harmful substances like chemicals, waste, and plastics enter rivers, lakes, and oceans. Factories often release toxic waste into waterways. Farms use pesticides and fertilisers that wash into streams when it rains. Plastic waste is a huge problem – millions of tonnes end up in the ocean every year, harming marine life. Oil spills from ships and drilling platforms cause massive environmental damage. Even household products like detergents can pollute water. Clean water is essential for all life, so protecting our water sources is critical."
      },
      {
        title: "Nuclear Power",
        content: "Nuclear power is a controversial source of energy. On one hand, it produces large amounts of electricity without directly releasing carbon dioxide into the atmosphere, which helps fight climate change. On the other hand, it creates radioactive waste that remains dangerous for thousands of years and must be stored very carefully. Nuclear accidents, like Chernobyl (1986) and Fukushima (2011), showed how devastating failures can be. Many people debate whether nuclear energy is worth the risks, or whether we should focus entirely on renewable sources like solar and wind power."
      },
      {
        title: "Air Pollution and Heavy Traffic",
        content: "Air pollution is one of the most serious environmental problems, especially in big cities. Heavy traffic is a major cause – cars, buses, and lorries release exhaust fumes containing carbon monoxide, nitrogen oxides, and fine particles. These pollutants can cause respiratory diseases like asthma and bronchitis. Smog, a thick layer of polluted air, is common in cities with heavy traffic. Solutions include using public transport, cycling, driving electric cars, and creating low-emission zones in city centres. Many cities are now investing in better public transport to reduce the number of cars on the road."
      },
      {
        title: "Bio Farms and Bio Products",
        content: "Bio (organic) farming is a method of agriculture that avoids using synthetic chemicals like pesticides and artificial fertilisers. Instead, bio farmers use natural methods to keep soil healthy and control pests – for example, crop rotation, composting, and encouraging natural predators. Bio products are considered healthier because they contain fewer chemical residues. They are also better for the environment because organic farming protects soil quality, biodiversity, and water sources. However, bio products are usually more expensive and organic farms often produce less food per hectare than conventional farms."
      },
      {
        title: "Climate Change",
        content: "Climate change refers to long-term shifts in global temperatures and weather patterns. While some changes are natural, human activities – especially burning fossil fuels like coal, oil, and gas – have been the main driver since the 1800s. The effects include rising sea levels, more frequent extreme weather events (hurricanes, droughts, heatwaves), melting glaciers, and loss of biodiversity. The Paris Agreement (2015) aims to limit global warming to 1.5°C above pre-industrial levels. Individuals can help by reducing energy use, eating less meat, using public transport, and supporting renewable energy."
      },
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
    },
    part2: {
      task1: {
        promptPoints: ["Trees & Vegetation", "Energy Source", "Environmental Impact", "Landscape", "Human Activity", "Season & Colors"],
        followUpQuestions: [
          "What's the season or weather like in this picture?",
          "What environmental problem can you see?",
          "How does this scene make you feel?",
          "Would you like to live in a place like this? Why or why not?"
        ],
        images: [
          { label: "Picture A", src: envPart2a, description: "Deforestation – fallen trees and cleared rainforest" },
          { label: "Picture B", src: envPart2b, description: "Wind turbines in a green field – renewable energy" }
        ]
      },
      task2: {
        promptPoints: ["Trees & Vegetation", "Energy Source", "Environmental Impact", "Landscape", "Human Activity", "Season & Colors"],
        comparisonQuestions: [
          "Which picture shows a bigger environmental problem?",
          "How are the two places different in terms of nature?",
          "Which place would you prefer to visit and why?"
        ]
      },
      task3: {
        question: "What can individuals do to help protect the environment?"
      }
    }
  },
  { id: "course-of-life", title: "Course of Life", description: "Key points in human lives, legal age, generation gap", available: false, part2: { task1: { followUpQuestions: ["What stage of life does this picture show?", "How old do you think the people are?"] }, task2: { comparisonQuestions: ["How are the stages of life different in these pictures?"] }, task3: { question: "What do you think is the most important stage of life?" } } },
  { id: "social-issues", title: "Social Issues", description: "Drug abuse, terrorism, crime, bullying, homelessness", available: false, part2: { task1: { followUpQuestions: ["What social issue can you see?", "How does this affect people?"] }, task2: { comparisonQuestions: ["Which picture shows a more serious problem?"] }, task3: { question: "What social problem concerns you the most?" } } },
  { id: "holidays-traditions", title: "Holidays, Traditions, Feast Days", description: "Christmas, Easter, Thanksgiving, national holidays", available: false, part2: { task1: { followUpQuestions: ["What holiday or tradition is shown?", "What are the people celebrating?"] }, task2: { comparisonQuestions: ["How are the celebrations different?"] }, task3: { question: "Which holiday is most important to you and why?" } } },
  { id: "transport-travelling", title: "Transport, Travelling", description: "Means of transport, tourist destinations, immigration", available: false, part2: { task1: { followUpQuestions: ["What type of transport can you see?", "Where might these people be travelling?"] }, task2: { comparisonQuestions: ["Which means of transport is more practical?"] }, task3: { question: "What will transport look like in the future?" } } },
  { id: "medical-care", title: "Medical Care, Health and Diseases", description: "Healthcare, illnesses, vaccination, first aid", available: false, part2: { task1: { followUpQuestions: ["What medical situation is shown?", "How are the people feeling?"] }, task2: { comparisonQuestions: ["How are the healthcare situations different?"] }, task3: { question: "How important is a healthy lifestyle to you?" } } },
  { id: "sports-games", title: "Sports and Games", description: "Olympics, national sports, extreme sports", available: false, part2: { task1: { followUpQuestions: ["What sport is being played?", "Where is the event taking place?"] }, task2: { comparisonQuestions: ["Which sport requires more physical effort?"] }, task3: { question: "Should sport be compulsory at school?" } } },
  { id: "shopping-services", title: "Shopping and Services", description: "Shopping centres, banking, financial terms", available: false, part2: { task1: { followUpQuestions: ["What kind of shop or service can you see?", "What are the people buying?"] }, task2: { comparisonQuestions: ["Which shopping experience looks more enjoyable?"] }, task3: { question: "Do you prefer shopping online or in shops?" } } },
  { id: "food-meals", title: "Food, Meals, Restaurants", description: "Typical meals, table manners, eating disorders", available: false, part2: { task1: { followUpQuestions: ["What kind of food can you see?", "Is this a healthy meal?"] }, task2: { comparisonQuestions: ["Which meal is healthier?"] }, task3: { question: "What does a healthy diet mean to you?" } } },
  { id: "nature-weather", title: "Nature, Weather, Environmental Protection", description: "Climate, natural beauties, pollution, personal contribution", available: false, part2: { task1: { followUpQuestions: ["What's the weather like?", "What season is it?"] }, task2: { comparisonQuestions: ["How is the weather different in these pictures?"] }, task3: { question: "How does weather affect your daily life?" } } },
  { id: "arts", title: "Arts: Fine Arts, Music, Theatre, Cinema", description: "Cultural life, fine arts, Oscar awards, theatre", available: false, part2: { task1: { followUpQuestions: ["What form of art is shown?", "What is the atmosphere like?"] }, task2: { comparisonQuestions: ["Which artistic event looks more interesting?"] }, task3: { question: "How important is art in everyday life?" } } },
  { id: "education", title: "Education", description: "Education systems, home schooling, tuition fees", available: false, part2: { task1: { followUpQuestions: ["What type of school or classroom is this?", "What are the students doing?"] }, task2: { comparisonQuestions: ["How are the learning environments different?"] }, task3: { question: "What would you change about the education system?" } } },
  { id: "ostrava", title: "Ostrava, Town and Region", description: "Geography, history, transport, culture of Ostrava", available: false, part2: { task1: { followUpQuestions: ["What part of the city can you see?", "What is happening in this place?"] }, task2: { comparisonQuestions: ["How are these two places in the region different?"] }, task3: { question: "What do you like most about living in your region?" } } },
  { id: "czech-republic", title: "The Czech Republic", description: "Geography, political system, cities, natural beauties", available: false, part2: { task1: { followUpQuestions: ["What place in the Czech Republic is this?", "What makes it special?"] }, task2: { comparisonQuestions: ["How are these two Czech locations different?"] }, task3: { question: "What makes the Czech Republic unique?" } } },
  { id: "prague", title: "Prague, Czech History", description: "Capital city, sights, key historical events", available: false, part2: { task1: { followUpQuestions: ["What famous Prague landmark can you see?", "What are the people doing?"] }, task2: { comparisonQuestions: ["How are these two views of Prague different?"] }, task3: { question: "Why is Prague important for Czech history?" } } },
  { id: "mass-media", title: "Mass Media", description: "Press, TV, advertising, power of mass media", available: false, part2: { task1: { followUpQuestions: ["What type of media is shown?", "How are people consuming information?"] }, task2: { comparisonQuestions: ["Which form of media is more influential?"] }, task3: { question: "How do social media influence young people?" } } },
  { id: "home-housing", title: "Home and Housing", description: "Types of houses, mortgages, architecture", available: false, part2: { task1: { followUpQuestions: ["What type of home is this?", "Would you like to live here?"] }, task2: { comparisonQuestions: ["Which home would you prefer to live in?"] }, task3: { question: "What is your idea of a perfect home?" } } },
  { id: "united-kingdom", title: "The United Kingdom", description: "Geography, political system, places of interest", available: false, part2: { task1: { followUpQuestions: ["What British location or tradition is shown?", "What are the people doing?"] }, task2: { comparisonQuestions: ["How are these two aspects of British life different?"] }, task3: { question: "What do you find most interesting about British culture?" } } },
  { id: "london-washington", title: "London, Washington D.C.", description: "Historical sights, culture, entertainment", available: false, part2: { task1: { followUpQuestions: ["What famous landmark can you see?", "What is the atmosphere like?"] }, task2: { comparisonQuestions: ["How are these two cities different?"] }, task3: { question: "Which city would you prefer to visit and why?" } } },
  { id: "english-speaking-countries", title: "English-Speaking Countries", description: "Commonwealth, Canada, Australia, New Zealand, Ireland", available: false, part2: { task1: { followUpQuestions: ["Which country does this picture represent?", "What is typical about this place?"] }, task2: { comparisonQuestions: ["How are these two countries different?"] }, task3: { question: "Which English-speaking country would you most like to visit?" } } },
  { id: "english-lit-early", title: "English Literature – up to 1800", description: "Shakespeare, Chaucer, Defoe, Swift, Austen", available: false, part2: { task1: { followUpQuestions: ["What literary period does this image suggest?", "What can you say about the setting?"] }, task2: { comparisonQuestions: ["How do these two images relate to literature?"] }, task3: { question: "Why is it important to read classic literature?" } } },
  { id: "english-lit-modern", title: "English Literature – 19th & 20th Century", description: "Dickens, Wilde, Orwell, Tolkien, Rowling", available: false, part2: { task1: { followUpQuestions: ["What literary work might this picture relate to?", "What period is shown?"] }, task2: { comparisonQuestions: ["How are the settings in these pictures different?"] }, task3: { question: "Which modern author do you find most interesting?" } } },
  { id: "american-lit-early", title: "American Literature – up to 1900", description: "Poe, Twain, Whitman, London", available: false, part2: { task1: { followUpQuestions: ["What aspect of American life is shown?", "What time period does this suggest?"] }, task2: { comparisonQuestions: ["How are these two scenes from American history different?"] }, task3: { question: "How does literature reflect a country's history?" } } },
  { id: "american-lit-modern", title: "American Literature – 20th Century", description: "Hemingway, Fitzgerald, Steinbeck, Kerouac", available: false, part2: { task1: { followUpQuestions: ["What 20th-century American theme is shown?", "What is the mood of this picture?"] }, task2: { comparisonQuestions: ["How do these two images reflect different aspects of American culture?"] }, task3: { question: "Which American novel would you recommend?" } } },
  { id: "usa-geography", title: "The USA, Geography, Political System", description: "Geography, cities, national parks, presidential system", available: false, part2: { task1: { followUpQuestions: ["What American landscape or city is shown?", "What makes this place interesting?"] }, task2: { comparisonQuestions: ["How are these two American locations different?"] }, task3: { question: "What interests you most about the USA?" } } },
  { id: "british-history-early", title: "History of Great Britain – up to 1800", description: "Celts, Romans, Magna Charta, Shakespeare era", available: false, part2: { task1: { followUpQuestions: ["What historical period is shown?", "What can you see in the picture?"] }, task2: { comparisonQuestions: ["How are these two historical periods different?"] }, task3: { question: "Which period of British history fascinates you most?" } } },
  { id: "british-history-modern", title: "History of Great Britain – 19th & 20th Century", description: "Industrial Revolution, Victorian era, World Wars", available: false, part2: { task1: { followUpQuestions: ["What historical event or period is shown?", "What impact did this have?"] }, task2: { comparisonQuestions: ["How did Britain change between these two periods?"] }, task3: { question: "How did the World Wars change Britain?" } } },
  { id: "us-history-early", title: "History of the USA – up to 1900", description: "Columbus, Pilgrim Fathers, Independence, Civil War", available: false, part2: { task1: { followUpQuestions: ["What period of American history is shown?", "What is happening in this scene?"] }, task2: { comparisonQuestions: ["How are these two events in American history different?"] }, task3: { question: "What was the most important event in early American history?" } } },
  { id: "us-history-modern", title: "History of the USA – 20th Century", description: "World Wars, Cold War, Civil Rights, modern presidents", available: false, part2: { task1: { followUpQuestions: ["What 20th-century event is shown?", "Why was this significant?"] }, task2: { comparisonQuestions: ["How did America change between these two events?"] }, task3: { question: "How has the USA changed in the last 50 years?" } } }
];
