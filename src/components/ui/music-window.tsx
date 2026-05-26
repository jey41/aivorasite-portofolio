'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';

const track = {
  title: 'Get You',
  artist: 'Daniel Caesar ft. Kali Uchis',
  src: '/audio/Daniel%20Caesar%20-%20Get%20You%20ft.%20Kali%20Uchis%20%5BOfficial%20Video%5D.mp3',
};

function formatTime(value: number) {
  if (!Number.isFinite(value)) {
    return '0:00';
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${seconds}`;
}

export function MusicWindow() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekTime, setSeekTime] = useState(0);

  const visibleTime = isSeeking ? seekTime : currentTime;
  const canSeek = duration > 0;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume;
    audio.muted = isMuted;
  }, [isMuted, volume]);

  const toggleWindow = () => {
    setIsOpen((current) => !current);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }

      return;
    }

    audio.pause();
  };

  const handleSeekPreview = (value: string) => {
    const nextTime = Number(value);

    if (!Number.isFinite(nextTime)) {
      return;
    }

    setIsSeeking(true);
    setSeekTime(nextTime);
  };

  const commitSeek = (value: string) => {
    const audio = audioRef.current;
    const nextTime = Number(value);

    if (!audio || !Number.isFinite(nextTime)) {
      setIsSeeking(false);
      return;
    }

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    setSeekTime(nextTime);
    setIsSeeking(false);
  };

  const handleVolume = (value: string) => {
    const nextVolume = Number(value);

    if (!Number.isFinite(nextVolume)) {
      return;
    }

    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  return (
    <div className="fixed bottom-5 right-4 z-[70] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <audio
        ref={audioRef}
        src={track.src}
        loop
        preload="metadata"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          setCurrentTime(event.currentTarget.currentTime);
        }}
        onTimeUpdate={(event) => {
          if (!isSeeking) {
            setCurrentTime(event.currentTarget.currentTime);
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {isOpen && (
        <section
          aria-label="Music player"
          className="w-[calc(100vw-2rem)] border-4 border-on-surface bg-surface-container-lowest text-on-surface shadow-[8px_8px_0_var(--color-on-surface)] sm:w-80"
        >
          <div className="flex items-center justify-between border-b-4 border-on-surface bg-primary-container px-3 py-2">
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center border-2 border-on-surface bg-secondary-container text-on-secondary">
                <Music2 size={12} strokeWidth={3} />
              </span>
              <p className="truncate font-label-bold text-label-bold uppercase">
                Music.exe
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-7 w-7 place-items-center border-2 border-on-surface bg-surface-container-lowest text-on-surface transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
              aria-label="Close music window"
            >
              <X size={16} strokeWidth={3} />
            </button>
          </div>

          <div className="space-y-4 p-4">
            <div>
              <p className="font-headline-md text-[22px] font-black leading-7">
                {track.title}
              </p>
              <p className="mt-1 font-label-bold text-label-bold uppercase text-on-surface-variant">
                {track.artist}
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max={duration || 1}
                step="1"
                value={Math.min(visibleTime, duration || 1)}
                disabled={!canSeek}
                onPointerDown={(event) => {
                  setIsSeeking(true);
                  setSeekTime(Number(event.currentTarget.value));
                }}
                onInput={(event) => handleSeekPreview(event.currentTarget.value)}
                onChange={(event) => commitSeek(event.currentTarget.value)}
                onPointerUp={(event) => commitSeek(event.currentTarget.value)}
                className="h-2 w-full cursor-pointer accent-secondary-container disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Song progress"
              />
              <div className="flex justify-between font-label-bold text-label-bold text-on-surface-variant">
                <span>{formatTime(visibleTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlayback}
                className="grid h-12 w-12 shrink-0 place-items-center border-4 border-on-surface bg-secondary-container text-on-secondary transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                {isPlaying ? (
                  <Pause size={22} fill="currentColor" strokeWidth={3} />
                ) : (
                  <Play size={22} fill="currentColor" strokeWidth={3} />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMuted((current) => !current)}
                className="grid h-10 w-10 shrink-0 place-items-center border-2 border-on-surface bg-surface-container-low text-on-surface transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX size={18} strokeWidth={3} />
                ) : (
                  <Volume2 size={18} strokeWidth={3} />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(event) => handleVolume(event.target.value)}
                className="h-2 min-w-0 flex-1 cursor-pointer accent-primary"
                aria-label="Music volume"
              />
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={toggleWindow}
        className="grid h-14 w-14 place-items-center border-4 border-on-surface bg-primary-container text-on-surface shadow-[5px_5px_0_var(--color-on-surface)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Hide music window' : 'Show music window'}
      >
        <Music2 size={26} strokeWidth={3} />
      </button>
    </div>
  );
}
