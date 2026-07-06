// Curated FCE (B2) vocabulary, grouped by topic with learner-friendly definitions.
// Drawn from the Cambridge English Vocabulary Profile B2 word list.

export type Topic =
  | "People & Feelings"
  | "Actions & Change"
  | "Society & Law"
  | "Work & Study"
  | "Money & Business"
  | "Media & Technology"
  | "Nature & Environment"
  | "Health & Body"
  | "Travel & Places"
  | "Ideas & Opinions"
  | "Communication"
  | "Everyday Life";

export interface Word {
  id: string;
  word: string;
  pos: string;
  definition: string;
  example?: string;
  topics: Topic[];
}

const W = (word: string, pos: string, definition: string, topics: Topic[], example?: string): Word => ({
  id: word.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  word,
  pos,
  definition,
  example,
  topics,
});

export const WORDS: Word[] = [
  // People & Feelings
  W("ambition", "n", "a strong wish to be successful or powerful", ["People & Feelings"], "My sister always had more ambition than I did."),
  W("ambitious", "adj", "having a strong wish to be successful", ["People & Feelings"], "She is an ambitious young lawyer."),
  W("anxious", "adj", "worried and nervous", ["People & Feelings", "Health & Body"], "She's very anxious about her exams."),
  W("affection", "n", "a feeling of liking or love", ["People & Feelings"], "He shows great affection for his grandchildren."),
  W("admire", "v", "to respect or approve of someone or something", ["People & Feelings"], "I really admire her honesty."),
  W("admiration", "n", "a feeling of great respect", ["People & Feelings"], "She looked at him with admiration."),
  W("amused", "adj", "showing that you think something is funny", ["People & Feelings"], "He was amused by the joke."),
  W("annoyed", "adj", "slightly angry", ["People & Feelings"], "I was annoyed at how late he was."),
  W("appreciate", "v", "to recognise the value of something or someone", ["People & Feelings"], "I really appreciate your help."),
  W("attitude", "n", "how you think or feel about something", ["People & Feelings", "Ideas & Opinions"], "She has a very positive attitude to work."),
  W("brave", "adj", "showing no fear of dangerous or difficult things", ["People & Feelings"], "It was a brave decision to leave her job."),
  W("cautious", "adj", "trying hard to avoid problems or danger", ["People & Feelings"], "Be cautious about giving out personal details."),
  W("cheerful", "adj", "happy and positive", ["People & Feelings"], "She's always cheerful in the morning."),
  W("confident", "adj", "sure about your ability or a fact", ["People & Feelings"], "He's confident that he'll pass."),
  W("curious", "adj", "wanting to know or learn about something", ["People & Feelings"], "I was curious about her past."),
  W("delighted", "adj", "very pleased", ["People & Feelings"], "We're delighted with the results."),
  W("enthusiastic", "adj", "showing a lot of interest and excitement", ["People & Feelings"], "The children were enthusiastic about the trip."),
  W("generous", "adj", "willing to give money, help or time", ["People & Feelings"], "He is generous with his time."),
  W("grateful", "adj", "feeling or showing thanks", ["People & Feelings"], "I'm so grateful for your support."),
  W("impatient", "adj", "not willing to wait", ["People & Feelings"], "Don't be so impatient — the bus will be here soon."),
  W("loyal", "adj", "always supporting someone or something", ["People & Feelings"], "He is a loyal friend."),
  W("reliable", "adj", "that you can trust to do what is expected", ["People & Feelings", "Work & Study"], "She's a reliable employee."),
  W("selfish", "adj", "caring only about yourself", ["People & Feelings"], "It's selfish of him to take the biggest room."),
  W("sensitive", "adj", "easily upset or affected by things", ["People & Feelings"], "He's very sensitive to criticism."),
  W("sympathetic", "adj", "showing that you understand someone's problems", ["People & Feelings"], "She was very sympathetic when I lost my job."),

  // Actions & Change
  W("abandon", "v", "to leave someone or something and not return", ["Actions & Change"], "They were forced to abandon the car."),
  W("achieve", "v", "to succeed in doing something after effort", ["Actions & Change", "Work & Study"], "She achieved her goal of becoming a doctor."),
  W("acquire", "v", "to get something", ["Actions & Change"], "The company has acquired a new office."),
  W("adapt", "v", "to change so that you fit a new situation", ["Actions & Change"], "It took him a while to adapt to his new school."),
  W("adjust", "v", "to change something slightly to make it better", ["Actions & Change"], "You can adjust the height of the chair."),
  W("avoid", "v", "to stay away from someone or something", ["Actions & Change"], "Try to avoid sugary drinks."),
  W("cancel", "v", "to decide that something planned will not happen", ["Actions & Change"], "The meeting was cancelled at the last minute."),
  W("consider", "v", "to think carefully about something", ["Actions & Change", "Ideas & Opinions"], "I'm considering moving to Spain."),
  W("continue", "v", "to keep happening or doing", ["Actions & Change"], "The rain continued all afternoon."),
  W("create", "v", "to make something new", ["Actions & Change"], "The chef creates new dishes every week."),
  W("delay", "v", "to make something happen at a later time", ["Actions & Change"], "The flight was delayed by two hours."),
  W("develop", "v", "to grow or change into a better form", ["Actions & Change"], "He's developing his language skills."),
  W("encourage", "v", "to give someone confidence to do something", ["Actions & Change"], "My parents encouraged me to study art."),
  W("establish", "v", "to start a company, organisation or system", ["Actions & Change", "Money & Business"], "The school was established in 1875."),
  W("expand", "v", "to become larger", ["Actions & Change"], "The business is expanding quickly."),
  W("improve", "v", "to make or become better", ["Actions & Change"], "I want to improve my English."),
  W("increase", "v", "to become or make bigger in number", ["Actions & Change"], "Prices have increased sharply."),
  W("introduce", "v", "to put something into use for the first time", ["Actions & Change"], "The government introduced a new law."),
  W("involve", "v", "to include someone or something as part of it", ["Actions & Change"], "The job involves a lot of travel."),
  W("prevent", "v", "to stop something from happening", ["Actions & Change"], "Exercise can help prevent illness."),
  W("reduce", "v", "to make smaller in size or amount", ["Actions & Change"], "The shop has reduced its prices."),
  W("replace", "v", "to put something new in place of something old", ["Actions & Change"], "We need to replace the printer."),
  W("suggest", "v", "to offer an idea for someone to consider", ["Actions & Change", "Communication"], "I suggest that we leave early."),

  // Society & Law
  W("abolish", "v", "to officially end a law or system", ["Society & Law"], "Slavery was abolished in the 19th century."),
  W("abuse", "n", "cruel or violent treatment of someone", ["Society & Law"], "The report describes the abuse of children."),
  W("accuse", "v", "to say someone has done something wrong", ["Society & Law"], "She accused him of lying."),
  W("arrest", "v", "if the police arrest someone, they take them away", ["Society & Law"], "He was arrested for shoplifting."),
  W("charity", "n", "an organisation that helps people in need", ["Society & Law"], "She works for a children's charity."),
  W("citizen", "n", "someone who legally belongs to a country", ["Society & Law"], "He became a British citizen last year."),
  W("crime", "n", "an illegal activity", ["Society & Law"], "Crime rates have fallen in the city."),
  W("criminal", "n", "someone who has committed a crime", ["Society & Law"], "The criminal was sent to prison."),
  W("democracy", "n", "a system where people vote for their leaders", ["Society & Law"], "The country returned to democracy."),
  W("election", "n", "a time when people vote for a leader", ["Society & Law"], "The election takes place in May."),
  W("evidence", "n", "facts or signs that show something is true", ["Society & Law"], "There is no evidence that he committed the crime."),
  W("guilty", "adj", "having done something wrong or illegal", ["Society & Law"], "He was found guilty of murder."),
  W("innocent", "adj", "not guilty of a crime", ["Society & Law"], "She insists she is innocent."),
  W("judge", "n", "the person in charge of a trial in court", ["Society & Law"], "The judge sentenced him to five years."),
  W("jury", "n", "a group of people who decide if someone is guilty", ["Society & Law"], "The jury reached a verdict."),
  W("law", "n", "an official rule of a country", ["Society & Law"], "It is against the law to drive without insurance."),
  W("legal", "adj", "allowed by the law", ["Society & Law"], "Is it legal to park here?"),
  W("permission", "n", "the right to do something", ["Society & Law"], "You need permission to use the pool."),
  W("prison", "n", "a place where criminals are kept", ["Society & Law"], "He spent two years in prison."),
  W("protest", "n", "a strong complaint or disagreement in public", ["Society & Law"], "There were protests against the new tax."),
  W("society", "n", "a large group of people who live together", ["Society & Law"], "We live in a modern society."),
  W("victim", "n", "someone who has been hurt or affected by something bad", ["Society & Law"], "The victims of the flood need help."),

  // Work & Study
  W("achievement", "n", "something good that you have done", ["Work & Study"], "Winning the prize was a great achievement."),
  W("analyse", "v", "to study something carefully to understand it", ["Work & Study"], "Scientists analysed the water samples."),
  W("analyst", "n", "someone whose job is to study something carefully", ["Work & Study", "Money & Business"], "A financial analyst predicted the fall."),
  W("apply", "v", "to formally ask for a job or place", ["Work & Study"], "She applied for a scholarship."),
  W("assignment", "n", "a piece of work given to a student", ["Work & Study"], "The assignment is due on Friday."),
  W("candidate", "n", "someone who is being considered for a job", ["Work & Study"], "We interviewed six candidates."),
  W("colleague", "n", "someone you work with", ["Work & Study"], "My colleagues threw a party for me."),
  W("commute", "v", "to travel regularly to and from work", ["Work & Study", "Travel & Places"], "I commute to London every day."),
  W("deadline", "n", "a time by which something must be done", ["Work & Study"], "I'm working to a tight deadline."),
  W("degree", "n", "a course of study at university", ["Work & Study"], "She has a degree in history."),
  W("employ", "v", "to pay someone to work for you", ["Work & Study", "Money & Business"], "The company employs 500 people."),
  W("employee", "n", "someone paid to work for a company", ["Work & Study"], "The employees receive a bonus."),
  W("employer", "n", "a person or company that pays people to work", ["Work & Study"], "My employer is very supportive."),
  W("graduate", "v", "to finish your studies at a university", ["Work & Study"], "She graduated from Oxford in 2018."),
  W("interview", "n", "a formal meeting to decide who gets a job", ["Work & Study"], "I've got a job interview tomorrow."),
  W("motivated", "adj", "very keen to do something well", ["Work & Study"], "She's a highly motivated student."),
  W("promote", "v", "to give someone a more important job", ["Work & Study"], "She was promoted to manager."),
  W("qualification", "n", "an exam you have passed or course you have completed", ["Work & Study"], "You need the right qualifications for this job."),
  W("resign", "v", "to formally leave a job", ["Work & Study"], "He resigned last week."),
  W("retire", "v", "to leave your job because you are old enough to stop", ["Work & Study"], "My father retired at 65."),
  W("salary", "n", "a fixed amount of money paid for work", ["Work & Study", "Money & Business"], "She earns a good salary."),
  W("skill", "n", "an ability to do an activity well", ["Work & Study"], "Cooking is a useful skill."),

  // Money & Business
  W("account", "n", "an arrangement with a bank to keep money", ["Money & Business"], "I opened a savings account."),
  W("advertise", "v", "to tell the public about a product", ["Money & Business", "Media & Technology"], "The company advertises on TV."),
  W("advertisement", "n", "a public notice offering something", ["Money & Business", "Media & Technology"], "I saw an advertisement for the job."),
  W("afford", "v", "to have enough money to buy something", ["Money & Business"], "We can't afford a new car."),
  W("bargain", "n", "something bought for less than its usual price", ["Money & Business"], "This coat was a real bargain."),
  W("brand", "n", "a product made by a particular company", ["Money & Business"], "It's a well-known brand of coffee."),
  W("budget", "n", "a plan of how to spend money", ["Money & Business"], "We're on a tight budget this month."),
  W("client", "n", "someone who pays for services", ["Money & Business", "Work & Study"], "She has a meeting with a new client."),
  W("consumer", "n", "a person who buys goods or services", ["Money & Business"], "Consumers are demanding better quality."),
  W("currency", "n", "the money used in a country", ["Money & Business"], "The euro is the currency of many EU countries."),
  W("debt", "n", "money that you owe to someone", ["Money & Business"], "The company is in debt."),
  W("discount", "n", "a reduction in the usual price", ["Money & Business"], "Students get a 10% discount."),
  W("economy", "n", "the system of trade and industry of a country", ["Money & Business"], "The economy is growing slowly."),
  W("expense", "n", "the money that you spend on something", ["Money & Business"], "Living in the city is a big expense."),
  W("expensive", "adj", "costing a lot of money", ["Money & Business"], "That restaurant is too expensive."),
  W("income", "n", "money that a person or company earns", ["Money & Business"], "Their household income has dropped."),
  W("invest", "v", "to put money into a business or project", ["Money & Business"], "He invested his savings in shares."),
  W("invoice", "n", "a list showing how much you must pay", ["Money & Business"], "I'll send you an invoice at the end of the month."),
  W("loan", "n", "money that is borrowed and must be paid back", ["Money & Business"], "She took out a loan to buy a car."),
  W("profit", "n", "money made when you sell something for more than it cost", ["Money & Business"], "The shop made a big profit last year."),
  W("purchase", "v", "to buy something", ["Money & Business"], "You can purchase tickets online."),
  W("refund", "n", "money that is returned to you", ["Money & Business"], "I asked for a refund on the faulty phone."),

  // Media & Technology
  W("access", "v", "to find or see information using a computer", ["Media & Technology"], "You can access your emails from any computer."),
  W("app", "n", "a program you download to a phone", ["Media & Technology"], "There's an app for booking taxis."),
  W("audience", "n", "the people who watch or listen to something", ["Media & Technology"], "The audience clapped loudly."),
  W("broadcast", "v", "to send out a programme on TV or radio", ["Media & Technology"], "The match will be broadcast live."),
  W("channel", "n", "a TV or radio station", ["Media & Technology"], "There are hundreds of channels now."),
  W("connect", "v", "to join two things together", ["Media & Technology"], "The printer isn't connected to the laptop."),
  W("data", "n", "information used or stored by a computer", ["Media & Technology"], "The company collects personal data."),
  W("device", "n", "a piece of equipment for a particular purpose", ["Media & Technology"], "It's a small device for measuring temperature."),
  W("download", "v", "to copy files onto a computer from the internet", ["Media & Technology"], "You can download the app for free."),
  W("edit", "v", "to change a text or film so that it is ready to use", ["Media & Technology"], "She edited the video on her laptop."),
  W("headline", "n", "the title of a newspaper story", ["Media & Technology"], "The story made headlines around the world."),
  W("install", "v", "to put software onto a computer", ["Media & Technology"], "I need to install the new software."),
  W("journalist", "n", "someone who writes news reports", ["Media & Technology"], "She works as a journalist for The Times."),
  W("keyboard", "n", "the set of keys used to type", ["Media & Technology"], "My keyboard has stopped working."),
  W("network", "n", "a system of computers or people connected together", ["Media & Technology"], "The office has a wireless network."),
  W("password", "n", "a secret word that allows you to use a system", ["Media & Technology"], "I've forgotten my password."),
  W("post", "v", "to put a message or picture on a website", ["Media & Technology", "Communication"], "She posted photos of the trip online."),
  W("publish", "v", "to print and sell a book, magazine or newspaper", ["Media & Technology"], "The book was published last year."),
  W("screen", "n", "the flat part of a TV or computer where you see the picture", ["Media & Technology"], "The screen is too bright."),
  W("share", "v", "to send content to other people online", ["Media & Technology", "Communication"], "She shared the article on Facebook."),
  W("software", "n", "the programs used by a computer", ["Media & Technology"], "The software needs updating."),
  W("upload", "v", "to move a file from a computer to the internet", ["Media & Technology"], "I'll upload the photos this evening."),

  // Nature & Environment
  W("climate", "n", "the usual weather conditions in an area", ["Nature & Environment"], "The country has a warm climate."),
  W("coast", "n", "the land along the edge of the sea", ["Nature & Environment", "Travel & Places"], "We spent a week on the coast."),
  W("damage", "n", "harm done to something", ["Nature & Environment"], "The storm caused a lot of damage."),
  W("desert", "n", "a large sandy area with little water", ["Nature & Environment"], "Camels live in the desert."),
  W("earthquake", "n", "a sudden shaking of the ground", ["Nature & Environment"], "The earthquake destroyed many buildings."),
  W("environment", "n", "the natural world around us", ["Nature & Environment"], "We must protect the environment."),
  W("flood", "n", "when a lot of water covers an area", ["Nature & Environment"], "The floods damaged many homes."),
  W("forest", "n", "a large area covered with trees", ["Nature & Environment"], "We walked through the forest."),
  W("fuel", "n", "a substance that is burned to give heat or power", ["Nature & Environment"], "Petrol is a type of fuel."),
  W("global", "adj", "affecting the whole world", ["Nature & Environment"], "Global warming is a serious problem."),
  W("hurricane", "n", "a violent storm with very strong winds", ["Nature & Environment"], "The hurricane destroyed houses."),
  W("landscape", "n", "the appearance of an area of land", ["Nature & Environment", "Travel & Places"], "The landscape is beautiful in autumn."),
  W("mountain", "n", "a very tall hill", ["Nature & Environment"], "We climbed the mountain."),
  W("ocean", "n", "one of the very large areas of sea", ["Nature & Environment"], "The Pacific is the biggest ocean."),
  W("pollution", "n", "damage to the air, water or land", ["Nature & Environment"], "Air pollution is a serious problem in the city."),
  W("recycle", "v", "to use paper or glass again to make new products", ["Nature & Environment"], "We recycle all our paper and bottles."),
  W("rescue", "v", "to save someone from a dangerous situation", ["Nature & Environment"], "The dog was rescued from the river."),
  W("species", "n", "a group of plants or animals of the same kind", ["Nature & Environment"], "This is a rare species of bird."),
  W("volcano", "n", "a mountain that sometimes explodes", ["Nature & Environment"], "The volcano erupted last year."),
  W("waste", "n", "unwanted material that is thrown away", ["Nature & Environment"], "The factory produces a lot of waste."),
  W("wildlife", "n", "animals and plants that live in nature", ["Nature & Environment"], "The park is home to a lot of wildlife."),

  // Health & Body
  W("ache", "n", "a continuous pain that is not strong", ["Health & Body"], "I've got a stomach ache."),
  W("allergic", "adj", "having an allergy to something", ["Health & Body"], "I'm allergic to nuts."),
  W("bandage", "n", "a long piece of soft cloth for covering a wound", ["Health & Body"], "The nurse put a bandage on his arm."),
  W("cure", "v", "to make an illness go away", ["Health & Body"], "The doctors cured him of cancer."),
  W("diet", "n", "the food a person or animal usually eats", ["Health & Body"], "A healthy diet is important."),
  W("disease", "n", "a serious illness", ["Health & Body"], "Heart disease runs in the family."),
  W("fitness", "n", "the condition of being physically strong", ["Health & Body"], "Swimming is good for your fitness."),
  W("injure", "v", "to hurt yourself or someone else", ["Health & Body"], "He injured his leg playing football."),
  W("injury", "n", "damage to your body from an accident", ["Health & Body"], "She has a knee injury."),
  W("mental", "adj", "relating to the mind", ["Health & Body"], "He suffers from mental health problems."),
  W("operation", "n", "when a doctor cuts your body to repair a part", ["Health & Body"], "She had an operation on her knee."),
  W("prescription", "n", "a piece of paper on which a doctor writes a medicine", ["Health & Body"], "I need to collect my prescription."),
  W("recover", "v", "to become fit again after being ill", ["Health & Body"], "It took him weeks to recover."),
  W("stress", "n", "worry about work or other things in your life", ["Health & Body"], "I've been under a lot of stress at work."),
  W("suffer", "v", "to experience pain or something unpleasant", ["Health & Body"], "She suffers from headaches."),
  W("surgery", "n", "medical treatment involving cutting the body", ["Health & Body"], "He needs heart surgery."),
  W("symptom", "n", "a sign that you have an illness", ["Health & Body"], "A high temperature is one of the symptoms."),
  W("treatment", "n", "medical care for an illness", ["Health & Body"], "The treatment lasted six weeks."),
  W("vaccinate", "v", "to give someone a substance to protect them from disease", ["Health & Body"], "Children are vaccinated against measles."),
  W("virus", "n", "a very small thing that causes disease", ["Health & Body"], "The virus spreads very quickly."),
  W("wound", "n", "an injury caused by a weapon or accident", ["Health & Body"], "The wound is healing well."),

  // Travel & Places
  W("accommodation", "n", "a place where you live or stay", ["Travel & Places"], "The price includes flights and accommodation."),
  W("border", "n", "the line between two countries", ["Travel & Places"], "We crossed the border into France."),
  W("delay", "n", "when you have to wait longer than expected", ["Travel & Places"], "There was a two-hour delay at the airport."),
  W("destination", "n", "the place you are going to", ["Travel & Places"], "New York is a popular destination."),
  W("emigrate", "v", "to leave your country to live in another", ["Travel & Places"], "They emigrated to Canada."),
  W("harbour", "n", "an area of water next to the land where ships stop", ["Travel & Places"], "The boats came into the harbour."),
  W("landmark", "n", "a famous building or object in an area", ["Travel & Places"], "The Eiffel Tower is a famous landmark."),
  W("luggage", "n", "the bags you carry when travelling", ["Travel & Places"], "We had six pieces of luggage."),
  W("passport", "n", "an official document for foreign travel", ["Travel & Places"], "You need a passport to travel abroad."),
  W("route", "n", "the roads you use to travel from one place to another", ["Travel & Places"], "It's the shortest route to the airport."),
  W("rural", "adj", "in or of the countryside", ["Travel & Places"], "I love the peace of rural life."),
  W("scenery", "n", "the natural features you can see in a place", ["Travel & Places"], "The scenery in Wales is stunning."),
  W("suburb", "n", "an area on the edge of a city", ["Travel & Places"], "They live in a quiet suburb."),
  W("tourist", "n", "someone who travels for pleasure", ["Travel & Places"], "The city is full of tourists in summer."),
  W("traffic", "n", "the cars and vehicles on a road", ["Travel & Places"], "The traffic was terrible this morning."),
  W("urban", "adj", "in or of a town or city", ["Travel & Places"], "Urban areas have more pollution."),
  W("vehicle", "n", "a machine such as a car or bus used to carry people", ["Travel & Places"], "No vehicles are allowed in the park."),

  // Ideas & Opinions
  W("argue", "v", "to speak angrily to someone you disagree with", ["Ideas & Opinions", "Communication"], "They are always arguing about money."),
  W("argument", "n", "a disagreement or discussion", ["Ideas & Opinions"], "We had an argument about politics."),
  W("assume", "v", "to think that something is true without proof", ["Ideas & Opinions"], "I assumed you were coming."),
  W("belief", "n", "something you feel to be true", ["Ideas & Opinions"], "It is my belief that we can win."),
  W("compare", "v", "to look for differences and similarities", ["Ideas & Opinions"], "I compared the two phones before buying."),
  W("conclude", "v", "to make a decision after thinking about something", ["Ideas & Opinions"], "The report concludes that more research is needed."),
  W("debate", "n", "a serious discussion of a subject", ["Ideas & Opinions"], "There is a debate about the new law."),
  W("decide", "v", "to choose after thinking", ["Ideas & Opinions"], "I decided to stay at home."),
  W("doubt", "n", "a feeling of not being sure", ["Ideas & Opinions"], "I have my doubts about the plan."),
  W("expect", "v", "to think that something will happen", ["Ideas & Opinions"], "I expect it will rain."),
  W("imagine", "v", "to form a picture in your mind", ["Ideas & Opinions"], "Imagine living in a huge house."),
  W("obvious", "adj", "easy to see or understand", ["Ideas & Opinions"], "It's obvious that he's lying."),
  W("opinion", "n", "an idea or belief about something", ["Ideas & Opinions"], "What's your opinion of the film?"),
  W("realise", "v", "to notice or understand something", ["Ideas & Opinions"], "I didn't realise it was so late."),
  W("suspect", "v", "to think that something is true, especially bad", ["Ideas & Opinions"], "I suspect he isn't telling the truth."),

  // Communication
  W("advice", "n", "an opinion someone offers about what to do", ["Communication"], "Let me give you some advice."),
  W("announce", "v", "to tell people about something officially", ["Communication"], "They announced their engagement."),
  W("apologise", "v", "to say sorry for something", ["Communication"], "He apologised for being late."),
  W("comment", "n", "something you say about something or someone", ["Communication"], "She made a rude comment."),
  W("complain", "v", "to say that something is wrong", ["Communication"], "He complained about the noise."),
  W("conversation", "n", "a talk between two or more people", ["Communication"], "We had a long conversation about art."),
  W("describe", "v", "to say what someone or something is like", ["Communication"], "Can you describe him to me?"),
  W("discuss", "v", "to talk about something with someone", ["Communication"], "We discussed the plan for hours."),
  W("explain", "v", "to make something clear or easy to understand", ["Communication"], "Let me explain how it works."),
  W("mention", "v", "to talk about something quickly", ["Communication"], "She mentioned that she was tired."),
  W("persuade", "v", "to make someone do something by talking", ["Communication"], "He persuaded her to come."),
  W("promise", "v", "to say you will definitely do something", ["Communication"], "I promise I'll be there."),
  W("recommend", "v", "to suggest that someone or something is good", ["Communication"], "Can you recommend a good hotel?"),
  W("refuse", "v", "to say you will not do something", ["Communication"], "He refused to help."),
  W("reply", "v", "to answer someone", ["Communication"], "She never replied to my email."),
  W("shout", "v", "to speak very loudly", ["Communication"], "Don't shout at me."),
  W("warn", "v", "to tell someone about a danger", ["Communication"], "I warned him not to drive fast."),
  W("whisper", "v", "to say something very quietly", ["Communication"], "He whispered the answer in her ear."),

  // Everyday Life
  W("appointment", "n", "an arrangement to meet someone at a time", ["Everyday Life"], "I have a doctor's appointment."),
  W("arrange", "v", "to plan or organise something", ["Everyday Life"], "I've arranged a meeting for Tuesday."),
  W("attend", "v", "to go to an event", ["Everyday Life"], "Over 200 people attended the wedding."),
  W("celebrate", "v", "to do something enjoyable for a special occasion", ["Everyday Life"], "We celebrated her birthday at a restaurant."),
  W("event", "n", "something planned that happens", ["Everyday Life"], "The wedding was a big event."),
  W("habit", "n", "something you do often and regularly", ["Everyday Life"], "Smoking is a bad habit."),
  W("hobby", "n", "an activity you do for pleasure", ["Everyday Life"], "Painting is her favourite hobby."),
  W("neighbour", "n", "someone who lives near you", ["Everyday Life"], "Our neighbours are very friendly."),
  W("organise", "v", "to plan or arrange an event", ["Everyday Life"], "She organised the party."),
  W("prepare", "v", "to get ready for something", ["Everyday Life"], "I need to prepare dinner."),
  W("routine", "n", "the things you regularly do", ["Everyday Life"], "Getting up early is part of my routine."),
  W("schedule", "n", "a list of planned activities", ["Everyday Life"], "I have a busy schedule this week."),
];

