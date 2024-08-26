import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Test for top-level heading (already provided)
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// Test for image with alt text
test("displays an image of yourself", () => {
  render(<App />);
  const image = screen.getByAltText("My profile pic");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

// Test for second-level heading
test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

// Test for biography paragraph
test("displays a paragraph for your biography", () => {
  render(<App />);
  const bio = screen.getByText(/lorem ipsum/i);
  expect(bio).toBeInTheDocument();
});

// Test for GitHub and LinkedIn links
test("displays the correct links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("https://github.com"));

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("https://linkedin.com"));
});
