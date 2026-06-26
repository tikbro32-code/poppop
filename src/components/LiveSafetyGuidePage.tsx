import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SafetyNav from './SafetyNav';

export default function LiveSafetyGuidePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const semasaLiveOptions = [
    { id: 'pusat-pendidikan', title: 'Pusat Pendidikan Keselamatan LIVE', content: 'Kandungan Pusat Pendidikan...' },
    { id: 'hadiah-live', title: 'Hadiah LIVE', content: 'Kandungan Hadiah LIVE...' },
    { id: 'perlawanan-live', title: 'Perlawanan LIVE', content: 'Kandungan Perlawanan LIVE...' },
    { id: 'berbilang-tetamu', title: 'Berbilang Tetamu LIVE', content: 'Kandungan Berbilang Tetamu LIVE...' },
    { id: 'komen-live', title: 'Komen LIVE', content: 'Kandungan Komen LIVE...' },
  ];

  const melaporkanMasalahOptions = [
    { id: 'laporan-masalah', title: 'Laporan Masalah', content: 'Cara melaporkan masalah...' },
    { id: 'serahkan-rayuan', title: 'Serahkan Rayuan', content: 'Cara menyerahkan rayuan...' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Panduan keselamatan<br/>LIVE</h1>
        </div>

        <div className="max-w-[680px] mx-auto space-y-16">
          
          <section>
            <h2 className="text-3xl font-bold mb-6">Apakah yang membuatkan LIVE unik?</h2>
            <p className="text-gray-700 leading-relaxed">
              <a href="#" className="underline font-semibold hover:text-black">Poppro LIVE</a> menawarkan ruang untuk ekspresi dan kreativiti masa nyata, membolehkan 
              pencipta berhubung dengan audiens mereka dengan cara yang menarik dan mencipta 
              kandungan bersama. Semasa sesi Poppro LIVE, pencipta boleh berinteraksi dengan 
              penonton melalui komen dan soalan. Selain itu, LIVE menawarkan peluang ekonomi kepada 
              pencipta melalui <a href="#" className="underline font-semibold hover:text-black">Hadiah LIVE</a>, kebolehan untuk ditemukan oleh penonton baharu dan cara 
              untuk memupuk komuniti.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Bermula di LIVE</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk bersiaran LIVE, anda mesti berumur sekurang-kurangnya 18 tahun, dan akaun anda 
              mesti mempunyai sejumlah pengikut tertentu, yang mungkin berbeza-beza mengikut 
              pasaran. Apabila anda baru mula bersiaran LIVE, anda mungkin tidak mempunyai akses 
              kepada semua ciri LIVE yang ditawarkan. Kami menggalakkan pencipta agar membiasakan 
              diri dengan <a href="#" className="underline font-semibold hover:text-black">Garis Panduan Komuniti</a>, <a href="#" className="underline font-semibold hover:text-black">Tatakelakuan Pencipta</a> dan ciri-ciri keselamatan dalam 
              aplikasi kami. Lama-kelamaan, anda akan mendapat akses kepada seluruh pengalaman 
              LIVE selagi anda mematuhi dasar keselamatan kami.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Sesuaikan pengalaman anda untuk mengutamakan kesejahteraan anda</h2>
            
            <h3 className="text-xl font-bold mt-10 mb-4">Petua Kesejahteraan</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Berinteraksi dengan penonton dalam masa nyata sangat mengujakan, tetapi apabila anda 
              baru bermula, mungkin anda berasa banyak perkara yang perlu dipertimbangkan. Sebab 
              itulah kami telah menyediakan beberapa <a href="#" className="underline font-semibold hover:text-black">petua kesejahteraan</a> agar anda sebagai <a href="#" className="underline font-semibold hover:text-black">pencipta 
              LIVE</a>, moderator komuniti LIVE dan penonton LIVE boleh menyesuaikan pengalaman LIVE 
              anda untuk menyokong keperluan kesejahteraan anda yang unik.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Petua Keselamatan untuk Pencipta LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Poppro menawarkan pelbagai alat untuk menyokong keselamatan anda. Anda boleh melihat 
              lebih banyak sumber untuk pencipta LIVE dalam <a href="#" className="underline font-semibold hover:text-black">Akademi Pencipta Poppro</a> dan 
              mendapatkan petua tentang <a href="#" className="underline font-semibold hover:text-black">cara berkongsi kisah anda dengan selamat</a> dalam Pusat 
              Keselamatan kami.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Sebelum Bersiaran LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ambil perhatian bahawa LIVE ialah siaran dalam masa nyata dan tidak boleh diedit semasa 
              strim anda. Hal ini berbeza daripada video pendek di Poppro, yang boleh diedit sebelum 
              disiarkan. Bersedia sebelum bersiaran LIVE dengan menyemak petua dan ciri-ciri 
              keselamatan di bawah:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
              <li>
                <strong>Awam berbanding Peribadi:</strong> Pertimbangkan audiens anda dan sama ada anda mahu 
                kandungan anda menjadi awam atau peribadi. Anda boleh mengetahui lebih lanjut tentang 
                perbezaan antara akaun awam dengan peribadi dalam <a href="#" className="underline font-semibold hover:text-black">Pusat Privasi</a> kami, yang 
                mempunyai video dan gambar untuk menyokong anda mengurus akaun anda.
              </li>
              <li>
                <strong>Garis Panduan Komuniti:</strong> Fahami Garis Panduan Komuniti Poppro dan <a href="#" className="underline font-semibold hover:text-black">Tatakelakuan 
                Pencipta</a> untuk menyokong persekitaran LIVE yang positif. Jika anda melanggar Garis 
                Panduan Komuniti dan/atau Tatakelakuan kami, kami mungkin akan menutup bilik LIVE itu 
                dan mengenakan sekatan ke atas kandungan, ciri-ciri LIVE atau akaun anda selari dengan 
                dasar kami.
              </li>
              <li>
                <strong>Sekatan umur LIVE:</strong> Pencipta mesti berumur 18 tahun ke atas untuk bersiaran LIVE dan 
                orang mesti berkebolehan untuk menghantar dan menerima Hadiah LIVE (*mesti berumur 
                19 tahun untuk menghantar Hadiah di Korea Selatan). Selain itu, jika kandungan yang 
                dikenakan sekatan umur dikenal pasti semasa LIVE, kandungan itu tidak akan disyorkan 
                kepada orang berumur 13 - 17 tahun. Pencipta LIVE akan dimaklumi dan boleh memilih 
                untuk memutuskan sambungan hos bersama atau mengeluarkan tetamu yang memiliki 
                kandungan LIVE yang dibenderakan sebagai dikenakan sekatan umur.
              </li>
              <li>
                <strong>Tentang Saya:</strong> Untuk menetapkan nada dan suasana LIVE anda, gunakan "tentang saya" 
                untuk memberitahu topik kepada orang dan menyatakan apa-apa garis panduan.
              </li>
              <li>
                Ciri ini boleh diakses di bawah tetapan LIVE {'->'} Tentang saya.
              </li>
            </ul>

            <div className="flex justify-center gap-4 mb-12">
              <div className="bg-gray-100 rounded-3xl w-40 h-80"></div>
              <div className="bg-gray-100 rounded-3xl w-40 h-80"></div>
            </div>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
              <li>
                <strong>Kawalan Audiens:</strong> Jika kandungan anda mungkin tidak sesuai untuk remaja—sebagai 
                contoh, jika kandungan mengandungi tema sensitif atau humor dewasa, pergi ke Tetapan 
                anda dan hidupkan Kawalan Audiens untuk memastikan kandungan anda hanya kelihatan 
                kepada pengguna berumur 18 tahun ke atas.
              </li>
              <li>
                <strong>Maklumat Peribadi:</strong> Berhati-hati apabila berkongsi lokasi tepat anda dalam masa nyata. 
                Elakkan berkongsi maklumat peribadi secara sengaja atau tidak sengaja pada latar 
                belakang LIVE anda (sebagai contoh, alamat rumah atau majikan anda dan lain-lain) untuk 
                melindungi privasi dan kesejahteraan anda.
              </li>
              <li>
                <strong>Tampilkan Keaslian:</strong> Keaslian ialah prinsip asas untuk LIVE. Kami mahu semua orang 
                menampilkan diri mereka yang sebenar dalam LIVE dan tidak berpura-pura menjadi orang 
                lain. Jadi, elakkan menstrim kandungan LIVE orang lain dengan cara mengelirukan yang 
                boleh menyebabkan seseorang yang munasabah percaya bahawa individu dalam strim 
                langsung itu yang menstrim kandungan tersebut.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-10 mb-6">Semasa Sesi LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Semak petua keselamatan di bawah tentang ciri yang tersedia semasa LIVE anda:
            </p>

            <div className="space-y-4 mb-8">
              {semasaLiveOptions.map((option) => (
                <div key={option.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSection(option.id)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900">{option.title}</span>
                    <ChevronDown size={20} className={`text-gray-500 transition-transform ${openSection === option.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === option.id && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {option.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Kami menggalakkan pencipta agar menggunakan alat ini untuk menyokong pengalaman 
              penstriman yang positif dan mengelakkan pelanggaran <a href="#" className="underline font-semibold hover:text-black">Garis Panduan Komuniti</a> Poppro. 
              Selepas LIVE anda selesai, anda akan mendapat akses kepada <a href="#" className="underline font-semibold hover:text-black">Main Semula LIVE</a> sehingga 
              30 hari jika anda mahu menyemak bahan ini atas apa-apa sebab.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Moderator Komuniti LIVE</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Poppro mempunyai sebuah pasukan keselamatan khusus yang menyemak dan 
              mengendalikan LIVE untuk menjaga keselamatan komuniti. Walau bagaimanapun, 
              sokongan masa nyata daripada seseorang yang mengenali kandungan dan komuniti anda 
              boleh jadi membantu. Sebab itulah pencipta boleh melantik seorang <a href="#" className="underline font-semibold hover:text-black">Moderator Komuniti</a> 
              (*sehingga 30 moderator setiap LIVE) untuk membantu pengurusan strim anda dan 
              mengekalkan pengalaman yang mesra dan positif.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Semasa LIVE, moderator komuniti yang ditugaskan boleh memastikan perbualan semasa 
              suasana sepi dan juga mendapat akses kepada alat dalam apl yang boleh mengekalkan 
              pengalaman selamat dan menggalakkan penglibatan positif daripada penonton. Jika 
              diberikan keizinan, moderator komuniti LIVE juga boleh membantu pencipta <a href="#" className="underline font-semibold hover:text-black">mengurus 
              komen</a>, penapis kata kunci dan boleh diberikan kawalan yang serupa dengan pencipta 
              termasuk kebolehan untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Membisukan dan menyekat pengguna atau komen pengguna</li>
              <li>Melaporkan dan menapis <a href="#" className="underline font-semibold hover:text-black">komen ditandakan komuniti</a>, tidak baik atau spam</li>
              <li>Mengepin komen di bahagian atas sembang LIVE</li>
            </ul>

            <h3 className="text-xl font-bold mt-10 mb-4">Cara Menambah Moderator LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anda boleh menambah moderator dengan mengetik "Tetapan" di sebelah kanan skrin 
              pelancaran dan mengklik pada pilihan untuk moderator.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Perhatian, anda mesti menjadi rakan atau rakan bersama untuk menambah pengguna 
              sebagai moderator.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Tip Keselamatan untuk Moderator LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sebelum menggalas peranan Moderator Komuniti LIVE, berhubung dengan pencipta untuk 
              memahami jangkaan dan audiens sasaran mereka, dan pastikan mereka telah mendayakan 
              <em>tetapan dan keizinan moderator</em>. <em>Harap maklum bahawa moderator hanya boleh 
              menggunakan tetapan komen jika mereka diberikan keizinan komen oleh pencipta.</em> Selain 
              itu, baca dengan teliti <a href="#" className="underline font-semibold hover:text-black">bahagian Keselamatan LIVE di Portal Pencipta</a> dan juga tip pencipta 
              yang dinyatakan dalam Panduan ini.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Tip Keselamatan untuk Penonton LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sebagai penonton LIVE, anda mempunyai akses kepada <a href="#" className="underline font-semibold hover:text-black">acara LIVE</a>, Soal Jawab LIVE dan 
              Hadiah LIVE. Anda boleh menapis carian anda mengikut topik untuk mencari komuniti LIVE 
              yang anda minati. Ambil perhatian bahawa sesetengah topik tidak sesuai untuk audiens 
              lebih muda bawah 18 tahun dan bahawa interaksi anda semasa strim langsung terbuka 
              kepada semua orang yang mempunyai akses kepada LIVE itu.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Kecemasan LIVE</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Jika kami mengenal pasti suatu kecemasan di LIVE dengan risiko yang akan mendatang 
              bagi bahaya dunia nyata, kami akan memaklumkan kepada pihak berkuasa tempatan atau 
              perkhidmatan kecemasan dengan segera, mereka yang boleh mengambil tindakan yang 
              sewajarnya. Sejajar dengan amalan terbaik industri, kami boleh menutup LIVE kepada 
              penonton sebagai tambahan, sementara membiarkan ia diteruskan secara peribadi untuk 
              pencipta. Ini melindungi penonton daripada kandungan yang mendatangkan kebimbangan 
              berpotensi sementara membolehkan perkhidmatan kecemasan mengumpulkan maklumat 
              penting yang membantu mereka bertindak balas kepada situasi tersebut.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4">Menghantar Hadiah</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Penonton 18 tahun ke atas (atau 19 tahun di Korea Selatan) boleh mengakses Hadiah. Anda 
              boleh menghantar Hadiah untuk menunjukkan penghargaan anda terhadap kandungan 
              pencipta. Ambil perhatian bahawa apabila anda menghantar Hadiah dalam bilik LIVE, anda 
              melakukan ini secara terbuka, jadi pengguna LIVE lain (termasuk Pencipta LIVE itu) boleh 
              melihat ID pemegang anda dan imej Hadiah yang anda hantar.
            </p>

            <div className="border border-gray-200 rounded-xl overflow-hidden mb-16">
              <button 
                onClick={() => toggleSection('ketahui-lebih-lanjut')}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">Ketahui Lebih Lanjut</span>
                <ChevronDown size={20} className={`text-gray-500 transition-transform ${openSection === 'ketahui-lebih-lanjut' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'ketahui-lebih-lanjut' && (
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                  Kandungan Ketahui Lebih Lanjut...
                </div>
              )}
            </div>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Melaporkan Masalah dalam LIVE</h2>
            <div className="space-y-4 mb-16">
              {melaporkanMasalahOptions.map((option) => (
                <div key={option.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSection(option.id)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900">{option.title}</span>
                    <ChevronDown size={20} className={`text-gray-500 transition-transform ${openSection === option.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === option.id && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">
                      {option.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 py-8 border-t border-gray-200">
              <span className="font-semibold text-gray-900">Adakah ini membantu?</span>
              <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">Ya</button>
              <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">Tidak</button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
