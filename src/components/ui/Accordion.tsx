import React, { createContext, useContext, useState } from 'react';
import { tw } from '../../utils/tw-merge';

// Types
type AccordionItemContextValue = {
  isOpen: boolean;
  toggle: () => void;
};

type AccordionContextValue = {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
};

type AccordionProps = {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
};

type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

// Contexts
const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

// Hooks
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion');
  }
  return context;
};

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItem');
  }
  return context;
};

// Component: Accordion
export const Accordion = ({
  type = 'single',
  defaultValue = [],
  collapsible = false,
  children,
  className,
}: AccordionProps) => {
  // Initialize open items state based on defaultValue
  const [openItems, setOpenItems] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  // Handle item toggling
  const toggleItem = (value: string) => {
    if (type === 'single') {
      if (collapsible && openItems.includes(value)) {
        setOpenItems([]);
      } else {
        setOpenItems([value]);
      }
    } else {
      if (openItems.includes(value)) {
        setOpenItems(openItems.filter(item => item !== value));
      } else {
        setOpenItems([...openItems, value]);
      }
    }
  };

  // Context value
  const contextValue: AccordionContextValue = {
    openItems,
    toggleItem,
    type,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={tw('divide-y divide-gray-200', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

// Component: AccordionItem
export const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(value);

  // Item context value
  const itemContextValue: AccordionItemContextValue = {
    isOpen,
    toggle: () => toggleItem(value),
  };

  return (
    <AccordionItemContext.Provider value={itemContextValue}>
      <div className={tw('py-2', className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

// Component: AccordionTrigger
export const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { isOpen, toggle } = useAccordionItem();

  return (
    <button
      type="button"
      onClick={toggle}
      className={tw(
        'flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-[var(--color-avocado-500)] focus-visible:ring-opacity-50 rounded-md',
        className
      )}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <svg
        className={tw(
          'w-5 h-5 text-gray-500 transition-transform',
          isOpen ? 'transform rotate-180' : ''
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

// Component: AccordionContent
export const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { isOpen } = useAccordionItem();

  // Animation classes
  const animationClasses = isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden';

  return (
    <div
      className={tw(
        'mt-2 px-4 transition-all duration-200 ease-in-out',
        animationClasses,
        className
      )}
    >
      <div className="py-2">{children}</div>
    </div>
  );
};
