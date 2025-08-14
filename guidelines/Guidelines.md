# Dog & Bean Club - Project Guidelines

## Design Principles

* **Whimsical & Playful**: Use rotated elements, bold colors, and playful typography to create a fun, dog-friendly atmosphere
* **Accessibility**: Maintain high contrast and readable fonts while preserving the playful aesthetic
* **Mobile-First**: Ensure all components work beautifully on mobile devices

## Color Palette

* **Primary Colors**: Purple-800 (#7c2d92) for text and borders
* **Background Colors**: Pink, Yellow, Green, Blue, Orange variations (300-400 range)
* **Accent Colors**: Bright, saturated colors for interactive elements

## Typography

* **Headers**: Use `font-black` (900 weight) for maximum impact
* **Body Text**: Use `font-black` for most text to maintain readability against colorful backgrounds
* **Transform**: Apply slight rotations (`rotate-1`, `-rotate-2`, etc.) to create dynamic layouts

## Component Patterns

* **Cards**: Always include thick borders (`border-4` to `border-8`) with purple-800 color
* **Shadows**: Use `shadow-xl` and `shadow-2xl` for depth
* **Hover Effects**: Include `hover:rotate-0` to straighten tilted elements on interaction
* **Transitions**: Use `transition-transform duration-200` for smooth animations

## Content Guidelines

* **Tone**: Friendly, enthusiastic, and dog-focused
* **Imagery**: Use high-quality Unsplash photos of dogs, coffee, and café environments
* **Copy**: Keep text punchy and use ALL CAPS for emphasis

## Technical Standards

* **React**: Use functional components with TypeScript
* **Styling**: Tailwind CSS with custom design tokens
* **State Management**: React hooks for local state, localStorage for persistence
* **Accessibility**: Include proper ARIA labels and semantic HTML

## Development Notes

* **Test Mode**: Payment integration uses Stripe test mode with test card 4242 4242 4242 4242
* **Membership**: Demo implementation uses localStorage for membership status
* **Images**: All images use ImageWithFallback component for error handling