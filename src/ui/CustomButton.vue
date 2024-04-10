<template>
    <button><slot></slot></button>
  </template>
  
  <style lang="scss" scoped>
  button:disabled {
    background: #c7c7c7;
    pointer-events: none;
  }
  .default {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 20px;
    border-radius: 16px;
    background: linear-gradient(to right, #003c92, #004bbb, #0197f4, #004bbb, #003c92); 
    color: white;
    height: 48px;
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position .5s;
  
    &:hover {
      background-position: 0 0
    }
  }
  
  .unactive {
    padding: 16px 20px;
    border-radius: 16px;
    background: #c7c7c7;
    color: white;
    cursor: default;
    height: 48px;
  }
  
  .show {
    position: relative;
    padding: 16px 12px;
    border: 0;
    border-radius: 16px;
    color: linear-gradient(to right, #0197f4, #004bbb, #003c92);
    background: none;
    height: 48px;
  
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 16px;
      border: 2px solid transparent;
      background: linear-gradient(to right, #0197f4, #004bbb, #003c92) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
    &:hover {
      &::before {
        background: linear-gradient(to right, #007fce, #003d97, #00275e) border-box;
      }
    }
    background-color: #0197f4;
    background-image: linear-gradient(to right, #0197f4, #004bbb, #003c92);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  </style>