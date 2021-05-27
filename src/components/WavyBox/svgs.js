import React from "react";

export const CurvedLine = props => (
  <svg style={props} viewBox="0 0 489 315" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="31" stroke="#202A30" strokeWidth="2" />
    <path
      d="M32 64.003L32 142.003C32 155.257 42.7451 166.003 56 166.003L433.001 166.003C446.256 166.003 457.001 176.748 457.001 190.003L457.001 250.993"
      stroke="#202A30"
      strokeWidth="2"
    />
    <circle cx="457" cy="283" r="31" stroke="#202A30" strokeWidth="2" />
  </svg>
);

export const BoxThingy = props => (
  <svg style={props} width="64" height="132" viewBox="0 0 64 132" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="31" y="64" width="2" height="68" fill="#202A30" />
    <rect x="1" y="1" width="62" height="62" rx="3" stroke="#202A30" strokeWidth="2" />
  </svg>
);
