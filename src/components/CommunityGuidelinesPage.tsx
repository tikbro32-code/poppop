import React from 'react';
import { Search, ChevronDown, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyNav from './SafetyNav';

export default function CommunityGuidelinesPage() {
  const sidebarLinks = [
    { title: 'Gambaran Keseluruhan', active: true },
    { title: 'Prinsip Komuniti', active: false },
    { title: 'Keselamatan dan Pengalaman Belia', active: false },
    { title: 'Keselamatan dan Budi Pekerti', active: false },
    { title: 'Kesihatan Mental dan Tingkah Laku', active: false },
    { title: 'Tema Sensitif dan Matang', active: false },
    { title: 'Integriti dan Ketulenan', active: false },
    { title: 'Barang Terkawal, Perkhidmatan, dan Aktiviti Komersial', active: false },
    { title: 'Privasi dan Keselamatan', active: false },
    { title: 'Standard Kelayakan \'Suapan Untuk Anda\'', active: false },
    { title: 'Akaun dan Ciri', active: false },
    { title: 'Penguatkuasaan', active: false },
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="pb-32">
        <div className="max-w-[1200px] mx-auto px-6 pt-12">
          
          {/* Header Banner */}
          <div className="bg-[#0B3B24] text-white rounded-3xl p-12 md:p-16 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Garis Panduan<br/>Komuniti
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full md:w-[280px] shrink-0">
              <div className="sticky top-24">
                <h3 className="font-bold mb-4 px-4 text-sm">Garis Panduan Komuniti</h3>
                <nav className="space-y-1">
                  {sidebarLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href="#"
                      className={`block px-4 py-3 text-sm rounded-xl transition-colors ${
                        link.active 
                          ? 'bg-black text-white font-semibold' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {link.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-[800px]">
              <p className="text-sm text-gray-500 mb-8">
                Dikeluarkan pada 14 Ogos 2025 • Berkuat kuasa pada 13 September 2025
              </p>

              <div className="space-y-6 text-gray-800 leading-relaxed text-[15px]">
                <p>
                  Poppro adalah tempat orang meneroka perkara yang mereka suka, membina komuniti, dan mengekspresikan diri mereka. Misi kami mudah: kami ingin menginspirasikan kreativiti dan membawa keceriaan.
                </p>

                <p>
                  Kami mempunyai Garis Panduan Komuniti untuk membantu kami memastikan Poppro pengalaman yang selamat dan positif. Peraturan ini terpakai kepada semua orang dan segala-galanya di platform kami.
                </p>

                <p className="font-semibold text-black pt-4">
                  Anda berada di tempat yang betul jika anda ingin tahu tentang:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Perkara yang dibenarkan di Poppro</li>
                  <li>Perkara yang tidak dibenarkan di Poppro</li>
                  <li>Perkara yang tidak dibenarkan dalam suapan Untuk Anda (FYF)</li>
                </ul>

                <p className="pt-4">
                  Kami telah menyusun Garis Panduan Komuniti kami mengikut topik untuk menjadikan maklumat lebih mudah dicari. Di bawah setiap kategori, anda akan menemukan bahagian "Maklumat lanjut". Di situlah kami mentakrifkan syarat utama, menjawab soalan umum, dan berkongsi contoh yang berguna. Contoh-contoh ini bertujuan untuk membimbing anda tetapi ia tidak meliputi setiap situasi.
                </p>

                <p>
                  Jika anda tidak pasti tentang perkara yang hendak disiarkan, ingatlah untuk berbuat baik dan memperlakukan orang lain sebagaimana anda ingin diperlakukan.
                </p>

                <p>
                  Terima kasih kerana membantu mengekalkan Poppro sebagai ruang yang mesra untuk semua orang!
                </p>

                <h3 className="text-xl font-bold text-black pt-8 pb-2">Peraturan Kami</h3>
                <p>
                  Kami berusaha untuk menghasilkan Garis Panduan Komuniti yang mudah difahami. Kami telah mencipta ringkasan pantas tentang perkara yang kami tidak benarkan merentas setiap topik utama yang dibincangkan dalam Garis Panduan Komuniti kami. Jika anda mencari maklumat lanjut, ia boleh ditemukan selepas bahagian ini.
                </p>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Keselamatan dan Budi Pekerti</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Tingkah Laku Ganas dan Jenayah:</strong> Kami tidak membenarkan ancaman, penggalakan atau pengagungan keganasan, promosi jenayah atau arahan tentang cara melakukan perbuatan yang memudaratkan.</li>
                  <li><strong>Ucapan dan Tingkah Laku Kebencian:</strong> Kami tidak membenarkan kandungan yang menggalakkan kebencian atau menyerang orang berdasarkan sifat yang dilindungi seperti bangsa, agama, jantina, atau orientasi seksual.</li>
                  <li><strong>Organisasi dan Individu Ganas dan Penuh Kebencian:</strong> Kami tidak membenarkan orang atau kumpulan yang menggalakkan keganasan atau kebencian, termasuk pelampau ganas, organisasi jenayah, atau mereka yang bertanggungjawab terhadap keganasan besar-besaran. Menyokong, merekrut bagi pihak, atau mempromosikan entiti-entiti ini juga dilarang.</li>
                  <li><strong>Penderaan Seksual dan Fizikal Belia:</strong> Kami tidak membenarkan kandungan yang menunjukkan, menggalakkan, atau memudahkan penderaan seksual, eksploitasi, atau kemudaratan orang muda.</li>
                  <li><strong>Penderaan Seksual Orang Dewasa:</strong> Kami tidak membenarkan kandungan yang menunjukkan, menggalakkan, atau memudahkan penderaan atau eksploitasi seksual orang dewasa.</li>
                  <li><strong>Pemerdagangan dan Penyeludupan Manusia:</strong> Kami tidak membenarkan kandungan yang menggalakkan atau memudahkan pemerdagangan atau penyeludupan manusia.</li>
                  <li><strong>Gangguan dan Pembulian:</strong> Kami tidak membenarkan kandungan yang mengganggu atau membuli orang lain, termasuk kata-kata yang merendahkan rupa, pendedahan maya, gangguan seksual, atau penderaan yang diselaraskan. Kami membenarkan komentary tentang tokoh politik yang mungkin kritis, tetapi mengeluarkan kandungan yang menyebabkan kemudaratan yang serius.</li>
                </ul>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Kesihatan Mental dan Tingkah Laku</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Tindakan Bunuh Diri dan Mencederakan Diri Sendiri:</strong> Kami tidak membenarkan kandungan yang menunjukkan, menggalakkan, atau memberikan arahan untuk membunuh diri atau mencederakan diri sendiri.</li>
                  <li><strong>Gangguan Makan, Pengurusan Berat Berisiko, dan Imej Tubuh Badan:</strong> Kami tidak membenarkan kandungan yang menggalakkan gangguan makan, kaedah penurunan berat badan atau penambahan otot yang berisiko, atau perbandingan badan yang memudaratkan.</li>
                  <li><strong>Aktiviti dan Cabaran Berbahaya:</strong> Kami tidak membenarkan kandungan yang menunjukkan atau menggalakkan lagak ngeri yang berbahaya, tantangan, atau cabaran yang boleh menyebabkan kemudaratan fizikal.</li>
                </ul>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Tema Sensitif dan Matang</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Pendedahan Tubuh Badan dan Tingkah Laku Seksual:</strong> Kami tidak membenarkan sesetengah jenis pendedahan tubuh badan atau tingkah laku seksual, termasuk kebogelan, aktiviti seksual, perkhidmatan seksual atau sebarang tingkah laku berunsur seksual atau pendedahan ketara yang melibatkan orang muda.</li>
                  <li><strong>Kandungan Mengejutkan dan Grafik:</strong> Kami tidak membenarkan kandungan yang terlalu grafik, ganas, atau mengganggu—terutamanya jika ia boleh menyebabkan tekanan emosi kepada penonton.</li>
                  <li><strong>Penganiayaan Haiwan:</strong> Kami tidak membenarkan kandungan yang menunjukkan atau menggalakkan penganiayaan, kekejaman, pengabalan, atau eksploitasi haiwan.</li>
                </ul>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Integriti dan Ketulenan</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Maklumat Salah:</strong> Kami tidak membenarkan maklumat salah yang boleh menyebabkan kemudaratan ketara kepada individu atau masyarakat.</li>
                  <li><strong>Integriti Sivik dan Pilihan Raya:</strong> Kami tidak membenarkan kandungan yang boleh mengelirukan pengundi atau mengganggu pilihan raya termasuk dakwaan palsu tentang cara mengundi, orang yang boleh mengundi, atau keputusan pilihan raya.</li>
                  <li><strong>Media dan Kandungan Dijana AI (AIGC) yang Diedit:</strong> Kami memerlukan pelabelan yang jelas apabila AI atau pengeditan digunakan untuk menggambarkan orang atau babak secara realistik. Kami tidak membenarkan AIGC yang mengelirukan tentang perkara yang mempunyai kepentingan awam atau yang memudaratkan individu.</li>
                  <li><strong>Kandungan Tidak Asli dan Hak Harta Intelek:</strong> Kami tidak membenarkan kandungan yang melanggar hak harta intelek termasuk siaran semula bahan hak cipta atau tanda dagangan tanpa kebenaran.</li>
                  <li><strong>Tingkah Laku yang Mengelirukan & Interaksi Palsu:</strong> Kami tidak membenarkan akaun yang mengelirukan atau cuba memanipulasi platform kami, atau perdagangan perkhidmatan yang meningkatkan interaksi secara buatan atau menipu sistem pengesyoran.</li>
                </ul>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Barangan, Perkhidmatan, dan Aktiviti Komersial Terkawal</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Barangan, Perkhidmatan, dan Aktiviti Komersial Terkawal:</strong> Kami tidak membenarkan perdagangan, pemasaran, atau promosi barangan dan perkhidmatan terkawal, terlarang atau berisiko tinggi. Akaun perniagaan berdaftar dan penjual Poppro Shop yang disahkan mungkin dibenarkan untuk menjual atau memasarkan sesetengah item terkawal jika mereka memenuhi keperluan yang ketat.</li>
                  <li><strong>Pendedahan Komersial dan Pemasaran Berbayar:</strong> Jika anda mempromosikan produk, jenama atau perniagaan, anda mesti menggunakan tetapan pendedahan kandungan Poppro.</li>
                  <li><strong>Pemalsuan dan Penipuan:</strong> Kami tidak membenarkan kandungan yang menggalakkan atau memudahkan penipuan, pemalsuan, atau skim yang mengelirukan.</li>
                </ul>

                <h4 className="font-bold text-black pt-6 pb-2 underline decoration-2 underline-offset-4">Privasi dan Keselamatan</h4>
                <ul className="list-disc pl-5 space-y-4">
                  <li><strong>Maklumat Peribadi:</strong> Kami tidak membenarkan perkongsian maklumat peribadi yang boleh menyebabkan kemudaratan seperti kecurian identiti, pengintaian, atau pemalsuan.</li>
                  <li><strong>Keselamatan Platform:</strong> Kami tidak membenarkan cubaan untuk menggodam, melakukan kejuruteraan balikan atau menjejaskan sistem Poppro.</li>
                </ul>

                <p className="pt-4 pb-12">
                  Ingin melihat peraturan ini dengan lebih terperinci, cara kami menguatkuasakan peraturan ini, dan cara ia digunakan merentas kawasan yang berbeza? Kami menggalakkan anda untuk terus membaca.
                </p>

                <h3 className="text-xl font-bold text-black pt-4 pb-2">Penyederhanaan Kandungan</h3>
                <p className="pb-8">
                  Kami mahu Poppro menjadi tempat yang selamat, menyeronokkan, dan kreatif untuk semua orang. Ini cara kami menyokong matlamat itu:
                </p>

                {/* Info blocks */}
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50">
                    <div className="bg-red-100 p-2 rounded-full text-red-500 shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-[15px]">Kami Mengeluarkan Kandungan</h4>
                      <p className="text-gray-600 text-[14px]">Semua orang di Poppro boleh berkongsi kandungan tetapi apabila kami mengenal pasti kandungan yang jatuh di bawah peraturan "Tidak Dibenarkan" dalam Garis Panduan Komuniti, kami akan mengeluarkan kandungan tersebut.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50">
                    <div className="bg-red-100 p-2 rounded-full text-red-500 shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-[15px]">Kami Mengehadkan Kandungan Mengikut Umur</h4>
                      <p className="text-gray-600 text-[14px]">Sesetengah kandungan mungkin tidak sesuai untuk orang yang berumur di bawah 18 tahun. Apabila kami mengenal pasti kandungan yang jatuh di bawah standard "Dihadkan Umur" dalam Garis Panduan Komuniti, kami menjadikan kandungan tersebut hanya boleh dilihat oleh orang dewasa.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50">
                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 shrink-0 mt-1">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-[15px]">Standard Suapan Untuk Anda</h4>
                      <p className="text-gray-600 text-[14px]">Suapan Untuk Anda direka bentuk bagi membantu anda meneroka pelbagai kandungan dan pencipta serta untuk pencipta mencapai audiens baru dan membina komuniti yang berkembang maju. Walau bagaimanapun, tidak semua kandungan dijamin akan disyorkan. Apabila kami mengenal pasti kandungan yang jatuh di bawah standard "Tidak Layak FYF" dalam Garis Panduan Komuniti kami, kandungan tersebut tidak akan disyorkan dalam FYF. Anda boleh membaca lebih lanjut tentang perkara yang layak <a href="#" className="underline font-semibold hover:text-black">di sini</a>.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50">
                    <div className="bg-gray-200 p-2 rounded-full text-gray-700 shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2 text-[15px]">Kami memberi anda alatan dan sumber untuk kekal termaklum dan terkawal</h4>
                      <p className="text-gray-600 text-[14px] mb-4">Anda diberi kuasa untuk menguruskan pengalaman anda pada Poppro. Kami menyediakan <a href="#" className="underline font-semibold hover:text-black">kit alat keselamatan</a> yang membantu anda menyesuaikan keutamaan kandungan dan <a href="#" className="underline font-semibold hover:text-black">tetapan akaun</a> anda, serta menguruskan interaksi. Selain itu, untuk sesetengah kandungan, anda akan melihat skrin "opt-in" atau sepanduk untuk memberi anda lebih banyak konteks tentang siaran.</p>
                      <p className="text-gray-600 text-[14px]">Anda juga boleh melawat sumber <a href="#" className="underline font-semibold hover:text-black">Pusat Keselamatan</a> kami untuk mendapatkan sokongan tambahan.</p>
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <div className="pt-12 flex items-center gap-4">
                  <span className="font-semibold text-black">Adakah ia membantu?</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> Ya
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg> Tidak
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="text-4xl font-bold">P</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 flex-1 text-[13px] text-gray-600">
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Syarikat</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Perihal Poppro</a></li>
                <li><a href="#" className="hover:underline">Bilik berita</a></li>
                <li><a href="#" className="hover:underline">Hubungi</a></li>
                <li><a href="#" className="hover:underline">Kerjaya</a></li>
                <li><a href="#" className="hover:underline">ByteDance</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Program</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Poppro for Good</a></li>
                <li><a href="#" className="hover:underline">Poppro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di Poppro</a></li>
                <li><a href="#" className="hover:underline">Poppro Browse</a></li>
                <li><a href="#" className="hover:underline">Poppro Embeds</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Sumber</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:underline">Pusat Keselamatan</a></li>
                <li><a href="#" className="hover:underline">Pusat Privasi</a></li>
                <li><a href="#" className="hover:underline">Akademi Pencipta</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Komuniti</a></li>
                <li><a href="#" className="hover:underline">Ketelusan</a></li>
                <li><a href="#" className="hover:underline">Kebolehcapaian</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Perundangan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Terma Perkhidmatan</a></li>
                <li><a href="#" className="hover:underline">Dasar Privasi</a></li>
                <li><a href="#" className="hover:underline">Dasar Harta Intelek</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Penguatkuasaan Undang-undang Poppro</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Poppro</p>
          <div className="flex gap-4">
            <span className="font-bold text-black flex items-center gap-2 border border-gray-200 rounded px-3 py-1 cursor-pointer">
              Bahasa Melayu <ChevronDown size={14} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
