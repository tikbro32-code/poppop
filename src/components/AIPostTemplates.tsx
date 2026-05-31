import React, { useState } from 'react';
import { Sparkles, HelpCircle, ShoppingBag, Camera, GraduationCap, Quote, RefreshCw, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface AIPostTemplatesProps {
  onSelectTemplate: (content: string) => void;
  onClose: () => void;
}

const TEMPLATE_TYPES = [
  { id: 'question', name: 'Question of the Day', icon: HelpCircle, description: 'Engagement focused questions to start a conversation.', prompt: 'Create a "Question of the Day" post caption for a short video. The topic is: ' },
  { id: 'product', name: 'Product Highlight', icon: ShoppingBag, description: 'Showcase a product or feature effectively.', prompt: 'Create a "Product Highlight" post caption for a short video. It should be persuasive but natural. The product/feature is: ' },
  { id: 'bts', name: 'Behind the Scenes', icon: Camera, description: 'Share a raw, personal look at your process.', prompt: 'Create a "Behind the Scenes" post caption for a short video. It should feel personal and authentic. What is happening: ' },
  { id: 'tutorial', name: 'Quick Tutorial', icon: GraduationCap, description: 'Short educational or how-to snippet.', prompt: 'Create a "Quick Tutorial" post caption for a short video. It should be concise and helpful. The tip is: ' },
  { id: 'motivation', name: 'Daily Motivation', icon: Quote, description: 'Inspiring quote or message for your audience.', prompt: 'Create a "Daily Motivation" post caption for a short video. It should be uplifting and energetic. The message is: ' },
];

export default function AIPostTemplates({ onSelectTemplate, onClose }: AIPostTemplatesProps) {
  const [selectedType, setSelectedType] = useState(TEMPLATE_TYPES[0]);
  const [context, setContext] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!context.trim()) {
      setError('Please provide some context or keywords.');
      return;
    }

    setIsGenerating(true);
    setError('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

      const fullPrompt = `${selectedType.prompt} "${context}". Keep it under 150 characters. Include 3 relevant emojis. Language: English. Only return the caption text, no quotes.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
      });
      
      setGeneratedContent(response.text.trim());
    } catch (err: any) {
      console.error("AI Generation Error:", err);
      setError('Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[var(--bg-dark)] rounded-2xl overflow-hidden border border-[var(--border-color)]">
      <div className="p-6 border-bottom border-[var(--border-color)] bg-[var(--sidebar-bg)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[var(--primary-green)] rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,200,128,0.3)]">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--text-main)]">AI Post Templates</h2>
            <p className="text-sm text-[var(--text-secondary)]">Choose a template and let Poppro AI help you!</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
            <span className="w-4 h-1 bg-[var(--primary-green)] rounded-full"></span>
            Select Template Type
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEMPLATE_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type)}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all text-left ${
                  selectedType.id === type.id
                    ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/10 shadow-[0_0_15px_rgba(0,200,128,0.1)]'
                    : 'border-[var(--border-color)] bg-[var(--sidebar-bg)] hover:border-[var(--text-secondary)]'
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedType.id === type.id ? 'bg-[var(--primary-green)] text-white' : 'bg-[var(--border-color)] text-[var(--text-secondary)]'}`}>
                  <type.icon size={20} />
                </div>
                <div>
                  <div className={`font-bold text-sm ${selectedType.id === type.id ? 'text-[var(--text-main)]' : 'text-[var(--text-main)]'}`}>{type.name}</div>
                  <div className="text-[11px] text-[var(--text-secondary)] mt-1">{type.description}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
            <span className="w-4 h-1 bg-[var(--primary-green)] rounded-full"></span>
            Provide Context
          </h3>
          <div className="relative">
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Example: 'Tips for cooking delicious nasi lemak' or 'New lightweight running shoes'..."
              className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]/50 min-h-[100px] resize-none transition-all placeholder:text-[var(--text-secondary)]/50 shadow-inner"
            />
          </div>
        </section>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full h-14 bg-[var(--primary-green)] hover:bg-[#00B070] disabled:bg-gray-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          {isGenerating ? (
            <RefreshCw size={24} className="animate-spin" />
          ) : (
            <>
              <Sparkles size={20} />
              Generate with AI
            </>
          )}
        </button>

        {error && <p className="text-red-500 text-xs text-center font-medium animate-pulse">{error}</p>}

        <AnimatePresence>
          {generatedContent && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-5 rounded-2xl bg-[#0E2A24] border border-[var(--primary-green)]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
                <Sparkles size={60} className="text-[var(--primary-green)]" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary-green)] mb-3">Poppro AI Result</h4>
              <p className="text-[var(--text-main)] font-medium leading-relaxed italic text-lg">
                "{generatedContent}"
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => {
                    onSelectTemplate(generatedContent);
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 bg-[var(--primary-green)] hover:bg-[#00B070] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <Check size={18} />
                  Use This Template
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(generatedContent)}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl text-xs font-bold border border-white/10 transition-all active:scale-95"
                >
                  <Copy size={18} />
                  Copy Text
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-[var(--border-color)]/30 text-center">
        <button onClick={onClose} className="text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors tracking-widest uppercase">
          Close
        </button>
      </div>
    </div>
  );
}
