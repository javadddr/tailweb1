import React, { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  "./Commen.css"
import kido from "./direction.png"
const Comment = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setExpandedIndex(null);
    }
  };

  const handleChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className='topque' id="topque">
      <img src={kido} alt="kido" className="kido" />
      <p className='titlequ'>Common Questions</p>
    <div ref={accordionRef}>
      <Accordion expanded={expandedIndex === 0} onChange={() => handleChange(0)} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{  color: 'black',fontFamily:'inter' }}>What does each shipments means and how the capacity works?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{  color: 'black'}}>
            <h>Capacity is based on shipments (tracking numbers) with unlimited updating. Each capacity means that one shipment (one tracking number) can be tracked. No matter how often an update is required or how long the delivery will take,.
            Also, even after delivery,  you will have always all your information about your packages , even 1 year after delivery you can see the status of your package and view history , also with our APIs you can export all information to your own system.</h>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedIndex === 1} onChange={() => handleChange(1)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{  color: 'black',fontFamily:'inter' }}>How payment methods work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{  color: 'black'}}>
            <h>
            If customers purchase the shipment capacity based on an annual payment, the shipments expire after one year. For example, if the customer buys 1,000 shipments with an annual payment in July 2023, those 1,000 shipments are valid until July 2024 , so the customer can use those shipments at anytime in that year.
            With monthly payment, shipments are valid for one month and can no longer be used after one month.
                  <br></br>
                  <br></br>
            However, If at any time the customer wishes to upgrade to a higher plan, they will be refunded for the shipments they did not use from the previous plan. It does not matter whether it is a monthly or annual payment. In both cases, the unused shipments will be reimbursed.
            </h>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedIndex === 2} onChange={() => handleChange(2)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{  color: 'black',fontFamily:'inter' }}>What distinguishes us from others?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{  color: 'black'}} >
            <h>
            1- The best thing that differentiates us from others is that we offer real customised solutions:

              With our product your packages are not just a package, you can manage the package by assigning it cost, hub and customers and then later see the performance of your products based on customers and your docs.
              You would know how much shipping costs you spend on a product or a customer and from which location in your company.  You will increase customer satisfaction and reduce shipping costs because you have a full view of your customers, hubs and carriers that you use.

              We also have an analytics dashboard to help you better understand your shipping process. You know how long it takes to ship a product to a customer, you can see which carriers are cheaper and which routes cost you more. Ultimately, by choosing the best carrier, route and hub, you can ship your product faster, serve your customers better and cheaper..

              We can also develop a custom dashboard for you. Charts for all KPIs that you want to measure and monitor can be created by us in a very short time.

              Our Six Sigma consultancy can create a custom report and tell you where you can be faster and cheaper.
              <br></br>
                  <br></br>
              2- We have a Microsoft Excel add-in and a Google spreadsheet add-in that no one offers and is only offered by us.
              <br></br>
                  <br></br>
              3- We have a very strong customer service, our goal is customer satisfaction even beyond our product, we will always be at your service in the shortest possible time and in the case of a higher volume package, we will assign a representative for your company, that takes care of your specific needs.
              <br></br>
                  <br></br>
              4- Above all, we are best suited for your customised needs. Our product can be customised and improved to meet your custom requests. If you need more charts, reports or an integration, our IT team will get it done in the shortest time possible.
            </h>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedIndex === 3} onChange={() => handleChange(3)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{  color: 'black',fontFamily:'inter' }}>What else do we offer? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{  color: 'black'}}>
            <h>
            1- Fully customised analytics dashboard (Inside our web application fully synced with Excel add-in and Google spreadsheet add-in). You can request any charts required for your business and our IT team will develop them for you.
            <br></br>
                  <br></br>
            2- Customised Shipping Reports: You can generate at least one report per month showing the insight of your shipping processes as well as bottlenecks and waste.
            <br></br>
                  <br></br>
            3- An analytical meeting every 3 months to ask our Six-sigma data analyst (Certificate from UTM, Germany) all your logistical and analytical questions and concerns about the shipping process(To ensure you save up to 15-25% on shipping cost).
            <br></br>
                  <br></br>
            4- Full IT and CX support.
            </h>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
    </div>
  );
};

export default Comment;
