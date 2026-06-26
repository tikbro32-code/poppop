import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function IntellectualPropertyPage() {
  const [activeSection, setActiveSection] = React.useState('copyright');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ['copyright', 'trademark', 'general-note'];
      let current = 'copyright';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] flex flex-col font-sans text-[var(--text-main)]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-dark)] border-b border-[var(--border-color)] px-4 py-4 flex items-center h-[60px]">
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="var(--primary-color)" />
            <path d="M21.5 14.5L32.5 24L21.5 33.5V14.5Z" fill="white" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-[var(--text-main)]">Poppro</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Left Sidebar Navigation */}
        <aside className="md:w-[250px] shrink-0 hidden md:block">
          <div className="sticky top-[100px] flex flex-col gap-4 text-[14px]">
            <button 
              onClick={() => scrollToSection('copyright')} 
              className={`text-left font-semibold hover:text-white transition-colors relative pl-4 ${activeSection === 'copyright' ? 'text-white' : 'text-gray-400'}`}
            >
              {activeSection === 'copyright' && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full"></span>}
              Copyright
            </button>
            <button 
              onClick={() => scrollToSection('trademark')} 
              className={`text-left font-semibold hover:text-white transition-colors relative pl-4 ${activeSection === 'trademark' ? 'text-white' : 'text-gray-400'}`}
            >
              {activeSection === 'trademark' && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full"></span>}
              Trademark
            </button>
            <button 
              onClick={() => scrollToSection('general-note')} 
              className={`text-left font-semibold hover:text-white transition-colors relative pl-4 ${activeSection === 'general-note' ? 'text-white' : 'text-gray-400'}`}
            >
              {activeSection === 'general-note' && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full"></span>}
              General Note
            </button>
          </div>
        </aside>

        {/* Right Content Area */}
        <article className="flex-1 prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-[var(--text-main)] prose-p:text-[var(--text-muted)] prose-p:leading-relaxed prose-a:text-[var(--primary-color)] prose-a:no-underline hover:prose-a:underline">
          
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">Intellectual Property Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mb-1">Released March 27, 2025</p>
          <p className="text-sm text-[var(--text-muted)] mb-8">Effective April 26, 2025</p>

          <p>
            Poppro respects the intellectual property rights of others and requires compliance with the <Link to="/terms">Terms of Service</Link> and <Link to="/safety">Community Guidelines</Link> which do not allow content that violates or infringes someone else's intellectual property rights, including copyright and trademark.
          </p>

          <div id="copyright" className="scroll-mt-24">
            <h2 className="text-2xl mt-12 mb-4 text-white">Copyright</h2>
            <p>
              Copyright is a legal right that protects original works of authorship (e.g., music, videos, etc.). Generally, copyright protects an original expression of an idea (e.g., the specific way a video or music is expressed or created) but does not protect underlying ideas or facts.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Copyright Infringement</h3>
            <p>
              We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of Poppro's policies.
            </p>
            <p>
              At the same time, not all unauthorized uses of copyrighted content constitute an infringement. In many countries, exceptions to copyright infringement allow the use of copyrighted works under certain circumstances without authorization from the copyright holder. These include the fair use doctrine in the United States, permitted acts of fair dealing in the European Union (EU), and other equivalent exceptions under applicable local laws in other countries.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Removal of Content; Account Bans</h3>
            <p>
              Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.
            </p>
            <p>
              We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations. We reserve the right to refuse any account holder whose account was used for improper activities from opening a new Poppro account.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Information for Rightsholders</h3>
            
            <h4 className="text-lg mt-6 mb-3 text-white">Copyright Infringement Report</h4>
            <p>
              If you believe someone is using your copyrighted work without your permission, you are encouraged to first contact the user for a quick and direct resolution of the matter.
            </p>
            <p>
              You may also file a Copyright Infringement Report to request the removal of the alleged infringing content from Poppro via our <Link to="/support">online form</Link> or in-app. Please be aware that the United States Digital Millennium Copyright Act (DMCA) or similar laws in other countries outline the statutory requirements necessary for reporting copyright infringement by submitting a compliant notification. To facilitate the evaluation of your report, you'll need to provide all the information requested in our online Copyright Infringement Report form. If you submit a report to us, we may contact you if we have questions about your report. Failure to include necessary information may limit our ability to investigate your claims and may result in your report being denied. We may provide the user with information about your report, such as the name of the copyright owner.
            </p>
            <p>
              Before submitting a report, you should consider whether the content you want to report may be a permissible use of your copyright. Please also be aware that intentionally submitting a misleading or fraudulent report will result in your report being denied and may lead to liability for damages under section 512(f) of the United States DMCA or similar laws in other countries.
            </p>

            <h4 className="text-lg mt-6 mb-3 text-white">EU Copyright Directive</h4>
            <p>
              Pursuant to Article 17 of the Copyright Directive (EU 2019/790), if you want to make an enquiry about granting an authorisation to Poppro to make your copyright-protected works available on Poppro, please use <Link to="/contact">this form</Link>. We will review your request and be in touch.
            </p>
            <p>
              If you want to request that your music or audiovisual works are made unavailable in the EU, we need you to file <Link to="/contact">this form</Link>. So that Poppro can consider your request, you will have to provide us with relevant and necessary information about you and your copyrighted works. Upon receiving this information and validating your request, Poppro will do its best to ensure that your copyrighted work is made unavailable on Poppro in the EU.
            </p>
            <p>
              You may ask us to prevent future copies of a video from re-appearing on the platform when you submit a report via our online Copyright Infringement Report form. If you do so, and where a video is removed due to your report, we will use our best efforts to prevent the same video from re-appearing on the platform.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Information for Users: Copyright Infringement Appeal</h3>
            
            <h4 className="text-lg mt-6 mb-3 text-white">If you are a user located outside of the European Union</h4>
            <p>
              You'll receive an in-app notification if your content has been removed due to a copyright infringement report. We delete the removed content after a period of time in accordance with applicable laws and our data retention policy. After the deletion, your content can no longer be reinstated.
            </p>
            <p>
              If you believe your content has been removed in error or believe that you are authorised to use the content, you can reach out to the copyright owner directly to request a retraction.
            </p>
            <p>
              You may also submit an appeal within the Poppro app, which can be accessed from the in-app notification sent to you. Please be aware that the United States DMCA or similar laws in other countries provide instructions on how an affected user can appeal a removal by submitting a compliant counter-notification. To facilitate the evaluation of your appeal, you'll need to provide all required information, including your contact information and any evidence to support your claim. If you submit an appeal to us, we may contact you if we have additional questions about your appeal. Failure to include necessary information may limit our ability to investigate your claims and may result in your appeal being denied. Please note that, where appropriate and authorised by law, we will forward your entire appeal to the original reporter, including any contact information you provide, in accordance with our Terms of Service and Privacy Policy. The copyright claimant may use this information to file a lawsuit against you. For example, the copyright claimant may file an action seeking a court order to keep the content down pursuant to the United States DMCA or similar laws in other countries.
            </p>
            <p>
              We may reinstate your content if the content does not infringe on the rightsholder's copyright or we do not receive notice that the copyright claimant has filed an action seeking a court order to keep the content down pursuant to the United States DMCA or similar laws in other countries. The decision to reinstate any content is at Poppro's sole discretion.
            </p>

            <h4 className="text-lg mt-6 mb-3 text-white">If you are a user located in the European Union</h4>
            <p>
              You'll receive an in-app notification if your content has been removed due to a copyright infringement report. We delete the removed content after a period of time in accordance with applicable laws and our data retention policy. After the deletion, your content can no longer be reinstated. If you receive a copyright infringement report and believe that you have the right to post the content in question, you can submit an appeal within the Poppro app, which can be accessed from the in-app notification sent to you.
            </p>
            <p>
              Under EU law, users are allowed to use copyright works without the authorization of the copyright holder for quotation, criticism, review and for the purpose of caricature, parody or pastiche provided that such use is fair. EU countries may also provide for additional exceptions. See below some further information about the exceptions and limitations to copyright available in the EU:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Quotation, criticism and review</strong><br/>
                Quotation is the use of an extract from a copyright-protected work for purposes such as illustrating an assertion, defending an opinion or engaging in debate. Quotations may also be used for the purposes of criticising a copyrighted work (e.g. critical commentary on a movie) or reviewing one (e.g. reviewing a book or an album).
              </li>
              <li>
                <strong>Caricature, parody and pastiche</strong><br/>
                Caricatures aim at exaggerating or distorting reality, usually for humorous purposes. A parody will evoke an existing copyrighted work while being noticeably different from it and should constitute an expression of humor or mockery. A pastiche will usually incorporate distinctive elements from other works or styles into a new work.
              </li>
            </ul>
            <p>
              In order for any use of copyrighted work to come within an exception or limitation, it must be fair. This means that it should, where applicable: (i) be no longer than necessary; (ii) be accompanied by sufficient acknowledgement of the source material and (iii) not unreasonably harm the legitimate interests of the rightholder.
            </p>
          </div>

          <div id="trademark" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl mt-12 mb-4 text-white">Trademark</h2>
            <p>
              A trademark is a word, symbol, slogan, design, or combination of any of the foregoing that identifies the source of a product or service and distinguishes it from other products or services.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Trademark Infringement</h3>
            <p>
              Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.
            </p>
            <p>
              At the same time, the use of another's trademark for purposes of accurately referencing, lawfully commenting, criticizing, parodying, or reviewing the trademark owner's products or services, or for purposes of comparing them to other products or services, where the mark is not used to designate the user's own goods or services or those of a third party, is generally not considered a violation of our policies. Likewise, it is generally permissible to make a fan page about a brand, even without the brand's permission, provided that the user does not claim to speak for or be associated with the brand or otherwise violate the brand's intellectual property rights.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Counterfeiting</h3>
            <p>
              Counterfeiting is the illegal manufacturing, importing and exporting, distributing, selling, facilitating the trade of, or otherwise dealing in goods under a trademark that is identical to or substantially similar to a registered trademark, without the trademark owner's permission, thereby infringing the rights of the trademark owner.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Removal of Content; Account Bans</h3>
            <p>
              Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on Poppro, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.
            </p>
            <p>
              We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations. We reserve the right to refuse any account holder whose account was used for improper activities from opening a new Poppro account.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Information for Rightsholders: Trademark Infringement Report</h3>
            <p>
              If you believe someone has infringed on your trademark rights, you are encouraged to first contact the user for a quick and direct resolution of the matter.
            </p>
            <p>
              You may also file a Trademark Infringement Report to request the removal of the alleged infringing content from Poppro via our <Link to="/support">online form</Link> or in-app. All reports should contain the information requested in our online Trademark Infringement Report form. If you submit a report to us, we may contact you if we have additional questions about your report. Failure to include necessary information may limit our ability to investigate your claims and may result in your report being denied. We may provide the user with information about your report, such as the name of the trademark owner. Before submitting a report, you should consider the applicability of permitted acts under trademark laws. Please also be aware that intentionally submitting a misleading or fraudulent report will result in your report being denied and may lead to liability for damages under applicable laws.
            </p>

            <h3 className="text-xl mt-8 mb-4 text-white">Information for Users: Trademark Infringement Appeal</h3>
            <p>
              You'll receive an in-app notification if your content has been removed due to a trademark infringement report. We delete the removed content after a period of time in accordance with applicable laws and our data retention policy. After the deletion, your content will no longer be reinstated.
            </p>
            <p>
              If you believe your content has been removed in error or believe that you are authorised to use the content, you can reach out to the trademark owner directly to request a retraction.
            </p>
            <p>
              You may also submit an appeal within the Poppro app, which can be accessed from the in-app notification sent to you. You'll need to provide all required information, including your contact information and any evidence to support your claim. If you submit an appeal to us, we may contact you if we have additional questions about your appeal. Failure to include necessary information may limit our ability to investigate your claims and may result in your appeal being denied. Please note that, where appropriate and authorised by law, we will forward your appeal to the original reporter, including any contact information you provide, in accordance with our Terms of Service and Privacy Policy.
            </p>
          </div>

          <div id="general-note" className="scroll-mt-24 mt-16 mb-16">
            <h2 className="text-2xl mt-12 mb-4 text-white">General Note</h2>
            <p>
              As a Poppro user, you are responsible for the content you post. If you have questions about copyright law or trademark law, such as questions about whether your content or your use of another person's name or brand infringes or otherwise violates another person's rights, you may want to contact an attorney.
            </p>
            <p>
              As a holder of intellectual property rights, if you are unsure whether the content you plan to report to us is infringing your intellectual property rights, you may wish to first seek legal advice before reporting such content to us.
            </p>
            <p>
              Please note that, Poppro is not in a position to adjudicate disputes between third parties, and may not be able to remove the content or suspend the account being reported. In accordance with our legal obligations, we provide users and rightsholders with an intellectual property rights infringement dispute resolution mechanism. Users or rightsholders may have other ways to seek resolution, such as out-of-court dispute settlement processes or in-court proceedings under laws in their countries.
            </p>
          </div>

        </article>

      </main>

      {/* Dark Footer */}
      <footer className="bg-black text-white pt-20 pb-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="var(--primary-color)" />
                  <path d="M21.5 14.5L32.5 24L21.5 33.5V14.5Z" fill="white" />
                </svg>
                <span className="font-bold text-xl tracking-tight">Poppro</span>
              </Link>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Poppro</Link></li>
                <li><Link to="/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">ByteDance</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Programs</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link to="/for-good" className="hover:text-white transition-colors">Poppro for Good</Link></li>
                <li><Link to="/developers" className="hover:text-white transition-colors">Poppro for Developers</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Effect House</span></li>
                <li><Link to="/ads" className="hover:text-white transition-colors">Advertise on Poppro</Link></li>
                <li><Link to="/embeds" className="hover:text-white transition-colors">Poppro Embeds</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/safety" className="hover:text-white transition-colors">Safety Center</Link></li>
                <li><Link to="/support/privacy-safety" className="hover:text-white transition-colors">Privacy Center</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Creator Academy</span></li>
                <li><Link to="/safety" className="hover:text-white transition-colors">Community Guidelines</Link></li>
                <li><Link to="/transparency" className="hover:text-white transition-colors">Transparency</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Accessibility</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/intellectual-property" className="hover:text-white transition-colors">Intellectual Property Policy</Link></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Law Enforcement Guidelines</span></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <select className="bg-black border border-gray-600 text-gray-300 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-gray-400">
              <option value="en">English</option>
              <option value="ms">Bahasa Melayu</option>
            </select>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Poppro
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
