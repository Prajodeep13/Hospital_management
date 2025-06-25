export default function CausesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes of Autism</h2>
      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          The exact causes of Autism Spectrum Disorder remain uncertain. Research suggests a combination of genetic and environmental factors play important roles in its development.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Genetic Factors</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Family history of autism increases risk</li>
          <li>Certain genetic mutations associated with autism</li>
          <li>Over 100 genes identified as potentially linked to ASD</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Environmental Factors</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Advanced parental age (particularly paternal)</li>
          <li>Pregnancy and birth complications</li>
          <li>Exposure to certain environmental toxins</li>
          <li>Maternal infections during pregnancy</li>
        </ul>
        
        <p className="mb-4">
          Current research indicates that autism likely results from a complex interplay of multiple factors rather than a single cause. Understanding these factors is crucial for developing effective treatments and interventions.
        </p>
      </div>
    </section>
  );
}