import { useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  label?: string;
}

const AudioPlayer = ({ src, label }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const restart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(pct);
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </button>
      <div className="flex-1">
        {label && <div className="text-sm font-medium text-purple-700 mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>{label}</div>}
        <div className="w-full bg-white/60 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button
        onClick={restart}
        className="w-8 h-8 rounded-full bg-white/60 text-purple-600 flex items-center justify-center hover:bg-white transition"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AudioPlayer;
