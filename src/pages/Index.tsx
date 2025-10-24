import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NewsGrid } from '@/components/NewsGrid';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
