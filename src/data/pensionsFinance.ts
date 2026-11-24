export interface PensionFlashcard {
  term: string;
  definition: string;
  hint: string;
}

export interface PensionGap {
  id: number;
  options: [string, string];
  answer: string;
}

export interface PensionGapSegment {
  text?: string;
  gap?: PensionGap;
}

export interface PensionGapBlock {
  heading?: string;
  segments: PensionGapSegment[];
}

export interface ProductTerm {
  id: number;
  text: string;
}

export interface ProductDefinition {
  id: string;
  text: string;
  answer: number;
}

export interface FinanceMcQuestion {
  id: number;
  prompt: string;
  options: { id: 'a' | 'b' | 'c'; text: string }[];
  answer: 'a' | 'b' | 'c';
}

export const PENSION_FLASHCARDS: PensionFlashcard[] = [
  { term: 'Sum (pension sum)', definition: 'A specific amount of money paid regularly or as a total amount for a pension.', hint: 'Total quantity of money.' },
  { term: 'Recipient', definition: 'A person who receives something, such as pension payments or insurance benefits.', hint: 'The one at the receiving end of a payment.' },
  { term: 'Widow', definition: 'A woman whose husband has died, often eligible to continue receiving his pension payments.', hint: 'A marital status relating to bereavement.' },
  { term: 'Sufficient', definition: 'Enough or adequate for a particular purpose (e.g., enough contributions).', hint: "Synonym for 'adequate'." },
  { term: 'Working lives', definition: 'The total period of time during which a person is typically employed and making contributions.', hint: 'The duration of your career.' },
  { term: 'Premiums', definition: 'The regular payments made to an insurance company or pension provider.', hint: "The 'cost' of keeping a policy active." },
  { term: 'Benefits', definition: 'The money or services provided by an insurance policy or a pension scheme.', hint: 'The payout or advantage received.' },
  { term: 'Trustees', definition: 'Individuals legally responsible for managing a pension fund on behalf of its members.', hint: "People who hold something 'in trust'." },
  { term: 'Pension providers', definition: 'Organizations like banks or insurance companies that offer and manage pension schemes.', hint: 'The entities that supply the product.' },
  { term: 'Pension fund', definition: 'A large pool of money, created by contributions, which is invested to pay for future pensions.', hint: "The 'pot' of money being invested." },
  { term: 'Lump sum', definition: 'A single, large payment of money made all at once rather than in smaller installments.', hint: 'One big payment.' },
  { term: 'Private pensions', definition: 'Pension schemes managed by private companies (banks, etc.) rather than the state.', hint: 'Non-government retirement schemes.' },
  { term: 'Annuity', definition: 'A product bought with a lump sum that provides a guaranteed regular income for life.', hint: "Converts a 'pot' of money into a 'salary'." },
  { term: 'Life insurance', definition: 'A policy that pays out a sum only if the insured person dies within a specific term.', hint: 'Often used for fixed-term protection.' },
  { term: 'Life assurance', definition: 'A policy guaranteed to pay out a sum whenever the insured person eventually dies.', hint: "It 'assures' a payout eventually." },
  { term: 'Endowment assurance', definition: 'A policy paying a lump sum on a fixed date, or earlier if the policyholder dies.', hint: 'A combination of savings and life protection.' },
  { term: 'Endowment mortgage', definition: 'A mortgage where only interest is paid, and an endowment policy pays the principal later.', hint: 'Repayment is dependent on an investment policy.' },
  { term: 'Private health insurance', definition: 'Insurance that pays for medical treatment in private hospitals.', hint: 'Covers non-state healthcare costs.' },
  { term: 'Sickness insurance', definition: 'A policy that provides income if you are unable to work because of illness.', hint: 'Income protection for health reasons.' },
  { term: 'Equity release scheme', definition: "A way for older homeowners to borrow money against their home's value, repaid upon death.", hint: 'Unlocking cash from your house value.' },
  { term: 'Financial adviser', definition: 'A professional who provides advice on how to manage money and which products to buy.', hint: 'An expert consultant for your money.' },
  { term: 'Commission', definition: 'A fee paid to a salesperson or adviser based on the products they sell.', hint: 'A percentage of the sale price.' },
  { term: 'Actuary', definition: 'A person who uses statistics to calculate insurance risks and premiums.', hint: 'A specialist mathematician for insurance.' },
  { term: 'Matures', definition: 'When an investment policy (like an endowment) reaches its end date and pays out.', hint: "The policy 'grows up' and finishes." },
  { term: 'Inflation', definition: 'The general increase in prices and the fall in the purchasing value of money.', hint: 'Why things get more expensive over time.' },
  { term: 'Index linked', definition: 'When payments increase automatically in line with the rate of inflation.', hint: 'Connected to the consumer price index.' },
  { term: 'Pensions crisis', definition: 'The danger of not having enough money to pay for the growing number of retirees.', hint: 'A demographic and financial emergency.' },
  { term: 'Top-up pension', definition: 'An additional contribution or scheme used to increase a basic pension.', hint: "A 'supplementary' payment." },
  { term: 'Financial institution', definition: 'A company engaged in financial activities, such as a bank or insurance company.', hint: 'Formal term for a finance-based organization.' },
  { term: 'Board of trustees', definition: 'The group of people that governs and oversees a pension fund.', hint: 'The governing body of a trust.' },
  { term: 'Institutional investors', definition: 'Large organizations (like pension funds) that invest huge sums in the stock market.', hint: 'Big corporate investors.' },
  { term: 'Private investors', definition: 'Individual people who invest their own money in the stock market.', hint: 'Retail or personal investors.' },
  { term: 'Regulated', definition: 'Controlled or supervised by government rules or official authorities.', hint: 'Subject to laws and oversight.' },
];

