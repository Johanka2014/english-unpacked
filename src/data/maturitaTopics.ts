import britlitThumbnail from "@/assets/maturita-britlit-thumbnail.jpg";
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

// Medical Care images
import topicMedicalCare from "@/assets/topic-medical-care.jpg";

// Unemployment images
import topicUnemployment from "@/assets/topic-unemployment.jpg";
import unemploymentPart2a from "@/assets/maturita-unemployment-part2-a.png";
import unemploymentPart2b from "@/assets/maturita-unemployment-part2-b.png";
import unemployment3a from "@/assets/maturita-unemployment-3a.jpg";
import unemployment3b from "@/assets/maturita-unemployment-3b.jpg";
import unemployment3c from "@/assets/maturita-unemployment-3c.jpg";
import unemployment3d from "@/assets/maturita-unemployment-3d.jpg";
import unemployment3e from "@/assets/maturita-unemployment-3e.jpg";
import unemployment3f from "@/assets/maturita-unemployment-3f.jpg";
import unemploymentWs3a from "@/assets/maturita-unemployment-ws-3a.jpg";
import unemploymentWs3b from "@/assets/maturita-unemployment-ws-3b.jpg";
import unemploymentWs3c from "@/assets/maturita-unemployment-ws-3c.jpg";

// Hemingway images
import hemingwayThumbnail from "@/assets/maturita-hemingway-thumbnail.jpg";
import hemingway3a from "@/assets/maturita-hemingway-3a.jpg";
import hemingway3b from "@/assets/maturita-hemingway-3b.jpg";
import hemingway3c from "@/assets/maturita-hemingway-3c.jpg";
import hemingway3d from "@/assets/maturita-hemingway-3d.jpg";
import hemingway3e from "@/assets/maturita-hemingway-3e.jpg";
import hemingway3f from "@/assets/maturita-hemingway-3f.jpg";
import health3a from "@/assets/maturita-health-3a.jpg";
import health3b from "@/assets/maturita-health-3b.jpg";
import health3c from "@/assets/maturita-health-3c.jpg";
import health3d from "@/assets/maturita-health-3d.jpg";
import health3e from "@/assets/maturita-health-3e.jpg";
import health3f from "@/assets/maturita-health-3f.jpg";
import healthPart2a from "@/assets/maturita-health-part2-a.jpg";
import healthPart2b from "@/assets/maturita-health-part2-b.jpg";

