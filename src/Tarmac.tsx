import React, { useState } from 'react';
import { Beaker, Droplets, Shield, Microscope, ChevronDown, ChevronUp, Syringe, TestTube, Goal as Vial, FlaskRound as Flask } from 'lucide-react';

type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

function TamacWorkflow() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: 'safety',
      title: 'Safety Measures',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Personal Protective Equipment</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Wear disposable nitrile gloves</li>
              <li>Use eye protection</li>
              <li>Wear a lab coat</li>
              <li>Wear long pants and enclosed shoes</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Hazardous Material Handling</h3>
            <ul className="space-y-2">
              <li>• Properly dispose of chemical waste according to local Safety, Health, and Environmental regulations</li>
              <li>• Treat all unlysed blood samples as potentially contaminated material</li>
              <li>• Blood samples are not checked for Hepatitis or HIV</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 font-medium">
              If a blood sample is known to be contaminated:
              <ul className="mt-2 list-disc pl-5">
                <li>Inform the technician</li>
                <li>Note on the DNA isolation form and lab book</li>
                <li>Discard blood and contaminated materials in 20% bleach solution</li>
                <li>Use biohazard disposal container</li>
              </ul>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'samples',
      title: 'Sample Collection',
      icon: <Beaker className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Blood Sample Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <TestTube className="w-6 h-6 text-blue-600" />
                  <h4 className="font-medium">DNA Extraction</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• EDTA Bottles: 4mL (2 bottles)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Syringe className="w-6 h-6 text-purple-600" />
                  <h4 className="font-medium">Circulating DNA</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• EDTA Bottles: 4mL (2 bottles)</li>
                  <li>• Extract plasma</li>
                  <li>• Store at -80°C</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Flask className="w-6 h-6 text-green-600" />
                  <h4 className="font-medium">Pharmacokinetics</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Plain Bottle: 4mL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Tissue Collection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Vial className="w-6 h-6 text-purple-600" />
                  <h4 className="font-medium">Biopsy</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Minimum 2 strips for ultrasound-guided biopsy</li>
                  <li>• Collected in Paxgene container</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Microscope className="w-6 h-6 text-gray-600" />
                  <h4 className="font-medium">Diagnostic Tissue</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Prepare FFPE (Formalin-Fixed Paraffin-Embedded) block</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">Note: Samples for pharmacokinetics should be taken at every visit</p>
          </div>
        </div>
      )
    },
    {
      id: 'collection',
      title: 'Collection & Transportation',
      icon: <Droplets className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Collection Protocol</h3>
            <ul className="space-y-2">
              <li>• Research nurses collect 4mL blood using vacutainer tubes</li>
              <li>• Use EDTA and plain tubes</li>
              <li>• Gently mix blood by inverting tubes</li>
              <li>• Attach pre-printed barcode label to each tube</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Transportation Guidelines</h3>
            <ul className="space-y-2">
              <li>• Keep samples upright at 4ºC</li>
              <li>• Transport using cooler with chipped ice or ice pack</li>
              <li>• Keep samples shaded</li>
              <li>• Ship within same day of blood draw when possible</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              For storage longer than 2 days before centrifugation, freeze samples in -80 freezers. 
              Samples in plain bottles should be centrifuged and serum stored in -80 freezer.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'processing',
      title: 'Sample Processing',
      icon: <Microscope className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Serum Extraction</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Process same day as collection (never freeze before processing)</li>
              <li>Spin samples at 4,000rpm for 10 minutes (balance rotor)</li>
              <li>Collect serum layer (top) carefully with transfer pipette</li>
              <li>Aliquot 500-100μl into labeled cryovials</li>
              <li>Store at –70ºC within 1 hour of centrifugation</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Plasma Extraction</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Process same day as collection (never freeze before processing)</li>
              <li>Spin EDTA samples at 4,000rpm for 10 minutes (balance rotor)</li>
              <li>Collect plasma layer carefully without disturbing buffy coat</li>
              <li>Aliquot 1000μl into labeled cryovials</li>
              <li>Store at –80ºC within 1 hour of centrifugation</li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">TAMAC Study Laboratory Workflow</h1>
          <p className="mt-2 text-gray-600">Standard Operating Procedures for Blood Draw and Sample Processing</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-gray-100">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TamacWorkflow;