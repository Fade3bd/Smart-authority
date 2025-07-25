
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const models = [
  {
    id: "media",
    name: "Intelligente Medienautorität",
    description: [
      "Aufdeckung von Desinformationen.",
      "Analyse von Bildern und Artikeln mit Faktenabgleich.",
      "Erstellung objektiver Wissensberichte."
    ]
  },
  {
    id: "justice",
    name: "Intelligente Justiz",
    description: [
      "Analyse juristischer Dokumente im Vergleich zu früheren Urteilen.",
      "Rechtliche Empfehlungen für Richter oder Anwälte.",
      "Analyse von Beweisen und Bildern mit juristischem Kontext."
    ]
  },
  {
    id: "industry",
    name: "Intelligente Industrie",
    description: [
      "Analyse von Produktionslinien und Ressourceneffizienz.",
      "Auswertung von technischen Zeichnungen.",
      "Präzise industrielle Empfehlungen."
    ]
  },
  {
    id: "tech",
    name: "Intelligente Technologie",
    description: [
      "Analyse von Technologieprojekten und Software.",
      "Vorschläge für effiziente und sichere Lösungen.",
      "Innovationsüberwachung und Ressourcenverknüpfung."
    ]
  }
];

export default function SmartModelInterface() {
  const [selectedModel, setSelectedModel] = useState("media");

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Intelligente Modelle</h1>
      <Tabs value={selectedModel} onValueChange={setSelectedModel} className="w-full">
        <TabsList className="flex justify-center space-x-2 mb-6">
          {models.map((model) => (
            <TabsTrigger key={model.id} value={model.id} className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700">
              {model.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {models.map((model) => (
          <TabsContent key={model.id} value={model.id}>
            <Card className="bg-gray-900 rounded-2xl shadow-xl p-6">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {model.description.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Textarea placeholder="Text zur Analyse hier eingeben..." className="bg-gray-800 border border-gray-700 text-white" />
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-500">Mit KI analysieren</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
