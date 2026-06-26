import React, { useEffect } from 'react';
import { Shield, FileText, Lock, Eye, ArrowLeft, Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TermsPolicyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-dark)]">
      <header className="sticky top-0 z-50 bg-[var(--bg-dark)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 py-4 flex items-center">
        <button 
          onClick={() => navigate('/')} 
          className="p-2 mr-4 rounded-full hover:bg-[var(--sidebar-bg)] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="text-[var(--text-main)]" size={24} />
        </button>
        <h1 className="text-xl font-bold text-[var(--text-main)]">Kembali ke Laman Utama</h1>
      </header>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-10">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[var(--text-main)] mb-8">
              Terma & Dasar
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-[#757575] font-bold text-[15px]">
              <button onClick={() => navigate('/support')} className="hover:text-[var(--text-main)] text-left block">Bantuan</button>
              <button onClick={() => navigate('/safety')} className="hover:text-[var(--text-main)] text-left block">Keselamatan</button>
              <button onClick={() => navigate('/terms')} className="hover:text-[var(--text-main)] text-left block">Terma</button>
              
              <button onClick={() => navigate('/privacy-settings')} className="hover:text-[var(--text-main)] text-left block">Dasar Privasi</button>
              <button className="hover:text-[var(--text-main)] text-left block">Kebolehcapaian</button>
              <div className="hidden md:block"></div>

              <button onClick={() => navigate('/support/privacy-safety')} className="hover:text-[var(--text-main)] text-left block">Pusat Privasi</button>
              <button className="hover:text-[var(--text-main)] text-left block">Akademi Pencipta</button>
              <div className="hidden md:block"></div>

              <button onClick={() => navigate('/new-user-guide')} className="hover:text-[var(--text-main)] text-left block">Garis Panduan Komuniti</button>
              <button onClick={() => navigate('/intellectual-property')} className="hover:text-[var(--text-main)] text-left block uppercase">Hak cipta</button>
              <div className="hidden md:block"></div>

              <button className="hover:text-[var(--text-main)] text-left block md:col-span-2">Garis Panduan Penguatkuasaan Undang-undang</button>
            </div>
          </div>

          <div className="space-y-12 border-t border-[var(--border-color)] pt-12">
          <section id="perihal" className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl p-8 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-green)]/10 flex items-center justify-center">
                <Info className="text-[var(--primary-green)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Perihal Poppro</h2>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
              <p>
                Poppro adalah platform video pendek yang direka untuk membolehkan sesiapa sahaja berkongsi kreativiti, bakat, dan detik harian mereka dengan dunia. Matlamat kami adalah untuk membina komuniti yang inklusif, selamat, dan menyeronokkan bagi semua pengguna.
              </p>
              <p>
                Di Poppro, kami menggabungkan teknologi AI terkini dengan kreativiti manusia untuk memberikan pengalaman yang luar biasa kepada pencipta dan penonton. Kami komited untuk melindungi privasi anda dan memastikan persekitaran yang sihat untuk pengeluaran kandungan.
              </p>
            </div>
          </section>

          <section className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-green)]/10 flex items-center justify-center">
                <FileText className="text-[var(--primary-green)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Terma Perkhidmatan</h2>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
              <p>
                Selamat datang ke Poppro. Dengan mengakses atau menggunakan platform kami, anda bersetuju untuk mematuhi dan terikat dengan Terma Perkhidmatan ini. Sila baca dengan teliti sebelum menggunakan perkhidmatan kami.
              </p>
              
              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">1. Penerimaan Terma</h3>
              <p>
                Dengan mendaftar akaun atau menggunakan sebarang bahagian perkhidmatan Poppro, anda mengesahkan bahawa anda telah membaca, memahami, dan bersetuju untuk terikat dengan kontrak ini. Jika anda tidak bersetuju, anda tidak dibenarkan menggunakan platform ini.
              </p>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">2. Kelayakan Pengguna</h3>
              <p>
                Anda mesti berumur sekurang-kurangnya 13 tahun untuk menggunakan perkhidmatan ini. Bagi pengguna di bawah umur 18 tahun, anda memerlukan kebenaran ibu bapa atau penjaga sah untuk menggunakan perkhidmatan ini.
              </p>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">3. Kandungan Pengguna & Hak Milik</h3>
              <p>
                Anda mengekalkan hak milik intelektual ke atas kandungan yang anda muat naik. Walau bagaimanapun, dengan memuat naik kandungan ke Poppro, anda memberikan Poppro lesen global, tidak eksklusif, bebas royalti, dan boleh disublisensikan untuk menggunakan, mengedar, memodifikasi, dan memaparkan kandungan tersebut bagi tujuan operasi dan promosi platform.
              </p>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">4. Kod Etika & Kandungan Dilarang</h3>
              <p>
                Anda bersetuju untuk tidak memuat naik kandungan yang:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengandungi unsur lucah, keganasan melampau, atau kebencian.</li>
                <li>Melanggar hak cipta, tanda dagangan, atau privasi pihak ketiga.</li>
                <li>Bertujuan untuk membuli, mengganggu, atau mengancam individu lain.</li>
                <li>Menyebarkan maklumat palsu atau penipuan (scam).</li>
              </ul>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">5. Penamatan Akaun</h3>
              <p>
                Poppro berhak untuk menangguhkan atau menamatkan akses anda ke perkhidmatan kami pada bila- bila masa, tanpa notis, sekiranya kami percaya anda telah melanggar Terma ini atau terlibat dalam tingkah laku yang merosakkan ekosistem Poppro.
              </p>
            </div>
          </section>

          <section className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-green)]/10 flex items-center justify-center">
                <Shield className="text-[var(--primary-green)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Dasar Privasi</h2>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
              <p>
                Privasi anda adalah keutamaan kami. Dasar Privasi ini menerangkan cara kami menguruskan maklumat peribadi anda di Poppro.
              </p>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">Data Yang Kami Kumpul</h3>
              <p>
                Kami mengumpul dua jenis data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Maklumat Profil:</strong> Nama, emel, dan gambar profil yang anda berikan semasa pendaftaran.</li>
                <li><strong>Data Penggunaan:</strong> Log interaksi, jenis peranti, dan alamat IP untuk tujuan keselamatan dan pengoptimuman algoritma.</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-[var(--bg-dark)] rounded-xl border border-[var(--border-color)]">
                  <Eye className="text-[var(--primary-green)] mb-3" size={24} />
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Ketelusan Data</h3>
                  <p className="text-sm">
                    Kami sentiasa telus mengenai bagaimana data anda digunakan untuk memberikan pengalaman yang lebih peribadi kepada anda.
                  </p>
                </div>
                <div className="p-6 bg-[var(--bg-dark)] rounded-xl border border-[var(--border-color)]">
                  <Lock className="text-[var(--primary-green)] mb-3" size={24} />
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Total Security</h3>
                  <p className="text-sm">
                    Our system uses end-to-end encryption to ensure your conversations and sensitive data remain private.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-main)] pt-4">User Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information at any time through your account settings or by contacting our support team.
              </p>
            </div>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}
