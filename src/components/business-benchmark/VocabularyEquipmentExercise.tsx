import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import EquipmentActivity from "./EquipmentActivity";

const PARTS = [
  { id: "p1", prompt: "You press these to control a device.", options: ["buttons", "cover", "battery", "screen"], answer: "buttons" },
  { id: "p2", prompt: "This protects the parts inside a machine.", options: ["focus", "cover", "lever", "cable"], answer: "cover" },
  { id: "p3", prompt: "This stores electrical energy.", options: ["battery", "switch", "screen", "metal ring"], answer: "battery" },
  { id: "p4", prompt: "You move this bar to operate a mechanism.", options: ["lever", "toner", "focus", "cable"], answer: "lever" },
  { id: "p5", prompt: "This connects equipment or carries power/data.", options: ["cable", "cover", "button", "battery"], answer: "cable" },
  { id: "p6", prompt: "A camera lens needs this adjusted to make an image sharp.", options: ["focus", "screen", "switch", "toner"], answer: "focus" },
];

const MATERIALS = [
  { id: "m1", prompt: "A material made from trees, used for desks and packaging.", options: ["wood", "glass", "rubber", "steel"], answer: "wood" },
  { id: "m2", prompt: "A strong metal commonly used in tools and frames.", options: ["cotton", "steel", "plastic", "glass"], answer: "steel" },
  { id: "m3", prompt: "A flexible material used for grips and seals.", options: ["rubber", "wood", "aluminium", "paper"], answer: "rubber" },
  { id: "m4", prompt: "The adjective related to 'circle'.", options: ["circular", "rectangular", "triangular", "curved"], answer: "circular" },
  { id: "m5", prompt: "The adjective related to 'rectangle'.", options: ["square", "rectangular", "cylindrical", "straight"], answer: "rectangular" },
];

const PROBLEMS = [
  { id: "g1", prompt: "The printer continues to jam. It ____ jamming.", options: ["keeps", "needs", "is used for"], answer: "keeps" },
  { id: "g2", prompt: "The projector bulb is old. It needs ____.", options: ["changing", "change", "changed"], answer: "changing" },
  { id: "g3", prompt: "The headset repeatedly loses its connection. It keeps ____.", options: ["disconnecting", "disconnected", "disconnect"], answer: "disconnecting" },
  { id: "g4", prompt: "The laptop gets extremely hot. It needs ____.", options: ["checking", "check", "checks"], answer: "checking" },
  { id: "g5", prompt: "The software is out of date. It needs ____.", options: ["updating", "update", "updates"], answer: "updating" },
];

const PHRASAL = [
  { id: "v1", prompt: "Connect equipment to electricity.", options: ["plug in", "switch off", "take apart", "set up"], answer: "plug in" },
  { id: "v2", prompt: "Prepare and configure new equipment.", options: ["set up", "turn down", "take out", "plug out"], answer: "set up" },
  { id: "v3", prompt: "Stop a device by pressing its power control.", options: ["switch off", "put on", "turn up", "break down"], answer: "switch off" },
  { id: "v4", prompt: "Separate a machine into its component parts.", options: ["take apart", "fill in", "pick up", "carry on"], answer: "take apart" },
];

const VocabularyEquipmentExercise = () => (
  <div className="space-y-8">
    <EquipmentActivity title="1. Component parts" instructions="Choose the correct name for each part or function." questions={PARTS} activityType="vocabulary" />
    <EquipmentActivity title="2. Materials and shapes" instructions="Match each definition with a material or shape adjective." questions={MATERIALS} activityType="vocabulary" />
    <EquipmentActivity title="3. Using electrical equipment" instructions="Choose the phrasal verb with the correct meaning." questions={PHRASAL} activityType="vocabulary" />
    <EquipmentActivity title="4. Describing problems" instructions={<><p>Use <strong>keep + -ing</strong> for a repeated unwanted action: “It keeps freezing.”</p><p>Use <strong>need + -ing</strong> when something should be repaired or changed: “The battery needs replacing.”</p></>} questions={PROBLEMS} activityType="grammar" />
    <Card><CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><Lightbulb className="h-5 w-5 text-primary" />5. Equipment English for today</CardTitle></CardHeader><CardContent><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["USB-C hub — connects several devices through one port", "wireless charger — charges without plugging into the phone", "webcam — sends live video", "portable SSD — stores large files", "smart display — combines a screen with connected services", "noise-cancelling headset — reduces background noise"].map((item) => <p key={item} className="rounded-md border bg-muted/30 p-3 text-sm">{item}</p>)}</div></CardContent></Card>
  </div>
);

export default VocabularyEquipmentExercise;