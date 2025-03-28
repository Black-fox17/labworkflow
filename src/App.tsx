import React, { useState } from 'react';
import { Beaker, Droplets, Shield, Microscope, ChevronDown, ChevronUp, ArrowRight, FlaskRound as Flask, TestTube, Goal as Vial, Syringe } from 'lucide-react';
import TamacWorkFlow from './Tarmac.tsx';
type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: 'safety',
      title: 'Safety Measures',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="mb-6">
            <img
              src="/lab safety.webp"
              alt="Laboratory Safety Equipment"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg flex items-center space-x-3">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <span className="text-yellow-800 font-medium">Personal Protection Required</span>
            </div>
            <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-3">
              <div className="bg-red-100 p-3 rounded-full">
                <Vial className="w-8 h-8 text-red-600" />
              </div>
              <span className="text-red-800 font-medium">Biohazard Precautions</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg">Personal Protective Equipment</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gloves (ex. Disposable, nitrile)</li>
            <li>Eye protection</li>
            <li>Lab coat</li>
            <li>Long pants and enclosed shoes</li>
          </ul>

          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <p className="text-yellow-800">
              Treat all unlysed blood samples as potentially contaminated material. Blood samples are not checked for Hepatitis or HIV.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-800">
              If a blood sample is known to be contaminated, inform the technician and note it on the DNA isolation form and lab book.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'aretta',
      title: 'ARETTA-2 Protocol',
      icon: <Beaker className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <img
              src="/sample.webp"
              alt="Blood Sample Collection"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <h3 className="font-semibold text-lg">Before Drug Administration</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <TestTube className="w-6 h-6 text-blue-600" />
                <h4 className="font-medium">Blood Collection</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>EDTA For gDNA Extraction (2x 4mls)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Plain Bottle is Pharmacokinetics (4mls)</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Microscope className="w-6 h-6 text-purple-600" />
                <h4 className="font-medium">Tissue Biopsy</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Tissue must not less than 2 strips of(Paxgene) collected into tissue container</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Tissue in 10%NBF for diagnostic block</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Flask className="w-6 h-6 text-green-600" />
                <h4 className="font-medium">Processing</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>DNA Extraction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Pharmacokinetics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-3">After Mastectomy Protocol</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Syringe className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <p className="font-medium">Blood Samples</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• DNA Extraction (2x 4ml EDTA)</li>
                    <li>• Pharmacokinetics (4ml Plain)</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Microscope className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <p className="font-medium">Tissue Samples</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Mastectomy samples in Paxgene</li>
                  </ul>
                </div>
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
          id: 'Tamac',
          title: 'Tamac Sample',
          icon: <Beaker className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <div className="mb-6">
              <img
                src="/sample.webp"
                alt="Blood Sample Collection"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
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
          <div className="mb-6">
            <img
              src="/transport.jpg"
              alt="Sample Transportation"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Collection Protocol</h3>
            <ul className="space-y-2">
              <li>• Collect 4ml blood using vacutainer tubes (EDTA and plain tubes)</li>
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
              For storage longer than 2 days before centrifugation, freeze samples in -80 freezers. Samples in plain bottles should be centrifuged and serum stored in -80 freezer.
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
          <div className="mb-6">
            <img
              src="/process.webp"
              alt="Laboratory Processing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
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
          <h1 className="text-3xl font-bold text-gray-900">Laboratory Workflow SOP</h1>
          <p className="mt-2 text-gray-600">Standard Operating Procedures for Blood Draw and Sample Processing</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Workflow Overview with Images */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-6">Workflow Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/lab safety.webp"
                alt="Safety Protocols"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-24 h-24 bg-yellow-50 rounded-lg flex items-center justify-center -mt-12 border-4 border-white">
                <Shield className="w-12 h-12 text-yellow-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-center">Safety Protocols</p>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="/sample.webp"
                alt="Sample Collection"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center -mt-12 border-4 border-white">
                <Beaker className="w-12 h-12 text-blue-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-center">Sample Collection</p>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="/transport.jpg"
                alt="Transportation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-24 h-24 bg-green-50 rounded-lg flex items-center justify-center -mt-12 border-4 border-white">
                <Droplets className="w-12 h-12 text-green-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-center">Transportation</p>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="/process.webp"
                alt="Processing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="w-24 h-24 bg-purple-50 rounded-lg flex items-center justify-center -mt-12 border-4 border-white">
                <Microscope className="w-12 h-12 text-purple-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-center">Processing</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
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

export default App;