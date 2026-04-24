---
name: Iron & Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#43474f'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#415f8f'
  primary: '#001430'
  on-primary: '#ffffff'
  primary-container: '#002855'
  on-primary-container: '#7490c3'
  inverse-primary: '#aac7fd'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#330002'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a0007'
  on-tertiary-container: '#f95853'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7fd'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#284775'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#920613'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style

This design system is built for the rugged, high-stakes environment of construction manufacturing. It moves away from the legacy aesthetics of the brand's origin and toward a modern industrial identity characterized by strength, structural integrity, and no-nonsense utility. 

The visual style is a hybrid of **Modern Corporate** and **Functional Industrial**. It prioritizes high legibility and clear information hierarchy to serve contractors who need to make quick, accurate decisions on-site or in the office. The aesthetic is "Heavy-Duty Tech"—utilizing high-contrast interfaces, sharp structural lines, and a "built-to-last" feel. Every element should feel engineered rather than decorated, emphasizing precision and reliability.

## Colors

The palette is anchored by **Industrial Navy (#002855)**, evoking stability and corporate professionalism. The primary accent is **Safety Orange (#FF6B00)**, used sparingly for critical actions, alerts, and focal points, mimicking the visual language of a construction site.

**Light Grey (#F2F2F2)** serves as the primary background to maintain a clean, architectural feel, while **Charcoal (#262626)** provides deep contrast for text and structural borders. We retain the legacy **Deep Red (#A2171D)** as a tertiary color specifically for status indicators or specific product categories, ensuring a subtle nod to the brand's heritage without compromising the modern direction.

## Typography

The typography system is designed for maximum clarity under varied lighting conditions. **Work Sans** is used for headings; its sturdy, geometric construction communicates the "Industrial" theme. Large headings use heavy weights and slight negative letter spacing to feel like stamped steel.

**Inter** is the workhorse for body copy and data. Its neutral, systematic profile ensures that technical specifications and order details are easily digestible. Labels are often set in uppercase with increased letter spacing to mimic architectural blueprints and industrial signage.

## Layout & Spacing

This design system employs a **12-column fixed grid** for desktop and a fluid single-column grid for mobile. The spacing rhythm is strictly based on an **8px linear scale**, ensuring mathematical precision across all layouts.

Layouts should prioritize "density with clarity." Use generous margins (32px) to frame content, but keep internal component padding tight (16px or 24px) to maintain a sense of efficiency. Structural dividers should be used instead of excessive whitespace to separate different technical sections, echoing the look of partitioned technical drawings.

## Elevation & Depth

To maintain a "rugged but precise" feel, the design system avoids soft, floating aesthetics. Instead, it uses **Tonal Layering** and **Hard Shadows**.

1.  **Surfaces:** Use flat colors (#FFFFFF for cards, #F2F2F2 for backgrounds) to differentiate content.
2.  **Shadows:** When depth is required, use short, high-opacity shadows (e.g., `4px 4px 0px rgba(0,0,0,0.1)`) rather than large blurs. This creates a "stamped" or "machined" effect.
3.  **Borders:** Use 1px or 2px solid strokes in #262626 or a darkened version of the background to define boundaries. Physicality is conveyed through lines rather than gradients.

## Shapes

The shape language is strictly **Sharp (0px radius)**. Every button, input field, and container features 90-degree corners. This reinforces the "Strength and Reliability" focus, mimicking the cut of steel beams and the geometry of construction materials. There are no rounded corners in the interface, which distinguishes the product from softer, consumer-grade software and positions it as a professional industrial tool.

## Components

### Buttons
Primary buttons are solid #002855 with white text. Action-oriented "Emergency" or "Urgent" buttons use #FF6B00. All buttons must have a heavy weight font and 0px border radius. On hover, apply a 2px offset hard shadow to simulate a physical "press."

### Input Fields
Inputs use a 1px solid border (#262626) with a white background. Labels sit above the field in "label-bold" style. Focus states should be indicated by a 2px stroke in Safety Orange.

### Cards & Containers
Cards are flat white with a 1px border. No shadows are used for static cards; depth is only introduced to indicate interactivity. Header bars within cards should use #F2F2F2 as a background to distinguish metadata from content.

### Chips & Status Indicators
Chips are rectangular with high-contrast fills. Use #FF6B00 for "In Progress" or "Active" and the legacy #A2171D for "Critical" or "Delayed."

### Technical Data Tables
Tables are central to the contractor experience. Use zebra-striping with #F2F2F2 and #FFFFFF. Table headers must be sticky and set in the Industrial Navy background with white text to provide a strong structural anchor.

### Progress Steppers
Industrial step indicators should look like a timeline of a build. Use thick 4px lines and square nodes to represent project phases (e.g., Quoting, Engineering, Manufacturing, Delivery).