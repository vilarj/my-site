import './App.css';
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Option } from './components/Option'

import React from 'react'

export default function App() {
  return (
    <div className="App">
      <Header name="Name Generator" />
      <Body />
      <Option />
    </div>
  );
}
