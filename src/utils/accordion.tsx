"use client";
import { useState } from 'react';

type AccordionItemType = {
    title: string;
    content: string;
  };

type AccordionProps = {
  items: AccordionItemType[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      {items && items.map((item, index) => (
        <div
        key={index}
        className="accordion-item border-b accordion-padding"
    >
      <h2 className="mb-0">
        <button
          className={`${
            expandedIndex === index ? 'expanded' : ''
          } relative flex items-center justify-between w-full py-4 text-left text-base text-gray-800 bg-white border-0 rounded-none transition focus:outline-none`}
          type="button"
          onClick={() => handleToggle(index)}
        >
          <h5 className="collapse-title">{item.title}</h5>
          <div className="flex relative">
            <div className="horizontal-line"></div>
            <div
              className={`vertical-line bg-black w-px h-[15px] absolute ${
                expandedIndex === index ? 'vertical-close' : ''
              }`}
            ></div>
          </div>
        </button>
      </h2>
      <div className={` invisible animate-[invisible_1s_forwards] ${ expandedIndex === index ? ' collapsed' : '' }`}>
        {item.content}
      </div>
    </div>
      ))}
    </div>
  );
};

export default Accordion;