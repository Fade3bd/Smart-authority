
import { useState } from "react";

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
    <div style={{ padding: 20 }}>
      <h1>Intelligente Modelle</h1>
      <div style={{ display: "flex", gap: 10 }}>
        {models.map((model) => (
          <button key={model.id} onClick={() => setSelectedModel(model.id)}>
            {model.name}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        {models
          .filter((model) => model.id === selectedModel)
          .map((model) => (
            <div key={model.id}>
              <h2>{model.name}</h2>
              <ul>
                {model.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              <textarea placeholder="Text zur Analyse hier eingeben..." style={{ width: "100%", marginTop: 10 }} />
              <button style={{ marginTop: 10 }}>Mit KI analysieren</button>
            </div>
          ))}
      </div>
    </div>
  );
}
