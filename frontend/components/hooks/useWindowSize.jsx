// useWindowSize.jsx
import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
 
  }
}