export default function TreatmentComparison() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Conventional Treatments vs. Stem Cell Therapy</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-teal-500 text-white text-left rounded-tl-lg">Treatment Type</th>
              <th className="py-3 px-4 bg-teal-500 text-white text-left">Approach</th>
              <th className="py-3 px-4 bg-teal-500 text-white text-left rounded-tr-lg">Outcomes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4 bg-teal-50 font-medium">Behavioral Therapy (ABA)</td>
              <td className="py-4 px-4">Focuses on improving specific behaviors through positive reinforcement</td>
              <td className="py-4 px-4">Helpful for skill development, but typically requires long-term commitment</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4 bg-teal-50 font-medium">Speech Therapy</td>
              <td className="py-4 px-4">Addresses communication challenges and language development</td>
              <td className="py-4 px-4">Improves communication skills but may not address core neurological issues</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4 bg-teal-50 font-medium">Occupational Therapy</td>
              <td className="py-4 px-4">Helps develop skills needed for daily living and sensory integration</td>
              <td className="py-4 px-4">Enhances functional abilities but doesn't address underlying causes</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-4 px-4 bg-teal-50 font-medium">Medication</td>
              <td className="py-4 px-4">Treats specific symptoms like anxiety, aggression, or attention issues</td>
              <td className="py-4 px-4">May help manage symptoms but often comes with side effects</td>
            </tr>
            <tr>
              <td className="py-4 px-4 bg-teal-200 font-medium rounded-bl-lg">Stem Cell Therapy</td>
              <td className="py-4 px-4 bg-teal-100">Addresses potential neurological and immunological factors</td>
              <td className="py-4 px-4 bg-teal-100 rounded-br-lg">May provide comprehensive improvements by targeting underlying mechanisms</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="mt-6 text-sm text-gray-600 italic">
        Note: Most effective treatment plans often combine multiple approaches. Stem cell therapy can complement conventional treatments.
      </p>
    </section>
  );
}