// British Literature images
import britlit3a from "@/assets/maturita-britlit-3a.jpg";
import britlit3b from "@/assets/maturita-britlit-3b.jpg";
import britlit3c from "@/assets/maturita-britlit-3c.jpg";
import britlit3d from "@/assets/maturita-britlit-3d.jpg";
import britlit3e from "@/assets/maturita-britlit-3e.jpg";
import britlit3f from "@/assets/maturita-britlit-3f.jpg";
import britlitPart2a from "@/assets/maturita-britlit-part2-a.jpg";
import britlitPart2b from "@/assets/maturita-britlit-part2-b.jpg";

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
    id: "english-lit-modern",
    title: "British Literature",
    description: "Shakespeare, Austen, Dickens, Wilde, Tolkien, Orwell, Rowling, Christie – key British writers and their masterpieces",
    available: true,
    thumbnail: britlitThumbnail,
    learn: [
      {
        title: "William Shakespeare (1564–1616)",
        content: "William Shakespeare is widely regarded as the greatest writer in the English language. Born in Stratford-upon-Avon, he wrote approximately 37 plays and 154 sonnets. His works include tragedies (Hamlet, Macbeth, Othello, King Lear, Romeo and Juliet), comedies (A Midsummer Night's Dream, Much Ado About Nothing, The Taming of the Shrew), and histories (Henry V, Richard III). Shakespeare invented over 1,700 words still used today. His plays explore universal themes: love, jealousy, ambition, betrayal, and the human condition. The Globe Theatre in London was his company's home. His influence on literature, theatre, and the English language is immeasurable."
      },
      {
        title: "Jane Austen (1775–1817)",
        content: "Jane Austen was an English novelist known for her sharp social commentary and romantic fiction set among the British landed gentry. Her six major novels include Pride and Prejudice, Sense and Sensibility, Emma, Mansfield Park, Northanger Abbey, and Persuasion. Austen's novels explore themes of love, marriage, social class, and women's dependence on marriage for social standing and economic security. Her writing is famous for its wit, irony, and keen observations of human behaviour. Despite writing in the early 19th century, her novels remain hugely popular and have been adapted into countless films and TV series."
      },
      {
        title: "Charles Dickens (1812–1870)",
        content: "Charles Dickens is one of the most famous Victorian novelists. His works include Oliver Twist, David Copperfield, Great Expectations, A Tale of Two Cities, A Christmas Carol, and Bleak House. Dickens drew on his own difficult childhood – his father was imprisoned for debt and young Charles worked in a factory. His novels highlight social injustice, poverty, child labour, and the harsh conditions of Victorian England. His characters are memorable and often have names that reflect their personalities. Dickens published many works in serial form in magazines, making literature accessible to a wide audience."
      },
      {
        title: "Oscar Wilde (1854–1900)",
        content: "Oscar Wilde was an Irish-born writer and playwright famous for his wit, flamboyant style, and brilliant conversational skills. His most famous works include the novel The Picture of Dorian Gray, and plays such as The Importance of Being Earnest, An Ideal Husband, and Lady Windermere's Fan. The Picture of Dorian Gray tells the story of a beautiful young man whose portrait ages and shows his sins while he remains young. Wilde was a leading figure of the Aesthetic Movement, which believed in 'art for art's sake'. His life ended tragically – he was imprisoned for two years and died in poverty in Paris at age 46."
      },
      {
        title: "J.R.R. Tolkien (1892–1973)",
        content: "John Ronald Reuel Tolkien was a British writer and professor of English at Oxford University. He is best known for The Hobbit (1937) and The Lord of the Rings trilogy (1954–55), which created the entire genre of modern fantasy literature. Tolkien invented complete languages (Elvish, Dwarvish), histories, and mythologies for his fictional world of Middle-earth. The Lord of the Rings follows hobbit Frodo Baggins on a quest to destroy the One Ring and defeat the Dark Lord Sauron. Themes include friendship, sacrifice, the corrupting nature of power, and the struggle between good and evil. Peter Jackson's film adaptations brought his work to a massive global audience."
      },
      {
        title: "George Orwell (1903–1950)",
        content: "George Orwell (real name Eric Arthur Blair) was a British novelist, essayist, and critic known for his opposition to totalitarianism. His two most famous works are Animal Farm (1945) – an allegorical novella satirising the Russian Revolution and Stalinism through a story about farm animals, and Nineteen Eighty-Four (1984) – a dystopian novel depicting a totalitarian society controlled by 'Big Brother' with constant surveillance, propaganda, and thought control. Orwell coined terms that are still widely used: 'Big Brother', 'thoughtcrime', 'doublethink', and 'Newspeak'. His works warn about the dangers of political corruption, censorship, and the abuse of power."
      },
      {
        title: "J.K. Rowling (born 1965)",
        content: "Joanne Rowling is a British author best known for the Harry Potter series – seven fantasy novels following the young wizard Harry Potter and his friends at Hogwarts School of Witchcraft and Wizardry. The series (1997–2007) became the best-selling book series in history, with over 500 million copies sold worldwide. The books explore themes of friendship, courage, sacrifice, the choice between good and evil, and growing up. Rowling famously wrote the first book while living on welfare as a single mother. The franchise expanded into eight blockbuster films, theme parks, and a play (Harry Potter and the Cursed Child). She also writes crime fiction under the pen name Robert Galbraith."
      },
      {
        title: "Agatha Christie (1890–1976)",
        content: "Agatha Christie is the best-selling fiction writer of all time, with over two billion copies sold. She is known as the 'Queen of Crime' for her detective novels and short stories. Her most famous characters are the Belgian detective Hercule Poirot and the elderly amateur detective Miss Marple. Key works include Murder on the Orient Express, And Then There Were None, The Murder of Roger Ackroyd, and Death on the Nile. Christie's plots are famous for their ingenious twists and surprise endings. She also wrote the world's longest-running play, The Mousetrap, which has been performed in London's West End since 1952."
      },
      {
        title: "Literary Genres",
        content: "British literature spans many genres. Fiction includes novels and short stories – invented narratives. Non-fiction covers factual works like biographies, essays, and journalism. Poetry uses rhythm, rhyme, and imagery to express ideas and emotions. Drama consists of plays written to be performed on stage. Within fiction, sub-genres include: romance (love stories), mystery/detective (solving crimes), fantasy (magical worlds), science fiction (future technology), horror (fear and suspense), historical fiction (set in the past), and adventure (exciting journeys). Understanding genres helps you discuss and compare different works."
      },
      {
        title: "Reading Habits and Preferences",
        content: "When discussing reading in the exam, be prepared to talk about: how often you read, whether you prefer fiction or non-fiction, your favourite genre, and the last book you read. Consider the differences between prose, poetry, and drama. Think about whether translations change books, which writers are popular today, and whether you've read a book and seen its film adaptation. Discuss whether parents should read to children, how reading habits have changed with technology, whether people buy or borrow books, and whether e-books will replace paper books. Having personal opinions with reasons will strengthen your answers."
      }
    ],
    practice: [
      { question: "Do you like to read? How often do you read?", answer: "Yes, I like to read. I read my favourite magazines and the Internet every day. I also try to read at least one book a month. I enjoy reading because it helps me relax and learn new things." },
      { question: "Do you prefer fiction or non-fiction books?", answer: "I like fiction better. You can use your imagination to escape to another place or time, have different people around you, and experience a different life for a while. I especially enjoy fantasy and mystery novels." },
      { question: "What was the last book that you read? What was it about?", answer: "The last book I read was... by... . It was about... . I enjoyed it because the characters were interesting and the plot kept me guessing until the end." },
      { question: "How is reading prose different from reading poetry?", answer: "Prose is easier to read, especially in English. The sentences are more natural. With poetry, you have to think about the meaning, and the rhymes can sometimes make it harder to pay attention to the idea. Poetry is more concentrated and requires more careful reading." },
      { question: "How is reading drama different from reading prose and poetry?", answer: "If you find a good play, it can be fun to try playing different characters in your head. It can be easier or harder to understand because there is no explanation or description of what's going on like in prose or poetry. The meaning is mostly in what the characters are saying. There is also the possibility of performing the play, which can be rewarding." },
      { question: "What is your favourite literary genre?", answer: "I like fantasy best because it takes me to completely different worlds with magic and adventure. I enjoy the creativity of authors who build entire universes with their own rules and histories." },
      { question: "Have you ever read an entire book in English?", answer: "Yes, I've read Harry Potter by J.K. Rowling in English. It was not always easy to understand, but I finished the whole thing. I was proud that I could do it, and it really helped improve my English vocabulary." },
      { question: "Do you think that a translation of a book changes the book itself?", answer: "Yes, of course. It's impossible not to have some changes. Some idioms and expressions don't exist in the translation, so you have to use more words to express the meaning. The translator must completely understand and then re-create the author's meaning very precisely, and some translators are not so good at this." },
      { question: "Which writers are extremely popular today?", answer: "I think J.K. Rowling, Stephen King, and Dan Brown are very popular. Their books are bestsellers and many have been made into successful films. Young adult fiction by authors like Suzanne Collins is also very popular." },
      { question: "Have you ever read a book and seen the film that was made from it? Which did you like more?", answer: "Yes, I read The Lord of the Rings and then saw the films. I liked both, but in different ways. The book had more detail and let me use my imagination, while the film had amazing visual effects. It depends on what I experience first – I usually prefer whichever I discovered first." },
      { question: "Did your parents read stories to you when you were little?", answer: "Yes, my parents always read to us, usually just before we went to sleep. For a long time my favourite story was... and I still remember it. Reading to children is important because young children learn to use their imagination before they can read themselves." },
      { question: "How has reading in your country changed in the past few years?", answer: "Most people have the Internet or watch TV, so people don't read books as much as before. But people still read a lot – just not books. They read newspapers online, buy fashion or music magazines, and get a lot of information on the Internet. E-books have also become more popular." },
      { question: "Do you think electronic books will replace paper books?", answer: "I suppose they will become more popular, since it's more environmentally friendly. But they can never completely replace a real book. Many people like the feeling of holding a book in their hands and turning the pages, and you can take a paper book with you anywhere – even to the bathtub!" },
      { question: "Why did you choose to speak about this particular British author?", answer: "I chose to speak about Shakespeare because he is the most famous writer in the English language. His plays are still performed all over the world and his influence on literature and the English language is enormous. I find his tragedies like Hamlet particularly fascinating." },
      { question: "Can you describe the plot of a book by a British author?", answer: "In Oliver Twist by Charles Dickens, a young orphan boy escapes from a workhouse and travels to London, where he falls in with a gang of pickpockets led by Fagin. Oliver is eventually rescued by kind people who discover his true identity. The novel exposes the harsh treatment of orphans and the poor in Victorian England." }
    ],
    part2: {
      task1: {
        promptPoints: ["Setting", "Books & Objects", "People", "Atmosphere", "Activity", "Time Period"],
        images: [
          { label: "Picture A", src: britlitPart2a, description: "A traditional library with bookshelves, fireplace, and an open book" },
          { label: "Picture B", src: britlitPart2b, description: "A modern outdoor book festival with people browsing books" }
        ],
        followUpQuestions: [
          "What kind of place is this? What atmosphere does it create?",
          "What types of books might you find here?",
          "Would you enjoy spending time in a place like this?",
          "What does this picture tell you about how people read?"
        ]
      },
      task2: {
        promptPoints: ["Setting", "Books & Objects", "People", "Atmosphere", "Activity", "Time Period"],
        comparisonQuestions: [
          "How are the reading environments different in these two pictures?",
          "Which setting do you think encourages reading more?",
          "How have reading habits changed from the past to today?"
        ]
      },
      task3: {
        question: "How important is it for young people to read classic British literature? Should schools make students read specific books, or should they choose their own?"
      }
    },
    exam: {
      taskDescription: "In this task you should speak on your own about a selected British writer or playwright and his/her masterpieces. Use pictures 3A–3F to illustrate your speech.",
      promptPoints: [
        "Life of the author / playwright",
        "Work(s) / masterpieces of the author / playwright",
        "Theme(s) of the books / plays",
        "Genre(s) of the book / play",
        "Your preferences",
        "Other"
      ],
      images: [
        { label: "3A", src: britlit3a, description: "Shakespeare – Romeo and Juliet, the balcony scene" },
        { label: "3B", src: britlit3b, description: "Dickens – Oliver Twist, Victorian London streets" },
        { label: "3C", src: britlit3c, description: "Wilde – The Picture of Dorian Gray" },
        { label: "3D", src: britlit3d, description: "Austen – Pride and Prejudice, Regency era" },
        { label: "3E", src: britlit3e, description: "Tolkien – The Lord of the Rings, Middle-earth" },
        { label: "3F", src: britlit3f, description: "Orwell – 1984, dystopian surveillance state" }
      ],
      followUpQuestions: [
        "Why did you choose to speak about this author / playwright?",
        "Why is this author popular?",
        "Have you read any of his/her books?",
        "Have you seen any of his/her plays or film adaptations?",
        "Could you describe the main character to me?",
        "Do you know any other novels / plays by this author?",
        "Which genre is this book / play?",
        "Could you tell me something about the plot?",
        "What is the book / play about?",
        "Would you recommend this book / play? Why?",
        "Who are the main characters?",
        "Why do you like this book / play?",
        "What themes does this author explore in their work?"
      ]
    }
  },
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
  {
    id: "medical-care",
    title: "Medical Care, Health and Diseases",
    description: "Healthcare systems, illnesses, hospitals, medical specialists, pharmacy, and patient rights",
    available: true,
    thumbnail: topicMedicalCare,
    learn: [
      { title: "Common Symptoms and When to See a Doctor", content: "When you visit your GP (general practitioner), the doctor first asks about your symptoms – when they started, how severe they are, and whether anything makes them better or worse. Then the doctor examines you: they may check your temperature, blood pressure, and pulse. They listen to your heart and lungs with a stethoscope, look into your throat and ears, and feel your lymph nodes. If needed, the doctor may order blood tests, urine tests, or an X-ray. Based on the examination, the doctor makes a diagnosis and prescribes treatment – this could be medication, rest, a special diet, or a referral to a specialist." },
      { title: "What the Doctor Does During a Visit", content: "First, your doctor listens to your concerns and takes your medical history. They ask about any medications you're taking and any allergies. Then comes the physical examination. The doctor uses various instruments: a stethoscope to listen to your heart and lungs, a blood pressure monitor to check your BP, a thermometer for temperature, and an otoscope to look in your ears. They may palpate (feel) your abdomen to check for tenderness or enlarged organs. The doctor might order tests like blood work or imaging (X-rays, ultrasounds) if needed. Finally, they explain the diagnosis and recommend treatment options." },
      { title: "Reasons to Go to Hospital", content: "You go to hospital when you need advanced medical care that can't be provided at home or at a GP's office. Common reasons include: serious injuries from accidents, chest pain or difficulty breathing, severe infections, surgery (planned or emergency), childbirth, severe allergic reactions, poisoning, and when you need continuous monitoring of vital signs. Hospitals have specialized equipment, trained staff, and emergency departments to handle life-threatening situations. Patients may be admitted for observation, treatment, or recovery after surgery." },
      { title: "Serious Diseases and Conditions", content: "Serious diseases requiring hospital care include: cancer (malignant tumors), heart disease, stroke, diabetes complications, pneumonia, meningitis, and sepsis. Cancer occurs when abnormal cells grow uncontrollably. Heart disease affects the heart and blood vessels, often caused by high blood pressure or cholesterol. A stroke happens when blood flow to the brain is blocked. Pneumonia is a lung infection causing inflammation and fluid buildup. Meningitis is inflammation of membranes around the brain and spinal cord. These conditions require ongoing treatment, monitoring, and specialized medical intervention." },
      { title: "Medical Specialists", content: "Different doctors specialize in different areas: A cardiologist treats heart diseases, a neurologist handles nervous system disorders, an oncologist specializes in cancer treatment, a pediatrician cares for children, a psychiatrist treats mental health, a dermatologist handles skin conditions, an ophthalmologist specializes in eyes, an orthopedist treats bones and joints, a surgeon performs operations, and a radiologist interprets X-rays and imaging. When your GP suspects a specific condition, they refer you to the appropriate specialist who has advanced training and equipment for that area." },
      { title: "Pharmacy and Prescriptions", content: "A pharmacy is a place where medicines are dispensed, either by prescription or over-the-counter. When you receive a prescription from your doctor, you take it to a pharmacist at the pharmacy. The pharmacist checks the prescription, verifies the medication is appropriate for you, and explains how to take it – the dosage, frequency, and any side effects. Many medications require a prescription because they can be dangerous if misused. Over-the-counter drugs like painkillers and cough medicine don't need a prescription. Pharmacists are highly trained healthcare professionals who can also advise on minor health issues." },
      { title: "Overview of a Hospital", content: "A hospital is a large medical facility that provides comprehensive healthcare services. It has multiple departments and specialties, emergency services available 24/7, operating rooms for surgery, intensive care units, diagnostic equipment like CT scanners and MRI machines, and hospital wards with patient beds. Hospitals employ doctors, nurses, surgeons, anesthesiologists, radiologists, and many other healthcare professionals. Most hospitals are organized hierarchically with a director or chief executive, medical staff, nursing staff, and administrative personnel. Teaching hospitals also train medical students and conduct research." },
      { title: "Hospital Departments", content: "Large hospitals have multiple specialized departments. The Emergency Department (ED) handles urgent and critical cases 24/7. The Internal Medicine Department treats adult patients with various medical conditions. The Surgical Department performs operations and treats surgical patients. The Pediatric Department cares for children. The Obstetrics and Gynecology Department handles pregnancies and women's health. The Cardiology Department specializes in heart disease. The Oncology Department treats cancer patients. The Intensive Care Unit (ICU) provides care for critically ill patients. The Psychiatric Department handles mental health patients. Rehabilitation services help patients recover after injury or surgery." },
      { title: "Healthcare Professionals", content: "A hospital employs various healthcare professionals: Doctors (physicians) diagnose and treat diseases. Surgeons perform operations. Nurses provide patient care, administer medications, and monitor vital signs. Anesthesiologists manage anesthesia during surgery. Radiologists interpret X-rays and imaging studies. Laboratory technicians perform blood tests and analyses. Physiotherapists help with rehabilitation. Pharmacists dispense medications and advise on drug interactions. Hospital administrators manage the facility. Support staff includes cleaners, cooks, and orderlies. Each professional plays a crucial role in patient care and hospital operations." },
      { title: "Emergency Care", content: "Emergency departments (EDs) are open 24/7 to treat patients with acute, serious, or life-threatening conditions. When you arrive at the ED, you register and are triaged – a nurse assesses the severity of your condition to determine urgency. Patients with life-threatening conditions like heart attacks, severe trauma, or difficulty breathing are treated immediately. Others may wait depending on severity. The ED has specialized equipment like defibrillators, ventilators, and trauma teams ready to respond. Common ED cases include heart attacks, strokes, severe injuries, acute infections, and poisoning. The ED can stabilize patients before transferring them to appropriate hospital departments." },
      { title: "Intensive Care Unit (ICU)", content: "The Intensive Care Unit (ICU) or High Dependency Unit (HDU) provides the highest level of medical care for critically ill patients. ICU patients need continuous monitoring of vital signs like heart rate, blood pressure, oxygen levels, and brain activity. They may be on ventilators to help them breathe, have multiple IV lines for medications, or require dialysis for kidney support. The ICU has a high nurse-to-patient ratio – often one nurse per patient or fewer. Common ICU patients include those with severe infections (sepsis), major surgery recovery, organ failure, severe trauma, or serious cardiac events. ICU care is very expensive but can save lives in critical situations." },
      { title: "Hospital Technology", content: "Modern hospitals use advanced technology for diagnosis and treatment. CT (Computed Tomography) scanners take detailed cross-sectional images of the body. MRI (Magnetic Resonance Imaging) uses magnetic fields for high-detail imaging, especially good for soft tissues and brain. Ultrasound uses sound waves for imaging, safe and often used in pregnancy. X-ray machines use radiation for quick imaging of bones and lungs. Electrocardiograms (ECGs) record heart electrical activity. Monitors display real-time vital signs. Ventilators help patients breathe. Dialysis machines perform kidney function. Electronic Health Records (EHR) store patient information digitally. Robots assist in some surgeries. Telemedicine allows remote consultations." },
      { title: "Patient Rights", content: "Patients have important rights in hospitals: the right to quality healthcare and respectful treatment, the right to know their diagnosis and treatment options, informed consent (the right to refuse treatment), privacy and confidentiality of medical information, access to their medical records, the right to complain and have complaints investigated, emergency treatment regardless of ability to pay, and freedom from discrimination. Hospitals must explain procedures in understandable language. Patients can have a family member or advocate present. They can change doctors if dissatisfied. Patient rights also include protection from harmful or unnecessary procedures. Healthcare providers are bound by confidentiality laws." }
    ],
    practice: [
      { question: "What is the role of a general practitioner (GP)?", answer: "A GP is the first contact in healthcare. They diagnose common illnesses, prescribe medications, refer patients to specialists, conduct preventive health checks, manage chronic diseases, and provide health advice. They know the patient's medical history and coordinate care with other healthcare providers." },
      { question: "What should you do if you have a medical emergency?", answer: "Call emergency services (ambulance) immediately by dialing the emergency number. Describe your symptoms clearly. If you're conscious and able, move to a safe place. Don't drive yourself if it's a serious condition. Wait for emergency personnel. If someone is choking, perform the Heimlich maneuver. If someone is unconscious and not breathing, perform CPR if trained. Never move someone with a spinal injury." },
      { question: "How do hospitals organize patient care?", answer: "Hospitals are organized into departments by medical specialty. Each department has doctors, nurses, and support staff specializing in that area. Patients are assigned to the appropriate department based on their condition. There's a hierarchy: the hospital director oversees operations, medical directors manage departments, senior doctors supervise junior staff and nurses. Emergency departments handle acute cases. Wards have patient beds organized by condition or specialty." },
      { question: "What happens during hospitalization?", answer: "Upon admission, you register and receive a hospital bracelet with your information. You're assigned a room or bed, usually shared. Doctors and nurses examine you regularly. You might undergo tests like blood work or X-rays. Medications are given on schedule. Vital signs are monitored. You receive meals according to dietary requirements. If surgery is planned, you receive pre-operative preparation. During recovery, physiotherapy may help. Before discharge, doctors give instructions for home care and follow-up appointments." },
      { question: "Why is the ICU different from a regular hospital ward?", answer: "The ICU provides intensive monitoring and specialized care for critically ill patients. There's a higher nurse-to-patient ratio (often 1:1). Patients are on continuous heart monitors, oxygen, and IV medications. Many require ventilators to breathe. The ICU has advanced equipment for life support. Visiting hours may be limited. Staffing is highly trained for emergencies. ICU patients are typically sicker and at higher risk than regular ward patients. The ICU is more expensive but essential for saving lives." },
      { question: "How do doctors diagnose diseases?", answer: "Doctors use a systematic approach: they take a medical history (asking about symptoms, past illnesses, medications, family history), perform a physical examination (listening, feeling, observing), and order diagnostic tests if needed. Tests include blood work (complete blood count, chemistry panels), imaging (X-rays, CT, MRI, ultrasound), ECG for heart problems, and specialized tests depending on suspected diagnosis. They analyze all information together to make a diagnosis and plan treatment." },
      { question: "What is the purpose of different medical imaging techniques?", answer: "X-rays are quick, inexpensive, and good for bones and lungs. CT scans provide detailed cross-sectional images and are useful for trauma and organ evaluation. MRI gives excellent soft tissue detail and is safe for brain and spinal cord. Ultrasound is safe, cheap, real-time, and commonly used in pregnancy and cardiac imaging. PET scans detect metabolic activity, useful in cancer. Choosing the right imaging depends on what needs to be visualized, radiation concerns, cost, and availability." },
      { question: "What are the main causes of hospital admissions?", answer: "Common reasons for hospital admission include: accidents and trauma requiring surgery, heart attacks and cardiac conditions, strokes, severe infections and sepsis, pneumonia, childbirth complications, surgery (planned or emergency), acute abdominal pain, severe allergic reactions, poisoning, and exacerbation of chronic diseases like asthma or diabetes. Patients may be admitted for diagnosis confirmation, treatment, observation, or recovery." },
      { question: "What is informed consent in healthcare?", answer: "Informed consent means a patient must understand and agree to medical treatment before it begins. Healthcare providers must explain the procedure, its risks and benefits, alternative treatments, and what happens if you refuse. The patient must be mentally competent, have time to ask questions, and agree freely without coercion. For emergency situations where the patient is unconscious, doctors can proceed without formal consent if it's life-saving. Consent can be withdrawn at any time." },
      { question: "How do antibiotics work and why is it important to finish the course?", answer: "Antibiotics kill or inhibit bacteria causing infections. Different antibiotics target different bacterial types. It's crucial to finish the entire prescribed course, even if you feel better, because: stopping early leaves some bacteria alive, which can cause relapse and develop antibiotic resistance. Antibiotic resistance occurs when bacteria evolve to survive drugs, making infections harder to treat. Overuse and incomplete courses accelerate resistance development, a growing global health problem." },
      { question: "What should you expect during a routine health check-up?", answer: "During a check-up, the doctor reviews your medical history and current health concerns. They measure your height, weight, blood pressure, and temperature. They perform a physical exam: listening to your heart and lungs, checking your abdomen, examining eyes, ears, and throat. They may order blood work or urine tests, especially for older patients or those with health conditions. The doctor discusses preventive measures, exercise, diet, and lifestyle. They provide health advice and may order screening tests like mammograms or colonoscopies based on age and risk." },
      { question: "What is the difference between inpatient and outpatient care?", answer: "Inpatient care involves admission to a hospital for at least one night. Patients stay in a hospital bed, receive continuous care, and are monitored 24/7. This is for serious conditions, major surgery, or complications. Outpatient care (or ambulatory care) is provided without hospital admission – you visit a clinic, doctor's office, or hospital for treatment and return home same day. This includes routine visits, minor procedures, therapy sessions, and diagnostic tests. Outpatient care is less expensive but suitable only for less serious conditions." },
      { question: "How does infection control work in hospitals?", answer: "Hospitals implement strict infection control to prevent disease spread. Healthcare workers wash hands frequently and wear gloves, masks, and gowns when needed. Isolation rooms protect patients with infectious diseases from others. Sterilization of instruments kills harmful microorganisms. Environmental cleaning removes pathogens from surfaces. Patients with certain infections may be in isolation precautions. Visitors may need protective equipment. Proper waste disposal prevents pathogen spread. Vaccination of healthcare workers protects staff and patients. Hand hygiene is the single most important measure preventing healthcare-associated infections." },
      { question: "What happens after you're discharged from the hospital?", answer: "Before discharge, the doctor provides discharge instructions: how to care for your wound or surgical site, what medications to take and how, activity restrictions, diet guidelines, and when to schedule follow-up appointments. You receive a discharge summary with your diagnosis, treatments received, and test results. Some patients need home health services or rehab. You should contact your doctor if you develop fever, infection signs, unusual bleeding, or worsening symptoms. Follow-up appointments ensure proper recovery and monitor for complications. Some patients may need physiotherapy or mental health support post-discharge." },
      { question: "How is healthcare cost managed in hospitals?", answer: "Hospitals manage costs through efficient resource allocation, bulk purchasing of supplies, staff scheduling optimization, and energy conservation. Many procedures have standard costs. Insurance companies negotiate rates with hospitals. Government-funded hospitals have budgets managed by health authorities. Private hospitals operate for profit but also control costs. Patients may face bills for hospital care, surgery, medications, and services like imaging or blood tests. Health insurance can cover part or all costs depending on coverage. Many countries have universal healthcare systems where government funds hospital care through taxation." }
    ],
    part2: {
      task1: {
        promptPoints: ["Medical Equipment", "People", "Setting", "Activity", "Mood", "Other"],
        images: [
          { label: "Picture A", src: healthPart2a, description: "Nurse caring for a patient in a hospital ward" },
          { label: "Picture B", src: healthPart2b, description: "GP examining a patient's throat in a medical office" }
        ],
        followUpQuestions: ["What medical equipment can you see in the image?", "Who are the people shown and what are their roles?", "Where is this scene taking place and what's the environment like?", "What kind of medical situation or procedure is depicted?"]
      },
      task2: {
        promptPoints: ["Medical Equipment", "People", "Setting", "Activity", "Mood", "Other"],
        comparisonQuestions: ["How do the types of medical care differ between these two images?", "What different environments or settings can you observe?", "How are the relationships between healthcare providers and patients different?"]
      },
      task3: {
        question: "Describe your most recent visit to a doctor or hospital. What was the reason, and what was your experience like? Would you change anything about healthcare?"
      }
    },
    exam: {
      taskDescription: "You have one minute to talk about medical care and hospitals. You should mention the topics shown in the pictures and answer follow-up questions.",
      promptPoints: ["Hospital departments and facilities", "Emergency care and urgent situations", "Medical specialists and their roles", "Hospital technology and equipment", "Patient rights and responsibilities", "Other healthcare topics"],
      images: [
        { label: "3A", src: health3a, description: "Emergency department entrance" },
        { label: "3B", src: health3b, description: "Pharmacy and medications" },
        { label: "3C", src: health3c, description: "Doctor examining patient" },
        { label: "3D", src: health3d, description: "X-ray imaging" },
        { label: "3E", src: health3e, description: "Ambulance and emergency care" },
        { label: "3F", src: health3f, description: "Surgery and operating room" }
      ],
      followUpQuestions: ["What are the main reasons people go to hospital?", "Can you describe the typical layout and departments of a modern hospital?", "Who are the main healthcare professionals working in hospitals?", "What are the differences between emergency care and planned hospital admission?", "How has hospital technology improved patient care?", "What are some patient rights in hospitals?", "Describe the intensive care unit (ICU) and what patients need ICU care?", "How do hospitals maintain cleanliness and prevent infections?", "What role does each picture play in representing aspects of healthcare?", "How would you describe your own experiences with healthcare?", "What do you think will change in hospitals in the future?", "How important is good communication between doctors and patients?", "What qualities should a good healthcare professional have?"]
    }
  },
  {
    id: "unemployment",
    title: "Unemployment",
    description: "Causes of unemployment, the labour market in the Czech Republic and Europe, job hunting, social support, and the future of work",
    available: true,
    thumbnail: topicUnemployment,
    learn: [
      { title: "What is unemployment?", content: "Unemployment refers to the situation when people of working age who are willing and able to work cannot find a job. The unemployment rate is the percentage of the labour force that is unemployed. There are several types: frictional unemployment (short-term, between jobs), structural unemployment (skills do not match the jobs available, often caused by automation or industries closing down), cyclical unemployment (caused by economic recession when companies stop hiring), and seasonal unemployment (jobs only available at certain times of the year, e.g. tourism, agriculture, construction). In the Czech Republic the rate is published monthly by the Labour Office (Úřad práce) using a registered-unemployment definition, while Eurostat uses the international ILO definition based on a survey." },
      { title: "The Czech labour market today", content: "The Czech Republic ended 2025 with an unemployment rate of 4.8 % – an increase of 0.2 percentage points compared with November and 0.7 percentage points year-on-year. The Labour Office recorded 354,314 job seekers and 87,422 vacancies, meaning on average 4.1 applicants compete for every single vacancy. Women make up 52.5 % of all job seekers and roughly one-third are over the age of 50. The Czech Republic still has one of the lowest unemployment rates in the European Union, but the labour market is cooling: vacancies are falling and job-seeker numbers are rising." },
      { title: "Regional differences in the Czech Republic", content: "There is a significant gap between regions. Prague has the lowest unemployment rate (3.6 %) followed by the Plzeň and Pardubice regions (3.9 %). The highest rates are in the structurally disadvantaged north and east: the Ústí nad Labem Region (7.1 %), the Moravian-Silesian Region (6.6 %) and the South Moravian Region (5.4 %). At district level the most critical situation is in Most (9.9 %) and Karviná (9.6 %), where there can be more than 21 applicants for every vacancy. These differences are mainly caused by the decline of heavy industry, coal mining and traditional manufacturing in the north and north-east." },
      { title: "Causes of unemployment", content: "Unemployment can be caused by many factors: an economic recession that forces companies to cut staff; automation and artificial intelligence replacing routine manual and clerical jobs; the relocation of factories to countries with cheaper labour (outsourcing); company restructuring, mergers or bankruptcy; a mismatch between the skills people have and the skills employers need; seasonal fluctuations in agriculture, construction and tourism; and personal factors such as poor health, lack of qualifications, age discrimination or limited mobility. Long-term unemployment, especially of people aged 50+ and those with low qualifications, is a particular problem." },
      { title: "Effects of unemployment", content: "Unemployment has serious financial, social and psychological consequences. Financially, families lose their main income and may struggle to pay rent, bills and food. Socially, unemployed people can feel isolated, lose contact with colleagues and routines, and suffer from a loss of status. Psychologically, long-term unemployment often leads to low self-esteem, depression, anxiety and even health problems. For the state, high unemployment means lower tax revenue, higher spending on benefits, and rising social problems such as crime, homelessness and substance abuse. That is why governments invest in active labour-market policies." },
      { title: "The Czech Labour Office (Úřad práce)", content: "When people lose their job in the Czech Republic, they can register at the local branch of the Labour Office. As registered job seekers they receive help searching for work, free retraining and qualification courses, advice on writing CVs, and may be entitled to unemployment benefits. The Labour Office also pays the seeker's health insurance and counts the period as a contribution to their pension. Employers can post vacancies through the Labour Office and may receive subsidies for employing disadvantaged groups such as the long-term unemployed, people over 50, school-leavers and people with disabilities." },
      { title: "Unemployment benefits in the Czech Republic", content: "To qualify for unemployment benefits a person must have worked and paid social insurance for at least 12 months in the previous two years. The benefit is calculated from the previous net wage: 65 % for the first two months, 50 % for the next two months, and 45 % for the rest of the support period. The support period depends on age – 5 months for those under 50, 8 months for 50–55 year-olds and 11 months for those over 55. There is a maximum amount set by the state every year. People who refuse a suitable job offer or who left work voluntarily without serious reason receive lower benefits." },
      { title: "Job hunting", content: "Looking for a job today usually combines several methods. The most common steps are: writing a clear, well-structured CV (curriculum vitae) and a personalised cover or motivation letter; searching online job portals such as Jobs.cz, Práce.cz, Profesia.cz or LinkedIn; checking company career pages directly; using the Labour Office database; networking through friends, family and former colleagues; attending job fairs; and using recruitment agencies. After being invited to an interview, candidates should research the company, prepare answers to typical questions, dress appropriately, arrive on time and ask thoughtful questions of their own." },
      { title: "Unemployment in Europe", content: "Unemployment rates vary widely across the European Union. Countries with low rates (around 3–4 %) include the Czech Republic, Germany, Poland, the Netherlands and Malta. The highest rates are traditionally in southern Europe – Spain (around 11 %) and Greece (around 10 %), partly due to the lasting effects of the 2008 financial crisis and a heavy dependence on tourism. A particular European problem is youth unemployment (people aged 15–24): in some southern countries it can be over 25 %. The EU funds programmes such as the Youth Guarantee to help young people find work, an apprenticeship or further education within four months of leaving school." },
      { title: "The future of work", content: "Several long-term trends are reshaping employment. Automation and artificial intelligence are replacing routine jobs in manufacturing, administration and even some white-collar work, but at the same time creating new jobs in IT, data, green energy and care services. Remote and hybrid working has become normal in many offices since the COVID-19 pandemic. The gig economy (short-term contracts via platforms like Uber, Bolt or Wolt) gives flexibility but less security. Demographic ageing – clearly visible in the Czech demographic pyramid – means fewer young people entering the labour market and a growing demand for healthcare and elderly-care workers. Lifelong learning and the ability to retrain are now essential career skills." }
    ],
    practice: [
      { question: "What does the term 'unemployment rate' mean?", answer: "The unemployment rate is the percentage of the labour force – people who are working or actively looking for work – that does not currently have a job. It is one of the most important indicators of how well an economy is doing. In the Czech Republic the Labour Office publishes the registered rate every month, and Eurostat publishes a comparable rate for all EU countries." },
      { question: "What is the current unemployment rate in the Czech Republic and how does it compare with the rest of the EU?", answer: "At the end of 2025 the Czech unemployment rate was 4.8 %, which is still one of the lowest in the European Union. Countries like Germany, Poland and the Netherlands have similar rates, while Spain (around 11 %) and Greece (around 10 %) have much higher rates. So the Czech Republic is a relatively healthy labour market by European standards, although it has cooled slightly compared with previous years." },
      { question: "Which Czech regions have the highest unemployment and why?", answer: "The highest rates are in the Ústí nad Labem Region (7.1 %), the Moravian-Silesian Region (6.6 %) and the South Moravian Region (5.4 %). At district level Most (9.9 %) and Karviná (9.6 %) are the worst – in Karviná there can be over 21 applicants per vacancy. The reason is structural: these regions used to depend on coal mining, steel and heavy industry, and as those industries declined many people lost their jobs and their skills no longer matched the new economy." },
      { question: "What are the main causes of unemployment?", answer: "Unemployment has many causes. Cyclical unemployment is caused by economic recessions when companies cut staff. Structural unemployment happens when industries close down or skills become outdated, often because of automation or outsourcing to cheaper countries. Frictional unemployment is short-term, when people are between jobs. Seasonal unemployment affects sectors like tourism, agriculture and construction. On a personal level, age, low qualifications, health problems and discrimination also play a role." },
      { question: "What are the social and psychological effects of long-term unemployment?", answer: "Long-term unemployment can be very damaging. Financially, families lose their income and may fall into debt or even lose their housing. Socially, people lose daily routines and contact with colleagues, which can lead to isolation. Psychologically, it often causes low self-esteem, anxiety and depression, and the longer it lasts the harder it becomes to find a new job. There is also a risk of growing inequality, crime and substance abuse in regions with high unemployment." },
      { question: "What support does an unemployed person get from the Czech Labour Office?", answer: "If you register as a job seeker at the Úřad práce, the office helps you look for work, offers free retraining courses, advises on writing CVs and motivation letters, and pays your health insurance. The period also counts towards your pension. If you have worked and paid social insurance for at least 12 months in the past two years, you are entitled to unemployment benefits." },
      { question: "How are unemployment benefits calculated in the Czech Republic?", answer: "The benefit is a percentage of your previous net wage: 65 % for the first two months, 50 % for the next two months and 45 % for the rest. How long you receive it depends on your age – 5 months for people under 50, 8 months for 50–55 year-olds and 11 months for those over 55. There is also a state-set maximum. People who left their last job voluntarily without serious reason receive a lower percentage." },
      { question: "What documents do you need when applying for a job?", answer: "The two essential documents are a CV (curriculum vitae) summarising your education, work experience, skills and languages, and a motivation or cover letter explaining why you want this particular job and what you can offer. You may also need copies of diplomas and certificates, references from previous employers and proof of language certificates. Many companies expect everything to be sent online via their career portal." },
      { question: "How do you prepare for a job interview?", answer: "First, research the company – its products, values and recent news. Re-read the job advert and think how your skills match. Prepare answers to common questions such as 'Tell me about yourself', 'Why do you want this job?' or 'What are your strengths and weaknesses?'. Prepare some intelligent questions of your own. Dress smartly, plan your journey so you arrive 5–10 minutes early, bring printed copies of your CV and switch off your phone. During the interview, listen carefully, give clear examples and stay polite." },
      { question: "What is youth unemployment and why is it a problem in some EU countries?", answer: "Youth unemployment is the unemployment rate of people aged 15–24. It is much higher than the general rate, especially in southern European countries like Spain, Greece and Italy where it can be over 25 %. The reasons include weak economies, a lack of work experience, a mismatch between school education and what employers need, and rigid labour laws that make it expensive to hire young people. The EU funds programmes such as the Youth Guarantee, which promises every young person a job, traineeship or further education within four months of leaving school." },
      { question: "How is automation changing the job market?", answer: "Automation and artificial intelligence are replacing many routine jobs – on production lines, in warehouses, in administration and even in some areas of accounting and customer service. At the same time, they create new jobs in IT, data analysis, robotics, renewable energy and care services. The challenge is that the people losing their jobs often do not have the skills needed for the new ones, which is why retraining and lifelong learning are so important." },
      { question: "What is the gig economy and what are its advantages and disadvantages?", answer: "The gig economy is a labour market based on short-term contracts and freelance work, often arranged through online platforms such as Uber, Bolt, Wolt or Upwork. The advantages are flexibility – workers choose when and how much they work – and a low barrier to entry. The disadvantages are unstable income, no paid holiday or sick leave, no employer-paid pension and weak legal protection. In several European countries there is a debate about whether gig workers should be classified as employees." },
      { question: "How does the ageing population affect the Czech labour market?", answer: "The Czech demographic pyramid shows a relatively narrow base – fewer children are being born – and large groups of people now in their 40s and 50s who will retire over the next 20 years. This means the labour force will shrink, which can lead to labour shortages, especially in healthcare, social care and skilled trades. The state will also have to support more pensioners with fewer working taxpayers, which is why the retirement age is gradually rising." },
      { question: "What can the government do to reduce unemployment?", answer: "Governments can support employment in many ways: by investing in education and retraining so people have the right skills; by offering tax incentives or wage subsidies to companies that hire disadvantaged groups; by improving infrastructure and supporting investment in problem regions like Ústí or Karviná; by supporting small businesses and start-ups; by helping young people through schemes like the Youth Guarantee; and by making it easier to combine work with childcare so more parents can stay in the labour market." },
      { question: "Have you or someone you know ever been unemployed? What was it like?", answer: "(Personal answer.) For example: A relative of mine lost their job when their factory closed. They felt stressed and lost confidence at first, but they registered at the Labour Office, took a free retraining course in IT and found a new job in a logistics company within six months. It taught me how important it is to keep learning new skills throughout your career." }
    ],
    part2: {
      task1: {
        promptPoints: ["Type of data", "Place / Region", "Numbers and trends", "Causes", "Consequences", "Other"],
        images: [
          { label: "Picture A", src: unemploymentPart2a, description: "Map showing unemployment at the municipal level in Czechia (Charles University Research Centre, UNCE)" },
          { label: "Picture B", src: unemploymentPart2b, description: "Demographic pyramid of the Czech Republic showing the age and gender structure of the population" }
        ],
        followUpQuestions: ["What kind of data does the picture show?", "Which Czech regions or age groups stand out and why?", "What does this tell us about the labour market?", "What conclusions could the government draw from this picture?"]
      },
      task2: {
        promptPoints: ["Type of data", "Place / Region", "Numbers and trends", "Causes", "Consequences", "Other"],
        comparisonQuestions: ["Which picture is more useful for understanding the current state of the Czech labour market?", "How are regional unemployment differences and the demographic pyramid connected?", "Which trend – regional disparities or population ageing – do you think will have a bigger impact on unemployment in the next 20 years?"]
      },
      task3: {
        question: "How serious is unemployment in the Czech Republic compared with the rest of Europe, and what should the government and individuals do about it?"
      }
    },
    exam: {
      taskDescription: "Give a short presentation about unemployment in the Czech Republic and Europe. Use pictures 3A–3F to illustrate the main aspects of the topic and answer the examiner's follow-up questions.",
      promptPoints: [
        "Causes of unemployment",
        "The Czech labour market and regional differences",
        "Job hunting and the role of the Labour Office",
        "Unemployment benefits and social support",
        "Effects on individuals and society",
        "The future of work"
      ],
      images: [
        { label: "3A", src: unemployment3a, description: "Czech Labour Office (Úřad práce) – registering as a job seeker" },
        { label: "3B", src: unemployment3b, description: "Job interview – handing over a CV" },
        { label: "3C", src: unemployment3c, description: "A closed-down factory – structural unemployment" },
        { label: "3D", src: unemployment3d, description: "Adult retraining and lifelong learning" },
        { label: "3E", src: unemployment3e, description: "Searching for jobs online from home" },
        { label: "3F", src: unemployment3f, description: "Automation and robots replacing manual jobs" }
      ],
      followUpQuestions: [
        "What are the main causes of unemployment today?",
        "What is the current unemployment rate in the Czech Republic?",
        "Which Czech regions have the highest unemployment and why?",
        "How does the Czech Republic compare with other EU countries?",
        "What support does the Labour Office provide to job seekers?",
        "How are unemployment benefits calculated and how long can you receive them?",
        "What documents do you need when looking for a new job?",
        "How would you prepare for a job interview?",
        "How is automation changing the labour market?",
        "Why is youth unemployment a particular problem in some EU countries?",
        "How does an ageing population affect unemployment and the labour market?",
        "What can governments and individuals do to reduce unemployment in the future?"
      ]
    }
  },
  {
    id: "ernest-hemingway",
    title: "Ernest Hemingway",
    description: "Life and lifestyle, major works, awards, main themes, writing style, and The Old Man and the Sea",
    available: true,
    thumbnail: hemingwayThumbnail,
    learn: [
      {
        title: "Life and Lifestyle",
        content: "Ernest Hemingway (1899–1961) was born in Oak Park, Illinois, USA. He started his career as a journalist for the Kansas City Star. During World War I, he served as an ambulance driver in Italy, where he was seriously wounded. After the war, he lived in Paris as part of the 'Lost Generation' – a group of American writers disillusioned by the war. Hemingway was known for his adventurous lifestyle: he was passionate about big-game hunting in Africa, deep-sea fishing in the Caribbean, and bullfighting in Spain. He lived in Key West, Florida, and later in Cuba for over 20 years. His personal life was turbulent – he married four times. He won the Nobel Prize in Literature in 1954."
      },
      {
        title: "Major Works",
        content: "Hemingway's most famous works include: 'The Sun Also Rises' (1926) – about American and British expatriates travelling from Paris to Pamplona for the running of the bulls; 'A Farewell to Arms' (1929) – a semi-autobiographical novel about an American soldier and a British nurse during WWI; 'For Whom the Bell Tolls' (1940) – set during the Spanish Civil War, about an American volunteer fighting with guerrillas; 'The Old Man and the Sea' (1952) – a novella about an old Cuban fisherman's epic battle with a giant marlin; and many acclaimed short stories including 'The Snows of Kilimanjaro' and 'Hills Like White Elephants'."
      },
      {
        title: "Awards and Recognition",
        content: "Hemingway received several major literary awards during his career. He won the Pulitzer Prize for Fiction in 1953 for 'The Old Man and the Sea'. In 1954, he was awarded the Nobel Prize in Literature 'for his mastery of the art of narrative, most recently demonstrated in The Old Man and the Sea, and for the influence that he has exerted on contemporary style.' He was unable to attend the Nobel ceremony in Stockholm due to injuries from two successive plane crashes in Africa. His work has had an enormous influence on 20th-century fiction and he is considered one of the greatest American writers."
      },
      {
        title: "Main Themes",
        content: "Hemingway's writing explores several recurring themes: war and its effects on individuals – many of his characters are soldiers or war veterans dealing with physical and psychological wounds; courage and grace under pressure – his heroes face danger and suffering with dignity; masculinity and adventure – hunting, fishing, bullfighting, and combat feature prominently; love and loss – his romantic relationships are often doomed by circumstances; death and mortality – characters frequently confront their own mortality; and the concept of the 'Hemingway hero' or 'code hero' – a man who lives correctly, following certain ideals of honour, courage, and endurance in a world that is essentially chaotic and meaningless."
      },
      {
        title: "Writing Style",
        content: "Hemingway is famous for his distinctive writing style, often called the 'Iceberg Theory' or 'Theory of Omission'. He used short, simple sentences and plain language, avoiding unnecessary adjectives and adverbs. His dialogue is natural and realistic. He believed that the deeper meaning of a story should not be visible on the surface – like an iceberg, only the tip is visible while the real substance lies beneath. His plain writing style became so famous that it was frequently parodied. He learned his economical use of language from his early career as a journalist. This minimalist approach was revolutionary and influenced countless writers after him."
      },
      {
        title: "The Lost Generation",
        content: "The term 'The Lost Generation' refers to a group of American writers who came of age during World War I. The war left them feeling disillusioned with traditional values and the idea of progress. Key members included Hemingway, F. Scott Fitzgerald, and Gertrude Stein (who actually coined the term). These writers often lived as expatriates in Paris during the 1920s. Their works reflect themes of disillusionment, aimlessness, and a search for meaning in the post-war world. Hemingway's 'The Sun Also Rises' is considered the quintessential Lost Generation novel."
      },
      {
        title: "The Old Man and the Sea – Plot Summary",
        content: "The Old Man and the Sea (1952) tells the story of Santiago, an ageing Cuban fisherman who has gone 84 days without catching a fish. His young apprentice Manolin is forced by his parents to fish with a more successful boat, but the boy still cares for Santiago. On the 85th day, Santiago sails far out into the Gulf Stream and hooks a giant marlin. For two days and nights, the old man battles the enormous fish, which pulls his small skiff further out to sea. Santiago admires the fish's strength and nobility. Finally, he manages to kill the marlin with his harpoon and lashes it to the side of his boat. On the journey home, sharks attack and devour the marlin's flesh. Santiago fights them off but arrives back in harbour with only the fish's skeleton. Despite his loss, the other fishermen marvel at the skeleton's size, and Manolin pledges to fish with Santiago again."
      },
      {
        title: "The Old Man and the Sea – Themes and Symbols",
        content: "The novella explores themes of perseverance, human dignity in defeat, and the relationship between man and nature. Santiago represents the 'code hero' – he endures suffering with grace and never gives up. The marlin symbolises a worthy opponent and the ultimate challenge. The sharks represent the destructive forces that can take away a person's achievements. The skeleton at the end shows that even in defeat, there is evidence of greatness. The famous line 'A man can be destroyed but not defeated' captures the central message. The relationship between Santiago and Manolin represents the passing of knowledge between generations."
      },
      {
        title: "Excerpt from The Old Man and the Sea",
        content: "\"He is two feet longer than the boat,\" the old man said. The line was going out fast but steadily and the fish was not panicked. The old man was trying with both hands to keep the line just inside the breaking strength. He knew that if he could not slow the fish with a steady pressure the fish could take out all the line and break it. He is a great fish and I must convince him, he thought. I must never let him learn his strength nor what he could do if he made his run. If I were him, I would put in everything and go until something broke. But, thank God, they are not as intelligent as we who kill them, although they are more noble and able."
      },
      {
        title: "Hemingway's Connection to Cuba",
        content: "Hemingway lived in Cuba for over 20 years, from 1939 to 1960, at his estate called Finca Vigía ('Lookout Farm') near Havana. Cuba had a profound influence on his writing – The Old Man and the Sea is set in Cojímar, a small fishing village east of Havana where Hemingway kept his fishing boat, the Pilar. He was a regular at the famous bars El Floridita and La Bodeguita del Medio in Havana. The Cuban people embraced him, and his home is now a museum. His deep-sea fishing experiences off the Cuban coast directly inspired the story of Santiago."
      }
    ],
    practice: [
      {
        question: "What was Hemingway's original occupation before becoming a novelist?",
        answer: "Hemingway started out as a journalist. He worked for the Kansas City Star newspaper, where he learned to write in short, direct sentences – a style that would later define his fiction. He also worked as a war correspondent during WWI and the Spanish Civil War."
      },
      {
        question: "What historical events did Hemingway describe in his books?",
        answer: "Hemingway drew heavily on historical events he personally experienced. 'A Farewell to Arms' is based on his experiences as an ambulance driver in World War I in Italy. 'For Whom the Bell Tolls' is set during the Spanish Civil War. 'The Sun Also Rises' reflects the post-WWI disillusionment of the Lost Generation in 1920s Paris and Spain."
      },
      {
        question: "How would you describe Hemingway's writing style?",
        answer: "Hemingway's style is characterised by short, simple sentences and plain, economical language. He used the 'Iceberg Theory' – showing only the surface of the story while the deeper meaning lies beneath. He avoided unnecessary adjectives and adverbs, preferring strong nouns and verbs. His dialogue is natural and realistic. His plain style was so distinctive that it was frequently parodied."
      },
      {
        question: "What major awards did Hemingway win for his writing?",
        answer: "Hemingway won the Pulitzer Prize for Fiction in 1953 for 'The Old Man and the Sea'. He was awarded the Nobel Prize in Literature in 1954 for his mastery of narrative art and his influence on contemporary style. He could not attend the Nobel ceremony due to injuries from plane crashes in Africa."
      },
      {
        question: "What is the name of the novella featured in the excerpt? Who are the main characters?",
        answer: "The novella is 'The Old Man and the Sea'. The main characters are Santiago, an old Cuban fisherman, and Manolin, his young apprentice. The giant marlin could also be considered a character – Santiago speaks to it and respects it as a worthy opponent."
      },
      {
        question: "What is the old man doing in the excerpt and why?",
        answer: "In the excerpt, Santiago is trying to control the fishing line with both hands to keep it 'just inside the breaking strength'. He has hooked a giant marlin and is trying to slow the fish down with steady pressure. If he cannot slow it, the fish will take out all the line and break free."
      },
      {
        question: "How does the old man communicate with the fish?",
        answer: "Santiago communicates with the fish through his thoughts and by speaking aloud to it. He thinks about the fish's greatness and what he must do to 'convince' it. He admires the fish, calling it 'great' and 'noble and able'. He talks to the fish as though it were a worthy rival, showing respect and even affection."
      },
      {
        question: "How does the story of The Old Man and the Sea end?",
        answer: "After finally killing the marlin with his harpoon and lashing it to his boat, Santiago begins the journey home. Sharks smell the blood and attack the dead marlin. Santiago fights them off with his harpoon, a knife, and even a club, but they devour all the flesh. He arrives back in harbour exhausted, with only the marlin's enormous skeleton. Despite losing the fish, the other fishermen are amazed by the skeleton's size, and Manolin pledges to fish with Santiago again."
      },
      {
        question: "What is the main theme or message of The Old Man and the Sea?",
        answer: "The main theme is perseverance and human dignity in the face of defeat. Santiago's famous words 'A man can be destroyed but not defeated' capture the central message. Even though the sharks destroy his catch, Santiago's courage, endurance, and skill are not diminished. The novella shows that true victory lies not in the outcome but in the struggle itself."
      },
      {
        question: "How would you characterise Santiago?",
        answer: "Santiago is the perfect example of Hemingway's 'code hero'. He is old, poor, and unlucky – 84 days without a fish – but he never loses his dignity or determination. He is humble yet proud, physically weakened by age but mentally strong. He respects nature and his opponents. He endures pain and exhaustion without complaint. He represents the human spirit that refuses to give in."
      },
      {
        question: "What is the relationship between Santiago and Manolin?",
        answer: "Santiago and Manolin have a deep, loving relationship like that of a grandfather and grandson, or a master and apprentice. Manolin learned to fish from Santiago and still cares for him deeply – bringing him food and bait, despite being forced by his parents to fish on another boat. Their bond represents the passing of knowledge and values between generations. At the end, Manolin's decision to fish with Santiago again shows loyalty and love."
      },
      {
        question: "What does the photo of Hemingway say about him?",
        answer: "The photo shows a man of adventure and action – with his characteristic beard, rugged appearance, and outdoor clothing. It reflects Hemingway's lifestyle: he was not just a writer but a man who lived intensely, participating in big-game hunting, deep-sea fishing, bullfighting, and war. His appearance matches the tough, masculine characters he created in his fiction."
      }
    ],
    exam: {
      taskDescription: "Give a short presentation about Ernest Hemingway. Use pictures 3A–3F to illustrate your speech. In the second part, read the excerpt from The Old Man and the Sea and answer questions about the novella.",
      promptPoints: [
        "Life and lifestyle",
        "Major works",
        "Awards",
        "Main themes",
        "Writing style",
        "Other"
      ],
      images: [
        { label: "3A", src: hemingway3a, description: "Hemingway – life and lifestyle of an adventurer-writer" },
        { label: "3B", src: hemingway3b, description: "Hemingway's major works – novels and short stories" },
        { label: "3C", src: hemingway3c, description: "Cuba – the setting of The Old Man and the Sea" },
        { label: "3D", src: hemingway3d, description: "Santiago – the old fisherman alone at sea" },
        { label: "3E", src: hemingway3e, description: "The marlin – Santiago's great opponent" },
        { label: "3F", src: hemingway3f, description: "Sharks and the fish's skeleton – the price of the struggle" }
      ],
      followUpQuestions: [
        "What was Hemingway's original occupation?",
        "What historical events did Hemingway describe in his books?",
        "How would you describe his writing style?",
        "What is your opinion of Ernest Hemingway's books?",
        "What have you read by Ernest Hemingway?",
        "What does the photo say about Ernest Hemingway?",
        "What major awards did Hemingway win for his writing?",
        "What is the main theme or message of The Old Man and the Sea?",
        "How would you characterise Santiago?",
        "What is the relationship between Santiago and Manolin, Santiago's apprentice?",
        "How does the story end?",
        "What does 'A man can be destroyed but not defeated' mean to you?",
        "Why do you think Hemingway chose an old fisherman as his hero?"
      ]
    }
  },
  
  { id: "social-issues", title: "Social Issues", description: "Drug abuse, terrorism, crime, bullying, homelessness", available: false, part2: { task1: { followUpQuestions: ["What social issue can you see?", "How does this affect people?"] }, task2: { comparisonQuestions: ["Which picture shows a more serious problem?"] }, task3: { question: "What social problem concerns you the most?" } } },
  { id: "holidays-traditions", title: "Holidays, Traditions, Feast Days", description: "Christmas, Easter, Thanksgiving, national holidays", available: false, part2: { task1: { followUpQuestions: ["What holiday or tradition is shown?", "What are the people celebrating?"] }, task2: { comparisonQuestions: ["How are the celebrations different?"] }, task3: { question: "Which holiday is most important to you and why?" } } },
  { id: "transport-travelling", title: "Transport, Travelling", description: "Means of transport, tourist destinations, immigration", available: false, part2: { task1: { followUpQuestions: ["What type of transport can you see?", "Where might these people be travelling?"] }, task2: { comparisonQuestions: ["Which means of transport is more practical?"] }, task3: { question: "What will transport look like in the future?" } } },
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
  { id: "american-lit-early", title: "American Literature – up to 1900", description: "Poe, Twain, Whitman, London", available: false, part2: { task1: { followUpQuestions: ["What aspect of American life is shown?", "What time period does this suggest?"] }, task2: { comparisonQuestions: ["How are these two scenes from American history different?"] }, task3: { question: "How does literature reflect a country's history?" } } },
  { id: "american-lit-modern", title: "American Literature – 20th Century", description: "Hemingway, Fitzgerald, Steinbeck, Kerouac", available: false, part2: { task1: { followUpQuestions: ["What 20th-century American theme is shown?", "What is the mood of this picture?"] }, task2: { comparisonQuestions: ["How do these two images reflect different aspects of American culture?"] }, task3: { question: "Which American novel would you recommend?" } } },
  { id: "usa-geography", title: "The USA, Geography, Political System", description: "Geography, cities, national parks, presidential system", available: false, part2: { task1: { followUpQuestions: ["What American landscape or city is shown?", "What makes this place interesting?"] }, task2: { comparisonQuestions: ["How are these two American locations different?"] }, task3: { question: "What interests you most about the USA?" } } },
  { id: "british-history-early", title: "History of Great Britain – up to 1800", description: "Celts, Romans, Magna Charta, Shakespeare era", available: false, part2: { task1: { followUpQuestions: ["What historical period is shown?", "What can you see in the picture?"] }, task2: { comparisonQuestions: ["How are these two historical periods different?"] }, task3: { question: "Which period of British history fascinates you most?" } } },
  { id: "british-history-modern", title: "History of Great Britain – 19th & 20th Century", description: "Industrial Revolution, Victorian era, World Wars", available: false, part2: { task1: { followUpQuestions: ["What historical event or period is shown?", "What impact did this have?"] }, task2: { comparisonQuestions: ["How did Britain change between these two periods?"] }, task3: { question: "How did the World Wars change Britain?" } } },
  { id: "us-history-early", title: "History of the USA – up to 1900", description: "Columbus, Pilgrim Fathers, Independence, Civil War", available: false, part2: { task1: { followUpQuestions: ["What period of American history is shown?", "What is happening in this scene?"] }, task2: { comparisonQuestions: ["How are these two events in American history different?"] }, task3: { question: "What was the most important event in early American history?" } } },
  { id: "us-history-modern", title: "History of the USA – 20th Century", description: "World Wars, Cold War, Civil Rights, modern presidents", available: false, part2: { task1: { followUpQuestions: ["What 20th-century event is shown?", "Why was this significant?"] }, task2: { comparisonQuestions: ["How did America change between these two events?"] }, task3: { question: "How has the USA changed in the last 50 years?" } } }
];
