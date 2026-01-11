
import React from 'react';
import {
  FileText,
  Map,
  Thermometer,
  Settings,
  Target
} from 'lucide-react';
import { Service, FAQItem, ProcessStep } from './types';

export const CONTACT_INFO = {
  name: "Lenz Energieberatung",
  owner: "Markus Lenz",
  address: "Kirchstr. 55, 40227 Düsseldorf",
  phone: "01573 6533337",
  email: "info@lenzenergieberatung.de",
  qualifications: ["Schornsteinfegermeister", "Energieeffizienz-Experte"]
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface ServiceDetail extends Service {
  longDescription: string;
  benefits: string[];
  documents: string[];
  pricing: string;
  faqs: FAQItem[];
  seoTitle: string;
  seoMeta: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "energieberatung-duesseldorf-foerderung",
    title: "Energieberatung Düsseldorf: So sichern Sie sich 2026 maximale Förderung",
    excerpt: "Düsseldorfer Eigenheimbesitzer aufgepasst: Kombinieren Sie Bundesmittel (BEG) mit städtischen Programmen. Ein Leitfaden für lokale Zuschüsse.",
    content: `
      <p class="lead">Wer in Düsseldorf saniert, kann oft doppelt profitieren. Neben den bekannten Programmen von BAFA und KfW bietet die Landeshauptstadt mit "Klimafreundliches Wohnen und Arbeiten in Düsseldorf" eigene attraktive Fördertöpfe.</p>

      <h3>Das Düsseldorfer Förderprogramm im Überblick</h3>
      <p>Die Stadt Düsseldorf fördert diverse Maßnahmen zur Energieeinsparung, die über die gesetzlichen Mindeststandards hinausgehen. Dazu gehören:</p>
      <ul>
        <li><strong>Wärmedämmung:</strong> Zuschüsse für Fassaden-, Dach- und Kellerdeckendämmung.</li>
        <li><strong>Fensteraustausch:</strong> Förderung bei Dreifachverglasung.</li>
        <li><strong>Dachbegrünung:</strong> Attraktive Boni für grüne Dächer in der Innenstadt.</li>
        <li><strong>Photovoltaik:</strong> Zuschüsse für Anlagen auf Dächern und an Fassaden.</li>
      </ul>

      <h3>Kombination mit Bundesmitteln (BAFA/KfW)</h3>
      <p>Der Clou: Viele städtische Programme lassen sich mit der Bundesförderung für effiziente Gebäude (BEG) kumulieren. Ein <strong>individueller Sanierungsfahrplan (iSFP)</strong> ist hier oft der Schlüssel, um die Förderhöchstgrenzen auszuschöpfen.</p>

      <h3>Warum ein lokaler Energieberater wichtig ist</h3>
      <p>Als Energieeffizienz-Experte aus Düsseldorf kenne ich nicht nur die technischen Anforderungen, sondern auch die spezifischen Antragswege beim Amt für Umwelt- und Verbraucherschutz. Vermeiden Sie Formfehler, die bares Geld kosten.</p>
      
      <div class="bg-emerald-50 p-6 rounded-2xl my-8 border border-emerald-100">
        <h4 class="text-emerald-800 font-bold mb-2">Mein Tipp für Düsseldorfer:</h4>
        <p class="text-emerald-700 m-0">Starten Sie immer mit einem iSFP. Die Stadt Düsseldorf honoriert oft ganzheitliche Konzepte, und der iSFP sichert Ihnen bereits auf Bundesebene 5% Extra-Bonus.</p>
      </div>

      <p>Gerne berate ich Sie vor Ort in Oberbilk, Gerresheim, Benrath oder Kaiserswerth zu Ihren individuellen Möglichkeiten.</p>
    `,
    date: "12.03.2026",
    author: "Markus Lenz",
    category: "Förderung Regional",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "geg-2026-heizungsgesetz",
    title: "GEG 2026 (Heizungsgesetz): Was gilt jetzt für Bestandsgebäude?",
    excerpt: "Keine Panik vor dem Heizungstausch. Das Gebäudeenergiegesetz (GEG) wurde entschärft – doch die 65%-Erneuerbare-Energien-Pflicht kommt. Das müssen Sie wissen.",
    content: `
      <p class="lead">Das Gebäudeenergiegesetz (GEG), oft als "Heizungsgesetz" diskutiert, verunsichert viele Hausbesitzer. Doch für Bestehende Gebäude gelten großzügige Übergangsfristen.</p>

      <h3>Die Grundregel: 65% Erneuerbare Energien</h3>
      <p>Im Kern besagt das Gesetz: Jede neu eingebaute Heizung muss zu mindestens 65% mit erneuerbaren Energien betrieben werden. Dies gilt ab sofort für <strong>Neubauten in Neubaugebieten</strong>.</p>

      <h3>Was gilt für meinen Altbau in Düsseldorf?</h3>
      <p>Für bestehende Gebäude greift die Pflicht erst, wenn die kommunale Wärmeplanung vorliegt. In Großstädten wie Düsseldorf muss diese bis zum <strong>30.06.2026</strong> fertiggestellt sein. Bis dahin dürfen Sie theoretisch noch Gasheizungen einbauen – müssen sich aber beraten lassen, da steigende CO2-Preise diese unwirtschaftlich machen können.</p>

      <h3>Optionen für die Erfüllung der 65%-Pflicht</h3>
      <ul>
        <li><strong>Wärmepumpe:</strong> Die Standardlösung, oft effizienter als gedacht.</li>
        <li><strong>Fernwärme:</strong> In Düsseldorf oft verfügbar (Stadtwerke). Anschlusszwang prüfen!</li>
        <li><strong>Biomasse:</strong> Pelletheizungen (mit Einschränkungen).</li>
        <li><strong>Hybridheizung:</strong> Kombination aus Gas/Öl und Wärmepumpe.</li>
      </ul>

      <h3>Förderung als Ausgleich</h3>
      <p>Um die Investition abzufedern, bietet der Staat bis zu <strong>70% Förderung</strong> für den Heizungstausch. Voraussetzung ist oft ein hydraulischer Abgleich und eine fachgerechte Heizlastberechnung.</p>
    `,
    date: "28.02.2026",
    author: "Markus Lenz",
    category: "Gesetze & Vorschriften",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "waermepumpe-altbau-erfahrungen",
    title: "Wärmepumpe im Altbau: Mythen vs. Realität",
    excerpt: "Funktioniert eine Wärmepumpe ohne Fußbodenheizung? Experten-Check zur Effizienz in ungedämmten Häusern.",
    content: `
      <p class="lead">"Wärmepumpen funktionieren nur im Neubau mit Fußbodenheizung." – Dieser Satz hält sich hartnäckig, ist aber technisch längst überholt.</p>

      <h3>Heizkörper sind oft kein Problem</h3>
      <p>Moderne Wärmepumpen erreichen Vorlauftemperaturen von 55°C oder mehr sehr effizient. Wichtig ist nicht zwingend eine Fußbodenheizung, sondern großflächige Heizkörper (Typ 22 oder 33). Ein <strong>Heizkörpertausch</strong> in einzelnen Räumen reicht oft aus, um das System "WP-ready" zu machen.</p>

      <h3>Der kritische Faktor: Die Vorlauftemperatur</h3>
      <p>Entscheidend ist, ob wir das Haus an kalten Tagen mit maximal 50-55°C warm bekommen. Das prüfen wir mit einer raumweisen <strong>Heizlastberechnung</strong> nach DIN 12831.</p>

      <h3>Dämmung: Ganz oder gar nicht?</h3>
      <p>Es muss nicht immer die Komplettsanierung sein. Oft bringen "Sowieso-Maßnahmen" den größten Hebel:</p>
      <ul>
        <li>Austausch alter Fenster (U-Wert < 1.3)</li>
        <li>Dämmung der obersten Geschossdecke</li>
        <li>Dämmung der Kellerdecke</li>
      </ul>
      <p>Diese Maßnahmen kosten vergleichsweise wenig, senken die Heizlast aber signifikant.</p>

      <div class="bg-blue-50 p-6 rounded-2xl my-8 border border-blue-100">
        <h4 class="text-blue-800 font-bold mb-2">Realitäts-Check:</h4>
        <p class="text-blue-700 m-0">In vielen Düsseldorfer Reihenhäusern aus den 60ern und 70ern haben wir erfolgreich Wärmepumpen installiert – oft mit Jahresarbeitszahlen (JAZ) von über 3,5.</p>
      </div>
    `,
    date: "15.02.2026",
    author: "Markus Lenz",
    category: "Technik",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "energieausweis-pflicht",
    title: "Energieausweis bei Verkauf & Vermietung: Das müssen Sie wissen",
    excerpt: "Verbrauchsausweis oder Bedarfsausweis? Wer braucht was und welche Bußgelder drohen? Ein kompakter Ratgeber.",
    content: `
      <p class="lead">Wer eine Immobilie inseriert, braucht ihn sofort: den Energieausweis. Doch welcher ist der richtige, und was sagen die Buchstaben A+ bis H wirklich aus?</p>

      <h3>Bedarf vs. Verbrauch: Der kleine Unterschied</h3>
      <ul>
        <li><strong>Verbrauchsausweis:</strong> Basiert auf dem gemessenen Verbrauch der letzten 3 Jahre. Günstig, aber stark vom Nutzerverhalten abhängig. Wenn Sie sparsam geheizt haben, steht das Haus "gut" da – auch wenn die Wände ungedämmt sind.</li>
        <li><strong>Bedarfsausweis:</strong> Basiert auf der technischen Analyse von Wänden, Fenstern, Dach und Heizung. Objektiver und aussagekräftiger.</li>
      </ul>

      <h3>Wann ist der Bedarfsausweis Pflicht?</h3>
      <p>Sie haben keine Wahl, wenn:</p>
      <ol>
        <li>Das Gebäude weniger als 5 Wohneinheiten hat, UND</li>
        <li>Der Bauantrag vor dem 01.11.1977 gestellt wurde, UND</li>
        <li>Es nicht mindestens das Anforderungsniveau der Wärmeschutzverordnung von 1977 erfüllt.</li>
      </ol>
      <p>In allen anderen Fällen herrscht Wahlfreiheit – wobei ich als Experte fast immer zum Bedarfsausweis rate, da er echte Sanierungspotenziale aufzeigt.</p>

      <h3>Gültigkeit und Pflichten</h3>
      <p>Beide Ausweisarten sind <strong>10 Jahre gültig</strong>. Wichtig für Makler und Eigentümer: Schon in der Immobilienanzeige müssen Kennwerte aus dem Ausweis genannt werden. Bei der Besichtigung muss er unaufgefordert vorgelegt werden.</p>
    `,
    date: "01.02.2026",
    author: "Markus Lenz",
    category: "Recht & Immobilien",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "isfp-bonus-erklaert",
    title: "Der iSFP-Bonus: 60.000€ Förderung pro Jahr sichern",
    excerpt: "Warum der individuelle Sanierungsfahrplan (iSFP) die wichtigste Investition vor jeder Sanierung ist. Rechenbeispiele und Vorteile.",
    content: `
      <p class="lead">Der individuelle Sanierungsfahrplan (iSFP) ist mehr als nur ein Stück Papier. Er ist Ihr Ticket zu höheren Förderquoten und höheren Budgets.</p>

      <h3>Was ist der iSFP?</h3>
      <p>Ein standardisiertes Dokument (vom Energieberater erstellt), das den energetischen Ist-Zustand Ihres Hauses zeigt und einen Weg zum "Effizienzhaus" skizziert – in sinnvollen Einzelschritten.</p>

      <h3>Der 5% Turbo für Ihre Förderung</h3>
      <p>Wenn Sie eine Maßnahme umsetzen, die im iSFP empfohlen wurde (z.B. Fenstertausch), erhalten Sie <strong>5% Extra-Förderung</strong>. <br>Statt 15% Grundförderung also 20%.</p>

      <h3>Verdoppelung der förderfähigen Kosten</h3>
      <p>Noch wichtiger: Ohne iSFP fördert die BAFA nur Kosten bis 30.000€ pro Jahr. Mit iSFP steigt diese Grenze auf <strong>60.000€ pro Jahr</strong>. Dies ist gerade bei teuren Maßnahmen wie Dachdämmung oder Fenstertausch entscheidend.</p>
    `,
    date: "20.01.2026",
    author: "Markus Lenz",
    category: "Förderung",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  }
];

