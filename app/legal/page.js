import React from "react";

export default function Page() {
  return (
    <section className="min-h-screen bg-white text-black pt-28 pb-16 px-6 sm:px-12 md:px-24 lg:px-48">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-5xl font-normal mb-3">Aviso Legal</h1>
          <p className="text-sm text-gray-500">
            Última actualización el 31 de agosto de 2025
          </p>
        </div>

        <p className="text-gray-800 leading-relaxed">
          La presente página contiene el Aviso Legal correspondiente a Smart
          Products & Services S.L., en relación con el uso del servicio IAWhats
          ofrecido a través del sitio web “https://iacall.es”.
        </p>

        <ol className="space-y-8 list-decimal list-outside pl-6 text-gray-800 leading-relaxed">
          <li>
            <h2 className="text-xl font-bold mb-1">
              Información de la Empresa
            </h2>
            <p>
              Denominación social: Smart Products & Services SL. <br />
              NIF: B86563756 <br />
              Domicilio: C/ Velázquez 15. 28001 Madrid <br />
              Datos de Registro: Smart Products and Services. CIF B8653756,
              inscrita en el Registro Mercantil de Madrid, tomo 30782, libro 0,
              sección 8ª, folio 131, hoja M553972 <br />
              Contacto para IAWhats: info@iacall.es
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">
              Limitación de Responsabilidad
            </h2>
            <p>
              Con los límites establecidos en la ley, Smart Products and
              Services S.L. no asume ninguna responsabilidad derivada de la
              falta de veracidad, integridad, actualización y precisión de los
              datos o informaciones que contienen sus páginas web y el servicio
              IAWhats.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">
              Descargo de Responsabilidad de Contenido
            </h2>
            <p>
              Los contenidos e información no vinculan a Smart Products and
              Services S.L. ni constituyen opiniones, consejos o asesoramiento
              legal de ningún tipo, pues se trata meramente de un servicio
              ofrecido con carácter informativo y divulgativo, especialmente en
              lo relativo al uso de los agentes de WhatsApp de IAWhats.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">Enlaces de Terceros</h2>
            <p>
              Las páginas de Internet de Smart Products & Services S.L.
              (incluyendo la información relativa a IAWhats) pueden contener
              enlaces (links) a otras páginas de terceras partes que Smart
              Products & Services S.L. no puede controlar. Por lo tanto, Smart
              Products & Services S.L. no puede asumir responsabilidades por el
              contenido que pueda aparecer en páginas de terceros.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">Propiedad Intelectual</h2>
            <p>
              Los textos, imágenes, sonidos, animaciones, software y el resto de
              contenidos incluidos en este website y en el servicio IAWhats son
              propiedad exclusiva de Smart Products & Services S.L. o sus
              licenciantes. Cualquier acto de transmisión, distribución, cesión,
              reproducción, almacenamiento o comunicación pública total o
              parcial deberá contar con el consentimiento expreso de Smart
              Products & Services S.L.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">Protección de Datos</h2>
            <p>
              Asimismo, para acceder a algunos de los servicios que Smart
              Products & Services S.L. ofrece a través del sitio web, incluyendo
              el uso de IAWhats, deberá proporcionar algunos datos de carácter
              personal. En cumplimiento de lo establecido en el Reglamento (UE)
              2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de
              2016, relativo a la protección de las personas físicas en lo que
              respecta al tratamiento de datos personales y a la libre
              circulación de estos datos, le informamos que, mediante la
              cumplimentación de los presentes formularios, sus datos personales
              quedarán incorporados y serán tratados en los ficheros de Smart
              Products & Services S.L. con el fin de poderle prestar y ofrecer
              nuestros servicios (incluido IAWhats), así como para informarle de
              las mejoras del sitio Web.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-1">Sus Derechos</h2>
            <p>
              Le informamos también de que tendrá la posibilidad en todo momento
              de ejercer los derechos de acceso, rectificación, cancelación,
              oposición, limitación y portabilidad de sus datos de carácter
              personal, de manera gratuita mediante email a: info@iacall.es
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
