import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Lock, 
  Bell, 
  Store, 
  Megaphone, 
  Hourglass, 
  ListVideo,
  ChevronRight,
  ChevronDown,
  Info,
  ExternalLink,
  RefreshCcw,
  UserX,
  UserCheck,
  Target,
  Users,
  Unlink,
  Trash2
} from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('uruskan_akaun');
  const [subPage, setSubPage] = useState<string>('main');
  const [deleteReason, setDeleteReason] = useState<string>('');
  
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [commentSetting, setCommentSetting] = useState<'Pengikut' | 'Rakan'>('Pengikut');

  const [activeDmSettingModal, setActiveDmSettingModal] = useState<'potensi' | 'lain' | null>(null);
  const [dmPotensiSetting, setDmPotensiSetting] = useState<'Permintaan' | 'Jangan terima'>('Permintaan');
  const [dmLainSetting, setDmLainSetting] = useState<'Permintaan' | 'Jangan terima'>('Permintaan');

  const [isJantinaModalOpen, setIsJantinaModalOpen] = useState(false);
  const [jantinaSetting, setJantinaSetting] = useState<'Lelaki' | 'Perempuan' | 'Tersuai'>('Perempuan');
  
  const [activeIklanTab, setActiveIklanTab] = useState<'Umum' | 'Lain-lain'>('Umum');
  const [bisukanToggles, setBisukanToggles] = useState({
    aop1: true,
    adobe: true,
    aop2: true
  });

  const [desktopBrowser, setDesktopBrowser] = useState(false);
  const [isInteraksiOpen, setIsInteraksiOpen] = useState(true);
  const [interaksiToggles, setInteraksiToggles] = useState({
    suka: true,
    komen: true,
    pengikut: true,
    sebutan: true
  });
  const [isDalamAplOpen, setIsDalamAplOpen] = useState(true);
  const [dalamAplToggles, setDalamAplToggles] = useState({
    suka: true,
    komen: true,
    pengikut: true,
    sebutan: true,
    siar: true,
    langsung: true
  });

  const [pengesahan, setPengesahan] = useState(false);
  const [activeTopikModal, setActiveTopikModal] = useState<string | null>(null);
  const [topikPreferences, setTopikPreferences] = useState<Record<string, 'Berminat' | 'Tidak berminat'>>({});
  const [downloadFormat, setDownloadFormat] = useState<'TXT' | 'JSON'>('TXT');
  const [downloadActiveTab, setDownloadActiveTab] = useState<'Meminta data' | 'Muat turun data'>('Meminta data');
  const [downloadMetrics, setDownloadMetrics] = useState<Record<string, boolean>>({
    'Aktiviti Anda': false,
    'Dompet Income+': false,
    'Komen': false,
    'Mesej Langsung': false,
    'Profil dan Tetapan': false
  });

  const menuItems = [
    { id: 'uruskan_akaun', icon: User, label: 'uruskan_akaun' },
    { id: 'privasi_h1', icon: Lock, label: 'privasi_h1' },
    { id: 'pemberitahuan_push', icon: Bell, label: 'pemberitahuan_push' },
    { id: 'BA_onboarding_welcome_title_have', icon: Store, label: 'BA_onboarding_welcome_title_have' },
    { id: 'label_iklan_pa', icon: Megaphone, label: 'label_iklan_pa' },
    { id: 'Masa skrin', icon: Hourglass, label: 'Masa skrin' },
    { id: 'familyPairingSTEMFeed_manageAc', icon: ListVideo, label: 'familyPairingSTEMFeed_manageAc' },
  ];

  const Toggle = ({ active, onChange }: { active: boolean, onChange?: () => void }) => (
    <div 
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${active ? 'bg-[var(--primary-green)]' : 'bg-[var(--border-color)]'}`}
    >
      <div className={`absolute top-[2px] w-5 h-5 bg-[var(--sidebar-bg)] shadow-sm rounded-full transition-transform ${active ? 'left-[22px]' : 'left-[2px]'}`} />
    </div>
  );

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setSubPage('main');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-main)] flex justify-center font-sans tracking-wide">
      <div className="w-full max-w-[1100px] flex pt-8">
        
        {/* Sidebar */}
        <div className="w-[240px] pr-4 shrink-0 flex flex-col gap-2 relative border-r border-[var(--border-color)] h-[calc(100vh-2rem)] sticky top-8">
          <button onClick={() => navigate(-1)} className="absolute -left-12 top-2 p-2 hover:bg-[var(--border-color)] rounded-full transition-colors text-[var(--text-secondary)] hover:text-[var(--text-main)]">
            <ArrowLeft size={24} />
          </button>

          {menuItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 text-[14px] font-bold rounded-lg transition-colors
                  ${isActive ? 'text-[var(--primary-green)]' : 'text-[var(--text-main)] hover:bg-[var(--border-color)]'}
                `}
              >
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[var(--bg-dark)] pl-10 pr-4 pb-32 h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide">
          {subPage === 'direct_messages' ? (
            <div className="max-w-[640px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('main')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Mesej langsung</h1>
              </div>
              <div className="text-[14px] font-bold text-[var(--text-secondary)] mb-4">Orang yang boleh menghantar mesej kepada anda</div>
              
              <div className="space-y-2">
                <div 
                  onClick={() => setActiveDmSettingModal('potensi')}
                  className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-4 -mx-4 rounded-lg transition-colors group"
                >
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Hubungan potensi</span>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">{dmPotensiSetting}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div 
                  onClick={() => setActiveDmSettingModal('lain')}
                  className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-4 -mx-4 rounded-lg transition-colors group"
                >
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Orang lain di Poppro</span>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">{dmLainSetting}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              <div className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed mt-6">
                Rakan (pengikut yang anda ikut kembali), akaun yang anda ikut, dan orang yang anda mungkin kenali boleh menghantar mesej kepada anda tetapi anda menyekat mereka. Apabila orang lain menghantar mesej kepada anda, anda boleh memilih untuk menerima mesej sebagai permintaan mesej. <span className="text-[var(--text-main)] font-bold cursor-pointer hover:underline">Ketahui lebih lanjut</span>
              </div>
            </div>
          ) : subPage === 'download_data' ? (
            <div className="max-w-[700px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative pb-20">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('main')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Muat turun data Poppro</h1>
              </div>

              <div className="text-[14px] font-medium text-[var(--text-secondary)] mb-6 leading-relaxed">
                Anda boleh meminta salinan data anda pada bila-bila masa untuk menyandarkan akaun anda atau mengeksport data kepada perkhidmatan lain.
              </div>

              <div className="flex border-b border-[var(--border-color)] mb-6">
                <button
                  onClick={() => setDownloadActiveTab('Meminta data')}
                  className={`flex-1 pb-3 text-center text-[15px] font-bold transition-colors relative ${downloadActiveTab === 'Meminta data' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
                >
                  Meminta data
                  {downloadActiveTab === 'Meminta data' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />}
                </button>
                <button
                  onClick={() => setDownloadActiveTab('Muat turun data')}
                  className={`flex-1 pb-3 text-center text-[15px] font-bold transition-colors relative ${downloadActiveTab === 'Muat turun data' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
                >
                  Muat turun data
                  {downloadActiveTab === 'Muat turun data' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />}
                </button>
              </div>

              {downloadActiveTab === 'Meminta data' ? (
                <div className="space-y-8 flex-1 pb-4">
                  <div>
                    <h3 className="text-[16px] font-bold text-[var(--text-main)] mb-4">Pilih format fail</h3>
                    
                    <label className="flex items-center gap-4 cursor-pointer group mb-5">
                      <div className="flex-1">
                        <div className="text-[15px] font-bold text-[var(--text-main)] mb-1">TXT</div>
                        <div className="text-[13px] text-[var(--text-secondary)] font-medium">Fail teks yang mudah dibaca</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                        ${downloadFormat === 'TXT' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                      `}>
                        {downloadFormat === 'TXT' && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <input type="radio" value="TXT" checked={downloadFormat === 'TXT'} onChange={() => setDownloadFormat('TXT')} className="hidden" />
                    </label>

                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="flex-1">
                        <div className="text-[15px] font-bold text-[var(--text-main)] mb-1">JSON</div>
                        <div className="text-[13px] text-[var(--text-secondary)] font-medium">Benarkan perkhidmatan lain mengimport fail anda</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                        ${downloadFormat === 'JSON' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                      `}>
                        {downloadFormat === 'JSON' && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <input type="radio" value="JSON" checked={downloadFormat === 'JSON'} onChange={() => setDownloadFormat('JSON')} className="hidden" />
                    </label>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-[var(--text-main)] mb-1">Pilih data untuk dimuat turun</h3>
                    <div className="text-[13px] text-[var(--text-secondary)] font-medium mb-4">Pilih apl dan data yang ingin anda sertakan dalam fail anda.</div>

                    <div className="border border-[var(--border-color)] bg-[var(--bg-dark)] rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-[rgba(255,255,255,0.02)] border-b border-[var(--border-color)] px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25v-.46h-3.42v15.2a2.76 2.76 0 11-5.25-1.42 2.79 2.79 0 012.44-2.73V9.6a6.11 6.11 0 106.87 6.19v-4.14a8.21 8.21 0 003.13.62V8.84a6.43 6.43 0 01-3-2.15z"/></svg>
                          <span className="font-bold text-[14px]">Poppro</span>
                          <span className="text-[12px] text-[var(--text-secondary)]">{Object.values(downloadMetrics).filter(Boolean).length}/5 dipilih</span>
                        </div>
                        <button 
                          className="text-[#FE2C55] text-[14px] font-bold hover:underline"
                          onClick={() => {
                            const allSelected = Object.values(downloadMetrics).every(Boolean);
                            const newValue = !allSelected;
                            const newMetrics = { ...downloadMetrics };
                            Object.keys(newMetrics).forEach(key => newMetrics[key] = newValue);
                            setDownloadMetrics(newMetrics);
                          }}
                        >
                          Pilih semua
                        </button>
                      </div>

                      <div className="px-4 py-2 max-h-[300px] overflow-y-auto scrollbar-hide">
                        {[
                          { key: 'Aktiviti Anda', label: 'Aktiviti Anda', desc: 'Termasuk sejarah tontonan dan carian anda, minat iklan dan Aktiviti Luar Poppro serta aktiviti lain di Poppro' },
                          { key: 'Dompet Income+', label: 'Dompet Income+', desc: null },
                          { key: 'Komen', label: 'Komen', desc: null },
                          { key: 'Mesej Langsung', label: 'Mesej Langsung', desc: null },
                          { key: 'Profil dan Tetapan', label: 'Profil dan Tetapan', desc: null },
                        ].map(item => (
                          <label key={item.key} className="flex gap-4 py-4 border-b border-[var(--border-color)] last:border-0 cursor-pointer group">
                            <div className="flex-1">
                              <div className="text-[15px] font-medium text-[var(--text-main)] mb-1">{item.label}</div>
                              {item.desc && <div className="text-[13px] text-[var(--text-secondary)] leading-tight">{item.desc}</div>}
                            </div>
                            <div className={`w-5 h-5 rounded-[4px] border-2 mt-0.5 flex flex-shrink-0 items-center justify-center transition-colors
                              ${downloadMetrics[item.key] ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                            `}>
                              {downloadMetrics[item.key] && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              )}
                            </div>
                            <input type="checkbox" checked={downloadMetrics[item.key]} onChange={() => setDownloadMetrics(prev => ({ ...prev, [item.key]: !prev[item.key] }))} className="hidden" />
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-20">
                    <p className="text-[var(--text-secondary)] font-medium text-[15px]">Tiada data tersedia untuk dimuat turun</p>
                </div>
              )}
              
              {downloadActiveTab === 'Meminta data' && (
                <div className="fixed bottom-4 pb-2 w-full max-w-[700px] z-10 bg-[var(--bg-dark)] px-4">
                  <div className="w-full">
                    <button 
                      className={`w-full py-3.5 font-bold rounded-lg transition-colors ${
                        Object.values(downloadMetrics).some(Boolean)
                          ? 'bg-[#FE2C55] text-white hover:bg-[#e62a4d] cursor-pointer' 
                          : 'bg-[#FE2C55] opacity-40 text-white cursor-not-allowed'
                      }`}
                    >
                      Meminta data
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : subPage === 'deactivate_options' ? (
            <div className="max-w-[640px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setSubPage('main')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                  <h1 className="text-[20px] font-bold tracking-tight">Padam atau nyahaktif?</h1>
                </div>
                
                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                  Jika anda ingin meninggalkan Poppro buat sementara waktu, hanya nyahaktifkan akaun anda. Jika anda memilih untuk tidak memadamkan akaun anda, anda akan dapat memulihkan akaun selepas 30 hari.
                </p>

                <div className="space-y-4 pt-4">
                  <button 
                    onClick={() => setSubPage('deactivate_confirm')}
                    className="w-full text-left p-4 rounded-xl border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors group flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-[14px] font-bold text-[var(--text-main)] mb-1">Nyahaktifkan akaun</div>
                      <div className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">
                        Tiada sesiapa boleh melihat akaun anda, termasuk semua kandungan yang disimpan dalam akaun. Aktifkan semula akaun anda dan pulihkan semua kandungan pada bila-bila masa.
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] mt-1 shrink-0" />
                  </button>

                  <button 
                    onClick={() => setSubPage('delete_survey')}
                    className="w-full text-left p-4 rounded-xl border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors group flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-[14px] font-bold text-[var(--text-main)] mb-1">Padamkan akaun secara kekal</div>
                      <div className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">
                        Akaun dan kandungan anda akan dipadamkan secara kekal. Anda boleh membatalkan permintaan pemadaman dengan mengaktifkan semula akaun anda dalam masa 30 hari.
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] mt-1 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ) : subPage === 'deactivate_confirm' ? (
            <div className="max-w-[640px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)]">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setSubPage('deactivate_options')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                  <h1 className="text-[20px] font-bold tracking-tight">Akaun Anda: Nyahaktifkan akaun ini?</h1>
                </div>
                
                <p className="text-[14px] font-bold text-[var(--text-main)] mb-4">Jika anda nyahaktifkan akaun anda:</p>
                
                <ul className="list-disc pl-5 space-y-3 text-[14px] text-[var(--text-secondary)] font-medium">
                  <li>Tiada siapa akan melihat akaun dan kandungan anda.</li>
                  <li>Maklumat yang tidak disimpan dalam akaun anda, seperti mesej langsung, masih boleh dilihat oleh orang lain.</li>
                  <li>Poppro akan terus menyimpan data anda supaya anda boleh memulihkan data tersebut apabila anda aktifkan semula akaun anda.</li>
                  <li>Anda boleh aktifkan semula akaun anda dan pulihkan semua kandungan bila-bila masa dengan menggunakan butiran log masuk yang sama.</li>
                </ul>
              </div>

              <div className="mt-12 pt-6 pb-8">
                <button 
                  onClick={() => {
                    alert('Akaun dinyahaktifkan');
                    navigate('/');
                  }}
                  className="w-full py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors"
                >
                  Nyahaktifkan
                </button>
              </div>
            </div>
          ) : subPage === 'delete_survey' ? (
            <div className="max-w-[640px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)]">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setSubPage('deactivate_options')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                  <h1 className="text-[20px] font-bold tracking-tight">Sebelum anda pergi, boleh kami bantu?</h1>
                </div>
                
                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                  Beritahu kami sebab anda mahu pergi supaya kami boleh membantu dengan isu biasa dan menambah baik apl untuk komuniti. Anda boleh melangkau langkah ini.
                </p>

                <div className="space-y-1">
                  {[
                    'Saya keluar buat sementara waktu',
                    'Saya terlalu kerap menggunakan Poppro',
                    'Kebimbangan keselamatan atau privasi',
                    'Terlalu banyak iklan yang tidak berkaitan',
                    'Menghadapi masalah untuk bermula',
                    'Saya mempunyai akaun berbilang',
                    'Sebab lain'
                  ].map(reason => (
                    <label key={reason} className="flex items-center justify-between p-3 -mx-3 hover:bg-[var(--border-color)] rounded-lg cursor-pointer group transition-colors">
                      <span className="text-[14px] font-medium text-[var(--text-main)]">{reason}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                        ${deleteReason === reason ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                      `}>
                        {deleteReason === reason && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <input 
                        type="radio" 
                        name="delete_reason" 
                        value={reason}
                        checked={deleteReason === reason}
                        onChange={(e) => setDeleteReason(e.target.value)}
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-6 flex flex-col gap-3 pb-8">
                <button 
                  disabled={!deleteReason}
                  onClick={() => {
                    alert('Permintaan pemadaman akaun dihantar.');
                    navigate('/');
                  }}
                  className={`w-full py-3.5 font-bold rounded-lg transition-colors ${
                    deleteReason 
                      ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer' 
                      : 'bg-red-500/30 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Teruskan
                </button>
                <button 
                  onClick={() => {
                    alert('Permintaan pemadaman akaun dihantar.');
                    navigate('/');
                  }}
                  className="w-full py-3.5 bg-transparent hover:bg-[var(--border-color)] text-[var(--text-main)] font-bold rounded-lg transition-colors"
                >
                  Langkau
                </button>
              </div>
            </div>
          ) : subPage === 'urus_topik_iklan' ? (
            <div className="max-w-[700px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative pb-20">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('main')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Urus topik iklan</h1>
              </div>

              <div>
                <p className="text-[14px] text-[var(--text-main)] leading-relaxed mb-6">
                  Semak dan ubah topik yang digunakan oleh TikTok untuk menyesuaikan iklan untuk anda. <span className="text-[var(--text-main)] font-bold cursor-pointer hover:underline">Ketahui lebih lanjut</span>
                </p>

                <div className="flex border-b border-[rgba(255,255,255,0.05)] mb-4">
                  <div 
                    onClick={() => setActiveIklanTab('Umum')}
                    className={`flex-1 text-center py-3 text-[15px] font-bold cursor-pointer transition-colors relative ${activeIklanTab === 'Umum' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
                  >
                    Umum
                    {activeIklanTab === 'Umum' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--text-main)]" />}
                  </div>
                  <div 
                    onClick={() => setActiveIklanTab('Lain-lain')}
                    className={`flex-1 text-center py-3 text-[15px] font-bold cursor-pointer transition-colors relative ${activeIklanTab === 'Lain-lain' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
                  >
                    Lain-lain
                    {activeIklanTab === 'Lain-lain' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--text-main)]" />}
                  </div>
                </div>

                {activeIklanTab === 'Umum' ? (
                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                       <h3 className="text-[13px] font-bold text-[var(--text-secondary)]">Kesimpulan oleh TikTok</h3>
                       <div 
                         onClick={() => setSubPage('kesimpulan_tiktok')}
                         className="flex items-center justify-between py-3 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)]"
                       >
                         <span className="text-[14px] font-medium text-[var(--text-main)]">Lihat semua</span>
                         <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                       </div>
                    </div>
                    <div className="space-y-2 mt-4">
                       <h3 className="text-[13px] font-bold text-[var(--text-secondary)]">Pilihan anda</h3>
                       <div className="flex items-center justify-between py-3 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)]">
                         <span className="text-[14px] font-medium text-[var(--text-main)]">Lihat semua</span>
                         <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                       </div>
                    </div>
                    <div className="space-y-2 mt-4">
                       <h3 className="text-[13px] font-bold text-[var(--text-secondary)] mb-4">Semua topik</h3>
                       <div className="space-y-1">
                         {[
                           'Pendidikan', 'Haiwan Peliharaan', 'Apl', 'Penambahbaikan Rumah',
                           'Pakaian & Aksesori', 'Berita & Hiburan', 'Perkhidmatan Perniagaan',
                           'Permainan Video', 'Perkhidmatan Hayat', 'Makanan & Minuman',
                           'Sukan & Aktiviti Luar', 'Kenderaan & Pengangkutan', 'E-Dagang (Bukan apl)',
                           'Bayi, Kanak-kanak & Ibu Bersalin', 'Perkhidmatan Kewangan', 'Kecantikan & Penjagaan Diri',
                           'Teknologi & Elektronik', 'Perkakas', 'Kembara', 'Produk Isi Rumah'
                         ].map(topic => (
                           <div 
                             key={topic} 
                             onClick={() => topic === 'Pendidikan' ? setSubPage('pendidikan') : setActiveTopikModal(topic)}
                             className="flex items-center justify-between py-4 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-none"
                           >
                             <span className="text-[14px] font-medium text-[var(--text-main)]">{topic}</span>
                             <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 mb-8">
                    {[
                      'Permainan wang sebenar',
                      'Temu janji',
                      'Pengurusan berat badan'
                    ].map(topic => (
                      <div 
                        key={topic}
                        onClick={() => setActiveTopikModal(topic)}
                        className="flex items-center justify-between p-3 -mx-3 hover:bg-[var(--border-color)] rounded-lg cursor-pointer group transition-colors"
                      >
                        <span className="text-[14px] font-medium text-[var(--text-main)]">{topic}</span>
                        <div className="flex items-center gap-2 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                          <span className="text-[14px] font-medium">{topikPreferences[topic] || 'Tiada keutamaan'}</span>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                  Perubahan boleh mengambil hingga 48 jam untuk berkesan. Ini tidak akan menjejaskan cara kami menggunakan maklumat yang kami kumpulkan tentang anda untuk memperibadikan iklan. Kadangkala, iklan mungkin memaparkan elemen daripada topik yang tidak mahu anda lihat. Contohnya, iklan untuk kecergasan mungkin menunjukkan seseorang berdiri di atas penimbang berat.
                </p>
              </div>
            </div>
          ) : subPage === 'pendidikan' ? (
            <div className="max-w-[700px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative pb-20">
               <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('urus_topik_iklan')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Pendidikan</h1>
              </div>

               <div className="space-y-6">
                 <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
                   Iklan diperibadikan boleh berdasarkan kesimpulan yang dibuat oleh TikTok tentang anda. Anda boleh memilih sama ada iklan anda diperibadikan berdasarkan topik tertentu atau tidak. Sebarang perubahan yang anda buat dalam Uruskan semua akan digunakan pada semua topik.
                 </p>
                 
                 <div className="space-y-2 mt-4">
                   <h3 className="text-[13px] font-bold text-[var(--text-secondary)] mb-2">Uruskan semua</h3>
                   <div className="space-y-1">
                     <div 
                       onClick={() => setActiveTopikModal('Pendidikan')}
                       className="flex items-center justify-between py-4 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-none"
                     >
                       <span className="text-[14px] font-medium text-[var(--text-main)]">Pendidikan</span>
                       <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                     </div>
                   </div>
                 </div>

                 <div className="space-y-2 mt-8">
                   <h3 className="text-[13px] font-bold text-[var(--text-secondary)] mb-2">Urus topik</h3>
                   <div className="space-y-1">
                     {[
                       'Pendidikan Awal Kanak-kanak & Prasekolah',
                       'Pendidikan Tinggi',
                       'Latihan Bahasa',
                       'Latihan Bukan Akademik (Hobi)',
                       'Pendidikan Luar Negara',
                       'Fotografi',
                       'Pendidikan Rendah & Menengah & K-12',
                       'Tutorial',
                       'Pendidikan Vokasional'
                     ].map(topic => (
                       <div 
                         key={topic}
                         onClick={() => setActiveTopikModal(topic)}
                         className="flex items-center justify-between py-4 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-none"
                       >
                         <span className="text-[14px] font-medium text-[var(--text-main)]">{topic}</span>
                         <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          ) : subPage === 'kesimpulan_tiktok' ? (
            <div className="max-w-[700px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative pb-20">
               <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('urus_topik_iklan')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Kesimpulan oleh TikTok</h1>
              </div>

               <div className="space-y-6">
                 <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
                   Iklan diperibadikan boleh berdasarkan kesimpulan yang dibuat oleh TikTok tentang anda. Anda boleh memilih sama ada iklan anda diperibadikan berdasarkan topik tertentu atau tidak.
                 </p>
                 
                 <div className="space-y-2 mt-4">
                   <h3 className="text-[13px] font-bold text-[var(--text-secondary)] mb-2">Urus topik</h3>
                   <div className="space-y-1">
                     {['Kereta', 'Kenderaan & Pengangkutan'].map(topic => (
                       <div 
                         key={topic}
                         onClick={() => setActiveTopikModal(topic)}
                         className="flex items-center justify-between py-4 cursor-pointer group transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-none"
                       >
                         <span className="text-[14px] font-medium text-[var(--text-main)]">{topic}</span>
                         <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          ) : subPage === 'bisukan_pengiklanan' ? (
            <div className="max-w-[700px] space-y-6 pt-4 flex flex-col min-h-[calc(100vh-6rem)] relative pb-20">
               <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setSubPage('main')} className="p-2 -ml-2 rounded-full hover:bg-[var(--border-color)] transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-[20px] font-bold tracking-tight">Bisukan pengiklanan</h1>
              </div>

               <div className="space-y-6">
                 <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
                   Anda boleh mendapatkan iklan daripada pengiklan yang telah menunjukkan iklan kepada anda baru-baru ini di TikTok. Anda tidak akan melihat iklan daripada pengiklan ini selama 28 hari. Tetapan ini hanya digunakan pada iklan TikTok dan anda mungkin terus melihat iklan ini pada rangkaian iklan yang lain.
                 </p>

                 <div className="space-y-4">
                   <div className="flex items-center justify-between p-2 flex-wrap -mx-2">
                     <span className="text-[14px] font-bold text-[var(--text-main)]">AOP_Pemuzik</span>
                     <div className="cursor-pointer" onClick={() => setBisukanToggles(prev => ({ ...prev, aop1: !prev.aop1 }))}>
                       <Toggle active={bisukanToggles.aop1} />
                     </div>
                   </div>
                   <div className="flex items-center justify-between p-2 flex-wrap -mx-2">
                     <span className="text-[14px] font-bold text-[var(--text-main)]">ADOBE SYSTEMS PTY LTD</span>
                     <div className="cursor-pointer" onClick={() => setBisukanToggles(prev => ({ ...prev, adobe: !prev.adobe }))}>
                       <Toggle active={bisukanToggles.adobe} />
                     </div>
                   </div>
                   <div className="flex items-center justify-between p-2 flex-wrap -mx-2">
                     <span className="text-[14px] font-bold text-[var(--text-main)]">AOP_Pemuzik</span>
                     <div className="cursor-pointer" onClick={() => setBisukanToggles(prev => ({ ...prev, aop2: !prev.aop2 }))}>
                       <Toggle active={bisukanToggles.aop2} />
                     </div>
                   </div>
                 </div>

                 <div className="pt-6 border-t border-[rgba(255,255,255,0.05)] cursor-pointer group flex items-center justify-between -mx-2">
                   <span className="text-[14px] font-medium text-[var(--text-main)] px-2">Pengiklanan yang telah anda sembunyikan</span>
                   <ChevronRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] mr-2" />
                 </div>
               </div>
            </div>
          ) : (
            <div className="max-w-[640px] space-y-12">
              
              {/* Urus akaun */}
              <div id="uruskan_akaun" className="space-y-6 pt-4">
                <h1 className="text-[20px] font-bold tracking-tight">uruskan_akaun</h1>
                
                <div className="space-y-4">
                  <h3 className="text-[14px] font-bold text-[var(--text-main)]">Kawalan akaun</h3>
                  
                  <div 
                    onClick={() => setSubPage('deactivate_options')}
                    className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                  >
                    <span className="text-[14px] font-medium text-[var(--text-main)]">Nyahaktifkan atau padamkan akaun</span>
                    <ChevronRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
                  </div>
                </div>
              </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Privasi */}
            <div id="privasi_h1" className="space-y-6">
              <h1 className="text-[20px] font-bold tracking-tight">privasi_h1</h1>
              
              <div className="space-y-6">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Kebolehtemuan</h3>
                
                <div className="flex gap-4 p-2 -mx-2">
                  <div className="flex-1">
                    <div className="text-[14px] font-bold mb-1">Akaun peribadi</div>
                    <div className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Dengan akaun peribadi, hanya pengguna yang diluluskan boleh mengikut dan menonton video anda. Pengikut anda yang sedia ada tidak akan terjejas.
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer">
                    <Toggle active={true} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Interaksi</h3>
                
                <div 
                  onClick={() => setIsCommentModalOpen(true)}
                  className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Komen</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Orang yang boleh memberikan komen pada siaran anda</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">{commentSetting}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div 
                  onClick={() => setSubPage('direct_messages')}
                  className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Mesej langsung</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Orang yang boleh menghantar mesej kepada anda</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Data</h3>
                
                <div 
                  onClick={() => setSubPage('download_data')}
                  className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Muat turun data anda</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Dapatkan salinan data Poppro anda</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Pemberitahuan tolak */}
            <div id="pemberitahuan_push" className="space-y-6">
              <h1 className="text-[20px] font-bold tracking-tight">pemberitahuan_push</h1>
              
              <div className="space-y-6">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Pemberitahuan desktop</h3>
                
                <div className="flex gap-4 p-2 -mx-2">
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Benarkan dalam pelayar</div>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Kekal termaklum dengan pemberitahuan untuk suka, komen, video terkini dan banyak lagi di desktop. Anda boleh mematikan ciri ini pada bila-bila masa.
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer" onClick={() => setDesktopBrowser(!desktopBrowser)}>
                    <Toggle active={desktopBrowser} />
                  </div>
                </div>
              </div>

              <div className="space-y-5 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <div>
                  <h3 className="text-[14px] font-bold text-[var(--text-main)] mb-1">Pilihan anda</h3>
                  <div className="text-[12px] text-[var(--text-secondary)] font-medium">Pilihan anda akan disegerakkan secara automatik kepada apl Poppro.</div>
                </div>

                <div className="space-y-1">
                  <div 
                    onClick={() => setIsInteraksiOpen(!isInteraksiOpen)}
                    className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                  >
                    <div>
                      <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Interaksi</div>
                      <div className="text-[12px] text-[var(--text-secondary)] font-medium">Suka, komen, pengikut baharu, sebutan dan tag</div>
                    </div>
                    <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                      <ChevronDown size={20} className={`transform transition-transform ${isInteraksiOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {isInteraksiOpen && (
                    <div className="space-y-4 pt-2 pb-4">
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Suka</span>
                        <div className="cursor-pointer" onClick={() => setInteraksiToggles(prev => ({ ...prev, suka: !prev.suka }))}>
                          <Toggle active={interaksiToggles.suka} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Komen</span>
                        <div className="cursor-pointer" onClick={() => setInteraksiToggles(prev => ({ ...prev, komen: !prev.komen }))}>
                          <Toggle active={interaksiToggles.komen} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Pengikut Baharu</span>
                        <div className="cursor-pointer" onClick={() => setInteraksiToggles(prev => ({ ...prev, pengikut: !prev.pengikut }))}>
                          <Toggle active={interaksiToggles.pengikut} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Sebutan dan tag</span>
                        <div className="cursor-pointer" onClick={() => setInteraksiToggles(prev => ({ ...prev, sebutan: !prev.sebutan }))}>
                          <Toggle active={interaksiToggles.sebutan} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 space-y-1">
                  <div 
                    onClick={() => setIsDalamAplOpen(!isDalamAplOpen)}
                    className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                  >
                    <div className="text-[14px] font-medium text-[var(--text-main)]">Pemberitahuan dalam apl</div>
                    <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                      <ChevronDown size={20} className={`transform transition-transform ${isDalamAplOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {isDalamAplOpen && (
                    <div className="space-y-4 pt-2 pb-2">
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Suka</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, suka: !prev.suka }))}>
                          <Toggle active={dalamAplToggles.suka} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Komen</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, komen: !prev.komen }))}>
                          <Toggle active={dalamAplToggles.komen} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Pengikut Baharu</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, pengikut: !prev.pengikut }))}>
                          <Toggle active={dalamAplToggles.pengikut} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Sebutan dan tag</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, sebutan: !prev.sebutan }))}>
                          <Toggle active={dalamAplToggles.sebutan} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">Siar semula</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, siar: !prev.siar }))}>
                          <Toggle active={dalamAplToggles.siar} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2">
                        <span className="text-[14px] font-medium text-[var(--text-main)]">LANGSUNG</span>
                        <div className="cursor-pointer" onClick={() => setDalamAplToggles(prev => ({ ...prev, langsung: !prev.langsung }))}>
                          <Toggle active={dalamAplToggles.langsung} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Pengesahan perniagaan */}
            <div id="BA_onboarding_welcome_title_have" className="space-y-6">
              <h1 className="text-[20px] font-bold tracking-tight">BA_onboarding_welcome_title_have</h1>
              
              <div className="space-y-6">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Pengesahan perniagaan</h3>
                
                <div className="flex gap-4 p-2 -mx-2">
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Pengesahan perniagaan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Sahkan perniagaan anda untuk mengakses alat pemasaran dan ciri-ciri eksklusif yang membolehkan anda berhubung dengan penonton dengan lebih baik.
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer" onClick={() => setPengesahan(!pengesahan)}>
                    <Toggle active={pengesahan} />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Iklan */}
            <div id="label_iklan_pa" className="space-y-6">
              <h1 className="text-[20px] font-bold tracking-tight">label_iklan_pa</h1>
              
              <div className="space-y-4">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Urus iklan yang anda lihat</h3>
                
                <div 
                  onClick={() => setSubPage('urus_topik_iklan')}
                  className="flex items-center gap-3 cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div className="shrink-0 text-[var(--text-main)] mt-1 self-start">
                    <RefreshCcw size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Urus topik iklan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Ubah faktor yang digunakan untuk menyesuaikan iklan yang anda lihat.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div 
                  onClick={() => setSubPage('bisukan_pengiklanan')}
                  className="flex items-center gap-3 cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div className="shrink-0 text-[var(--text-main)] mt-1 self-start">
                    <UserX size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Bisukan pengiklanan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Bisukan iklan daripada pengiklan tertentu yang memaparkan iklan kepada anda baru-baru ini di Poppro.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div 
                  onClick={() => setIsJantinaModalOpen(true)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div className="shrink-0 text-[var(--text-main)] mt-1 self-start">
                    <UserCheck size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Edit butiran peribadi</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Pilih jantina yang boleh digunakan untuk menyesuaikan iklan yang anda lihat.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Urus data luar Poppro anda</h3>
                
                <div className="flex gap-4 p-2 -mx-2">
                  <div className="shrink-0 text-[var(--text-main)] mt-1">
                    <Target size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Iklan yang disasarkan di luar Poppro</div>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Dengan tetapan ini, Poppro mungkin memaparkan iklan kepada anda di laman web dan apl lain menggunakan maklumat yang dikumpul tentang anda, dalam dan di luar Poppro. Tetapkan ini mengawal iklan yang diminta oleh rakan kongsi pengiklanan kami untuk dipaparkan kepada anda di luar Poppro. Pilihan privasi iklan anda di Poppro akan terus menyiarkan Semua iklan yang kami paparkan kepada anda.
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer">
                    <Toggle active={true} />
                  </div>
                </div>

                <div className="flex gap-4 p-2 -mx-2">
                  <div className="shrink-0 text-[var(--text-main)] mt-1">
                    <Users size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Menggunakan aktiviti Luar Poppro untuk penyasaran iklan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Dengan tetapan ini, Iklan yang anda lihat di Poppro boleh diperibadikan lagi mengikut minat anda, berdasarkan data yang dikongsi oleh rakan kongsi pengiklanan kepada kami tentang aktiviti anda pada apl serta laman web mereka. Anda akan sentiasa melihat iklan di Poppro berdasarkan perkara yang anda lakukan di Poppro atau data lain yang diterangkan dalam dasar privasi kami.
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer">
                    <Toggle active={true} />
                  </div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div className="shrink-0 text-[var(--text-main)] mt-1 self-start">
                    <Unlink size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Putuskan sambungan pengiklanan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Berhenti menyesuaikan iklan dengan data luar Poppro anda daripada pengiklan.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div className="shrink-0 text-[var(--text-main)] mt-1 self-start">
                    <Trash2 size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Kosongkan data luar Poppro</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Kosongkan data luar Poppro yang telah dikongsi oleh pengiklan tentang anda.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Masa skrin */}
            <div id="Masa skrin" className="space-y-6">
              <div className="flex items-center gap-2">
                <h1 className="text-[20px] font-bold tracking-tight">Masa skrin</h1>
                <Info size={14} className="text-[var(--text-secondary)] mt-1" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Masa skrin harian</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Dapatkan pemberitahuan apabila anda mencapai masa skrin harian anda di Poppro.</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">Tutup</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Rehat masa skrin</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Dapatkan peringatan untuk berehat sebentar daripada penatalan.</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">Tutup</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Masa tidur</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Dapatkan peringatan semasa anda berada dalam masa tidur anda.</div>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <span className="text-[13px]">Tutup</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                <div className="flex gap-4 p-2 -mx-2">
                  <div className="flex-1">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Kemas kini masa skrin mingguan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Kekal termaklum tentang penggunaan masa anda daripada Peti masuk anda.</div>
                  </div>
                  <div className="shrink-0 mt-1 cursor-pointer">
                    <Toggle active={false} />
                  </div>
                </div>

                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div>
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Ringkasan</div>
                    <div className="text-[12px] text-[var(--text-secondary)] font-medium">Metrik mingguan anda juga termasuk masa penggunaan apl dan poppro.com.</div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-[14px] font-bold text-[var(--text-main)]">Bantuan dan sumber</h3>
                
                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div className="text-[14px] font-medium text-[var(--text-main)]">Petua kesejahteraan digital</div>
                  <div className="text-[var(--primary-green)]">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[var(--border-color)]" />

            {/* Keutamaan kandungan */}
            <div id="familyPairingSTEMFeed_manageAc" className="space-y-6">
              <h1 className="text-[20px] font-bold tracking-tight">familyPairingSTEMFeed_manageAc</h1>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between cursor-pointer hover:bg-[var(--border-color)] p-2 -mx-2 rounded-lg transition-colors group">
                  <div className="flex-1 pr-6">
                    <div className="text-[14px] font-medium text-[var(--text-main)] mb-1">Tapis kata kunci</div>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                      Apabila anda memasukkan sesuatu kata kunci, anda tidak akan melihat siaran dalam senarai terpilih yang mengandungi perkataan tersebut dalam mana-mana tajuk, penerangan atau pelekat. Kata kunci tertentu tidak boleh ditapis.
                    </div>
                  </div>
                  <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] self-center">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>

          </div>
          )}
        </div>
      </div>

      {/* Comment Modal */}
      {isCommentModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl w-full max-w-[400px] shadow-2xl relative">
            <button 
              onClick={() => setIsCommentModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="p-6">
              <h2 className="text-[16px] font-bold text-[var(--text-main)] mt-2 mb-6">Orang yang boleh memberikan komen pada siaran anda</h2>
              
              <div className="space-y-1">
                <label className="flex items-center justify-between py-3 cursor-pointer group">
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Pengikut</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                    ${commentSetting === 'Pengikut' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                  `}>
                    {commentSetting === 'Pengikut' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input type="radio" checked={commentSetting === 'Pengikut'} onChange={() => setCommentSetting('Pengikut')} className="hidden" />
                </label>

                <label className="flex items-center justify-between py-3 cursor-pointer group">
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Rakan</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                    ${commentSetting === 'Rakan' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                  `}>
                    {commentSetting === 'Rakan' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input type="radio" checked={commentSetting === 'Rakan'} onChange={() => setCommentSetting('Rakan')} className="hidden" />
                </label>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                  1 siaran membenarkan komen, dan 0 siaran tidak membenarkan komen kerana tetapan privasi siaran anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DM Modal */}
      {activeDmSettingModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl w-full max-w-[400px] shadow-2xl relative">
            <button 
              onClick={() => setActiveDmSettingModal(null)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="p-6">
              <h2 className="text-[16px] font-bold text-[var(--text-main)] mt-2 mb-6">Terima mesej dalam</h2>
              
              <div className="space-y-1">
                <label className="flex items-center justify-between py-3 cursor-pointer group">
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Permintaan</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                    ${(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Permintaan' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                  `}>
                    {(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Permintaan' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input 
                    type="radio" 
                    checked={(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Permintaan'} 
                    onChange={() => activeDmSettingModal === 'potensi' ? setDmPotensiSetting('Permintaan') : setDmLainSetting('Permintaan')} 
                    className="hidden" 
                  />
                </label>

                <label className="flex items-center justify-between py-3 cursor-pointer group">
                  <span className="text-[14px] font-medium text-[var(--text-main)]">Jangan terima</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                    ${(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Jangan terima' ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                  `}>
                    {(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Jangan terima' && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input 
                    type="radio" 
                    checked={(activeDmSettingModal === 'potensi' ? dmPotensiSetting : dmLainSetting) === 'Jangan terima'} 
                    onChange={() => activeDmSettingModal === 'potensi' ? setDmPotensiSetting('Jangan terima') : setDmLainSetting('Jangan terima')} 
                    className="hidden" 
                  />
                </label>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed font-medium">
                  {activeDmSettingModal === 'potensi' 
                    ? "Hubungan potensi merujuk kepada pengikut anda. Anda akan menerima mesej daripada hubungan potensi anda dalam permintaan mesej anda melainkan anda memilih untuk tidak menerima mesej sama sekali."
                    : "Anda akan menerima mesej daripada orang lain dalam permintaan mesej anda melainkan anda memilih untuk tidak menerima mesej sama sekali."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Topik Modal */}
      {activeTopikModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl w-full max-w-[400px] shadow-2xl relative">
            <button 
              onClick={() => setActiveTopikModal(null)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="p-6 pt-10">
              <h2 className="text-[18px] font-bold text-[var(--text-main)] mb-4 text-center">{activeTopikModal}</h2>
              <p className="text-[14px] text-[var(--text-main)] mb-6 text-center leading-relaxed">
                Iklan diperibadikan boleh berdasarkan kesimpulan yang dibuat oleh TikTok tentang anda. Perubahan boleh mengambil masa hingga 48 jam untuk kuat kuasa.
              </p>
              
              <div className="space-y-6">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="flex-1">
                    <span className="text-[15px] font-bold text-[var(--text-main)] block mb-1">Berminat</span>
                    <span className="text-[13px] text-[var(--text-secondary)] leading-relaxed">Kami akan cuba memaparkan kepada anda lebih banyak iklan yang berkaitan dengan topik ini.</span>
                  </div>
                  <div className="mt-1">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors
                      ${topikPreferences[activeTopikModal] === 'Berminat' ? 'border-[6px] border-[#FE2C55] bg-transparent' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                    `}>
                    </div>
                  </div>
                  <input 
                    type="radio" 
                    checked={topikPreferences[activeTopikModal] === 'Berminat'} 
                    onChange={() => setTopikPreferences(p => ({...p, [activeTopikModal]: 'Berminat'}))} 
                    className="hidden" 
                  />
                </label>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="flex-1">
                    <span className="text-[15px] font-bold text-[var(--text-main)] block mb-1">Tidak berminat</span>
                    <span className="text-[13px] text-[var(--text-secondary)] leading-relaxed">Kami akan cuba memaparkan kepada anda kurang iklan yang berkaitan dengan topik ini.</span>
                  </div>
                  <div className="mt-1">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors
                      ${topikPreferences[activeTopikModal] === 'Tidak berminat' ? 'border-[6px] border-[#FE2C55] bg-transparent' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                    `}>
                    </div>
                  </div>
                  <input 
                    type="radio" 
                    checked={topikPreferences[activeTopikModal] === 'Tidak berminat'} 
                    onChange={() => setTopikPreferences(p => ({...p, [activeTopikModal]: 'Tidak berminat'}))} 
                    className="hidden" 
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Jantina Modal */}
      {isJantinaModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl w-full max-w-[400px] shadow-2xl relative">
            <button 
              onClick={() => setIsJantinaModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="p-6">
              <h2 className="text-[18px] font-bold text-[var(--text-main)] mt-2 mb-4 text-center">Jantina</h2>
              <p className="text-[14px] text-[var(--text-main)] mb-6 text-center leading-relaxed">
                Jantina mungkin pada mulanya disimpulkan oleh TikTok. Kemas kini terhadap tetapan ini mungkin mempengaruhi iklan anda lihat di TikTok. Perubahan boleh mengambil masa 48 jam untuk kuat kuasa.
              </p>
              
              <div className="space-y-1">
                {['Lelaki', 'Perempuan', 'Tersuai'].map(gender => (
                  <label key={gender} className="flex items-center justify-between py-3 cursor-pointer group">
                    <span className="text-[14px] font-medium text-[var(--text-main)]">{gender}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                      ${jantinaSetting === gender ? 'border-[#FE2C55] bg-[#FE2C55]' : 'border-2 border-[var(--text-secondary)] group-hover:border-[var(--text-main)]'}
                    `}>
                      {jantinaSetting === gender && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <input 
                      type="radio" 
                      value={gender}
                      checked={jantinaSetting === gender} 
                      onChange={() => setJantinaSetting(gender as 'Lelaki' | 'Perempuan' | 'Tersuai')} 
                      className="hidden" 
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
