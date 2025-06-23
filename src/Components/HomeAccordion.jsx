import React, { useState } from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';
import './Homeaccordion.scss';

export const HomeAccordion = () => {
  const [activeKey, setActiveKey] = useState(1);
  const accordionData = [
     {
      heading: "Our Vision",
      body: "  To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
     },
      {
      heading: "Our Mission",
      body: "  To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
     },
      {
      heading: "Our Value",
      body: "  To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
     }
  ]
  return (
    <CAccordion activeItemKey={activeKey}>
      {accordionData.map((item, index)=> {
        const itemKey = index + 1;
        return (
        <CAccordionItem itemKey={itemKey} key={itemKey}>
        <CAccordionHeader className="my-accordion-header" onClick={() => setActiveKey(activeKey === itemKey ? null : itemKey)}>{item.heading}</CAccordionHeader>
        <CAccordionBody>
          {item.body}
        </CAccordionBody>
      </CAccordionItem>
        )
      })}
    </CAccordion>
  )
}
