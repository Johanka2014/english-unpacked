import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { MoversFloorMatch, MoversTextExercise, PendingMaterial } from '@/components/movers/MoversExercises';
import { moversSections, numberQuestions, spellingQuestions, oppositeQuestions, comparativeQuestions } from '@/data/moversData';
import introPicture from '@/assets/movers/classroom.png.asset.json';

export default function MoversUnit() {
  const { unitId } = useParams();
  const section = moversSections.find(item => item.id === unitId);
  return <div className="min-h-screen bg-background">
    <SEO title={`${section?.title ?? 'Movers'} | Get Ready for Movers | English Unpacked`} description="Get Ready for Movers activities: numbers, addresses, spelling and language practice." />
    <Navigation />
    <main className="container max-w-5xl px-4 py-8 sm:py-12">
      <Button variant="ghost" asChild className="mb-6"><Link to="/movers-practice"><ArrowLeft className="h-4 w-4 mr-2" />Get Ready for Movers</Link></Button>
      <header className="pb-6 border-b border-border"><p className="text-brand-accent font-semibold mb-2">{section?.label ?? 'Movers'}</p><h1 className="font-fredoka text-3xl sm:text-4xl font-semibold text-brand-navy">{section?.title ?? 'Section not found'}</h1></header>
      {!section?.available ? <p className="py-8 text-muted-foreground">{section ? 'Coming soon' : 'This section is not available.'}</p> : unitId === 'intro' ? <>
        <section className="py-8 border-b border-border"><img src={introPicture.url} alt="Jack introduces himself and gives his address: 38 Swan Street, Littlemore." className="w-full h-auto rounded-md" /></section>
        <section className="py-8 border-b border-border"><h2 className="font-fredoka text-2xl font-semibold text-brand-navy">Listen and point to the numbers</h2><PendingMaterial listening>Awaiting audio: Movers - 2.mp3</PendingMaterial><div className="grid grid-cols-2 sm:grid-cols-5 gap-3">{Array.from({ length: 10 }, (_, i) => (i + 1) * 10).map(n => <div key={n} className="rounded-md bg-secondary text-brand-navy p-4 text-center font-fredoka font-semibold text-2xl">{n}</div>)}</div></section>
        <MoversTextExercise key="numbers" title="Write the numbers" instruction="Read the words and type the correct number into the box." questions={numberQuestions} numeric />
        <section className="pt-8"><h2 className="font-fredoka text-2xl font-semibold text-brand-navy mb-4">Daisy’s address</h2><div className="grid md:grid-cols-2 gap-6"><blockquote className="text-lg leading-relaxed border-l-4 border-primary pl-5">“Hi! I’m Daisy. This is my address. I live in a flat on the fifth floor. My brother is at home. He’s dressing up.”</blockquote><address className="not-italic bg-secondary rounded-md p-5 leading-relaxed">Daisy Simms,<br />Flat 5a,<br />74 Browning Road,<br />Littlemore</address></div></section>
        <MoversFloorMatch />
      </> : <>
        <MoversTextExercise key="spelling" title="Complete the verbs" instruction="Jack and I like playing in the park! Fill in the missing letter for each action word." questions={spellingQuestions} letters><PendingMaterial>The picture of Jack and Daisy in the park is awaiting upload.</PendingMaterial></MoversTextExercise>
        <MoversTextExercise title="Opposites" instruction="Type the correct opposite for each word." questions={oppositeQuestions} bank={['young', 'big', 'short', 'long']}><PendingMaterial>The opposites illustrations are awaiting upload.</PendingMaterial></MoversTextExercise>
        <section aria-label="Comparatives" className="py-8 border-b border-border"><h2 className="font-fredoka text-2xl font-semibold text-brand-navy">Comparatives</h2><PendingMaterial>Awaiting the height and age pictures. These questions will be ready when the pictures are added.</PendingMaterial><fieldset disabled className="opacity-60"><MoversTextExercise title="Comparative sentences" instruction="Type taller, shorter, older or younger." questions={comparativeQuestions} bank={['taller', 'shorter', 'older', 'younger']} /></fieldset></section>
        <section className="py-8 border-b border-border"><h2 className="font-fredoka text-2xl font-semibold text-brand-navy">Listening practice test</h2><PendingMaterial listening>Awaiting the park scene picture and audio: Movers - 9.mp3</PendingMaterial></section>
      </>}
      <nav aria-label="Lesson navigation" className="flex flex-wrap justify-between gap-3 mt-8"><Button asChild variant="outline"><Link to="/members/activities?tab=young-learners"><ArrowLeft className="h-4 w-4 mr-2" />Young Learners</Link></Button>{section?.available && <Button asChild><Link to={unitId === 'intro' ? '/movers-practice/unit-1' : '/movers-practice'}>{unitId === 'intro' ? 'At the park' : 'Back to course'}<ArrowRight className="h-4 w-4 ml-2" /></Link></Button>}</nav>
    </main><Footer />
  </div>;
}