// Deduplicate by id
const _byId = new Map<string, Word>();
for (const w of WORDS) {
  if (_byId.has(w.id)) {
    const existing = _byId.get(w.id)!;
    existing.topics = Array.from(new Set([...existing.topics, ...w.topics])) as Topic[];
  } else {
    _byId.set(w.id, { ...w, topics: [...w.topics] });
  }
}
export const ALL_WORDS: Word[] = Array.from(_byId.values()).sort((a, b) => a.word.localeCompare(b.word));

export const TOPICS: Topic[] = [
  "People & Feelings",
  "Actions & Change",
  "Society & Law",
  "Work & Study",
  "Money & Business",
  "Media & Technology",
  "Nature & Environment",
  "Health & Body",
  "Travel & Places",
  "Ideas & Opinions",
  "Communication",
  "Everyday Life",
];

export const TOPIC_META: Record<Topic, { emoji: string; gradient: string }> = {
  "People & Feelings": { emoji: "😊", gradient: "from-yellow-400 to-amber-500" },
  "Actions & Change": { emoji: "🔄", gradient: "from-teal-400 to-cyan-600" },
  "Society & Law": { emoji: "⚖️", gradient: "from-slate-500 to-slate-800" },
  "Work & Study": { emoji: "💼", gradient: "from-indigo-400 to-blue-700" },
  "Money & Business": { emoji: "💰", gradient: "from-emerald-400 to-green-600" },
  "Media & Technology": { emoji: "📱", gradient: "from-cyan-400 to-teal-600" },
  "Nature & Environment": { emoji: "🌳", gradient: "from-lime-400 to-emerald-600" },
  "Health & Body": { emoji: "💪", gradient: "from-rose-400 to-pink-600" },
  "Travel & Places": { emoji: "✈️", gradient: "from-sky-400 to-blue-600" },
  "Ideas & Opinions": { emoji: "💭", gradient: "from-violet-500 to-fuchsia-600" },
  "Communication": { emoji: "💬", gradient: "from-orange-400 to-red-500" },
  "Everyday Life": { emoji: "🗓️", gradient: "from-fuchsia-400 to-purple-600" },
};

export function wordsByTopic(topic: Topic): Word[] {
  return ALL_WORDS.filter((w) => w.topics.includes(topic));
}

export function wordsByLetter(letter: string): Word[] {
  return ALL_WORDS.filter((w) => w.word[0].toLowerCase() === letter.toLowerCase());
}
