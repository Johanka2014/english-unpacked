import { Card, CardContent } from "@/components/ui/card";

const textA = [
  "Answer all incoming phone calls before the third ring.",
  "When you answer the phone, be warm and enthusiastic. Your voice at the end of the telephone line is sometimes the only impression of your company a caller will get.",
  "When answering the phone, welcome callers courteously and identify yourself and your organisation. Say, for instance, 'Good morning. Cypress Technologies. Susan speaking. How may I help you?' No one should ever have to ask if they've reached such and such a business.",
  "Keep your voice volume moderate and speak slowly and clearly when answering the phone, so your caller can understand you easily.",
  "Always ask the caller if it's all right to put him or her on hold and don't leave people on hold for longer than is necessary. If possible, provide callers on hold with progress reports every 30 to 45 seconds. Offer them choices such as 'That line is still busy. Will you continue to hold or should I have Mrs Lee call you back?'",
];

const textB = [
  "Train your voice and vocabulary to be positive when phone answering, even on a 'down' day. For example, rather than saying 'I don't know', say 'Let me find out about that for you.'",
  "Take telephone messages completely and accurately. If there's something you don't understand or can't spell, such as a person's surname, ask the caller to repeat it or spell it for you. Then make sure the message gets to the intended recipient.",
  "Respond to all your calls within one business day. I can't emphasise this one enough. The early caller can get the contract, the sale, the problem solved and reinforce the favourable impression of your business that you want to circulate.",
  "If you use an answering machine to answer calls when you can't, make sure that you have a professional message recorded. Update your answering machine message as needed.",
  "Train everyone else who answers the phone to answer the same way. Check on how your business's phone is being answered by calling in and seeing if the phone is being answered in a professional manner.",
];

const Reading2Unit4 = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Phone-answering tips to win business</h3>
        <p className="text-sm italic text-muted-foreground mb-4">From Susan Ward, Your Guide to Small Business: Canada.</p>
        <p className="text-muted-foreground">
          Work in pairs. One student should read Text A, the other Text B. While you read, make brief notes, then tell each other about the advice you read.
        </p>
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold font-merriweather text-foreground mb-2">Text A</h4>
          <p className="text-sm font-medium text-brand-royal mb-4">How you answer the phone says a great deal about your business</p>
          <ol className="list-decimal list-inside space-y-3 text-foreground">
            {textA.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold font-merriweather text-foreground mb-2">Text B</h4>
          <p className="text-sm font-medium text-brand-royal mb-4">Phone-answering tips continued</p>
          <ol className="list-decimal list-inside space-y-3 text-foreground">
            {textB.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </CardContent>
      </Card>
    </div>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Discussion</h3>
        <p className="text-muted-foreground">In pairs or small groups, discuss what advice is very useful, and what is not so important.</p>
      </CardContent>
    </Card>
  </div>
);

export default Reading2Unit4;
