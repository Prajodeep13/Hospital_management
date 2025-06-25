import { Triangle, Brain, FileText } from 'lucide-react';

export default function DiagnosisSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnosing Autism</h2>
      <p className="text-gray-700 mb-8">
        Diagnosing autism involves a multifaceted approach that must be made by a highly certified professional in evaluation:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Triangle className="h-16 w-16 text-teal-500" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Developmental Screening</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Brief tests during well-child visits</li>
              <li>• Typically done at 9, 18, and 24-30 months</li>
              <li>• Earlier screenings for children with high risk</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Brain className="h-16 w-16 text-teal-500" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Evaluation</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Hearing and vision screening</li>
              <li>• Genetic and neurological testing</li>
              <li>• Developmental assessments</li>
              <li>• Parent interviews about behavior</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <FileText className="h-16 w-16 text-teal-500" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Diagnostic Tools</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Autism Diagnostic Observation Schedule (ADOS)</li>
              <li>• Autism Diagnostic Interview-Revised (ADI-R)</li>
              <li>• Childhood Autism Rating Scale (CARS)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}