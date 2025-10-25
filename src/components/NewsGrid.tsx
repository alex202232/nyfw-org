import model1 from '@/assets/model-1.jpg';
import model2 from '@/assets/model-2.jpg';
import model3 from '@/assets/model-3.jpg';
import model4 from '@/assets/model-4.jpg';
import model5 from '@/assets/model-5.jpg';
import model6 from '@/assets/model-6.jpg';

const newsItems = [
  {
    id: 1,
    image: model1,
    modelName: 'BESSROYCE',
    publication: 'D la Repubblica',
    credits: 'Photographed by Thurstan Redding, Styled by Leopolda Duchemin'
  },
  {
    id: 2,
    image: model2,
    modelName: 'MURRAY',
    publication: 'Balenciaga | Le City Bag 2025',
    credits: 'Photographed by David Sims'
  },
  {
    id: 3,
    image: model3,
    modelName: 'ABBY CHAMPION',
    publication: 'LOVE Magazine',
    credits: 'Photography By Camille Summers-Valli, Styled by Tati Cotliar'
  },
  {
    id: 4,
    image: model4,
    modelName: 'CLAIRE MARIE',
    publication: 'D la Repubblica',
    credits: 'Photographed by Mert & Marcus, Styled by Marie Chaix'
  },
  {
    id: 5,
    image: model5,
    modelName: 'ADELE ALDIGHIERI',
    publication: 'LOVE WANT',
    credits: 'Photographed by Georgia Devey Smith, Styled by Lorna McGee'
  },
  {
    id: 6,
    image: model6,
    modelName: 'OLIVIA ROSE',
    publication: 'Vogue Italia',
    credits: 'Photographed by Steven Meisel, Styled by Edward Enninful'
  }
];

export const NewsGrid = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12 text-center">News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={item.image}
                  alt={item.modelName}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold tracking-tight">
                  {item.modelName}
                </h3>
                <p className="font-sans text-sm font-medium text-foreground/80">
                  {item.publication}
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {item.credits}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
