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
            <h4>1.Wheel chair</h4>
            {props.lang === "En" ? `TravelGoat offers wheelchair services tailored specifically for
            individuals with physical disabilities, providing a comfortable and
            accessible means of transportation. In addition to providing
            wheelchair rentals, we also offer information and resources to help
            our customers choose the appropriate type of wheelchair based on
            their specific needs and preferences. Our goal is to ensure that all
            individuals have the opportunity to travel and explore the world,
            regardless of their physical limitations.` : props.lang === "De" ? `
             bietet speziell zugeschnittene Rollstuhldienste an
             Personen mit körperlichen Behinderungen, die eine komfortable und
             zugängliche Verkehrsmittel. Neben der Bereitstellung
             Rollstuhlverleih bieten wir auch Informationen und Ressourcen an, um zu helfen
             unsere kunden wählen den passenden rollstuhltyp aus
             ihre spezifischen Bedürfnisse und Vorlieben. Unser Ziel ist es, dafür zu sorgen, dass alle
             Einzelpersonen haben die Möglichkeit zu reisen und die Welt zu entdecken,
             unabhängig von ihren körperlichen Einschränkungen.` : `
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
            <h4>2.Walker</h4>
            TravelGOat offers walker services tailored specifically for
            individuals with physical disabilities. We provide a range of walker
            options that are designed for increased stability and support, while
            remaining lightweight and portable. Additionally, we offer helpful
            resources to assist customers in selecting the appropriate walker
            based on their unique needs and preferences. Our mission is to help
            individuals with physical disabilities maintain their mobility and
            independence
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>

      <div className="container">
        <div className="grid-item">
          <p>
            <h3>Transportation Mode</h3>
          
            <h4>1.Car</h4>
          
            TravelGOat, our website, provides transportation services that are
            accessible and inclusive to individuals with physical disabilities.
            Our buses are equipped with features such as wheelchair ramps and
            securement systems, providing a safe and comfortable ride for our
            passengers. Our skilled drivers are trained to provide reliable and
            accommodating service to meet the needs of all our customers. Our
            mission is to provide individuals with physical disabilities the
            opportunity to explore and experience the world.
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>

        <div className="grid-item">
          <p>
            <h4>2.Bus</h4>
          
            TravelGOat, our website, is committed to providing accessible
            transportation services for individuals with physical disabilities.
            Our car rental services cater specifically to these individuals,
            offering features such as wheelchair accessible vehicles, hand
            controls, and other specialized equipment. Our goal is to ensure
            that our customers have a safe and comfortable means of
            transportation, and that they are able to fully participate in all
            aspects of travel. Our team is dedicated to providing exceptional
            service and support to meet the needs of each and every customer.
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>

      <div className="container">
        <div className="grid-item">
          <p>
            {" "}
          
            <h4>3.Train</h4>
          
            At TravelGOat, our website offers inclusive and accessible
            transportation services for individuals with physical disabilities,
            including train services. Our trains are equipped with features such
            as wheelchair spaces, accessible seating, and audio and visual
            announcements to enhance the travel experience for our customers.
            Our team is committed to providing reliable and accommodating
            service to meet the unique needs of each passenger. Our mission is
            to ensure that individuals with physical disabilities have equal
            access to travel opportunities, and that they are able to enjoy safe
            and comfortable journeys.
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            {" "}
          
            <h4>4.Flight</h4>
          
            TravelGOat, our website, is dedicated to offering accessible
            transportation services for individuals with physical disabilities,
            including flight services. We provide a range of features such as
            wheelchair assistance, priority boarding, and accessible seating to
            ensure that our customers have a comfortable and stress-free flight
            experience. Our team is trained to provide reliable and
            accommodating service to meet the unique needs of each passenger.
            Our goal is to enable individuals with physical disabilities to
            access travel opportunities with ease and confidence.
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br/>
      <h1>Facilities</h1>
      <div className="container">
        <div className="grid-item">
          <p>
            <h4>1.Accessible Washrooms</h4>
          
            TravelGOat, our website, recognizes the importance of accessible
            washrooms for individuals with disabilities. We provide information
            and resources on our website to help customers locate washrooms that
            are designed to meet their unique needs. Our goal is to ensure that
            individuals with disabilities have access to clean and safe washroom
            facilities, and that they can navigate their travels with ease and
            confidence. Our commitment is to provide inclusive and accessible
            services to enhance the travel experience for all.
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h4>2.Care Takers</h4>
          
            TravelGOat, our website, offers care taker services that are
            tailored specifically to meet the needs of individuals with
            disabilities. Our team includes skilled nurses and doctors who
            provide personalized care and support to ensure the safety and
            well-being of our customers during their travels. We understand the
            importance of having access to quality care, and we are committed to
            providing compassionate and reliable services to help individuals
            with disabilities live life to the fullest.
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default Services;

// import { width } from "@mui/system";
// import React, { useState } from "react";
// import "./Services.css";
// import { Link, NavLink, Routes, Route } from "react-router-dom";
// import {} from './wheelchair/wheelchair';

// // const ServicesandFacilities = (props)=> {
// //   let[main_services] = useState({
// //     ser: [1,2,3,4,5,6],
// //     facilities: [7,8],
// //   });

// //   return (

// //     <div className="content">
// //     <h2>Services</h2>
// //     <div className="main_services">
// //   {main_services.facilities.map((p) => (
// //     <div key={p}>
// //       <Link to={`ServicesandFacilities/${p}/Services`}>
// //       <img src="https://via.placeholder.com/250x150" alt="product" />
// //       </Link>
// //       <p style={{ textAlign: "center" }}>Service Number- {p}</p>

// //             </div>
// //   ))}
// //     </div>

// //     <h2>Facilities</h2>
// //     <div className="main_facilities">
// //   {main_services.facilities.map((p) => (
// //     <div key={p}>
// //       <Link to={`ServicesandFacilities/${p}/Facilities`}>
// //       <img src="https://via.placeholder.com/250x150" alt="product" />
// //       </Link>
// //       <p style={{ textAlign: "center" }}>Facility Number- {p}</p>

// //             </div>
// //   ))}
// //     </div>

// //     </div>
// //   );
// // }

// // export default ServicesandFacilities;

// const Services = (props) => {
//   let [Service1] = useState({
//     Services: [1, 2, 3],
//     Services1: [4, 5, 6],
//     Facilities: [7, 8],
//   });
//   return (
//     <div className="App">
//       <div className="content">
//         <h3>Services</h3>
//         <div className="service1">
//           {Service1.Services.map((p) => (
//             <div key={p}>
//               <Link to={`/Service/${p}`}>
//                 <img src="https://via.placeholder.com/250x150" alt="product" />

//               </Link>
//               <p style={{ textAlign: "center" }}></p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <div className="service1">
//           {Service1.Services1.map((p) => (
//             <div key={p}>
//               <Link to={`/Service/${p}`}>
//                 <img src="https://via.placeholder.com/250x150" alt="product" />
//               </Link>
//               <p style={{ textAlign: "center" }}></p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div></div>
//       <div className="content">
//         <h3>Facilities</h3>
//         <div className="service1">
//           {Service1.Facilities.map((p) => (
//             <div key={p}>
//               <Link to={`/Facility/${p}`}>
//                 <img src="https://via.placeholder.com/250x150" alt="product" />
//               </Link>
//               <p style={{ textAlign: "center" }}></p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <nav>

//       <NavLink className="nav-items" to="wheelchair"> Wheel Chair</NavLink>

//         <NavLink to="walker">Service-2</NavLink>
//         <NavLink to="Car">Service-3</NavLink>
//         <NavLink to="Bus">Service-4</NavLink>
//         <NavLink to="Train">Service-5</NavLink>
//         <NavLink to="Flight">Service-6</NavLink>
//         <NavLink to="Accessible Washrooms">Facility-7</NavLink>
//         <NavLink to="Care Takers">Facility-8</NavLink>
//       </nav>

//       <Routes>
//         <Route path='wheelchair' element={<wheelchair />} />
//         </Routes>
//     </div>
//   );
// };

// export default Services;
