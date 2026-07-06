// Curated CAE (C1) vocabulary from the Oxford CAE Result! wordlist,
// organised by the book's 12 units with learner-friendly English definitions.

export type Topic =
  | "Unit 1 · Personality"
  | "Unit 2 · Culture & Tradition"
  | "Unit 3 · Communication"
  | "Unit 4 · The Animal Kingdom"
  | "Unit 5 · Health & Medicine"
  | "Unit 6 · Science & Discovery"
  | "Unit 7 · Places & Exploration"
  | "Unit 8 · Business & Enterprise"
  | "Unit 9 · Crime & Justice"
  | "Unit 10 · Money & Possessions"
  | "Unit 11 · Arts & Entertainment"
  | "Unit 12 · Environment";

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
  // Unit 1 · Personality
  W("sensitivity", "n", "the quality of being easily affected by other people's feelings", ["Unit 1 · Personality"], "He handled the situation with great sensitivity."),
  W("tactful", "adj", "careful not to say or do anything that upsets other people", ["Unit 1 · Personality"], "It was tactful of her not to mention his weight."),
  W("compromise", "n", "an agreement in which both sides give up something", ["Unit 1 · Personality"], "We reached a compromise after long negotiations."),
  W("mature", "adj", "behaving in a sensible, adult way", ["Unit 1 · Personality"], "She is very mature for her age."),
  W("decisive", "adj", "able to make decisions quickly and confidently", ["Unit 1 · Personality"], "A good leader must be decisive."),
  W("motivated", "adj", "very keen to do something well", ["Unit 1 · Personality"], "He's a highly motivated student."),
  W("mingle", "v", "to move around and talk to different people at a social event", ["Unit 1 · Personality"], "The host mingled with the guests."),
  W("cautious", "adj", "careful to avoid possible danger or problems", ["Unit 1 · Personality"], "Be cautious when giving out personal information."),
  W("inquisitive", "adj", "wanting to find out about many different things", ["Unit 1 · Personality"], "Children are naturally inquisitive."),
  W("efficient", "adj", "working well and producing good results without wasting time", ["Unit 1 · Personality"], "She's an efficient organiser."),
  W("inventive", "adj", "good at thinking of new ideas", ["Unit 1 · Personality"], "The chef is very inventive with local ingredients."),
  W("justify", "v", "to give a good reason for something", ["Unit 1 · Personality"], "How can you justify spending so much money?"),
  W("imply", "v", "to suggest something indirectly", ["Unit 1 · Personality"], "Are you implying that I'm lying?"),
  W("trait", "n", "a particular quality in someone's character", ["Unit 1 · Personality"], "Kindness is her best trait."),
  W("inherit", "v", "to receive a quality from your parents", ["Unit 1 · Personality"], "She inherited her father's sense of humour."),
  W("counter-productive", "adj", "having the opposite effect to the one you want", ["Unit 1 · Personality"], "Shouting at children can be counter-productive."),
  W("intuitive", "adj", "based on feelings rather than facts", ["Unit 1 · Personality"], "She made an intuitive decision."),
  W("perceptive", "adj", "quick to notice or understand things", ["Unit 1 · Personality"], "That's a very perceptive comment."),
  W("agreeable", "adj", "pleasant and easy to like", ["Unit 1 · Personality"], "He's an agreeable young man."),
  W("conscientious", "adj", "putting a lot of effort into your work", ["Unit 1 · Personality"], "She's a conscientious worker."),
  W("prone (to)", "adj", "likely to do or suffer from something", ["Unit 1 · Personality"], "He's prone to headaches when tired."),
  W("burn out", "phr v", "to become exhausted from working too hard", ["Unit 1 · Personality"], "She burned out after ten years in the job."),
  W("push your luck", "idm", "to try to get more than you already have and risk losing it", ["Unit 1 · Personality"], "Don't push your luck — quit while you're ahead."),

  // Unit 2 · Culture & Tradition
  W("authentic", "adj", "real, true, or genuine", ["Unit 2 · Culture & Tradition"], "The restaurant serves authentic Thai food."),
  W("distinctive", "adj", "easy to recognise because different from others", ["Unit 2 · Culture & Tradition"], "The building has a distinctive shape."),
  W("endure", "v", "to suffer something difficult for a long time", ["Unit 2 · Culture & Tradition"], "She endured years of hardship."),
  W("pursue", "v", "to follow a plan, activity or subject", ["Unit 2 · Culture & Tradition"], "He decided to pursue a career in law."),
  W("objective", "n", "a goal or aim", ["Unit 2 · Culture & Tradition"], "Our main objective is to increase sales."),
  W("rite", "n", "a traditional ceremony", ["Unit 2 · Culture & Tradition"], "Marriage is an ancient rite."),
  W("witness", "v", "to see something happen", ["Unit 2 · Culture & Tradition"], "She witnessed the accident."),
  W("infancy", "n", "the time when you are a baby or very young child", ["Unit 2 · Culture & Tradition"], "She lost her mother in infancy."),
  W("pulsating", "adj", "full of energy and excitement", ["Unit 2 · Culture & Tradition"], "The city has a pulsating nightlife."),
  W("yell", "v", "to shout very loudly", ["Unit 2 · Culture & Tradition"], "He yelled for help."),
  W("further afield", "idm", "at or to a distance, in many different places", ["Unit 2 · Culture & Tradition"], "The band tours further afield each year."),
  W("assemble", "v", "to come together, or to gather people together", ["Unit 2 · Culture & Tradition"], "A crowd assembled outside the palace."),

  // Unit 3 · Communication
  W("transmitter", "n", "a piece of equipment that sends out signals", ["Unit 3 · Communication"], "The radio transmitter broke down."),
  W("put up", "phr v", "to give someone a place to stay in your home", ["Unit 3 · Communication"], "Can you put me up for the night?"),
  W("set up", "phr v", "to start a company, organisation, or system", ["Unit 3 · Communication"], "They set up a new business."),
  W("bring down", "phr v", "to reduce the level of something; to defeat a government", ["Unit 3 · Communication"], "The scandal brought down the government."),
  W("break up", "phr v", "to separate into smaller pieces or to end a relationship", ["Unit 3 · Communication"], "The couple broke up last month."),
  W("turn down", "phr v", "to refuse an offer or request", ["Unit 3 · Communication"], "They turned down the job offer."),
  W("bring up", "phr v", "to start to talk about a subject", ["Unit 3 · Communication"], "She brought up an interesting point."),
  W("come up with", "phr v", "to think of an idea or plan", ["Unit 3 · Communication"], "We need to come up with a solution."),
  W("account for", "phr v", "to explain the reason for something", ["Unit 3 · Communication"], "How do you account for the missing money?"),
  W("insight", "n", "a clear understanding of something complicated", ["Unit 3 · Communication"], "The book gives an insight into rural life."),
  W("eliminate", "v", "to remove or get rid of something", ["Unit 3 · Communication"], "They eliminated all references to the incident."),
  W("relate to", "v", "to be connected with something", ["Unit 3 · Communication"], "This chapter relates to the previous one."),
  W("subtitle", "n", "words shown at the bottom of a film screen", ["Unit 3 · Communication"], "The film has English subtitles."),

  // Unit 4 · The Animal Kingdom
  W("repulsive", "adj", "extremely unpleasant to look at", ["Unit 4 · The Animal Kingdom"], "The smell was absolutely repulsive."),
  W("sinister", "adj", "making you feel that something bad will happen", ["Unit 4 · The Animal Kingdom"], "There was something sinister about his smile."),
  W("exotic", "adj", "unusual and often exciting because from a far place", ["Unit 4 · The Animal Kingdom"], "She loves exotic flowers."),
  W("agile", "adj", "able to move quickly and easily", ["Unit 4 · The Animal Kingdom"], "Cats are extremely agile."),
  W("graceful", "adj", "moving in an elegant, attractive way", ["Unit 4 · The Animal Kingdom"], "Swans are very graceful birds."),
  W("fierce", "adj", "very angry, violent or forceful", ["Unit 4 · The Animal Kingdom"], "Tigers are fierce predators."),
  W("evolve", "v", "to develop and change gradually", ["Unit 4 · The Animal Kingdom"], "Humans evolved from apes."),
  W("graze", "v", "to feed on grass in a field", ["Unit 4 · The Animal Kingdom"], "The cattle grazed peacefully."),
  W("collide (with)", "v", "to hit something violently while moving", ["Unit 4 · The Animal Kingdom"], "The two cars collided at the junction."),
  W("wipe out", "phr v", "to destroy something completely", ["Unit 4 · The Animal Kingdom"], "Disease wiped out the population."),
  W("emerge", "v", "to come out from somewhere or to become known", ["Unit 4 · The Animal Kingdom"], "A butterfly emerged from the cocoon."),
  W("propensity", "n", "a natural tendency to behave in a particular way", ["Unit 4 · The Animal Kingdom"], "He has a propensity for exaggeration."),
  W("compress", "v", "to press or squeeze something into a smaller space", ["Unit 4 · The Animal Kingdom"], "The files have been compressed to save space."),
  W("swamp", "n", "an area of very wet, soft land", ["Unit 4 · The Animal Kingdom"], "The area is mostly swamp and forest."),

  // Unit 5 · Health & Medicine
  W("inoculate (against)", "v", "to protect against disease by injection", ["Unit 5 · Health & Medicine"], "Children are inoculated against measles."),
  W("searing", "adj", "extremely hot or painful", ["Unit 5 · Health & Medicine"], "She felt a searing pain in her chest."),
  W("physiotherapist", "n", "a professional who treats injuries with exercise", ["Unit 5 · Health & Medicine"], "The physiotherapist helped him walk again."),
  W("boast", "v", "to talk with too much pride about what you have", ["Unit 5 · Health & Medicine"], "He's always boasting about his son."),
  W("bystander", "n", "someone who sees something happen but is not involved", ["Unit 5 · Health & Medicine"], "Several bystanders were injured in the blast."),
  W("discourage", "v", "to make someone less confident or less likely to do something", ["Unit 5 · Health & Medicine"], "Don't let one failure discourage you."),
  W("under the weather", "idm", "slightly ill", ["Unit 5 · Health & Medicine"], "I'm feeling a bit under the weather today."),
  W("run a temperature", "phr", "to have a body temperature that is too high", ["Unit 5 · Health & Medicine"], "The child is running a temperature."),
  W("symptom", "n", "a sign of an illness", ["Unit 5 · Health & Medicine"], "A rash can be a symptom of many diseases."),
  W("chronic", "adj", "continuing for a long time", ["Unit 5 · Health & Medicine"], "She suffers from chronic back pain."),
  W("recover", "v", "to become well again after being ill", ["Unit 5 · Health & Medicine"], "He's slowly recovering from surgery."),
  W("prescribe", "v", "to say what medicine or treatment someone needs", ["Unit 5 · Health & Medicine"], "The doctor prescribed antibiotics."),

  // Unit 6 · Science & Discovery
  W("emit", "v", "to send out light, sound or gas", ["Unit 6 · Science & Discovery"], "The lamp emits a warm glow."),
  W("high-pitched", "adj", "having a very high sound", ["Unit 6 · Science & Discovery"], "The whistle produced a high-pitched sound."),
  W("despise", "v", "to hate someone or something very much", ["Unit 6 · Science & Discovery"], "He despises dishonesty."),
  W("levitate", "v", "to rise and float in the air", ["Unit 6 · Science & Discovery"], "The magician appeared to levitate."),
  W("generate", "v", "to produce or create something", ["Unit 6 · Science & Discovery"], "Wind turbines generate electricity."),
  W("magnetic", "adj", "having the power to attract iron or steel", ["Unit 6 · Science & Discovery"], "The magnetic force is very strong."),
  W("odour", "n", "a smell, especially an unpleasant one", ["Unit 6 · Science & Discovery"], "There was a strange odour in the kitchen."),
  W("mutant", "n", "an organism with different genes from its parents", ["Unit 6 · Science & Discovery"], "Scientists studied the mutant cells."),
  W("breakthrough", "n", "an important new discovery or development", ["Unit 6 · Science & Discovery"], "Scientists have made a major breakthrough."),
  W("hypothesis", "n", "an idea that has not yet been proved true", ["Unit 6 · Science & Discovery"], "The scientists tested the hypothesis."),

  // Unit 7 · Places & Exploration
  W("spectacular", "adj", "extremely impressive or dramatic", ["Unit 7 · Places & Exploration"], "The view from the top is spectacular."),
  W("dwell", "v", "to live in a place (formal)", ["Unit 7 · Places & Exploration"], "The tribe dwells in the forest."),
  W("tax", "v", "to make heavy demands on strength, patience or resources", ["Unit 7 · Places & Exploration"], "The long journey taxed his strength."),
  W("technique", "n", "a special way of doing something", ["Unit 7 · Places & Exploration"], "He has developed his own painting technique."),
  W("crucial", "adj", "extremely important because it affects other things", ["Unit 7 · Places & Exploration"], "Water is crucial for survival."),
  W("catastrophic", "adj", "causing sudden and great suffering", ["Unit 7 · Places & Exploration"], "The flood had catastrophic consequences."),
  W("bogus", "adj", "false, not real or true", ["Unit 7 · Places & Exploration"], "He was arrested for making bogus calls."),
  W("impending", "adj", "going to happen very soon", ["Unit 7 · Places & Exploration"], "There was a sense of impending disaster."),
  W("whereabouts", "n pl", "the place where someone or something is", ["Unit 7 · Places & Exploration"], "His whereabouts are unknown."),
  W("nickname", "v", "to give someone an informal name", ["Unit 7 · Places & Exploration"], "He was nicknamed 'the Rock' because of his strength."),

  // Unit 8 · Business & Enterprise
  W("enterprise", "n", "a business or company, or the activity of starting one", ["Unit 8 · Business & Enterprise"], "She runs a small enterprise from home."),
  W("regard (as)", "v", "to think of someone or something in a particular way", ["Unit 8 · Business & Enterprise"], "He is regarded as one of the best in his field."),
  W("devise", "v", "to invent a plan, method, or system", ["Unit 8 · Business & Enterprise"], "They devised a new marketing strategy."),
  W("at stake", "idm", "at risk; to be won or lost", ["Unit 8 · Business & Enterprise"], "Thousands of jobs are at stake."),
  W("on the spur of the moment", "idm", "suddenly, without planning", ["Unit 8 · Business & Enterprise"], "We booked the holiday on the spur of the moment."),
  W("in the long run", "idm", "over a long period of time, eventually", ["Unit 8 · Business & Enterprise"], "It will be cheaper in the long run."),
  W("out of the blue", "idm", "completely unexpectedly", ["Unit 8 · Business & Enterprise"], "The offer came out of the blue."),
  W("venture", "n", "a new business activity that involves risk", ["Unit 8 · Business & Enterprise"], "Their latest venture is a chain of coffee shops."),
  W("negotiate", "v", "to talk in order to reach an agreement", ["Unit 8 · Business & Enterprise"], "The unions negotiated a pay rise."),
  W("outsource", "v", "to pay another company to do work for yours", ["Unit 8 · Business & Enterprise"], "They outsourced the IT support to India."),
  W("thrive", "v", "to grow, develop, or be successful", ["Unit 8 · Business & Enterprise"], "The business is thriving."),

  // Unit 9 · Crime & Justice
  W("smuggling", "n", "the crime of taking things into a country illegally", ["Unit 9 · Crime & Justice"], "He was arrested for drug smuggling."),
  W("bribery", "n", "the crime of giving money to influence someone", ["Unit 9 · Crime & Justice"], "The official was accused of bribery."),
  W("blackmail", "n", "the crime of getting money by threatening to reveal a secret", ["Unit 9 · Crime & Justice"], "She was a victim of blackmail."),
  W("arson", "n", "the crime of deliberately setting fire to a building", ["Unit 9 · Crime & Justice"], "The fire was caused by arson."),
  W("assault", "n", "a physical attack on someone", ["Unit 9 · Crime & Justice"], "He was charged with assault."),
  W("forgery", "n", "the crime of copying documents or money illegally", ["Unit 9 · Crime & Justice"], "The painting turned out to be a forgery."),
  W("caution", "v", "to warn someone of their legal rights", ["Unit 9 · Crime & Justice"], "The suspect was cautioned before being questioned."),
  W("charge (with)", "v", "to formally accuse someone of a crime", ["Unit 9 · Crime & Justice"], "He was charged with murder."),
  W("custody", "n", "the state of being kept in prison", ["Unit 9 · Crime & Justice"], "He is being held in custody."),
  W("parole", "n", "permission for a prisoner to leave prison early", ["Unit 9 · Crime & Justice"], "She was released on parole."),
  W("convict", "v", "to decide officially in a court that someone is guilty", ["Unit 9 · Crime & Justice"], "He was convicted of theft."),
  W("verdict", "n", "the decision in a court of law", ["Unit 9 · Crime & Justice"], "The jury reached a verdict of not guilty."),
  W("acquit", "v", "to decide officially that someone is not guilty", ["Unit 9 · Crime & Justice"], "The judge acquitted him of all charges."),

  // Unit 10 · Money & Possessions
  W("evaluation", "n", "the process of judging the value of something", ["Unit 10 · Money & Possessions"], "The evaluation of the property took an hour."),
  W("exchange", "n", "the act of giving something and receiving something else", ["Unit 10 · Money & Possessions"], "The rate of exchange has fallen."),
  W("inveterate", "adj", "always doing something and unable to stop", ["Unit 10 · Money & Possessions"], "He's an inveterate gambler."),
  W("registered", "adj", "officially recorded on a list", ["Unit 10 · Money & Possessions"], "The car is registered in her name."),
  W("founder", "n", "a person who starts a company or organisation", ["Unit 10 · Money & Possessions"], "She is the founder of the charity."),
  W("avid", "adj", "very enthusiastic about something", ["Unit 10 · Money & Possessions"], "He's an avid reader."),
  W("get in on the act", "idm", "to become involved in something profitable that others are doing", ["Unit 10 · Money & Possessions"], "Once it made money, everyone wanted to get in on the act."),
  W("beyond your wildest dreams", "idm", "better than anything you had hoped for", ["Unit 10 · Money & Possessions"], "The success went beyond her wildest dreams."),
  W("asset", "n", "something valuable that a person or company owns", ["Unit 10 · Money & Possessions"], "The company has assets of $10 million."),
  W("mortgage", "n", "a loan to buy a house, paid back over years", ["Unit 10 · Money & Possessions"], "They took out a 25-year mortgage."),
  W("bargain", "n", "something bought for less than the usual price", ["Unit 10 · Money & Possessions"], "This coat was a real bargain."),
  W("splash out", "phr v", "to spend a lot of money on something enjoyable", ["Unit 10 · Money & Possessions"], "They splashed out on a new car."),

  // Unit 11 · Arts & Entertainment
  W("confound", "v", "to confuse or surprise someone by being unexpected", ["Unit 11 · Arts & Entertainment"], "The results confounded the experts."),
  W("composite", "adj", "made of different parts or materials", ["Unit 11 · Arts & Entertainment"], "The image is a composite of three photos."),
  W("dissident", "n", "someone who publicly disagrees with the government", ["Unit 11 · Arts & Entertainment"], "The dissident was arrested at the airport."),
  W("notion", "n", "an idea, belief or opinion", ["Unit 11 · Arts & Entertainment"], "I've no notion of what he means."),
  W("unwitting", "adj", "not knowing or realising something", ["Unit 11 · Arts & Entertainment"], "He was the unwitting cause of the accident."),
  W("soundtrack", "n", "the music that goes with a film", ["Unit 11 · Arts & Entertainment"], "The soundtrack won an Oscar."),
  W("canvas", "n", "a piece of strong cloth used for painting", ["Unit 11 · Arts & Entertainment"], "The artist worked on a large canvas."),
  W("palette", "n", "a thin board on which artists mix paint", ["Unit 11 · Arts & Entertainment"], "She squeezed paint onto her palette."),
  W("meteorologist", "n", "a person who studies the weather", ["Unit 11 · Arts & Entertainment"], "Meteorologists predict a mild winter."),
  W("acclaimed", "adj", "publicly praised by a lot of people", ["Unit 11 · Arts & Entertainment"], "It's an internationally acclaimed novel."),
  W("portray", "v", "to represent or describe someone in a painting, film or book", ["Unit 11 · Arts & Entertainment"], "The film portrays him as a hero."),

  // Unit 12 · Environment
  W("prevailing", "adj", "existing in a particular place or time", ["Unit 12 · Environment"], "The prevailing wind is from the west."),
  W("nutrient", "n", "a substance that helps plants and animals to grow", ["Unit 12 · Environment"], "The soil is rich in nutrients."),
  W("flux", "n", "continuous change", ["Unit 12 · Environment"], "The economy is in a state of flux."),
  W("knock-on effect", "n", "a chain reaction — one event causing others", ["Unit 12 · Environment"], "Higher fuel prices have a knock-on effect on food prices."),
  W("counter", "v", "to react against something in order to reduce its effect", ["Unit 12 · Environment"], "New laws were introduced to counter pollution."),
  W("imperative", "adj", "extremely important or urgent", ["Unit 12 · Environment"], "It is imperative that we act now."),
  W("tundra", "n", "the large flat Arctic areas without trees", ["Unit 12 · Environment"], "Few plants grow on the tundra."),
  W("sustainable", "adj", "able to continue for a long time without damage", ["Unit 12 · Environment"], "We must find sustainable sources of energy."),
  W("deforestation", "n", "the cutting down of forests", ["Unit 12 · Environment"], "Deforestation is destroying habitats."),
  W("emission", "n", "an amount of gas sent out into the air", ["Unit 12 · Environment"], "Carbon emissions must be reduced."),
  W("habitat", "n", "the natural home of a plant or animal", ["Unit 12 · Environment"], "The panda's natural habitat is being destroyed."),
  W("erode", "v", "to gradually wear away rock or soil", ["Unit 12 · Environment"], "Waves have eroded the cliffs."),
  W("conserve", "v", "to protect something and prevent it from being wasted", ["Unit 12 · Environment"], "We must conserve water."),
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
  "Unit 1 · Personality",
  "Unit 2 · Culture & Tradition",
  "Unit 3 · Communication",
  "Unit 4 · The Animal Kingdom",
  "Unit 5 · Health & Medicine",
  "Unit 6 · Science & Discovery",
  "Unit 7 · Places & Exploration",
  "Unit 8 · Business & Enterprise",
  "Unit 9 · Crime & Justice",
  "Unit 10 · Money & Possessions",
  "Unit 11 · Arts & Entertainment",
  "Unit 12 · Environment",
];