export const PENSION_GAP_BLOCKS: PensionGapBlock[] = [
  {
    segments: [
      { text: 'A pension is a ' },
      { gap: { id: 1, options: ['sum', 'quantity'], answer: 'sum' } },
      { text: ' of money paid regularly to a person who has reached a certain age or retired. It is usually paid until the ' },
      { gap: { id: 2, options: ["receiver's", "recipient's"], answer: "recipient's" } },
      { text: ' death, although in some cases a ' },
      { gap: { id: 3, options: ['widow', 'wife'], answer: 'widow' } },
      { text: " may continue to receive payments after her husband's death." },
    ],
  },
  {
    heading: 'State pensions',
    segments: [
      { text: 'Pensions paid by the state. In many countries, these are contribution-based: people who have not paid ' },
      { gap: { id: 4, options: ['sufficient', 'satisfactory'], answer: 'sufficient' } },
      { text: ' contributions during their ' },
      { gap: { id: 5, options: ['work lives', 'working lives'], answer: 'working lives' } },
      { text: ' do not receive the full amount.' },
    ],
  },
  {
    heading: 'Occupational pension schemes',
    segments: [
      { text: 'Pension schemes for employees working in a particular industry or for a particular company. In some cases, these are administered by insurance companies who invest the ' },
      { gap: { id: 6, options: ['payments', 'premiums'], answer: 'premiums' } },
      { text: ' and use the profits from this to pay out the ' },
      { gap: { id: 7, options: ['benefits', 'rewards'], answer: 'benefits' } },
      { text: '. In other cases they are self-administered: the premiums are invested by the pension fund ' },
      { gap: { id: 8, options: ['trustees', 'trusteds'], answer: 'trustees' } },
      { text: '.' },
    ],
  },
  {
    heading: 'Personal pension schemes',
    segments: [
      { text: 'Schemes provided by ' },
      { gap: { id: 9, options: ['pension givers', 'pension providers'], answer: 'pension providers' } },
      { text: ' such as insurance companies and banks. The premiums are invested in a ' },
      { gap: { id: 10, options: ['pension treasure', 'pension fund'], answer: 'pension fund' } },
      { text: ', and on retirement the pensioner receives a ' },
      { gap: { id: 11, options: ['lump sum', 'chunk sum'], answer: 'lump sum' } },
      { text: ' to invest in an annuity. Personal pension schemes are also known as ' },
      { gap: { id: 12, options: ['"private pensions"', '"alternative pensions"'], answer: '"private pensions"' } },
      { text: '.' },
    ],
  },
];

export const ALL_PENSION_GAPS: PensionGap[] = PENSION_GAP_BLOCKS.flatMap((block) =>
  block.segments.flatMap((seg) => (seg.gap ? [seg.gap] : []))
);

export const PRODUCT_TERMS: ProductTerm[] = [
  { id: 1, text: 'annuity' },
  { id: 2, text: 'life insurance' },
  { id: 3, text: 'life assurance' },
  { id: 4, text: 'endowment assurance' },
  { id: 5, text: 'endowment mortgage' },
  { id: 6, text: 'private health insurance' },
  { id: 7, text: 'sickness insurance' },
  { id: 8, text: 'equity release scheme' },
];

