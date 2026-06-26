import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SafetyNav from './SafetyNav';

export default function GuardiansGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openTip, setOpenTip] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleTip = (index: number) => {
    setOpenTip(openTip === index ? null : index);
  };

  const tips = [
    { title: "Bantu saya memahami peraturan", content: "Kandungan tip 1..." },
    { title: "Sedia untuk berbual", content: "Kandungan tip 2..." },
    { title: "Jangan panik apabila sesuatu berlaku", content: "Kandungan tip 3..." },
    { title: "Percayakan saya", content: "Kandungan tip 4..." },
    { title: "Hormati privasi saya", content: "Kandungan tip 5..." }
  ];

  const faqs = [
    { question: "Berapa umur yang diperlukan untuk mempunyai akaun Poppro?", answer: "Jawapan FAQ 1..." },
    { question: "Bagaimana saya boleh laporkan seseorang bawah umur di Poppro?", answer: "Jawapan FAQ 2..." },
    { question: "Bagaimana remaja saya boleh membuat rayuan terhadap sekatan kerana bawah umur di Poppro?", answer: "Jawapan FAQ 3..." },
    { question: "Bagaimana remaja saya boleh kekal peribadi di Poppro?", answer: "Jawapan FAQ 4..." },
    { question: "Berapa umur yang diperlukan untuk Siar LIVE di Poppro?", answer: "Jawapan FAQ 5..." },
    { question: "Bolehkah remaja menggunakan Poppro Shop?", answer: "Jawapan FAQ 6..." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Panduan Penjaga</h1>
        </div>

        <div className="max-w-[680px] mx-auto space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold mb-6">Bagaimana Poppro berfungsi</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Poppro ialah tempat untuk cipta, teroka, dan kongsi apa yang anda suka. Api kami 
              membantu remaja belajar perkara baharu, menjadi kreatif, dan mencari komuniti. Misi kami 
              adalah untuk memberi inspirasi kepada kreativiti dan membawa kegembiraan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bahagian teras pengalaman Poppro ialah <a href="#" className="underline font-semibold hover:text-black">suapan Untuk Anda</a>, yang membolehkan anda 
              menemui kandungan, pencipta, dan minat yang anda suka. Ia dikuasakan oleh <a href="#" className="underline font-semibold hover:text-black">sistem 
              cadangan</a>, yang menggabungkan semua interaksi anda di Poppro, seperti sama ada anda 
              suka siaran, komen, atau menonton video hingga tamat. Kemudian, ia menggunakan 
              maklumat ini untuk mencipta suapan Untuk Anda yang diperibadikan. Tidak ada dua 
              suapan Untuk Anda yang sama, inilah yang menjadikan Poppro begitu istimewa—semua 
              orang boleh menemui kandungan yang mereka suka.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ketahui lebih lanjut tentang <a href="#" className="underline font-semibold hover:text-black">cara suapan Untuk Anda berfungsi</a> di Pusat Ketelusan kami.
            </p>
            
            <div className="bg-gray-100 rounded-3xl aspect-[9/16] w-full max-w-[300px] mx-auto my-12 flex items-center justify-center">
              <span className="text-gray-400">Video Placeholder</span>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Memulakan langkah</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anda perlu berumur sekurang-kurangnya 13 tahun untuk mencipta akaun Poppro. Di 
              sesetengah negara, umur minimum mungkin berbeza bergantung kepada undang-undang 
              tempatan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anda boleh memuat turun Poppro dari platform apl seperti <a href="#" className="underline font-semibold hover:text-black">Apple App Store</a> dan <a href="#" className="underline font-semibold hover:text-black">Google 
              Play</a>. Poppro mempunyai penilaian 13+ di Apple App Store dan disenaraikan untuk "Remaja" 
              di Google Play. Jika anda ingin menghalang remaja anda daripada memuat turun Poppro, 
              penilaian ini boleh membantu. Anda boleh menggunakan kawalan ibu bapa yang 
              ditawarkan oleh platform ini.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk mendaftar Poppro, pengguna baharu mesti memberikan tarikh lahir mereka. 
              Maklumat umur betul membantu pengguna Poppro menikmati pengalaman yang sesuai. Ia 
              menghadkan akses kepada ciri tertentu dan menyesuaikan iklan untuk kumpulan umur yang 
              berbeza. Untuk membantu remaja anda mendapat pengalaman yang lebih baik, sila 
              berbincang dengan mereka tentang kepentingan berkongsi tarikh lahir sebenar mereka di 
              Poppro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Di sesetengah tempat, Poppro mungkin menyediakan perkhidmatan yang berbeza 
              berdasarkan umur pengguna. Untuk maklumat lanjut, lihat Soalan Lazim di bawah.
            </p>
            <div className="rounded-3xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ibu bapa dan remaja melihat telefon" className="w-full h-auto" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Peraturan Poppro</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <a href="#" className="underline font-semibold hover:text-black">Garis Panduan Komuniti</a> kami menetapkan peraturan untuk Poppro dan membantu kami 
              mewujudkan pengalaman yang mesra, selamat, dan positif. Garis panduan ini terpakai 
              kepada semua orang dan semua perkara di platform kami. Kami mempunyai <a href="#" className="underline font-semibold hover:text-black">bahagian 
              Keselamatan dan Kesejahteraan Remaja</a> khusus, yang menerangkan langkah-langkah yang 
              kami ambil untuk membantu melindungi golongan muda dan jenis kandungan yang kami 
              hadkan mengikut umur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Poppro ditujukan untuk pelbagai audiens yang merangkumi semua orang, daripada remaja 
              hingga datuk nenek dan moyang. Itulah sebabnya kami memastikan kandungan tertentu 
              yang mungkin tidak sesuai untuk audiens umum tidak layak untuk suapan Untuk Anda. 
              Kami juga berusaha meminimumkan kandungan bertema matang secara jelas daripada 
              sampai kepada remaja di bawah umur 18 tahun.
            </p>
            <div className="rounded-3xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Remaja melihat telefon" className="w-full h-auto" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Keselamatan Keluarga</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Menyedari bahawa setiap remaja dan setiap keluarga adalah berbeza, kami menawarkan 
              Keselamatan Keluarga, yang membolehkan ibu bapa dan penjaga memautkan akaun 
              mereka dengan anak remaja mereka untuk menguruskan tetapan kandungan, privasi, dan 
              kesejahteraan. Ciri ini mudah digunakan dan boleh disediakan oleh ibu bapa hanya dengan 
              beberapa klik. Keselamatan Keluarga merangkumi ciri-ciri seperti:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
              <li>
                Menetapkan <a href="#" className="underline font-semibold hover:text-black">had masa skrin</a>, yang boleh disesuaikan mengikut hari dalam seminggu. 
                Apabila anda menetapkan had masa skrin dengan Keselamatan Keluarga, anak remaja 
                anda perlu meminta kod laluan sekali sahaja untuk terus menggunakan Poppro selepas had 
                tersebut tamat.
              </li>
              <li>
                <a href="#" className="underline font-semibold hover:text-black">Sesuaikan suapan Untuk Anda bagi anak remaja anda</a> menggunakan kata kunci. Poppro 
                akan menapis keluar siaran yang mengandungi kata kunci yang anda pilih dengan 
                menyemak kata kunci tersebut dalam perihalan siaran.
              </li>
              <li>
                Sesuaikan <a href="#" className="underline font-semibold hover:text-black">kawalan komen</a> anak remaja anda atau matikan komen sepenuhnya.
              </li>
              <li>
                Tentukan orang yang boleh menghantar mesej atau permintaan mesej kepada anak remaja 
                anda.
              </li>
              <li>
                Lihat orang yang diikuti oleh anak remaja anda di Poppro dan orang yang mengikuti 
                mereka, bersama-sama dengan <a href="#" className="underline font-semibold hover:text-black">akaun yang disekat oleh mereka</a>.
              </li>
              <li>
                Dapatkan gambaran keseluruhan bagi tetapan privasi anak remaja anda, seperti 
                keterlihatan akaun mereka dan orang yang boleh memberikan komen pada siaran mereka. 
                Tetapan yang ditunjukkan di sini bergantung pada umur anak remaja anda dan ciri yang 
                tersedia untuk mereka.
              </li>
              <li>
                Dayakan <a href="#" className="underline font-semibold hover:text-black">Mod Terbatas</a> untuk mengehadkan pendedahan kepada kandungan yang 
                mungkin tidak selesa untuk remaja anda.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kami ingin memudahkan keluarga untuk memulakan dan mengekalkan perbualan tentang 
              pengalaman dalam talian serta menetapkan sempadan digital yang positif bersama-sama. 
              Ketahui lebih lanjut tentang <a href="#" className="underline font-semibold hover:text-black">Keselamatan Keluarga</a> dan <a href="#" className="underline font-semibold hover:text-black">tetapan privasi dan keselamatan 
              remaja</a> dalam Pusat Bantuan kami.
            </p>
            <div className="rounded-3xl overflow-hidden mb-12">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ibu bapa dan remaja" className="w-full h-auto" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Tip daripada remaja</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kami tahu bahawa mengikuti perkembangan teknologi baharu boleh menjadi cabaran bagi 
              ibu bapa atau penjaga. Berbincang tentang keselamatan dalam talian mungkin terasa 
              menakutkan. Remaja mahu suara mereka didengar dan dihormati. Untuk memudahkan 
              perkara ini, kami telah bertanya kepada ribuan remaja di seluruh dunia bagaimana mereka 
              mahu orang dewasa yang dipercayai menyokong mereka dalam talian:
            </p>
            <div className="space-y-4 mb-12">
              {tips.map((tip, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleTip(index)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900">{tip.title}</span>
                    <ChevronDown size={20} className={`text-gray-500 transition-transform ${openTip === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openTip === index && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {tip.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Soalan Lazim</h2>
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown size={20} className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="rounded-3xl overflow-hidden mb-12 flex justify-center">
               <img src="https://images.unsplash.com/photo-1543269664-56d74c65a3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ibu bapa dan remaja" className="w-full max-w-[400px] h-auto rounded-3xl" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Sumber yang berguna</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Panduan <a href="#" className="underline font-semibold hover:text-black">Pusat Keselamatan Remaja</a> kami membantu remaja mengetahui tentang ciri dan 
              alatan keselamatan berbeza yang tersedia untuk mereka di Poppro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anda juga boleh merujuk <a href="#" className="underline font-semibold hover:text-black">halaman Alatan & Panduan</a> kami untuk pelbagai sumber 
              mengenai topik seperti buli dalam talian, penipuan, memahami cabaran dalam talian, dan 
              banyak lagi.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
