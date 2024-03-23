import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col pag-2">
      <p>404 Página não encontrada</p>
      <Link to="/">Oh, there is some mistake going here. Go to Homepage!</Link>
    </div>
  );
}