export const TOPIC_META: Record<Topic, { emoji: string; gradient: string }> = {
  "Unit 1 · Personality": { emoji: "🧠", gradient: "from-violet-500 to-fuchsia-600" },
  "Unit 2 · Culture & Tradition": { emoji: "🎭", gradient: "from-amber-400 to-orange-500" },
  "Unit 3 · Communication": { emoji: "📡", gradient: "from-cyan-400 to-teal-600" },
  "Unit 4 · The Animal Kingdom": { emoji: "🐆", gradient: "from-lime-400 to-emerald-600" },
  "Unit 5 · Health & Medicine": { emoji: "🩺", gradient: "from-rose-400 to-pink-600" },
  "Unit 6 · Science & Discovery": { emoji: "🔬", gradient: "from-indigo-400 to-blue-700" },
  "Unit 7 · Places & Exploration": { emoji: "🗺️", gradient: "from-sky-400 to-blue-600" },
  "Unit 8 · Business & Enterprise": { emoji: "💼", gradient: "from-slate-500 to-slate-800" },
  "Unit 9 · Crime & Justice": { emoji: "⚖️", gradient: "from-red-500 to-rose-700" },
  "Unit 10 · Money & Possessions": { emoji: "💰", gradient: "from-emerald-400 to-green-600" },
  "Unit 11 · Arts & Entertainment": { emoji: "🎬", gradient: "from-fuchsia-400 to-purple-600" },
  "Unit 12 · Environment": { emoji: "🌍", gradient: "from-teal-400 to-emerald-700" },
};

export function wordsByTopic(topic: Topic): Word[] {
  return ALL_WORDS.filter((w) => w.topics.includes(topic));
}

export function wordsByLetter(letter: string): Word[] {
  return ALL_WORDS.filter((w) => w.word[0].toLowerCase() === letter.toLowerCase());
}
