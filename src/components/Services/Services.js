import React from "react";
import "./Services.css";
import wheelchair from "../../Images/wheelchair.jpg";
import walker from "../../Images/walker.jpg";
import car from "../../Images/car.jpg";
import bus from "../../Images/bus.jpg";
import train from "../../Images/train.jpg";
import flight from "../../Images/flight.jpg";
import washrooms from "../../Images/washrooms.jpg";
import caretakers from "../../Images/caretakers.jpg";

function Services(props) {
  return (
    <div>
      <h1>Services</h1>
      <div className="container">
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "1. Wheel Chair"
                : props.lang === "De"
                ? "1. Rollstuhl"
                : "1. व्हील चेयर"}
            </h4>
            {props.lang === "En"
              ? `TravelGoat offers wheelchair services tailored specifically for
            individuals with physical disabilities, providing a comfortable and
            accessible means of transportation. In addition to providing
            wheelchair rentals, we also offer information and resources to help
            our customers choose the appropriate type of wheelchair based on
            their specific needs and preferences. Our goal is to ensure that all
            individuals have the opportunity to travel and explore the world,
            regardless of their physical limitations.`
              : props.lang === "De"
              ? `
             bietet speziell zugeschnittene Rollstuhldienste an
             Personen mit körperlichen Behinderungen, die eine komfortable und
             zugängliche Verkehrsmittel. Neben der Bereitstellung
             Rollstuhlverleih bieten wir auch Informationen und Ressourcen an, um zu helfen
             unsere kunden wählen den passenden rollstuhltyp aus
             ihre spezifischen Bedürfnisse und Vorlieben. Unser Ziel ist es, dafür zu sorgen, dass alle
             Einzelpersonen haben die Möglichkeit zu reisen und die Welt zu entdecken,
             unabhängig von ihren körperlichen Einschränkungen.`
              : `
             विशेष रूप से तैयार की गई व्हीलचेयर सेवाएं प्रदान करता है
             शारीरिक अक्षमताओं वाले व्यक्ति, एक आरामदायक और प्रदान करते हैं
             परिवहन के सुलभ साधन। प्रदान करने के अलावा
             व्हीलचेयर किराए पर, हम मदद के लिए जानकारी और संसाधन भी प्रदान करते हैं
             हमारे ग्राहक उपयुक्त प्रकार के व्हीलचेयर के आधार पर चुनते हैं
             उनकी विशिष्ट आवश्यकताएं और प्राथमिकताएं। हमारा लक्ष्य यह सुनिश्चित करना है कि सभी
             व्यक्तियों को यात्रा करने और दुनिया का पता लगाने का अवसर मिलता है,
             उनकी शारीरिक सीमाओं की परवाह किए बिना।`}
          </p>
          <img className="images-services" src={wheelchair} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "2. Walker"
                : props.lang === "De"
                ? "2. Gehhilfe"
                : "2. वाकर"}
            </h4>
            {props.lang === "En"
              ? `TravelGOat offers walker services tailored specifically for
            individuals with physical disabilities. We provide a range of walker
            options that are designed for increased stability and support, while
            remaining lightweight and portable. Additionally, we offer helpful
            resources to assist customers in selecting the appropriate walker
            based on their unique needs and preferences. Our mission is to help
            individuals with physical disabilities maintain their mobility and
            independence`
              : props.lang === "De"
              ? `TravelGOat bietet speziell auf Wanderer zugeschnittene Dienstleistungen an
            Menschen mit körperlichen Behinderungen. Wir bieten eine Reihe von Walker
            Optionen, die für erhöhte Stabilität und Unterstützung ausgelegt sind, während
            bleibt leicht und tragbar. Zusätzlich bieten wir hilfreiche
            Ressourcen, um Kunden bei der Auswahl des geeigneten Gehwagens zu unterstützen
            basierend auf ihren individuellen Bedürfnissen und Vorlieben. Unsere Mission ist es zu helfen
            Menschen mit körperlichen Behinderungen erhalten ihre Mobilität und
            Unabhängigkeit`
              : `TravelGOat विशेष रूप से शारीरिक अक्षमताओं वाले व्यक्तियों के लिए तैयार की गई वॉकर सेवाएं प्रदान 
            करता है। हम कई प्रकार के वॉकर विकल्प प्रदान करते हैं जो हल्के और पोर्टेबल रहते हुए स्थिरता और समर्थन के लिए डिज़ाइन 
            किए गए हैं। इसके अतिरिक्त, हम ग्राहकों को उनकी अनूठी जरूरतों और प्राथमिकताओं के आधार पर उपयुक्त वॉकर चुनने में 
            सहायता करने के लिए सहायक संसाधन प्रदान करते हैं। हमारा मिशन शारीरिक अक्षमताओं वाले व्यक्तियों को उनकी गतिशीलता 
            और स्वतंत्रता बनाए रखने में मदद करना है`}
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>

      <div className="container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "Transportation Mode"
                : props.lang === "De"
                ? "Transportmodus"
                : "परिवहन मोड"}
            </h3>

            <h4>
              {props.lang === "En"
                ? "1. Car"
                : props.lang === "De"
                ? "1 Auto"
                : "1. कार"}
            </h4>
            {props.lang === "En"
              ? `TravelGOat, our website, provides transportation services that are
            accessible and inclusive to individuals with physical disabilities.
            Our buses are equipped with features such as wheelchair ramps and
            securement systems, providing a safe and comfortable ride for our
            passengers. Our skilled drivers are trained to provide reliable and
            accommodating service to meet the needs of all our customers. Our
            mission is to provide individuals with physical disabilities the
            opportunity to explore and experience the world.`
              : props.lang === "De"
              ? `TravelGOat, unsere Website, bietet Transportdienste, die für Menschen 
            mit körperlichen Behinderungen zugänglich und inklusive sind. Unsere Busse sind mit Funktionen
             wie Rollstuhlrampen und Sicherungssystemen ausgestattet, die unseren Fahrgästen eine sichere 
             und komfortable Fahrt ermöglichen. Unsere erfahrenen Fahrer sind geschult, um einen zuverlässigen 
             und zuvorkommenden Service zu bieten, um die Bedürfnisse aller unserer Kunden zu erfüllen. Unsere 
             Mission ist es, Menschen mit körperlichen Behinderungen die Möglichkeit zu geben, die Welt zu 
             entdecken und zu erleben.`
              : `TravelGOat, हमारी वेबसाइट, परिवहन सेवाएं प्रदान करती है जो शारीरिक अक्षमताओं 
             वाले व्यक्तियों के लिए सुलभ और समावेशी हैं। हमारी बसें व्हीलचेयर रैंप और सुरक्षा प्रणाली जैसी सुविधाओं से लैस हैं, जो हमारे 
             यात्रियों को सुरक्षित और आरामदायक सवारी प्रदान करती हैं। हमारे कुशल ड्राइवरों को हमारे सभी ग्राहकों की जरूरतों को पूरा करने 
             के लिए विश्वसनीय और अनुकूल सेवा प्रदान करने के लिए प्रशिक्षित किया जाता है। हमारा मिशन शारीरिक अक्षमताओं वाले व्यक्तियों 
             को दुनिया का पता लगाने और अनुभव करने का अवसर प्रदान करना है।`}
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>

        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "2. Bus"
                : props.lang === "De"
                ? "2. Bus"
                : "2. बस"}
            </h4>
            {props.lang === "En"
              ? ` TravelGOat, our website, is committed to providing accessible
            transportation services for individuals with physical disabilities.
            Our car rental services cater specifically to these individuals,
            offering features such as wheelchair accessible vehicles, hand
            controls, and other specialized equipment. Our goal is to ensure
            that our customers have a safe and comfortable means of
            transportation, and that they are able to fully participate in all
            aspects of travel. Our team is dedicated to providing exceptional
            service and support to meet the needs of each and every customer.`
              : props.lang === "De"
              ? `TravelGOat, unsere Website, ist bestrebt, barrierefrei zu sein
             Transportdienste für Menschen mit körperlichen Behinderungen.
             Unsere Autovermietung richtet sich speziell an diese Personen,
             bietet Funktionen wie rollstuhlgerechte Fahrzeuge, Hand
             Steuerungen und andere Spezialausrüstung. Unser Ziel ist es sicherzustellen
             dass unsere Kunden sicher und komfortabel unterwegs sind
             Transport, und dass sie in der Lage sind, an allem voll teilzunehmen
             Aspekte des Reisens. Unser Team ist bestrebt, Außergewöhnliches zu bieten
             Service und Support, um die Bedürfnisse jedes einzelnen Kunden zu erfüllen.`
              : `TravelGOat, हमारी वेबसाइट, सुलभ प्रदान करने के लिए प्रतिबद्ध है
             शारीरिक विकलांग व्यक्तियों के लिए परिवहन सेवाएं।
             हमारी कार रेंटल सेवाएं विशेष रूप से इन व्यक्तियों को पूरा करती हैं,
             व्हीलचेयर सुलभ वाहन, hand
             नियंत्रण, और अन्य विशेष उपकरण। हमारा लक्ष्य सुनिश्चित करना है
             कि हमारे ग्राहकों के पास एक सुरक्षित और आरामदायक साधन है
             परिवहन, और यह कि वे सभी में पूरी तरह से भाग लेने में सक्षम हैं
             यात्रा के पहलू। हमारी टीम असाधारण प्रदान करने के लिए समर्पित है
             प्रत्येक ग्राहक की जरूरतों को पूरा करने के लिए सेवा और समर्थन।`}
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>

      <div className="container">
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "3. Train"
                : props.lang === "De"
                ? "3. Zug"
                : "3. रेलगाड़ी"}
            </h4>
            {props.lang === "En"
              ? ` At TravelGOat, our website offers inclusive and accessible
            transportation services for individuals with physical disabilities,
            including train services. Our trains are equipped with features such
            as wheelchair spaces, accessible seating, and audio and visual
            announcements to enhance the travel experience for our customers.
            Our team is committed to providing reliable and accommodating
            service to meet the unique needs of each passenger. Our mission is
            to ensure that individuals with physical disabilities have equal
            access to travel opportunities, and that they are able to enjoy safe
            and comfortable journeys.`
              : props.lang === "De"
              ? `Bei TravelGOat bietet unsere Website inklusive und barrierefrei
            Fahrdienste für Menschen mit körperlichen Behinderungen,
            einschließlich Zugverkehr. Unsere Züge sind ausgestattet mit Features wie z
            B. Rollstuhlplätze, barrierefreie Sitzgelegenheiten sowie audiovisuelle Einrichtungen
            Ankündigungen, um das Reiseerlebnis für unsere Kunden zu verbessern.
            Unser Team setzt sich für eine zuverlässige und zuvorkommende Betreuung ein
            Service, um die einzigartigen Bedürfnisse jedes Passagiers zu erfüllen. Unsere Mission ist
            sicherzustellen, dass Menschen mit körperlichen Behinderungen gleichberechtigt sind
            Zugang zu Reisemöglichkeiten haben und sicher sein können
            und bequeme Fahrten.`
              : `TravelGOat में, हमारी वेबसाइट समावेशी और सुलभ प्रदान करती है
            शारीरिक विकलांग व्यक्तियों के लिए परिवहन सेवाएं,
            ट्रेन सेवाओं सहित। हमारी ट्रेनें ऐसी सुविधाओं से लैस हैं
            व्हीलचेयर रिक्त स्थान, सुलभ बैठने और ऑडियो और विजुअल के रूप में
            हमारे ग्राहकों के लिए यात्रा के अनुभव को बढ़ाने के लिए घोषणाएं।
            हमारी टीम विश्वसनीय और मिलनसार प्रदान करने के लिए प्रतिबद्ध है
            सेवा प्रत्येक यात्री की अनूठी जरूरतों को पूरा करने के लिए। हमारा मिशन है
            यह सुनिश्चित करने के लिए कि शारीरिक अक्षमताओं वाले व्यक्तियों के पास समान है
            यात्रा के अवसरों तक पहुंच, और वे सुरक्षित आनंद लेने में सक्षम हैं
            और आरामदायक यात्राएँ।`}
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "4. Flight"
                : props.lang === "De"
                ? "4. Flug"
                : "4. विमान"}
            </h4>
            {props.lang === "En"
              ? `TravelGOat, our website, is dedicated to offering accessible
            transportation services for individuals with physical disabilities,
            including flight services. We provide a range of features such as
            wheelchair assistance, priority boarding, and accessible seating to
            ensure that our customers have a comfortable and stress-free flight
            experience. Our team is trained to provide reliable and
            accommodating service to meet the unique needs of each passenger.
            Our goal is to enable individuals with physical disabilities to
            access travel opportunities with ease and confidence.`
              : props.lang === "De"
              ? `TravelGOat, unsere Website, widmet sich dem Angebot barrierefreier Angebote
            Fahrdienste für Menschen mit körperlichen Behinderungen,
            einschließlich Flugleistungen. Wir bieten eine Reihe von Funktionen wie z
            Rollstuhlunterstützung, Priority Boarding und barrierefreie Sitzgelegenheiten
            sicherzustellen, dass unsere Kunden einen komfortablen und stressfreien Flug haben
            Erfahrung. Unser Team ist darauf geschult, zuverlässig und zuverlässig zu liefern
            zuvorkommender Service, um die individuellen Bedürfnisse jedes Passagiers zu erfüllen.
            Unser Ziel ist es, Menschen mit körperlichen Beeinträchtigungen dies zu ermöglichen
            Zugang zu Reisemöglichkeiten mit Leichtigkeit und Zuversicht.`
              : `TravelGOat, हमारी वेबसाइट, सुलभ पेशकश करने के लिए समर्पित है
            शारीरिक विकलांग व्यक्तियों के लिए परिवहन सेवाएं,
            उड़ान सेवाओं सहित। हम कई प्रकार की सुविधाएँ प्रदान करते हैं जैसे
            व्हीलचेयर सहायता, प्राथमिकता बोर्डिंग, और सुलभ बैठने के लिए
            सुनिश्चित करें कि हमारे ग्राहकों के पास एक आरामदायक और तनाव मुक्त उड़ान हो
            अनुभव। हमारी टीम विश्वसनीय और प्रदान करने के लिए प्रशिक्षित है
            प्रत्येक यात्री की अनूठी जरूरतों को पूरा करने के लिए अनुकूल सेवा।
            हमारा लक्ष्य शारीरिक रूप से विकलांग व्यक्तियों को सक्षम बनाना है
            आसानी और आत्मविश्वास के साथ यात्रा के अवसरों तक पहुंचें।`}
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br />
      <h4>
        {props.lang === "En"
          ? "Facilities"
          : props.lang === "De"
          ? "Einrichtungen"
          : "सुविधाएँ"}
      </h4>
      <div className="container">
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "1. Accessible Washrooms"
                : props.lang === "De"
                ? "Zugängliche Waschräume"
                : "सुलभ शौचालय"}
            </h4>
            {props.lang === "En"
              ? `
            TravelGOat, our website, recognizes the importance of accessible
            washrooms for individuals with disabilities. We provide information
            and resources on our website to help customers locate washrooms that
            are designed to meet their unique needs. Our goal is to ensure that
            individuals with disabilities have access to clean and safe washroom
            facilities, and that they can navigate their travels with ease and
            confidence. Our commitment is to provide inclusive and accessible
            services to enhance the travel experience for all.`
              : props.lang === "De"
              ? `TravelGOat, unsere Website, erkennt die Bedeutung von Zugänglichkeit an
            Waschräume für Menschen mit Behinderungen. Wir informieren
            und Ressourcen auf unserer Website, um Kunden bei der Suche nach Waschräumen zu helfen
            sind so konzipiert, dass sie ihre individuellen Bedürfnisse erfüllen. Unser Ziel ist es, dies sicherzustellen
            Menschen mit Behinderungen haben Zugang zu sauberen und sicheren Waschräumen
            Einrichtungen, und dass sie ihre Reisen mit Leichtigkeit und Leichtigkeit steuern können
            Vertrauen. Unser Ziel ist es, integrativ und zugänglich zu sein
            Dienstleistungen, um das Reiseerlebnis für alle zu verbessern.`
              : `TravelGOat, हमारी वेबसाइट, सुलभ के महत्व को पहचानती है
            विकलांग व्यक्तियों के लिए शौचालय। हम जानकारी प्रदान करते हैं
            और ग्राहकों को वॉशरूम खोजने में मदद करने के लिए हमारी वेबसाइट पर संसाधन
            उनकी अनूठी जरूरतों को पूरा करने के लिए डिजाइन किए गए हैं। हमारा लक्ष्य यह सुनिश्चित करना है
            विकलांग व्यक्तियों के पास स्वच्छ और सुरक्षित वॉशरूम तक पहुंच है
            सुविधाएं, और यह कि वे अपनी यात्रा आसानी से नेविगेट कर सकते हैं और
            आत्मविश्वास। हमारी प्रतिबद्धता समावेशी और सुलभ प्रदान करना है
            सभी के लिए यात्रा के अनुभव को बढ़ाने के लिए सेवाएं।`}
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h4>
              {props.lang === "En"
                ? "2. Care Takers"
                : props.lang === "De"
                ? "2. Betreuungsperson"
                : "2. देखभाल करने वाले"}
            </h4>
            {props.lang === "En"
              ? ` TravelGOat, our website, offers care taker services that are
            tailored specifically to meet the needs of individuals with
            disabilities. Our team includes skilled nurses and doctors who
            provide personalized care and support to ensure the safety and
            well-being of our customers during their travels. We understand the
            importance of having access to quality care, and we are committed to
            providing compassionate and reliable services to help individuals
            with disabilities live life to the fullest.`
              : props.lang === "De"
              ? `TravelGOat, unsere Website, bietet Betreuungsdienste an, die es sind
            speziell auf die individuellen Bedürfnisse zugeschnitten
            Behinderungen. Zu unserem Team gehören qualifizierte Krankenschwestern und Ärzte, die
            bieten personalisierte Betreuung und Unterstützung, um die Sicherheit zu gewährleisten und
            Wohlbefinden unserer Kunden während ihrer Reise. Wir verstehen die
            Es ist wichtig, Zugang zu qualitativ hochwertiger Versorgung zu haben, und dafür setzen wir uns ein
            Bereitstellung von mitfühlenden und zuverlässigen Dienstleistungen, um Einzelpersonen zu helfen
            mit Behinderungen das Leben in vollen Zügen genießen.`
              : `TravelGOat, हमारी वेबसाइट, केयर टेकर सेवाएं प्रदान करती है
            के साथ व्यक्तियों की जरूरतों को पूरा करने के लिए विशेष रूप से सिलवाया गया
            विकलांग। हमारी टीम में कुशल नर्स और डॉक्टर शामिल हैं जो
            सुरक्षा सुनिश्चित करने के लिए व्यक्तिगत देखभाल और सहायता प्रदान करें और
            यात्रा के दौरान हमारे ग्राहकों की भलाई। हम समझते हैं
            गुणवत्ता देखभाल तक पहुंच का महत्व, और हम इसके लिए प्रतिबद्ध हैं
            व्यक्तियों की मदद करने के लिए अनुकंपा और विश्वसनीय सेवाएं प्रदान करना
            विकलांग पूरी तरह से जीवन जीते हैं।`}
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default Services;
