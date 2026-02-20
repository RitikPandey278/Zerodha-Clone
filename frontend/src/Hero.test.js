import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import HeroHome from './landing_page/home/HeroHome';

describe('HeroHome Component', () => {
  test('renders hero image', () => {
    render(
      <BrowserRouter>
        <HeroHome />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText(/hero/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', expect.stringContaining('homeHero'));
  });

  test('renders signup button', () => {
    render(
      <BrowserRouter>
        <HeroHome />
      </BrowserRouter>
    );

    const signupButton = screen.getByRole('button', { name: /Sign up for free/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary');
  });
});
