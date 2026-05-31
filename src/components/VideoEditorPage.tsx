import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Music, Wand2, Layers, MonitorPlay, Mic, Video, 
  Image as ImageIcon, Scissors, Check, Play, Pause, 
  RotateCcw, Settings, ChevronRight, Type, Smile, 
  Sparkles, SplitSquareHorizontal, UserSquare2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function VideoEditorPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'record' | 'edit'>('record');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  // Feature States
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [isGreenScreen, setIsGreenScreen] = useState(false);
  const [duetMode, setDuetMode] = useState<'none' | 'left-right' | 'top-bottom' | 'pip'>('none');
  const [selectedMusic, setSelectedMusic] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (activeTab === 'record' && !recordedVideo) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setCameraError(null);
        })
        .catch(err => {
          console.error("Error accessing webcam:", err);
          try {
            const canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 480;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              const drawFallback = () => {
                ctx.fillStyle = '#111';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#00f2ea'; 
                ctx.font = 'bold 24px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Tiada Kamera Terjumpa', canvas.width / 2, canvas.height / 2 - 20);
                ctx.fillStyle = '#888';
                ctx.font = '16px Inter, sans-serif';
                ctx.fillText('(Mod Simulasi)', canvas.width / 2, canvas.height / 2 + 20);
                
                const time = Date.now() / 1000;
                const x = canvas.width / 2 + Math.cos(time) * 100;
                const y = canvas.height / 2 + Math.sin(time) * 50;
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.fill();
              };
              const intervalId = setInterval(drawFallback, 100);
              return () => {
                clearInterval(intervalId);
                if (streamRef.current) {
                  streamRef.current.getTracks().forEach(track => track.stop());
                }
              };
            }
            const canvasAny = canvas as any;
            const stream = canvasAny.captureStream ? canvasAny.captureStream(30) : canvasAny.mozCaptureStream ? canvasAny.mozCaptureStream(30) : null;
            if (stream) {
              streamRef.current = stream;
              if (videoRef.current) {
                videoRef.current.srcObject = stream;
              }
              setCameraError(null);
              return;
            }
          } catch (fallbackErr) {
            console.error("Fallback camera failed:", fallbackErr);
          }
          setCameraError("Kamera tidak dijumpai. Sila pastikan peranti anda mempunyai kamera dan kebenaran telah diberikan.");
        });
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [activeTab, recordedVideo]);

  const handleRecordToggle = () => {
    if (isRecording) {
      setIsRecording(false);
      setTimeout(() => {
        setRecordedVideo('/1.mp4');
        setActiveTab('edit');
      }, 500);
    } else {
      setIsRecording(true);
    }
  };

  const filters = [
    { id: 'none', name: 'Normal', css: '' },
    { id: 'portrait', name: 'Potret', css: 'contrast(1.1) brightness(1.1) saturate(1.2)' },
    { id: 'landscape', name: 'Pemandangan', css: 'saturate(1.5) contrast(1.2)' },
    { id: 'food', name: 'Makanan', css: 'brightness(1.1) saturate(1.4) sepia(0.2)' },
    { id: 'vibe', name: 'Vibe', css: 'hue-rotate(15deg) saturate(1.2) contrast(1.1)' },
    { id: 'bw', name: 'B&W', css: 'grayscale(1) contrast(1.2)' },
  ];

  const renderToolPanel = () => {
    switch (activeTool) {
      case 'filters':
        return (
          <div className="absolute bottom-24 left-0 right-0 bg-black/80 backdrop-blur-md p-4 rounded-t-2xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Penapis (Filters)</h3>
              <button onClick={() => setActiveTool(null)}><X className="text-white" /></button>
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {filters.map(f => (
                <button 
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className="flex flex-col items-center gap-2 min-w-[70px]"
                >
                  <div className={`w-14 h-14 rounded-full border-2 ${selectedFilter === f.id ? 'border-[var(--primary-green)]' : 'border-transparent'} overflow-hidden`}>
                    <img src="/1.mp4" alt={f.name} className="w-full h-full object-cover" style={{ filter: f.css }} />
                  </div>
                  <span className={`text-xs ${selectedFilter === f.id ? 'text-[var(--primary-green)] font-bold' : 'text-white'}`}>{f.name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'effects':
        return (
          <div className="absolute bottom-24 left-0 right-0 bg-black/80 backdrop-blur-md p-4 rounded-t-2xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Kesan (Effects)</h3>
              <button onClick={() => setActiveTool(null)}><X className="text-white" /></button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button 
                onClick={() => setIsGreenScreen(!isGreenScreen)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border ${isGreenScreen ? 'bg-[var(--primary-green)]/20 border-[var(--primary-green)] text-[var(--primary-green)]' : 'bg-white/10 border-transparent text-white'}`}
              >
                <UserSquare2 size={28} className="mb-2" />
                <span className="text-xs text-center">Green Screen</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 text-white">
                <Sparkles size={28} className="mb-2" />
                <span className="text-xs text-center">Beauty</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 text-white">
                <Smile size={28} className="mb-2" />
                <span className="text-xs text-center">AR Face</span>
              </button>
            </div>
          </div>
        );
      case 'duet':
        return (
          <div className="absolute bottom-24 left-0 right-0 bg-black/80 backdrop-blur-md p-4 rounded-t-2xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Duet / Stitch</h3>
              <button onClick={() => setActiveTool(null)}><X className="text-white" /></button>
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setDuetMode('left-right')} className={`p-4 rounded-xl border ${duetMode === 'left-right' ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/20' : 'border-white/20 bg-white/10'}`}>
                <SplitSquareHorizontal size={32} className="text-white" />
                <span className="text-white text-xs block mt-2">Sebelah</span>
              </button>
              <button onClick={() => setDuetMode('top-bottom')} className={`p-4 rounded-xl border ${duetMode === 'top-bottom' ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/20' : 'border-white/20 bg-white/10'}`}>
                <SplitSquareHorizontal size={32} className="text-white rotate-90" />
                <span className="text-white text-xs block mt-2">Atas/Bawah</span>
              </button>
              <button onClick={() => setDuetMode('pip')} className={`p-4 rounded-xl border ${duetMode === 'pip' ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/20' : 'border-white/20 bg-white/10'}`}>
                <Layers size={32} className="text-white" />
                <span className="text-white text-xs block mt-2">PiP</span>
              </button>
            </div>
          </div>
        );
      case 'music':
        return (
          <div className="absolute bottom-24 left-0 right-0 bg-black/80 backdrop-blur-md p-4 rounded-t-2xl animate-in slide-in-from-bottom-10 h-64 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Tambah Muzik</h3>
              <button onClick={() => setActiveTool(null)}><X className="text-white" /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              {['Trending Audio 1', 'Viral Song 2026', 'Chill LoFi Beats', 'Funny Sound Effect'].map((song, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer" onClick={() => setSelectedMusic(song)}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--primary-green)]/20 rounded flex items-center justify-center">
                      <Music size={20} className="text-[var(--primary-green)]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{song}</p>
                      <p className="text-white/50 text-xs">00:30 • 1.2M videos</p>
                    </div>
                  </div>
                  {selectedMusic === song && <Check className="text-[var(--primary-green)]" />}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col md:flex-row">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={() => navigate(-1)} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
          <X size={28} />
        </button>
        
        <button 
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-semibold hover:bg-black/60 transition-colors"
          onClick={() => setActiveTool('music')}
        >
          <Music size={16} />
          {selectedMusic ? selectedMusic : 'Tambah Muzik'}
        </button>

        <div className="w-10"></div>
      </div>

      <div className="flex-1 relative flex items-center justify-center bg-[#111] overflow-hidden">
        <div className={`relative w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl ${isGreenScreen ? 'bg-green-500' : ''}`}>
          
          {isGreenScreen && (
            <img src="https://picsum.photos/seed/bg/800/1200" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="GS BG" />
          )}

          {cameraError && !recordedVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <Video size={48} className="text-white/50 mb-4" />
              <p className="text-white/80 text-sm">{cameraError}</p>
            </div>
          )}

          {duetMode === 'left-right' && (
            <div className="absolute inset-0 w-1/2 border-r border-white/20">
              <video src="/2.mp4" className="w-full h-full object-cover" autoPlay loop muted />
            </div>
          )}
          {duetMode === 'top-bottom' && (
            <div className="absolute inset-0 h-1/2 border-b border-white/20">
              <video src="/2.mp4" className="w-full h-full object-cover" autoPlay loop muted />
            </div>
          )}

          <video 
            ref={videoRef}
            src={recordedVideo || undefined}
            className={`w-full h-full object-cover transition-all ${
              duetMode === 'left-right' ? 'w-1/2 ml-auto' : 
              duetMode === 'top-bottom' ? 'h-1/2 mt-auto' : 
              duetMode === 'pip' ? 'absolute bottom-4 right-4 w-1/3 h-auto rounded-lg border-2 border-white shadow-lg z-10' : ''
            }`}
            style={{ filter: filters.find(f => f.id === selectedFilter)?.css }}
            autoPlay 
            loop={!!recordedVideo} 
            muted 
            playsInline
          />
        </div>

        <div className="absolute right-4 top-24 flex flex-col gap-4 z-20">
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
              <RotateCcw size={20} />
            </div>
            <span className="text-white text-[10px] font-semibold drop-shadow-md">Pusing</span>
          </button>
          
          <button onClick={() => setActiveTool('effects')} className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
              <Wand2 size={20} />
            </div>
            <span className="text-white text-[10px] font-semibold drop-shadow-md">Kesan</span>
          </button>

          <button onClick={() => setActiveTool('filters')} className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
              <Layers size={20} />
            </div>
            <span className="text-white text-[10px] font-semibold drop-shadow-md">Penapis</span>
          </button>

          <button onClick={() => setActiveTool('duet')} className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
              <SplitSquareHorizontal size={20} />
            </div>
            <span className="text-white text-[10px] font-semibold drop-shadow-md">Duet</span>
          </button>

          {activeTab === 'edit' && (
            <>
              <button className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                  <Type size={20} />
                </div>
                <span className="text-white text-[10px] font-semibold drop-shadow-md">Teks</span>
              </button>
              <button className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                  <Scissors size={20} />
                </div>
                <span className="text-white text-[10px] font-semibold drop-shadow-md">Edit</span>
              </button>
            </>
          )}
        </div>

        {renderToolPanel()}

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
          
          {activeTab === 'record' ? (
            <div className="flex items-center justify-center gap-8 w-full max-w-md">
              <button className="flex flex-col items-center gap-1 text-white/80 hover:text-white">
                <ImageIcon size={24} />
                <span className="text-xs">Muat Naik</span>
              </button>
              
              <button 
                onClick={handleRecordToggle}
                className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all ${isRecording ? 'border-red-500/50 scale-110' : 'border-[var(--primary-green)]/50'}`}
              >
                <div className={`bg-[var(--primary-green)] rounded-full transition-all ${isRecording ? 'w-8 h-8 rounded-md bg-red-500' : 'w-16 h-16'}`}></div>
              </button>
              
              <button className="flex flex-col items-center gap-1 text-white/80 hover:text-white">
                <Check size={24} />
                <span className="text-xs">Siap</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full max-w-md">
              <button 
                onClick={() => {
                  setRecordedVideo(null);
                  setActiveTab('record');
                }}
                className="text-white font-semibold flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
              >
                <RotateCcw size={18} /> Rakam Semula
              </button>
              
              <button 
                onClick={() => navigate('/upload')}
                className="bg-[var(--primary-green)] text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-[var(--primary-green)]/20"
              >
                Seterusnya <ChevronRight size={20} />
              </button>
            </div>
          )}
          
          {activeTab === 'edit' && (
            <div className="w-full max-w-md h-12 bg-white/10 rounded-lg border border-white/20 flex items-center px-2 overflow-hidden relative">
              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-white z-10 shadow-[0_0_10px_white]"></div>
              <div className="h-8 bg-[var(--primary-green)]/30 w-full rounded flex items-center overflow-hidden">
                <img src="/1.mp4" className="h-full w-12 object-cover opacity-50" />
                <img src="/1.mp4" className="h-full w-12 object-cover opacity-50" />
                <img src="/1.mp4" className="h-full w-12 object-cover opacity-50" />
                <img src="/1.mp4" className="h-full w-12 object-cover opacity-50" />
                <img src="/1.mp4" className="h-full w-12 object-cover opacity-50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
