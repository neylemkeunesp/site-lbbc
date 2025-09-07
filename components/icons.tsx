
import React from 'react';

const iconProps = {
  className: "w-12 h-12",
  strokeWidth: 1.5,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

export const GenomicsIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);

export const ProteomicsIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.12a2.25 2.25 0 002.15 2.88h3.286a2.25 2.25 0 012.15 2.88 2.25 2.25 0 01-2.15 2.88H6.912a2.25 2.25 0 01-2.15-1.588L2.35 13.12m12.65-9.37h2.088a2.25 2.25 0 012.15 1.588l2.5 7.762a2.25 2.25 0 01-2.15 2.88h-3.286a2.25 2.25 0 00-2.15 2.88 2.25 2.25 0 002.15 2.88h2.088a2.25 2.25 0 002.15-1.588l2.5-7.762" />
    </svg>
);

export const SystemsBiologyIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const DrugDiscoveryIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

export const EmailIcon: React.FC = () => (
    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const LocationIcon: React.FC = () => (
    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
