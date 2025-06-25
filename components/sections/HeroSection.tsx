import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7088498/pexels-photo-7088498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Autism Treatment
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover how stem cell therapy offers new possibilities for managing autism spectrum disorder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
          </div>
        </div>
      </div>
    </div>
  );
}