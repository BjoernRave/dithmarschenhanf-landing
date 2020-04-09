import { Product } from './types'

export const products: Product[] = [
  {
    name: 'Hanf Blätter Tee',
    slug: 'hanfblaettertee',
    description:
      'Handgepflückte Nutzhanfblätter der Sorte Uso 31 (EU zugelassenen Nutzhanf Sorte). \n Angebaut  nach EU Biorichtlinien im gesunden Klima des westlichen Schleswig-Holsteins. \n Schonend getrocknet und handvermahlen.',
    images: ['/hanfblaettertee1.jpg'],
    mhd: '2 Jahre ab Ernte',
  },
  {
    name: 'Hanf Blüten Tee',
    slug: 'hanfbluettentee',
    description:
      'Handverlesene Blüten der Sorte Fedora 17 (EU zugelassenen Nutzhanf Sorte) \n  Angebaut  nach EU Biorichtlinien im gesunden Klima des westlichen Schleswig-Holsteins. \n Schonend getrocknet.',
    images: ['/hanfbluetentee1.jpg', '/buds.jpg'],
    mhd: '2 Jahre ab Ernte',
  },
  {
    name: 'Blatt & Blüte Tee',
    slug: 'blattbluetetee',
    description:
      'Geerntet im späten Bühstadium zur vollen Ausprägung der Cannabinoide \n  Angebaut  nach EU Biorichtlinien im gesunden Klima des westlichen Schleswig-Holsteins. \n Schonend getrocknet.',
    images: ['/blattbluetetee1.jpg', '/buds.jpg'],
    mhd: '2 Jahre ab Ernte',
  },
  {
    name: 'Hanfmehl Blatt & Blüte',
    slug: 'hanfmehlblattbluete',
    description:
      'Feinster Staub mit feinsten Inhalten; Bei der Verarbeitung unserer getrockneten Hanfprodukte ergibt sich immer auch eine kleine aber feine Staubfraktion. Dabei reden wir nicht von Hausstaub sondern von Pflanzenstaub voll mit wertvollen Pflanzeninhaltsstoffen.',
    images: ['/hanfmehlblattbluete1.jpg', '/buds.jpg'],
    mhd: '2 Jahre ab Ernte',
  },
  {
    name: 'Hanfsamen Pur',
    slug: 'hanfsamenpur',
    description:
      "Hanfsamen sind das regionale Superfood. Reich an Omega3 und 6 Fettsäuren in der optimalen 1:3 Verteilung, mit allen für den Menschen essentiellen Aminosäuren, leicht verwertbaren Eiweißen und Ballststoffen - und OHNE GLUTEN! \n Sie eignen sich nicht nur als Back- und Müsli Zutat sondern auch ganz hervorragend zur Herstellung von 'Milchersatz'. Das Rezept verraten wir gerne! Auch da muss es nicht Soja sein... \n Natürlich sind unsere Hanfsamen (Hanfnüsse) auch nach EU Bio Richtlinien angebaut und auch die sind händisch geerntet und gedroschen in 2019 - DAS wollen wir gerne ändern, die handverlesene Qualität wird bleiben!",
    images: ['/hanfsamenpur1.jpg', '/hanfsamenpur2.jpg'],
    nutrients: [
      { name: 'Brennwert', value: '433 kcal/ 1768 kJ' },
      { name: 'Fett', value: '30,2g' },
      { name: 'gesättigte Fettsäuren', value: '2,9g' },
      { name: 'einfach ungesättigte Fettsäuren', value: '4,2g' },
      { name: 'mehrfach gesättigte Fettsäuren', value: '23,1g' },
      { name: 'Kohlenhydrate', value: '3,4g' },
      { name: 'Zucker', value: '1,6g' },
      { name: 'Eiweiß', value: '20,2g' },
      { name: 'Salz', value: '0,0g' },
    ],
    mhd: '2 Jahre ab Ernte',
  },
  {
    name: 'Knusper Hanf',
    slug: 'knusperhanf',
    description:
      "Krokant war gestern! \n Ernährungsphysiologisch wertvoll und genial lecker - für Süßmäuler eine echte 'geheime Zutat'. \n Die nach EU Bio Richtlinien angebauten Hanfsamen werden mit Zucker und Gewürzen schonend kandiert.",
    images: ['/knusperhanf1.jpg', '/knusperhanf2.jpg'],
    nutrients: [
      { name: 'Brennwert', value: '419 kcal/ 1732 kJ' },
      { name: 'Fett', value: '15,1g' },
      { name: 'gesättigte Fettsäuren', value: '1,5g' },
      { name: 'einfach ungesättigte Fettsäuren', value: '2,1g' },
      { name: 'mehrfach gesättigte Fettsäuren', value: '12,5g' },
      { name: 'Kohlenhydrate', value: '51,6g' },
      { name: 'Zucker', value: '50,7g' },
      { name: 'Eiweiß', value: '10,1g' },
      { name: 'Salz', value: '0g' },
    ],
    mhd: '6 Monate ab Herstellung',
  },
  {
    name: 'Würzsalz Hanf',
    slug: 'wuerzsalzhanf',
    description:
      'Handverlesene Hanfsamen, kontrolliert in kleinen Portionen geröstet und mit Tiefensalz deutscher Mittelgebirge (Steinsalz) ohne weitere Zutaten vermahlen. \n Salzgehalt (lt Leitsätzen deutsches Lebensmittelbuch) 40%',
    images: ['/wuerzsalzhanf1.jpg', '/wuerzsalzhanf2.jpg', '/buds.jpg'],
    nutrients: [
      { name: 'Brennwert', value: '259,8 kcal/ 530,4 kJ' },
      { name: 'Fett', value: '9,1g' },
      { name: 'gesättigte Fettsäuren', value: '0,9g' },
      { name: 'einfach ungesättigte Fettsäuren', value: '1,3g' },
      { name: 'mehrfach gesättigte Fettsäuren', value: '7,5g' },
      { name: 'Kohlenhydrate', value: '1,0g' },
      { name: 'Zucker', value: '0,5g' },
      { name: 'Eiweiß', value: '6,1g' },
      { name: 'Salz', value: '39,5g' },
    ],
    mhd: '6 Monate ab Herstellung',
  },
]
