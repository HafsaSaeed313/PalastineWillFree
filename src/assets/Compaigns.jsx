import React from 'react';

const CardComponent = ({imageSrc, h2, p} ) => {
  const cardStyles = {
    width: '300px', 
    borderRadius: '10px',
    margin: '30px',
    padding: '15px',
    backgroundColor: '#ffffff', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
  };

  const imageStyles = {
    width: '100%', 
    borderRadius: '4px', 
    marginBottom: '10px',
  };

  return (
    <div style={cardStyles}>
      <img
        src={imageSrc} 
        alt="Card Image"
        style={imageStyles}
      />
      <h3>{h2}</h3>
      <p>{p}</p>
    </div>
  );
};

const Compaigns= () => {
  return (
   <>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CardComponent imageSrc="/src/assets/images/com-1.jpg" h2="#BoycottIsrael" p="An effective action you can do for Palestine is to boycott products that support Israel"/>
      <CardComponent imageSrc="/src/assets/images/com-2.jpg" h2="#CheckTheLabel - dates" p="This Ramadan #CheckTheLabel and boycott Israeli dates."/>
      <CardComponent imageSrc="/src/assets/images/com-3.jpg" h2="#BoycottCocaCola" p="Coca-Cola violates international law by operating on stolen Palestinian land. Stop Coca-Cola profiting from the occupation"/>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CardComponent imageSrc="/src/assets/images/com-4.jpg" h2="#CeasefireNow" p="Email your MP urging them to support the potential SNP motion on “Gaza ceasefire” tabled for 21st February."/>
      <CardComponent imageSrc="/src/assets/images/com-5.jpg" h2="#RightToBoycott" p="Protect the right of public bodies to make ethical choices through BDS. We must strongly protest the unfair anti-BDS bill."/>
      <CardComponent imageSrc="/src/assets/images/com-6.jpg" h2="#BoycottPUMA" p="PUMA will be terminating it's sponsorship with Israel Football Association (IFA) next year, we will be ending our boycott once..."/>
    </div>
   </>
    
  );
};

export default Compaigns;