export const PRODUCT_DEFINITIONS: ProductDefinition[] = [
  { id: 'a', text: "If you're too ill to work, you receive payments.", answer: 7 },
  { id: 'b', text: 'You pay a lump sum, and receive regular payments for the rest of your life.', answer: 1 },
  { id: 'c', text: 'You receive a lump sum on a certain date (or earlier if you die).', answer: 4 },
  { id: 'd', text: 'Your beneficiaries receive money if you die young.', answer: 2 },
  { id: 'e', text: 'You borrow money to buy a house. Many years later, your endowment repays the loan.', answer: 5 },
  { id: 'f', text: 'You borrow money. When you die, your house is sold to repay the loan.', answer: 8 },
  { id: 'g', text: 'Your beneficiaries receive money when you die.', answer: 3 },
  { id: 'h', text: 'Your private hospital bills are paid.', answer: 6 },
];

export const GENERAL_FINANCE_MC: FinanceMcQuestion[] = [
  { id: 1, prompt: 'A person who gives you information about financial products is a', options: [{ id: 'a', text: 'financial adviser' }, { id: 'b', text: 'financial helper' }, { id: 'c', text: 'financial assistant' }], answer: 'a' },
  { id: 2, prompt: 'Some financial advisers only earn money by giving advice. Others earn ___ from selling financial products.', options: [{ id: 'a', text: 'wages' }, { id: 'b', text: 'payments' }, { id: 'c', text: 'commission' }], answer: 'c' },
  { id: 3, prompt: 'An actuary is a person who ___ insurance risk and calculates premiums.', options: [{ id: 'a', text: 'thinks about' }, { id: 'b', text: 'assesses' }, { id: 'c', text: 'decides' }], answer: 'b' },
  { id: 4, prompt: 'When an endowment ___, you receive a lump sum.', options: [{ id: 'a', text: 'finishes' }, { id: 'b', text: 'ends' }, { id: 'c', text: 'matures' }], answer: 'c' },
  { id: 5, prompt: 'Prices go up every year. This is because of', options: [{ id: 'a', text: 'inflation' }, { id: 'b', text: 'expansion' }, { id: 'c', text: 'evolution' }], answer: 'a' },
  { id: 6, prompt: 'Some pension payments increase every year ___ inflation.', options: [{ id: 'a', text: 'in time with' }, { id: 'b', text: 'in line with' }, { id: 'c', text: 'at the speed of' }], answer: 'b' },
  { id: 7, prompt: 'Pension payments which increase in line with inflation are', options: [{ id: 'a', text: 'index connected' }, { id: 'b', text: 'index linked' }, { id: 'c', text: 'index controlled' }], answer: 'b' },
  { id: 8, prompt: 'Many financial analysts predict a ___ caused by too many pensioners and not enough workers.', options: [{ id: 'a', text: 'pensions crisis' }, { id: 'b', text: 'pensions disaster' }, { id: 'c', text: 'pensions emergency' }], answer: 'a' },
  { id: 9, prompt: 'A small additional pension is known as a', options: [{ id: 'a', text: 'topper pension' }, { id: 'b', text: 'topping pension' }, { id: 'c', text: 'top-up pension' }], answer: 'c' },
  { id: 10, prompt: 'Banks and insurance companies are types of', options: [{ id: 'a', text: 'financial institution' }, { id: 'b', text: 'finance company' }, { id: 'c', text: 'financier' }], answer: 'a' },
  { id: 11, prompt: 'Pension funds are usually administered by a ___ of trustees.', options: [{ id: 'a', text: 'group' }, { id: 'b', text: 'bunch' }, { id: 'c', text: 'board' }], answer: 'c' },
  { id: 12, prompt: 'Pension funds, insurance companies and other financial institutions that invest on the stock market are known as', options: [{ id: 'a', text: 'commercial investors' }, { id: 'b', text: 'institutional investors' }, { id: 'c', text: 'company investors' }], answer: 'b' },
  { id: 13, prompt: 'Individual people who invest on the stock market are known as', options: [{ id: 'a', text: 'private investors' }, { id: 'b', text: 'personal investors' }, { id: 'c', text: 'one-man investors' }], answer: 'a' },
  { id: 14, prompt: 'In most countries, financial products and services are ___ by the government.', options: [{ id: 'a', text: 'watched' }, { id: 'b', text: 'decided' }, { id: 'c', text: 'regulated' }], answer: 'c' },
];

export const PENSIONS_TOTAL_QUESTIONS =
  ALL_PENSION_GAPS.length + PRODUCT_DEFINITIONS.length + GENERAL_FINANCE_MC.length;

export const scoreSectionA = (answers: Record<number, string>): number =>
  ALL_PENSION_GAPS.filter((gap) => answers[gap.id] === gap.answer).length;

export const scoreSectionB = (answers: Record<string, string>): number =>
  PRODUCT_DEFINITIONS.filter((def) => Number(answers[def.id]) === def.answer).length;

export const scoreSectionC = (answers: Record<number, string>): number =>
  GENERAL_FINANCE_MC.filter((q) => answers[q.id] === q.answer).length;