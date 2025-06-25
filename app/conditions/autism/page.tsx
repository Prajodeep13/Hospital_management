
import HeroSection from '@/components/sections/HeroSection';
import ConditionOverview from '@/components/sections/ConditionOverview';
import SymptomsSection from '@/components/sections/SymptomsSection';
import TypesSection from '@/components/sections/TypesSection';
import CausesSection from '@/components/sections/CausesSection';
import HowStemCellHelps from '@/components/sections/HowStemCellHelps';
import TreatmentComparison from '@/components/sections/TreatmentComparison';
import TreatmentProcess from '@/components/sections/TreatmentProcess';
import TreatmentCost from '@/components/sections/TreatmentCost';
// import ConsultationForm from '@/components/sections/ConsultationForm';
import FAQSection from '@/components/sections/FAQSection';
import DiagnosisSection from '@/components/sections/DiagnosisSection';
import StagesSection from '@/components/sections/StagesSection';
import WhyStemCellSection from '@/components/sections/WhyStemCellSection';
import SupportiveTherapies from '@/components/sections/SupportiveTherapies';
import SafetyProtocols from '@/components/sections/SafetyProtocols';
import TreatmentDuration from '@/components/sections/TreatmentDuration';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <ConditionOverview />
          <SymptomsSection />
          <StagesSection />
          <DiagnosisSection />
          <CausesSection />
          <WhyStemCellSection />
          <HowStemCellHelps />
          <TreatmentComparison />
          <TreatmentProcess />
          <TreatmentDuration />
          <SafetyProtocols />
          <SupportiveTherapies />
          <TreatmentCost />
          {/* <ConsultationForm /> */}
          <FAQSection />
        </div>
      </main>

    </div>
  );
}