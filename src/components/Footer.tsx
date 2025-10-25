import nyfwEvent from '@/assets/nyfw-event.jpg';
import winner1st from '@/assets/winner-1st.jpg';
import winner2nd from '@/assets/winner-2nd.jpg';
import winner3rd from '@/assets/winner-3rd.jpg';
export const Footer = () => {
  return <footer className="relative text-primary-foreground py-16 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={nyfwEvent} alt="NYFW Fashion Event Winners" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Spotlight on Our Latest Fashion Odyssey: Celebrating Emerging Talent!
          </h2>
          <p className="font-sans text-base font-light mb-4 leading-relaxed">
            We are thrilled to recap the electrifying energy of our recent Runway Revelations modeling showcase – a glittering affair where aspiring fashion icons from around the globe strutted their stuff, blending bold creativity with timeless elegance. The event was a triumph of style and ambition, drawing crowds and industry scouts alike to witness the next wave of supermodels in the making.
          </p>
          <p className="font-sans text-base font-light mb-6 leading-relaxed">
            Congratulations to our podium finishers, whose poise and presence left us all inspired:
          </p>
          <div className="space-y-6 mb-6">
            <div className="flex gap-4 items-start">
              <img src={winner1st} alt="1st Place Winner - Murray" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              <div className="font-sans text-base font-light leading-relaxed">
                <strong className="font-semibold">1st Place: Sandra</strong> - $27,000 Grand Prize + A Luxurious Week in Switzerland (Plus One Included)
                <br />
                <span className="text-primary-foreground/80 italic">Bask in alpine glamour with a fully escorted getaway for you and a cherished companion – think pristine peaks, gourmet fondue, and endless photo ops!</span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img src={winner2nd} alt="2nd Place Winner - BessRoyce" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              <div className="font-sans text-base font-light leading-relaxed">
                <strong className="font-semibold">2nd Place: BessRoyce</strong> - $18,000 Cash Award + A Solo Week of Swiss Serenity
                <br />
                <span className="text-primary-foreground/80 italic">Your private escape to the heart of Europe: solo adventures through chocolate-scented villages and crystal-clear lakes.</span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img src={winner3rd} alt="3rd Place Winner - Rose" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              <div className="font-sans text-base font-light leading-relaxed">
                <strong className="font-semibold">3rd Place: Rose</strong> - $12,500 Spotlight Stipend
                <br />
                <span className="text-primary-foreground/80 italic">Fuel your rising star with this generous boost toward your next big break in the fashion world.</span>
              </div>
            </div>
          </div>
          <p className="font-sans text-base font-light mb-4 leading-relaxed">
            This celebration underscores our commitment to empowering diverse talents and turning dreams into runway reality. Stay tuned for our next event – who knows, your moment could be next? Follow us for updates, casting calls, and insider tips to shine brighter.
          </p>
          <p className="font-sans text-sm font-light text-primary-foreground/70">
            #FashionForward #ModelSpotlight #SwissDreams
          </p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-serif text-2xl font-bold">
              NYFW MODELS
            </div>
            <p className="font-sans text-sm font-light text-primary-foreground/70">
              © {new Date().getFullYear()} NYFW Models, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};