export const LEGAL_CONTENT = {
  impressum: {
    title: "Impressum",
    content: `
      <h2 class="text-xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
      <p class="mb-4">
        Lenz Energieberatung<br>
        Markus Lenz<br>
        Kirchstr. 55<br>
        40227 Düsseldorf
      </p>

      <h2 class="text-xl font-bold mb-4">Kontakt</h2>
      <p class="mb-4">
        Telefon: 01573 6533337<br>
        E-Mail: info@lenzenergieberatung.de
      </p>

      <h2 class="text-xl font-bold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p class="mb-4">
        Berufsbezeichnung: Schornsteinfegermeister (verliehen in der Bundesrepublik Deutschland)<br>
        Zuständige Kammer: Handwerkskammer Düsseldorf
      </p>

      <h2 class="text-xl font-bold mb-4">EU-Streitschlichtung</h2>
      <p class="mb-4">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-emerald-600 underline">https://ec.europa.eu/consumers/odr/</a>.<br>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 class="text-xl font-bold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p class="mb-4">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    `
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    content: `
      <h2 class="text-xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
      <p class="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

      <h2 class="text-xl font-bold mb-4">2. Datenerfassung auf dieser Website</h2>
      <h3 class="font-bold mb-2">Kontaktformular</h3>
      <p class="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

      <h3 class="font-bold mb-2">Server-Log-Dateien</h3>
      <p class="mb-4">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.</p>

      <h2 class="text-xl font-bold mb-4">3. Ihre Rechte</h2>
      <p class="mb-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
    `
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    content: `
      <h2 class="text-xl font-bold mb-4">1. Geltungsbereich</h2>
      <p class="mb-4">Diese Geschäftsbedingungen gelten für alle Verträge zwischen Lenz Energieberatung und ihren Kunden über Beratungsleistungen, Gutachten und die Erstellung von Energieausweisen.</p>

      <h2 class="text-xl font-bold mb-4">2. Vertragsschluss</h2>
      <p class="mb-4">Ein Vertrag kommt durch die schriftliche oder mündliche Beauftragung durch den Kunden und die Annahme durch Lenz Energieberatung zustande.</p>

      <h2 class="text-xl font-bold mb-4">3. Leistungen</h2>
      <p class="mb-4">Der Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot. Wir schulden eine fachgerechte Beratung nach dem aktuellen Stand der Technik (GEG, DIN-Normen).</p>

      <h2 class="text-xl font-bold mb-4">4. Mitwirkungspflichten des Kunden</h2>
      <p class="mb-4">Der Kunde ist verpflichtet, alle für die Erbringung der Leistung erforderlichen Unterlagen (Grundrisse, Heizkostenabrechnungen etc.) rechtzeitig und vollständig zur Verfügung zu stellen.</p>

      <h2 class="text-xl font-bold mb-4">5. Vergütung</h2>
      <p class="mb-4">Die Vergütung richtet sich nach dem vereinbarten Honorar. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.</p>
    `
  }
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "energieausweis",
    title: "Energieausweise",
    description: "Bedarfs- oder Verbrauchsausweise für Wohngebäude in Düsseldorf.",
    longDescription: "Ein Energieausweis ist nicht nur gesetzliche Pflicht bei Verkauf oder Vermietung, sondern auch ein wichtiges Dokument zur Bewertung der energetischen Qualität Ihres Gebäudes. Als Schornsteinfegermeister begutachte ich Ihre Immobilie vor Ort und erstelle rechtssichere Ausweise nach dem aktuellen Gebäudeenergiegesetz (GEG).",
    icon: <FileText className="w-8 h-8 text-emerald-600" />,
    details: ["Rechtssicher nach GEG", "Schnelle Erstellung", "Vor-Ort-Begehung inkl."],
    benefits: [
      "Rechtssicherheit bei Immobilienverkauf oder Vermietung",
      "Transparente Darstellung der Energiekosten",
      "Konkrete Modernisierungsempfehlungen inklusive",
      "Erstellt durch einen zertifizierten Experten vor Ort"
    ],
    documents: [
      "Baujahr des Gebäudes & der Heizung",
      "Letzte 3 Abrechnungen (bei Verbrauchsausweis)",
      "Grundrisse & Schnitte (bei Bedarfsausweis)",
      "Datenblatt der Heizungsanlage"
    ],
    pricing: "Ab 200,- € (Verbrauchsausweis) bzw. 450,- € (Bedarfsausweis) inkl. MwSt.",
    seoTitle: "Energieausweis Düsseldorf | Rechtssicher & Schnell | Lenz",
    seoMeta: "Energieausweis in Düsseldorf benötigt? Markus Lenz erstellt Bedarfs- & Verbrauchsausweise rechtssicher nach GEG. Jetzt Termin anfragen!",
    faqs: [
      { question: "Wann ist ein Energieausweis in Düsseldorf Pflicht?", answer: "Er ist zwingend erforderlich, sobald Sie eine Immobilie verkaufen, neu vermieten oder verpachten wollen. Auch bei umfangreichen Sanierungen kann ein neuer Ausweis nötig sein." },
      { question: "Verbrauchs- oder Bedarfsausweis?", answer: "Das hängt vom Baujahr und der Anzahl der Wohnungen ab. Gebäude mit weniger als 5 Wohnungen und Bauantrag vor 1977 benötigen meist den Bedarfsausweis, sofern sie nicht die Wärmeschutzverordnung von 1977 erfüllen." },
      { question: "Wie lange ist der Ausweis gültig?", answer: "Ein Energieausweis hat eine Gültigkeitsdauer von 10 Jahren ab Ausstellungsdatum." },
      { question: "Gibt es Bußgelder bei Fehlen?", answer: "Ja, wer bei Verkauf oder Vermietung keinen gültigen Ausweis vorlegt, riskiert Bußgelder von bis zu 15.000 Euro." },
      { question: "Müssen Sie für den Ausweis ins Haus kommen?", answer: "Ja, eine Vor-Ort-Begehung oder eine detaillierte Foto-Dokumentation ist gesetzlich vorgeschrieben, um die Qualität der Daten zu gewährleisten." },
      { question: "Was ist der Unterschied zwischen den Ausweisarten?", answer: "Der Verbrauchsausweis basiert auf den realen Heizkosten der letzten 3 Jahre. Der Bedarfsausweis berechnet den theoretischen Energiebedarf basierend auf der Bausubstanz und Anlagentechnik." }
    ]
  },
  {
    id: "isfp",
    title: "iSFP Sanierungsfahrplan",
    description: "Individueller Sanierungsfahrplan für maximale Förderquoten.",
    longDescription: "Der Individuelle Sanierungsfahrplan (iSFP) ist das zentrale Werkzeug für eine schrittweise oder ganzheitliche energetische Sanierung. Er bietet Ihnen eine langfristige Strategie und sichert Ihnen zusätzliche staatliche Förderboni (iSFP-Bonus).",
    icon: <Map className="w-8 h-8 text-emerald-600" />,
    details: ["Bis zu 5% Extra-Bonus", "Schritt-für-Schritt Planung", "Staatlich gefördert"],
    benefits: [
      "Zusätzlicher 5% Förderbonus auf Einzelmaßnahmen",
      "Erhöhung der förderfähigen Kosten von 30.000€ auf 60.000€ pro Jahr",
      "Klare Priorisierung der Maßnahmen für Ihr Budget",
      "Hoher staatlicher Zuschuss auf die Beratungskosten"
    ],
    documents: [
      "Vollständige Bauunterlagen",
      "Informationen zu bisherigen Sanierungen",
      "Heizkostenabrechnungen der letzten Jahre",
      "Ihre persönlichen Sanierungsziele"
    ],
    pricing: "Eigenanteil meist ca. 800,- € bis 1.500,- € nach staatlicher Förderung.",
    seoTitle: "iSFP Sanierungsfahrplan Düsseldorf | 5% Bonus sichern",
    seoMeta: "Maximal fördern mit dem iSFP Sanierungsfahrplan in Düsseldorf. Markus Lenz optimiert Ihre Energiewende & sichert Zuschüsse. Jetzt beraten lassen!",
    faqs: [
      {
        question: "Wie hoch ist die Förderung für den iSFP selbst?",
        answer: "Für die Erstellung eines individuellen Sanierungsfahrplans (iSFP) gibt es eine Förderung von 50 % der Kosten, maximal 650 € bei Ein- oder Zweifamilienhäusern und maximal 850 € bei mehr als zwei Wohneinheiten, gewährt durch das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)."
      },
      { question: "Muss ich die Maßnahmen im iSFP umsetzen?", answer: "Nein, der Fahrplan ist eine Empfehlung. Sie entscheiden frei, ob, wann und in welcher Reihenfolge Sie sanieren. Aber: Der 5% Bonus gilt nur für Maßnahmen aus dem iSFP." },
      { question: "Wie lange ist der iSFP gültig?", answer: "Der Sanierungsfahrplan behält seine Gültigkeit für die Bonus-Förderung over einen Zeitraum von 15 Jahren." },
      { question: "Was bringt der iSFP-Bonus genau?", answer: "Er erhöht den Fördersatz für Einzelmaßnahmen (z.B. Fenster, Dämmung) um 5 Prozentpunkte und verdoppelt die maximal förderfähigen Kosten pro Jahr." },
      { question: "Kann ich den iSFP auch für eine WEG erstellen?", answer: "Ja, für Wohnungseigentümergemeinschaften gibt es zudem einen zusätzlichen Zuschuss für die Erläuterung des Fahrplans in einer Eigentümerversammlung." },
      { question: "Wie läuft die Erstellung ab?", answer: "Nach der Datenaufnahme vor Ort erstelle ich das energetische Modell, entwickle Sanierungsvarianten und bespreche das Ergebnis ausführlich mit Ihnen." }
    ]
  },
  {
    id: "heizlast",
    title: "Heizlastberechnung",
    description: "Präzise Berechnung für den optimalen Heizungstausch.",
    longDescription: "Eine raumweise Heizlastberechnung nach DIN 12831 ist die unverzichtbare Basis für jede moderne Heizung, insbesondere für Wärmepumpen. Sie verhindert überdimensionierte und ineffiziente Anlagen.",
    icon: <Thermometer className="w-8 h-8 text-emerald-600" />,
    details: ["Grundlage für WP-Förderung", "Raumweise Berechnung", "Normgerecht nach DIN 12831"],
    benefits: [
      "Optimale Dimensionierung Ihrer neuen Wärmepumpe",
      "Vermeidung von unnötig hohen Stromkosten",
      "Voraussetzung für staatliche Förderprogramme",
      "Besserer Wohnkomfort durch perfekt abgestimmte Raumtemperaturen"
    ],
    documents: [
      "Detaillierte Grundrisse",
      "U-Werte der Bauteile (oder Baujahresbeschreibung)",
      "Fenstermaße und -qualitäten",
      "Informationen zur geplanten Heizungsart"
    ],
    pricing: "Nach Aufwand und Gebäudegröße, meist ab ca. 350,- € inkl. MwSt.",
    seoTitle: "Heizlastberechnung Düsseldorf | Wärmepumpen-Check",
    seoMeta: "Präzise Heizlastberechnung nach DIN 12831 in Düsseldorf. Basis für Förderung & effiziente Wärmepumpen. Markus Lenz berät Sie kompetent vor Ort.",
    faqs: [
      { question: "Warum reicht die alte Kesselleistung nicht aus?", answer: "Alte Kessel sind oft massiv überdimensioniert. Moderne Systeme wie Wärmepumpen müssen exakt passen, um effizient and materialschonend zu laufen." },
      { question: "Ist die Berechnung für die Förderung Pflicht?", answer: "Ja, für fast alle Förderprogramme beim Heizungstausch ist eine raumweise Heizlastberechnung als Nachweis zwingend erforderlich." },
      { question: "Was passiert ohne Heizlastberechnung?", answer: "Die Heizung wird oft 'auf Verdacht' zu groß gewählt. Das führt zu Takten (ständiges Ein/Aus), höherem Verschleiß und unnötig hohen Stromverbräuchen." },
      { question: "Wie lange dauert die Berechnung?", answer: "Sobald alle Gebäudedaten vorliegen, erstelle ich die raumweise Berechnung innerhalb weniger Werktage." },
      { question: "Was kostet die Berechnung für ein EFH?", answer: "In der Regel liegt der Aufwand bei einem Standard-Einfamilienhaus zwischen 350 und 500 Euro." },
      { question: "Kann ich die Daten selbst liefern?", answer: "Ja, gute Grundrisse und Infos zu Fenstern and Dämmung beschleunigen den Prozess erheblich." }
    ]
  },
  {
    id: "abgleich",
    title: "Hydraulischer Abgleich",
    description: "Effizienzsteigerung Ihres bestehenden Heizsystems.",
    longDescription: "Beim hydraulischen Abgleich wird sichergestellt, dass jeder Heizkörper genau die Wärmemenge erhält, die er benötigt. Das spart Energie, schont die Umwälzpumpe und eliminiert störende Fließgeräusche. Wichtig: Der hydraulische Abgleich ist eine zwingende technische Voraussetzung für den Erhalt staatlicher Förderungen (KfW/BAFA) beim Einbau einer neuen Wärmepumpe.",
    icon: <Settings className="w-8 h-8 text-emerald-600" />,
    details: ["Pflicht für WP-Förderung", "Heizkostenersparnis bis 15%", "Staatlich bezuschusst"],
    benefits: [
      "Zwingende Voraussetzung für Wärmepumpen-Förderung",
      "Gleichmäßige Erwärmung aller Räume",
      "Reduzierung der Vorlauftemperatur möglich",
      "Weniger Pumpenstrom und leisere Heizkörper",
      "Staatlich gefördert im Rahmen der Heizungsoptimierung"
    ],
    documents: [
      "Übersicht der Heizkörpergrößen",
      "Vorhandene Ventileinstellmöglichkeiten",
      "Leistungsdaten der Heizungspumpe"
    ],
    pricing: "Individuelles Angebot je nach Anzahl der Heizkörper.",
    seoTitle: "Hydraulischer Abgleich Düsseldorf | Pflicht für WP-Förderung",
    seoMeta: "Hydraulischer Abgleich in Düsseldorf: Pflicht für die Wärmepumpen-Förderung & Weg zum Energiesparen. Markus Lenz optimiert Ihr System. Jetzt Termin sichern!",
    faqs: [
      { question: "Ist der Abgleich Pflicht für die Wärmepumpen-Förderung?", answer: "Ja, absolut. Um staatliche Zuschüsse (z.B. durch die KfW) für eine neue Wärmepumpe zu erhalten, muss ein hydraulischer Abgleich nach Verfahren B zwingend nachgewiesen werden." },
      { question: "Wann ist ein Abgleich sinnvoll?", answer: "Immer dann, wenn Räume unterschiedlich schnell warm werden, Heizkörper pfeifen oder die Heizkosten trotz moderner Heizung hoch sind." },
      { question: "Wie viel Heizkosten spare ich?", answer: "Durchschnittlich lassen sich durch einen korrekt durchgeführten hydraulischen Abgleich bis zu 15% der Heizenergie einsparen." },
      { question: "Ist der Abgleich gesetzlich vorgeschrieben?", answer: "In vielen Fällen ja. Seit 2022 gibt es für größere Wohngebäude (ab 6 oder 10 Wohneinheiten je nach Energieträger) sogar eine Nachrüstpflicht." },
      { question: "Kann ich den Abgleich selbst machen?", answer: "Nein, dafür werden spezielle voreinstellbare Thermostatventile benötigt und die Einstellwerte müssen per Software berechnet werden." },
      { question: "Wird der Abgleich gefördert?", answer: "Ja, im Rahmen der 'Heizungsoptimierung' gibt es attraktive Zuschüsse durch die BAFA, wenn die Anlage älter als zwei Jahre ist." }
    ]
  },
  {
    id: "beg-em",
    title: "BEG Einzelmaßnahmen",
    description: "Beratung und Begleitung für Fenster, Dämmung und mehr.",
    longDescription: "Wir begleiten Sie bei der Umsetzung einzelner energetischer Maßnahmen wie dem Austausch von Fenstern, der Dämmung der Gebäudehülle oder der Optimierung der Anlagentechnik.",
    icon: <Target className="w-8 h-8 text-emerald-600" />,
    details: ["Antragstellung BAFA/KfW", "Technische Projektprüfung", "Qualitätssicherung"],
    benefits: [
      "Sicherstellung der technischen Mindestanforderungen",
      "Komplette Abwicklung der Förderanträge",
      "Prüfung der Handwerkerangebote",
      "Fachbauleitung und Abnahme der Maßnahmen"
    ],
    documents: [
      "Angebote der ausführenden Firmen",
      "Zustimmungserklärung des Eigentümers",
      "Technische Datenblätter der gewählten Materialien"
    ],
    pricing: "Honorar orientiert sich an der Fördersumme bzw. nach Zeitaufwand (bis zu 50% förderfähig).",
    seoTitle: "BEG Förderung Einzelmaßnahmen Düsseldorf | Lenz Beratung",
    seoMeta: "Förderung für Fenster & Dämmung in Düsseldorf sichern. Markus Lenz begleitet Ihre BEG-Einzelmaßnahmen von Antrag bis Auszahlung. Jetzt informieren!",
    faqs: [
      { question: "Was sind Einzelmaßnahmen (BEG EM)?", answer: "Das sind Sanierungsschritte, die nicht das ganze Haus zum Effizienzhaus machen, sondern gezielt Bauteile verbessern (Dach, Wand, Fenster, Türen)." },
      { question: "Wie hoch ist der aktuelle Fördersatz?", answer: "In der Regel erhalten Sie 15% Zuschuss. Mit einem vorliegenden iSFP erhöht sich dieser Satz auf 20%." },
      { question: "Wann muss der Antrag gestellt werden?", answer: "Zwingend VOR Beauftragung der Handwerker. Ein Planungsvertrag mit dem Energieberater darf jedoch bereits bestehen." },
      { question: "Brauche ich für alles einen Energieberater?", answer: "Für Maßnahmen an der Gebäudehülle (Dämmung, Fenster) ist die Einbindung eines Energieeffizienz-Experten für die Förderung zwingend vorgeschrieben." },
      { question: "Wie lange dauert die Auszahlung der Förderung?", answer: "Nach Abschluss der Maßnahme und Einreichung des Verwendungsnachweises dauert es meist 2-4 Monate bis zur Auszahlung durch die BAFA." },
      { question: "Gibt es eine Obergrenze für die Förderung?", answer: "Ohne iSFP liegen die förderfähigen Kosten bei 30.000€ pro Jahr, mit iSFP steigen sie auf 60.000€ pro Wohneinheit und Kalenderjahr." }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: "Erstkontakt", description: "Kurzes Telefonat oder E-Mail zur Klärung Ihres Anliegens." },
  { title: "Vor-Ort-Termin", description: "Begehung Ihres Objekts in Düsseldorf und Datenaufnahme." },
  { title: "Analyse", description: "Energetische Bewertung und Erstellung der Unterlagen." },
  { title: "Beratung", description: "Besprechung der Ergebnisse und Fördermöglichkeiten." },
  { title: "Umsetzung", description: "Unterstützung bei der Beantragung und Begleitung." }
];

export const FAQS: FAQItem[] = [
  {
    question: "Warum brauche ich einen Energieberater?",
    answer: "Ein Energieberater identifiziert Schwachstellen an Ihrem Haus, plant Sanierungen wirtschaftlich und sichert Ihnen den Zugang zu staatlichen Förderungen (bis zu 70%)."
  },
  {
    question: "Was kostet eine Energieberatung in Düsseldorf?",
    answer: "Die Kosten hängen vom Umfang ab. Ein iSFP wird staatlich bezuschusst, sodass Ihr Eigenanteil für die Planung deutlich reduziert wird."
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer: "In der Regel melden wir uns innerhalb von 24 Stunden zurück. Ein Vor-Ort-Termin findet meist innerhalb von 1-7 Tagen statt."
  },
  {
    question: "Muss ich Fördermittel selbst beantragen?",
    answer: "Nein, als gelisteter Energieeffizienz-Experte übernehmen wir die komplette technische Antragstellung bei der BAFA oder KfW für Sie."
  }
];
