// Converted from the supplied comparatives lesson; each gap has its own answer key.
export interface ComparisonGap { id: string; answers: string[]; hint?: string }
export interface ComparisonItem { id: number; parts: (string | ComparisonGap)[] }
export interface ComparisonStep {
  id: string; title: string; kind: 'theory' | 'exercise' | 'homework';
  instruction?: string; wordBank?: string[]; items?: ComparisonItem[];
  sections?: { heading: string; content: string }[]; image?: 'height';
}
export const isComparisonAnswerCorrect = (value: string, answers: string[]) => {
  const normalise = (text: string) => text.toLowerCase().replace(/[’‘]/g, "'").trim().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ');
  return answers.some(answer => normalise(value) === normalise(answer));
};
export const COMPARISON_STEPS: ComparisonStep[] = [
  {
    "id": "comparatives-1",
    "title": "Comparative Adjectives",
    "kind": "theory",
    "sections": [
      {
        "heading": "The Rules",
        "content": "<p><strong>Comparative adjectives</strong> are used to compare two things. For short adjectives, add <strong>-er</strong> at the end. For long adjectives, use <strong>more</strong> before the adjective.</p> <p>Remember to use <strong>than</strong> after the adjective to complete the comparison.</p> <ul>\n<li><strong>Tall</strong> -&gt; taller (e.g., He is taller than me.)</li>\n<li><strong>Expensive</strong> -&gt; more expensive (e.g., This car is more expensive than that one.)</li>\n<li><strong>Irregular:</strong> good -&gt; better, bad -&gt; worse</li>\n</ul><p>Spelling: nice → nicer; big → bigger; happy → happier.</p>"
      }
    ],
    "image": "height"
  },
  {
    "id": "comparatives-2",
    "title": "Practice: Comparative Forms",
    "kind": "exercise",
    "instruction": "Complete the sentences using a comparative form (e.g., older, more important).",
    "items": [
      {
        "id": 1,
        "parts": [
          "It's too noisy here. Can we go somewhere ",
          {
            "id": "practice-1",
            "answers": [
              "quieter"
            ]
          },
          " "
        ]
      },
      {
        "id": 2,
        "parts": [
          "This coffee is very weak. I like it ",
          {
            "id": "practice-2",
            "answers": [
              "stronger"
            ]
          },
          " "
        ]
      },
      {
        "id": 3,
        "parts": [
          "The hotel was surprisingly big. I expected it to be ",
          {
            "id": "practice-3",
            "answers": [
              "smaller"
            ]
          },
          " "
        ]
      },
      {
        "id": 4,
        "parts": [
          "The hotel was surprisingly cheap. I expected it to be ",
          {
            "id": "practice-4",
            "answers": [
              "more expensive"
            ]
          },
          " "
        ]
      },
      {
        "id": 5,
        "parts": [
          "The weather is too cold here. I'd like to live somewhere ",
          {
            "id": "practice-5",
            "answers": [
              "warmer"
            ]
          },
          " "
        ]
      },
      {
        "id": 6,
        "parts": [
          "My job is a bit boring sometimes. I'd like to do something ",
          {
            "id": "practice-6",
            "answers": [
              "more interesting"
            ]
          },
          " "
        ]
      },
      {
        "id": 7,
        "parts": [
          "It's a shame you live so far away. I wish you lived ",
          {
            "id": "practice-7",
            "answers": [
              "nearer"
            ]
          },
          " "
        ]
      },
      {
        "id": 8,
        "parts": [
          "I was surprised how easy it was to get a job. I thought it would be ",
          {
            "id": "practice-8",
            "answers": [
              "more difficult"
            ]
          },
          " "
        ]
      },
      {
        "id": 9,
        "parts": [
          "Your work isn't very good. I'm sure you can do ",
          {
            "id": "practice-9",
            "answers": [
              "better"
            ]
          },
          " "
        ]
      },
      {
        "id": 10,
        "parts": [
          "Don't worry. The situation isn't so bad. It could be ",
          {
            "id": "practice-10",
            "answers": [
              "worse"
            ]
          },
          " "
        ]
      },
      {
        "id": 11,
        "parts": [
          "I was surprised we got here so quickly. I expected the trip to take ",
          {
            "id": "practice-11",
            "answers": [
              "longer"
            ]
          },
          " "
        ]
      },
      {
        "id": 12,
        "parts": [
          "You're talking very loudly. Can you speak ",
          {
            "id": "practice-12",
            "answers": [
              "more quietly"
            ]
          },
          " "
        ]
      },
      {
        "id": 13,
        "parts": [
          "You hardly ever call me. Why don't you call me ",
          {
            "id": "practice-13",
            "answers": [
              "more often"
            ]
          },
          " "
        ]
      },
      {
        "id": 14,
        "parts": [
          "You're standing too near the camera. Can you move a bit ",
          {
            "id": "practice-14",
            "answers": [
              "further",
              "farther"
            ]
          },
          " away? "
        ]
      },
      {
        "id": 15,
        "parts": [
          "You were a little depressed yesterday, but you look ",
          {
            "id": "practice15",
            "answers": [
              "happier"
            ]
          },
          " today. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-3",
    "title": "Practice: Comparative Words",
    "kind": "exercise",
    "instruction": "Complete the sentences. Use the comparative forms of the words in the box. Use than where necessary.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I was feeling tired last night, so I went to bed ",
          {
            "id": "practice2-1",
            "answers": [
              "earlier than"
            ]
          },
          " usual. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "I'd like to have a ",
          {
            "id": "practice2-2",
            "answers": [
              "more reliable"
            ]
          },
          " car. The one I have keeps breaking down. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "Unfortunately her illness was ",
          {
            "id": "practice2-3",
            "answers": [
              "more serious than"
            ]
          },
          " we thought at first. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "You look ",
          {
            "id": "practice2-4",
            "answers": [
              "thinner"
            ]
          },
          " . Have you lost weight? "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I want a ",
          {
            "id": "practice2-5",
            "answers": [
              "bigger"
            ]
          },
          " apartment. We don't have enough space here. "
        ]
      },
      {
        "id": 6,
        "parts": [
          "He doesn't study very hard. He's ",
          {
            "id": "practice2-6",
            "answers": [
              "more interested"
            ]
          },
          " in having a good time. "
        ]
      },
      {
        "id": 7,
        "parts": [
          "Health and happiness are ",
          {
            "id": "practice2-7",
            "answers": [
              "more important than"
            ]
          },
          " money. "
        ]
      },
      {
        "id": 8,
        "parts": [
          "The instructions were very complicated. They could have been ",
          {
            "id": "practice2-8",
            "answers": [
              "simpler",
              "more simple"
            ]
          },
          " . "
        ]
      },
      {
        "id": 9,
        "parts": [
          "There were a lot of people on the bus. It was ",
          {
            "id": "practice2-9",
            "answers": [
              "more crowded than"
            ]
          },
          " usual. "
        ]
      },
      {
        "id": 10,
        "parts": [
          "I like living in the country. It's ",
          {
            "id": "practice2-10",
            "answers": [
              "more peaceful than"
            ]
          },
          " living in a town. "
        ]
      },
      {
        "id": 11,
        "parts": [
          "You'll find your way around the town ",
          {
            "id": "practice2-11",
            "answers": [
              "more easily"
            ]
          },
          " if you have a good map. "
        ]
      },
      {
        "id": 12,
        "parts": [
          "In some parts of the country, prices are ",
          {
            "id": "practice2-12",
            "answers": [
              "higher than"
            ]
          },
          " in others. "
        ]
      }
    ],
    "wordBank": [
      "big",
      "crowded",
      "early",
      "easily",
      "high",
      "important",
      "interested",
      "peaceful",
      "reliable",
      "serious",
      "simple",
      "thin"
    ]
  },
  {
    "id": "comparatives-4",
    "title": "Comparative Adverbs",
    "kind": "theory",
    "sections": [
      {
        "heading": "The Rules",
        "content": "<p><strong>Comparative adverbs</strong> are used to compare two actions. Most adverbs are formed by adding <strong>-ly</strong> to an adjective, and for these, we use <strong>more</strong> before the adverb.</p> <p>Use <strong>than</strong> to complete the comparison.</p> <ul>\n<li><strong>Quickly</strong> -&gt; more quickly (e.g., He runs more quickly than me.)</li>\n<li><strong>Carefully</strong> -&gt; more carefully (e.g., She drives more carefully than her brother.)</li>\n<li><strong>Irregular:</strong> well -&gt; better, badly -&gt; worse</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-5",
    "title": "Practice: Adverbs (1)",
    "kind": "exercise",
    "instruction": "Fill in the correct adverb form (comparative or superlative) of the adjectives in brackets.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I speak English (fluent) ",
          {
            "id": "practice3-1",
            "answers": [
              "more fluently"
            ]
          },
          " now than last year. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "She greeted me (polite) ",
          {
            "id": "practice3-2",
            "answers": [
              "most politely",
              "the most politely"
            ]
          },
          " of all. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "She smiled (happy) ",
          {
            "id": "practice3-3",
            "answers": [
              "more happily"
            ]
          },
          " than before. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "This girl dances (graceful) ",
          {
            "id": "practice3-4",
            "answers": [
              "most gracefully",
              "the most gracefully"
            ]
          },
          " of all. "
        ]
      },
      {
        "id": 5,
        "parts": [
          "Could you write (clear) ",
          {
            "id": "practice3-5",
            "answers": [
              "more clearly"
            ]
          },
          " ? "
        ]
      },
      {
        "id": 6,
        "parts": [
          "Planes can fly (high) ",
          {
            "id": "practice3-6",
            "answers": [
              "higher"
            ]
          },
          " than birds. "
        ]
      },
      {
        "id": 7,
        "parts": [
          "He had an accident last year. Now, he drives (careful) ",
          {
            "id": "practice3-7",
            "answers": [
              "more carefully"
            ]
          },
          " than before. "
        ]
      },
      {
        "id": 8,
        "parts": [
          "Jim can run (fast) ",
          {
            "id": "practice3-8",
            "answers": [
              "faster"
            ]
          },
          " than John. "
        ]
      },
      {
        "id": 9,
        "parts": [
          "Our team played (bad) ",
          {
            "id": "practice3-9",
            "answers": [
              "worst",
              "the worst"
            ]
          },
          " of all. "
        ]
      },
      {
        "id": 10,
        "parts": [
          "He worked (hard) ",
          {
            "id": "practice3-10",
            "answers": [
              "harder"
            ]
          },
          " than ever before. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-6",
    "title": "Practice: Adverbs (2)",
    "kind": "exercise",
    "instruction": "Complete the sentences with a comparative adverb. Use than where necessary.",
    "items": [
      {
        "id": 1,
        "parts": [
          "He arrived ",
          {
            "id": "practice4-1",
            "answers": [
              "earlier than"
            ]
          },
          " expected. (early) "
        ]
      },
      {
        "id": 2,
        "parts": [
          "We walked ",
          {
            "id": "practice4-2",
            "answers": [
              "more slowly than"
            ]
          },
          " the rest of the people. (slowly) "
        ]
      },
      {
        "id": 3,
        "parts": [
          "They called us ",
          {
            "id": "practice4-3",
            "answers": [
              "later"
            ]
          },
          " in the afternoon. (late) "
        ]
      },
      {
        "id": 4,
        "parts": [
          "My mother and my sister talked ",
          {
            "id": "practice4-4",
            "answers": [
              "more loudly than"
            ]
          },
          " the other guests. (loudly) "
        ]
      },
      {
        "id": 5,
        "parts": [
          "He hit his arm ",
          {
            "id": "practice4-5",
            "answers": [
              "harder than"
            ]
          },
          " before. (hard) "
        ]
      },
      {
        "id": 6,
        "parts": [
          "The Spanish athlete ran ",
          {
            "id": "practice4-6",
            "answers": [
              "faster than"
            ]
          },
          " the other runners. (fast) "
        ]
      },
      {
        "id": 7,
        "parts": [
          "Jim threw the ball ",
          {
            "id": "practice4-7",
            "answers": [
              "farther than",
              "further than"
            ]
          },
          " Peter. (far) "
        ]
      },
      {
        "id": 8,
        "parts": [
          "We answered all the questions ",
          {
            "id": "practice4-8",
            "answers": [
              "better than"
            ]
          },
          " the other students. (well) "
        ]
      },
      {
        "id": 9,
        "parts": [
          "Our new teacher explains the exercises ",
          {
            "id": "practice4-9",
            "answers": [
              "worse than"
            ]
          },
          " our old teacher. (badly) "
        ]
      },
      {
        "id": 10,
        "parts": [
          "The new mechanic checked the car ",
          {
            "id": "practice4-10",
            "answers": [
              "more thoroughly than"
            ]
          },
          " the old mechanic. (thoroughly) "
        ]
      }
    ]
  },
  {
    "id": "comparatives-7",
    "title": "More Comparative Forms",
    "kind": "theory",
    "sections": [
      {
        "heading": "Before Comparatives",
        "content": "<p>You can use <strong>much</strong>, <strong>a lot</strong>, <strong>far</strong>, <strong>a bit</strong>, <strong>a little</strong>, or <strong>slightly</strong> to modify comparatives and add emphasis.</p> <ul>\n<li>It's <strong>much cheaper</strong>.</li>\n<li>It's <strong>a lot more expensive</strong>.</li>\n<li>Could you speak a <strong>bit more slowly</strong>?</li>\n<li>This bag is <strong>slightly heavier</strong> than the other one.</li>\n<li>Her illness was <strong>far more serious</strong> than we thought at first.</li>\n</ul>"
      },
      {
        "heading": "Any and No + Comparative",
        "content": "<p>Use <strong>any</strong> and <strong>no</strong> with comparatives to say something is not even a little different.</p> <ul>\n<li>I'm not waiting <strong>any longer</strong>.</li>\n<li>The apartment is <strong>no bigger</strong> than ours.</li>\n<li>Do you feel <strong>any better</strong>?</li>\n<li>The hotel is <strong>no more expensive</strong>.</li>\n</ul>"
      },
      {
        "heading": "\"Better and Better\"",
        "content": "<p>Repeat comparatives (e.g., <strong>better and better</strong>, <strong>more and more</strong>) to say that something is changing continuously.</p> <ul>\n<li>It's getting <strong>better and better</strong>.</li>\n<li>It's got <strong>bigger and bigger</strong>.</li>\n<li>I became <strong>more and more</strong> convinced that he was lying.</li>\n<li><strong>More and more</strong> people are learning English.</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-8",
    "title": "Practice: Any and No + Comparative",
    "kind": "exercise",
    "instruction": "Complete the sentences using any/no + comparative. Use than where necessary.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I've waited long enough. I'm not waiting ",
          {
            "id": "practice5-1",
            "answers": [
              "any longer"
            ]
          },
          ". "
        ]
      },
      {
        "id": 2,
        "parts": [
          "I'm sorry I'm a bit late, but I couldn't get here ",
          {
            "id": "practice5-2",
            "answers": [
              "any sooner"
            ]
          },
          ". "
        ]
      },
      {
        "id": 3,
        "parts": [
          "This shop isn't expensive. The prices are ",
          {
            "id": "practice5-3",
            "answers": [
              "no higher than"
            ]
          },
          " anywhere else. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "I need to stop for a rest. I can't walk ",
          {
            "id": "practice5-4",
            "answers": [
              "any further"
            ]
          },
          ". "
        ]
      },
      {
        "id": 5,
        "parts": [
          "The traffic isn't particularly bad today. It's ",
          {
            "id": "practice5-5",
            "answers": [
              "no busier than"
            ]
          },
          " usual. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-9",
    "title": "Practice: Repeating Comparatives",
    "kind": "exercise",
    "instruction": "Complete the sentences using the structure ... and ...",
    "items": [
      {
        "id": 1,
        "parts": [
          "It's getting ",
          {
            "id": "practice6-1",
            "answers": [
              "more and more difficult"
            ]
          },
          " to find a job. (difficult) "
        ]
      },
      {
        "id": 2,
        "parts": [
          "That hole in your sweater is getting ",
          {
            "id": "practice6-2",
            "answers": [
              "bigger and bigger"
            ]
          },
          ". (big) "
        ]
      },
      {
        "id": 3,
        "parts": [
          "My bags seemed to get ",
          {
            "id": "practice6-3",
            "answers": [
              "heavier and heavier"
            ]
          },
          " as I carried them. (heavy) "
        ]
      },
      {
        "id": 4,
        "parts": [
          "As I waited for my interview, I became ",
          {
            "id": "practice6-4",
            "answers": [
              "more and more nervous"
            ]
          },
          ". (nervous) "
        ]
      },
      {
        "id": 5,
        "parts": [
          "As the day went on, the weather got ",
          {
            "id": "practice6-5",
            "answers": [
              "worse and worse"
            ]
          },
          ". (bad) "
        ]
      },
      {
        "id": 6,
        "parts": [
          "Health care is becoming ",
          {
            "id": "practice6-6",
            "answers": [
              "more and more expensive"
            ]
          },
          ". (expensive) "
        ]
      },
      {
        "id": 7,
        "parts": [
          "Since Anna went to Canada, her English has got ",
          {
            "id": "practice6-7",
            "answers": [
              "better and better"
            ]
          },
          ". (good) "
        ]
      },
      {
        "id": 8,
        "parts": [
          "As the conversation went on, Paul became ",
          {
            "id": "practice6-8",
            "answers": [
              "more and more talkative"
            ]
          },
          ". (talkative) "
        ]
      }
    ]
  },
  {
    "id": "comparatives-10",
    "title": "Practice: Modifying Comparatives",
    "kind": "exercise",
    "instruction": "Use the words in brackets to complete the sentences. Use much / a bit etc. + a comparative form. Use than where necessary.",
    "items": [
      {
        "id": 1,
        "parts": [
          "Her illness was ",
          {
            "id": "practice7-1",
            "answers": [
              "much more serious than"
            ]
          },
          " we thought at first. (much / serious) "
        ]
      },
      {
        "id": 2,
        "parts": [
          "This bag is too small. I need something ",
          {
            "id": "practice7-2",
            "answers": [
              "much bigger"
            ]
          },
          ". (much / big) "
        ]
      },
      {
        "id": 3,
        "parts": [
          "I liked the museum. It was ",
          {
            "id": "practice7-3",
            "answers": [
              "much more interesting than"
            ]
          },
          " I expected. (much / interesting) "
        ]
      },
      {
        "id": 4,
        "parts": [
          "It was very hot yesterday. Today it's ",
          {
            "id": "practice7-4",
            "answers": [
              "a bit cooler"
            ]
          },
          ". (a bit / cool) "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I'm afraid the problem is ",
          {
            "id": "practice7-5",
            "answers": [
              "far more complicated than"
            ]
          },
          " it seems. (far / complicated) "
        ]
      },
      {
        "id": 6,
        "parts": [
          "You're driving too fast. Can you drive ",
          {
            "id": "practice7-6",
            "answers": [
              "a bit more slowly"
            ]
          },
          "? (a bit / slowly) "
        ]
      },
      {
        "id": 7,
        "parts": [
          "It's ",
          {
            "id": "practice7-7",
            "answers": [
              "a lot easier"
            ]
          },
          " to learn a language in a country where it is spoken. (a lot / easy) "
        ]
      },
      {
        "id": 8,
        "parts": [
          "I thought she was younger than me, but in fact she's ",
          {
            "id": "practice7-8",
            "answers": [
              "slightly older"
            ]
          },
          ". (slightly / old) "
        ]
      }
    ]
  },
  {
    "id": "comparatives-11",
    "title": "Other Comparative Forms",
    "kind": "theory",
    "sections": [
      {
        "heading": "The ... The ...",
        "content": "<p>Use the + comparative … the + comparative to show that one change depends on another.</p><ul><li>The sooner the better. (= as soon as possible)</li><li>The warmer the weather, the better I feel.</li><li>The more you study, the better your grades will be.</li></ul>"
      },
      {
        "heading": "Older and Elder",
        "content": "<p>The comparative of <strong>old</strong> is <strong>older</strong>. You can use <strong>elder</strong> (or <strong>older</strong>) when you talk about people in a family.</p> <ul>\n<li>David looks <strong>older</strong> than he really is.</li>\n<li>My <strong>elder sister</strong> is a TV producer. (or My <strong>older sister</strong>...)</li>\n<li>We say \"my elder sister\" but we do not say \"somebody is elder\": My sister is <strong>older</strong> than me. (not elder than me).</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-12",
    "title": "Comparing with 'As' and 'Less'",
    "kind": "theory",
    "sections": [
      {
        "heading": "Not as ... as",
        "content": "<p>Use <strong>not as ... as</strong> to say two things are not equal. This is an alternative to using the comparative form.</p> <ul>\n<li>He <strong>isn't as rich as</strong> Sarah. (= Sarah is richer than he is)</li>\n<li>The town centre <strong>wasn't as crowded as</strong> usual. (= it was less crowded)</li>\n<li>I don't know <strong>as many</strong> people as you. (= you know more people than me)</li>\n</ul>"
      },
      {
        "heading": "Less ... than",
        "content": "<p>Use <strong>less ... than</strong> as a more formal way to compare things. It is similar in meaning to <strong>not as ... as</strong>.</p> <ul>\n<li>I spent <strong>less money than</strong> you. (= I didn't spend as much money as you)</li>\n<li>The city centre was <strong>less crowded than</strong> usual. (= it wasn't as crowded as usual)</li>\n<li>I play tennis <strong>less</strong> now than I used to. (= I don't play as much as I used to)</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-13",
    "title": "Comparing with 'As' and 'Same'",
    "kind": "theory",
    "sections": [
      {
        "heading": "We also use as ... as",
        "content": "<p>We can use <strong>as ... as</strong> in positive sentences and in questions to say two things are equal.</p> <ul>\n<li>I got here <strong>as fast as</strong> I could.</li>\n<li>You can have <strong>as much as</strong> you want.</li>\n<li>Can you send me the information <strong>as soon as possible</strong>?</li>\n<li>Petrol is <strong>twice as expensive as</strong> it was a few years ago.</li>\n</ul>"
      },
      {
        "heading": "The same as",
        "content": "<p>Use <strong>the same as</strong> to say two things are identical. Do not use 'the same like'.</p> <ul>\n<li>Laura's salary is <strong>the same as</strong> mine.</li>\n<li>David is <strong>the same age as</strong> James.</li>\n<li>She still looks <strong>the same as</strong> she did ten years ago.</li>\n</ul>"
      },
      {
        "heading": "Than me / Than I am",
        "content": "<p>You can use either <strong>than me</strong> or <strong>than I am</strong> in a comparison. Both are correct.</p> <ul>\n<li>You're taller <strong>than me</strong>. OR You're taller <strong>than I am</strong>.</li>\n<li>He's not as clever as <strong>her</strong>. OR He's not as clever as <strong>she is</strong>.</li>\n<li>I can't run as fast as <strong>him</strong>. OR I can't run as fast as <strong>he can</strong>.</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-14",
    "title": "Practice: As...as",
    "kind": "exercise",
    "instruction": "Complete the sentences using as...as.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I'm tall, but you are taller. I'm not ",
          {
            "id": "practice8-1",
            "answers": [
              "as tall as you"
            ]
          },
          ". "
        ]
      },
      {
        "id": 2,
        "parts": [
          "My salary is high, but yours is higher. My salary isn't ",
          {
            "id": "practice8-2",
            "answers": [
              "as high as yours"
            ]
          },
          ". "
        ]
      },
      {
        "id": 3,
        "parts": [
          "You know a bit about cars, but I know more. You don't ",
          {
            "id": "practice8-3",
            "answers": [
              "know as much as I do"
            ]
          },
          ". "
        ]
      },
      {
        "id": 4,
        "parts": [
          "We are busy today, but we were busier yesterday. We aren't ",
          {
            "id": "practice8-4",
            "answers": [
              "as busy as we were yesterday"
            ]
          },
          ". "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I still feel bad, but I felt a lot worse earlier. I don't ",
          {
            "id": "practice8-5",
            "answers": [
              "feel as bad as I did earlier"
            ]
          },
          ". "
        ]
      },
      {
        "id": 6,
        "parts": [
          "Our neighbours have lived here for quite a long time, but we've lived here longer. Our neighbours haven't ",
          {
            "id": "practice8-6",
            "answers": [
              "lived here as long as us",
              "lived here as long as we have",
              "lived here as long as we have lived here"
            ]
          },
          ". "
        ]
      },
      {
        "id": 7,
        "parts": [
          "I was a little nervous before the interview, but usually I'm a lot more nervous. I wasn't ",
          {
            "id": "practice8-7",
            "answers": [
              "as nervous as I usually am"
            ]
          },
          ". "
        ]
      }
    ]
  },
  {
    "id": "comparatives-15",
    "title": "Practice: Rewriting Sentences",
    "kind": "exercise",
    "instruction": "Write a new sentence with the same meaning, using a different comparative structure.",
    "items": [
      {
        "id": 1,
        "parts": [
          "Jack is younger than he looks. Jack isn't ",
          {
            "id": "practice9-1",
            "answers": [
              "as old as he looks"
            ]
          },
          ". "
        ]
      },
      {
        "id": 2,
        "parts": [
          "I didn't spend as much money as you. You spent ",
          {
            "id": "practice9-2",
            "answers": [
              "more money than me",
              "more money than I did"
            ]
          },
          ". "
        ]
      },
      {
        "id": 3,
        "parts": [
          "The station was nearer than I thought. The station wasn't ",
          {
            "id": "practice9-3",
            "answers": [
              "as far as I thought"
            ]
          },
          ". "
        ]
      },
      {
        "id": 4,
        "parts": [
          "The meal didn't cost as much as I expected. The meal cost ",
          {
            "id": "practice9-4",
            "answers": [
              "less than I expected"
            ]
          },
          ". "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I go out less than I used to. I don't ",
          {
            "id": "practice9-5",
            "answers": [
              "go out as much as I used to"
            ]
          },
          ". "
        ]
      },
      {
        "id": 6,
        "parts": [
          "Karen's hair isn't as long as it used to be. Karen used to ",
          {
            "id": "practice9-6",
            "answers": [
              "have longer hair than she does now",
              "have longer hair"
            ]
          },
          ". "
        ]
      },
      {
        "id": 7,
        "parts": [
          "I know them better than you do. You don't ",
          {
            "id": "practice9-7",
            "answers": [
              "know them as well as I do"
            ]
          },
          ". "
        ]
      },
      {
        "id": 8,
        "parts": [
          "There are fewer people at this meeting than at the last one. There aren't ",
          {
            "id": "practice9-8",
            "answers": [
              "as many people at this meeting as at the last one"
            ]
          },
          ". "
        ]
      }
    ]
  },
  {
    "id": "comparatives-16",
    "title": "Practice: As vs. Than",
    "kind": "exercise",
    "instruction": "Complete the sentences using than or as.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I can't reach as high ",
          {
            "id": "practice10-1",
            "answers": [
              "as"
            ]
          },
          " you. You are taller ",
          {
            "id": "practice10-2",
            "answers": [
              "than"
            ]
          },
          " me. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "He doesn't know much. I know more ",
          {
            "id": "practice10-3",
            "answers": [
              "than"
            ]
          },
          " he does. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "I don't work particularly hard. Most people work as hard ",
          {
            "id": "practice10-4",
            "answers": [
              "as"
            ]
          },
          " I do. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "We were very surprised. Nobody was more surprised ",
          {
            "id": "practice10-5",
            "answers": [
              "than"
            ]
          },
          " we were. "
        ]
      },
      {
        "id": 5,
        "parts": [
          "She's not a very good player. I'm a better player ",
          {
            "id": "practice10-6",
            "answers": [
              "than"
            ]
          },
          " she is. "
        ]
      },
      {
        "id": 6,
        "parts": [
          "They've been very lucky. I wish we were as lucky ",
          {
            "id": "practice10-7",
            "answers": [
              "as"
            ]
          },
          " them. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-17",
    "title": "Practice: As...as + Words",
    "kind": "exercise",
    "instruction": "Complete the sentences using as ... as + the following: For sentences 7–9, use just as … as.",
    "items": [
      {
        "id": 1,
        "parts": [
          "I'm sorry I'm late. I got here ",
          {
            "id": "practice11-1",
            "answers": [
              "as fast as"
            ]
          },
          " I could. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "It was a difficult question. I answered it ",
          {
            "id": "practice11-2",
            "answers": [
              "as well as"
            ]
          },
          " I could. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "'How long can I stay with you?' 'You can stay ",
          {
            "id": "practice11-3",
            "answers": [
              "as long as"
            ]
          },
          " you like.' "
        ]
      },
      {
        "id": 4,
        "parts": [
          "I need the information quickly, so let me know ",
          {
            "id": "practice11-4",
            "answers": [
              "as soon as"
            ]
          },
          " possible. "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I like to keep fit, so I go swimming ",
          {
            "id": "practice11-5",
            "answers": [
              "as often as"
            ]
          },
          " I can. "
        ]
      },
      {
        "id": 6,
        "parts": [
          "I didn't want to wake anybody, so I came in ",
          {
            "id": "practice11-6",
            "answers": [
              "as quietly as"
            ]
          },
          " I could. "
        ]
      },
      {
        "id": 7,
        "parts": [
          "I'm going to sleep on the floor. It's ",
          {
            "id": "practice11-7",
            "answers": [
              "just as comfortable as"
            ]
          },
          " the bed. "
        ]
      },
      {
        "id": 8,
        "parts": [
          "You always say how tiring your job is, but I work ",
          {
            "id": "practice11-8",
            "answers": [
              "just as hard as"
            ]
          },
          " you. "
        ]
      },
      {
        "id": 9,
        "parts": [
          "At first I thought he was nice, but really he's ",
          {
            "id": "practice11-9",
            "answers": [
              "just as bad as"
            ]
          },
          " everybody else. "
        ]
      }
    ],
    "wordBank": [
      "bad",
      "comfortable",
      "fast",
      "hard",
      "long",
      "often",
      "quietly",
      "soon",
      "well"
    ]
  },
  {
    "id": "comparatives-18",
    "title": "Practice: 'The same as...'",
    "kind": "exercise",
    "instruction": "Write sentences using the same as.",
    "items": [
      {
        "id": 1,
        "parts": [
          "David and James are both 22 years old. David ",
          {
            "id": "practice12-1",
            "answers": [
              "is the same age as"
            ]
          },
          " James. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "You and I both have dark brown hair. Your hair ",
          {
            "id": "practice12-2",
            "answers": [
              "is the same color as",
              "is the same colour as"
            ]
          },
          " mine. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "I arrived at 10.25 and so did you. I arrived ",
          {
            "id": "practice12-3",
            "answers": [
              "at the same time as"
            ]
          },
          " you. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "My birthday is 5 April. It's Tom's birthday too. My birthday ",
          {
            "id": "practice12-4",
            "answers": [
              "is the same day as"
            ]
          },
          " Tom's. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-19",
    "title": "Superlative Adjectives and Adverbs",
    "kind": "theory",
    "sections": [
      {
        "heading": "Superlative Rules",
        "content": "<p>Superlatives identify the highest or lowest degree within a group. Short adjectives usually take -est; longer ones take most. Use the before superlative adjectives.</p><ul><li>tall → the tallest; happy → the happiest; big → the biggest</li><li>expensive → the most expensive</li><li>good / well → best; bad / badly → worst</li><li>Adverbs: fast → fastest, hard → hardest, quickly → most quickly. The is often optional with superlative adverbs.</li></ul>"
      },
      {
        "heading": "Using 'in' and 'of'",
        "content": "<p>After superlatives, we normally use <strong>in</strong> with places and groups of people. For a period of time, we normally use <strong>of</strong>.</p> <ul>\n<li>What's the longest river <strong>in</strong> the world? (not of the world)</li>\n<li>Who is the youngest student <strong>in</strong> the class? (not of the class)</li>\n<li>Yesterday was the hottest day <strong>of</strong> the year.</li>\n<li>What was the happiest day <strong>of</strong> your life?</li>\n</ul> <p>We often use the <strong>present perfect (I have done)</strong> after a superlative.</p> <ul>\n<li>What's the most important decision you've <strong>ever had to</strong> make?</li>\n<li>That was the best holiday I've <strong>had for</strong> a long time.</li>\n</ul>"
      }
    ]
  },
  {
    "id": "comparatives-20",
    "title": "Practice: Superlative + Ever",
    "kind": "exercise",
    "instruction": "What do you say in these situations? Use a superlative + ever. Use the words in brackets (in the correct form).",
    "items": [
      {
        "id": 1,
        "parts": [
          "You've just been to the cinema. The movie was extremely boring. You tell your friend:",
          " ",
          "(boring / movie / see) That's ",
          {
            "id": "practice13-1",
            "answers": [
              "the most boring movie I've ever seen",
              "the most boring movie I have ever seen"
            ]
          },
          "."
        ]
      },
      {
        "id": 2,
        "parts": [
          "Your friend has just told you a joke, which you think is very funny. You say:",
          " ",
          "(funny / joke / hear) That's ",
          {
            "id": "practice13-2",
            "answers": [
              "the funniest joke I've ever heard",
              "the funniest joke I have ever heard"
            ]
          },
          "."
        ]
      },
      {
        "id": 3,
        "parts": [
          "You're drinking coffee with a friend. It's really good coffee. You say:",
          " ",
          "(good / coffee / taste) This ",
          {
            "id": "practice13-3",
            "answers": [
              "is the best coffee I've ever tasted",
              "is the best coffee I have ever tasted"
            ]
          },
          "."
        ]
      },
      {
        "id": 4,
        "parts": [
          "You are talking to a friend about Sarah. Sarah is very generous. You tell your friend about her:",
          " ",
          "(generous / person / meet) She ",
          {
            "id": "practice13-4",
            "answers": [
              "is the most generous person I've ever met",
              "is the most generous person I have ever met"
            ]
          },
          "."
        ]
      },
      {
        "id": 5,
        "parts": [
          "You have just run ten kilometres. You've never run further than this. You say to your friend:",
          " ",
          "(far / run) That ",
          {
            "id": "practice13-5",
            "answers": [
              "is the farthest I've ever run",
              "is the furthest I have ever run",
              "is the furthest I've ever run",
              "is the farthest I have ever run",
              "is the furthest I have ever run"
            ]
          },
          "."
        ]
      },
      {
        "id": 6,
        "parts": [
          "You decided to give up your job. Now you think this was a bad mistake. You say to your friend:",
          " ",
          "(bad / mistake / make) It ",
          {
            "id": "practice13-6",
            "answers": [
              "was the worst mistake I've ever made",
              "was the worst mistake I have ever made"
            ]
          },
          "."
        ]
      },
      {
        "id": 7,
        "parts": [
          "Your friend meets a lot of people, some of them famous. You ask your friend:",
          " ",
          "(famous / person / meet?) Who ",
          {
            "id": "practice13-7",
            "answers": [
              "is the most famous person you've ever met",
              "is the most famous person you have ever met"
            ]
          },
          "?"
        ]
      }
    ]
  },
  {
    "id": "comparatives-21",
    "title": "Practice: Superlatives with 'of' and 'in'",
    "kind": "exercise",
    "instruction": "Complete the sentences. Use a superlative (-est or most ...) + a preposition (of or in). For sentences 7–12, use one of + a superlative + a preposition.",
    "items": [
      {
        "id": 1,
        "parts": [
          "It's a very good room. It's ",
          {
            "id": "practice14-1",
            "answers": [
              "the best room in"
            ]
          },
          " the hotel. "
        ]
      },
      {
        "id": 2,
        "parts": [
          "It's a very cheap restaurant. It's ",
          {
            "id": "practice14-2",
            "answers": [
              "the cheapest restaurant in"
            ]
          },
          " the town. "
        ]
      },
      {
        "id": 3,
        "parts": [
          "It was a very happy day. It was ",
          {
            "id": "practice14-3",
            "answers": [
              "the happiest day of"
            ]
          },
          " my life. "
        ]
      },
      {
        "id": 4,
        "parts": [
          "She's a very intelligent student. She's ",
          {
            "id": "practice14-4",
            "answers": [
              "the most intelligent student in"
            ]
          },
          " the class. "
        ]
      },
      {
        "id": 5,
        "parts": [
          "It's a very valuable painting. It's ",
          {
            "id": "practice14-5",
            "answers": [
              "the most valuable painting in"
            ]
          },
          " the gallery. "
        ]
      },
      {
        "id": 6,
        "parts": [
          "Spring is a very busy time for me. It's ",
          {
            "id": "practice14-6",
            "answers": [
              "the busiest time of"
            ]
          },
          " the year. "
        ]
      },
      {
        "id": 7,
        "parts": [
          "It's a very good room. It's ",
          {
            "id": "practice14-7",
            "answers": [
              "one of the best rooms in"
            ]
          },
          " the hotel. "
        ]
      },
      {
        "id": 8,
        "parts": [
          "He's a very rich man. He's one ",
          {
            "id": "practice14-8",
            "answers": [
              "of the richest men in"
            ]
          },
          " the country. "
        ]
      },
      {
        "id": 9,
        "parts": [
          "It's a very big castle. It's ",
          {
            "id": "practice14-9",
            "answers": [
              "one of the biggest castles in"
            ]
          },
          " Europe. "
        ]
      },
      {
        "id": 10,
        "parts": [
          "She's a very good player. She's ",
          {
            "id": "practice14-10",
            "answers": [
              "one of the best players on",
              "one of the best players in"
            ]
          },
          " the team. "
        ]
      },
      {
        "id": 11,
        "parts": [
          "It was a very bad experience. It was ",
          {
            "id": "practice14-11",
            "answers": [
              "one of the worst experiences of"
            ]
          },
          " my life. "
        ]
      },
      {
        "id": 12,
        "parts": [
          "It's a very famous university. It's ",
          {
            "id": "practice14-12",
            "answers": [
              "one of the most famous universities in"
            ]
          },
          " the world. "
        ]
      }
    ]
  },
  {
    "id": "comparatives-22",
    "title": "Practice: Mixed Comparatives & Superlatives",
    "kind": "exercise",
    "instruction": "Complete the sentences. Use a superlative (-est or most ...) or a comparative (-er or more ...).",
    "items": [
      {
        "id": 1,
        "parts": [
          "We stayed at ",
          {
            "id": "practice15-1",
            "answers": [
              "the cheapest"
            ]
          },
          " hotel in the town. (cheap) "
        ]
      },
      {
        "id": 2,
        "parts": [
          "Our hotel was ",
          {
            "id": "practice15-2",
            "answers": [
              "cheaper"
            ]
          },
          " than all the others in the town. (cheap) "
        ]
      },
      {
        "id": 3,
        "parts": [
          "The United States is very large, but Canada is ",
          {
            "id": "practice15-3",
            "answers": [
              "larger"
            ]
          },
          ". (large) "
        ]
      },
      {
        "id": 4,
        "parts": [
          "What's ",
          {
            "id": "practice15-4",
            "answers": [
              "the smallest"
            ]
          },
          " country in the world? (small) "
        ]
      },
      {
        "id": 5,
        "parts": [
          "I wasn't feeling well yesterday, but I feel a bit ",
          {
            "id": "practice15-5",
            "answers": [
              "better"
            ]
          },
          " today. (good) "
        ]
      },
      {
        "id": 6,
        "parts": [
          "It was an awful day. It was ",
          {
            "id": "practice15-6",
            "answers": [
              "the worst"
            ]
          },
          " day of my life. (bad) "
        ]
      },
      {
        "id": 7,
        "parts": [
          "What is ",
          {
            "id": "practice15-7",
            "answers": [
              "the most popular"
            ]
          },
          " sport in your country? (popular) "
        ]
      },
      {
        "id": 8,
        "parts": [
          "Everest is ",
          {
            "id": "practice15-8",
            "answers": [
              "the highest"
            ]
          },
          " mountain in the world. It is ",
          {
            "id": "practice15-9",
            "answers": [
              "higher"
            ]
          },
          " than any other mountain. (high) "
        ]
      },
      {
        "id": 9,
        "parts": [
          "This building is over 250 metres high, but it's not ",
          {
            "id": "practice15-10",
            "answers": [
              "the tallest"
            ]
          },
          " in the city. (tall) "
        ]
      },
      {
        "id": 10,
        "parts": [
          "I prefer this chair to the other one. It's ",
          {
            "id": "practice15-11",
            "answers": [
              "more comfortable"
            ]
          },
          ". (comfortable) "
        ]
      },
      {
        "id": 11,
        "parts": [
          "What's ",
          {
            "id": "practice15-12",
            "answers": [
              "the quickest"
            ]
          },
          " way to get to the station? (quick) "
        ]
      },
      {
        "id": 12,
        "parts": [
          "Which is ",
          {
            "id": "practice15-13",
            "answers": [
              "quicker"
            ]
          },
          " - the bus or the train? (quick) "
        ]
      },
      {
        "id": 13,
        "parts": [
          "What's ",
          {
            "id": "practice15-14",
            "answers": [
              "the most expensive"
            ]
          },
          " thing you've ever bought? (expensive) "
        ]
      },
      {
        "id": 14,
        "parts": [
          "Sue and Kevin have got three daughters. ",
          {
            "id": "practice15-15",
            "answers": [
              "The oldest",
              "the eldest"
            ]
          },
          " is 14 years old. (old) "
        ]
      }
    ]
  },
  {
    "id": "comparatives-23-complete-dialogue",
    "title": "Practice: Complete the Dialogue",
    "kind": "exercise",
    "instruction": "Complete the conversation about travel destinations.",
    "items": [
      {
        "id": 1,
        "parts": [
          "Friend 1: Which place is ",
          {
            "id": "dialogue-1-0",
            "answers": [
              "more beautiful"
            ],
            "hint": "beautiful"
          },
          ", Paris or Venice?"
        ]
      },
      {
        "id": 2,
        "parts": [
          "Friend 2: I think Venice is ",
          {
            "id": "dialogue-2-0",
            "answers": [
              "more romantic"
            ],
            "hint": "romantic"
          },
          " than Paris."
        ]
      },
      {
        "id": 3,
        "parts": [
          "Friend 1: That's true. And which is the ",
          {
            "id": "dialogue-3-0",
            "answers": [
              "best"
            ],
            "hint": "good"
          },
          " time to visit?"
        ]
      },
      {
        "id": 4,
        "parts": [
          "Friend 2: The summer is the ",
          {
            "id": "dialogue-4-0",
            "answers": [
              "most crowded"
            ],
            "hint": "crowded"
          },
          " time, but it's also the ",
          {
            "id": "dialogue-4-1",
            "answers": [
              "warmest"
            ],
            "hint": "warm"
          },
          " time."
        ]
      },
      {
        "id": 5,
        "parts": [
          "Friend 1: I find spring ",
          {
            "id": "dialogue-5-0",
            "answers": [
              "more pleasant"
            ],
            "hint": "pleasant"
          },
          " than summer."
        ]
      },
      {
        "id": 6,
        "parts": [
          "Friend 2: I agree. Spring is also ",
          {
            "id": "dialogue-6-0",
            "answers": [
              "cheaper"
            ],
            "hint": "cheap"
          },
          " than summer."
        ]
      },
      {
        "id": 7,
        "parts": [
          "Friend 1: So, which country has the ",
          { "id": "dialogue-7-0", "answers": ["worst"], "hint": "bad" },
          " weather you've experienced?"
        ]
      },
      {
        "id": 8,
        "parts": [
          "Friend 2: That's a difficult question. The ",
          { "id": "dialogue-8-0", "answers": ["wettest"], "hint": "wet" },
          " I've ever been was in England."
        ]
      }
    ]
  },
  {
    "id": "comparatives-24",
    "title": "Review and Homework",
    "kind": "homework",
    "sections": [
      {
        "heading": "Key Points",
        "content": "<ul>\n<li><strong>Comparative:</strong> Use for comparing two things.</li>\n<li><strong>Superlative:</strong> Use for comparing three or more things.</li>\n</ul><h4>Homework</h4><p>Write a short paragraph comparing two or three items, places, or people using comparative and superlative forms.</p>"
      }
    ]
  }
];
