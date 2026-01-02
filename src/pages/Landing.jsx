import React from 'react';
import Hero from '../hero';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-3xl font-bold gap-6">
    <Hero />

    {/* Debug links to verify Store routing */}
    <div className="mt-6 text-base font-normal">
      Quick store checks:
      <div className="flex gap-4 mt-2">
        <Link to="/store/haveli" className="underline text-blue-600">/store/haveli</Link>
        <Link to="/store/chawla-chicken" className="underline text-blue-600">/store/chawla-chicken</Link>
        <Link to="/store/love-italy" className="underline text-blue-600">/store/love-italy</Link>
      </div>
    </div>
  </div>
);

export default Landing;
