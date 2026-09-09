---
name: HaypuesTec Enterprise
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c1c6d4'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#8b919e'
  outline-variant: '#414752'
  surface-tint: '#a5c8ff'
  primary: '#a5c8ff'
  on-primary: '#00315f'
  primary-container: '#1976d2'
  on-primary-container: '#fffdff'
  inverse-primary: '#005faf'
  secondary: '#70d8c8'
  on-secondary: '#003731'
  secondary-container: '#32a192'
  on-secondary-container: '#00302a'
  tertiary: '#8dcdff'
  on-tertiary: '#00344f'
  tertiary-container: '#007cb5'
  on-tertiary-container: '#fefdff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004786'
  secondary-fixed: '#8df5e4'
  secondary-fixed-dim: '#70d8c8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#cae6ff'
  tertiary-fixed-dim: '#8dcdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b70'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: 3.25rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.625rem
    fontWeight: '600'
    lineHeight: 2.125rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
  title-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  title-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  label-currency:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: -0.02em
  label-sku:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  spacing-xxs: 0.25rem
  spacing-xs: 0.5rem
  spacing-sm: 0.75rem
  spacing-md: 1rem
  spacing-lg: 1.5rem
  spacing-xl: 2rem
  spacing-2xl: 3rem
  spacing-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-compact: 1rem
  margin-expanded: 2rem
---

## Brand & Style

This design system serves a high-throughput technology hardware importer and distributor operating in Bolivia. The aesthetic balances enterprise-grade reliability with the precision of cutting-edge computing hardware (workstations, enthusiast components, server hardware, and gaming laptops).

### Aesthetic Direction
- **Style:** Modern Corporate High-Tech (Material Design 3 structured foundation merged with high-density data presentation).
- **Mood:** Authoritative, precise, dependable, and swift.
- **Visual Tone:** Deep slate and obsidian backgrounds punctuated by vibrant cobalt luminescences and precise teal functional accents. Surfaces evoke layered anodized aluminum, micro-perforated component chassis, and clean laboratory instrumentation.

### Target Audience & Experience
The interface caters to commercial procurement agents, retail tech store owners, and enthusiast-tier B2C shoppers. It eliminates ambiguity in SKU availability, batch tracking, international freight manifests, and real-time dual-currency transactions.

## Colors

The color architecture adapts Google Material 3's tonal container logic into a rich, contrast-controlled dark environment built specifically for high-detail hardware auditing and catalog exploration.

### Palette Roles
- **Primary (`#1976D2` / Surface Variant `#0D47A1`):** Cobalt Tech Blue. Drives major navigational anchors, focused interactive states, primary action buttons, active navigation rails, and primary data highlights.
- **Secondary (`#00897B`):** Deep Teal / Cyan. Signifies system confirmations, successful customs clearances, active stock quantities, and positive margins.
- **Tertiary (`#00B0FF`):** Electric Cyan. Reserved for hardware spec callouts (overclock speeds, GPU tiering, PCIe gen-5 badges) and high-priority contextual signals.
- **Neutral Surface Palette:**
  - `surface-dim`: `#070A0F` (Base underlay, deep system canvas)
  - `surface`: `#0B0F17` (Default root page background)
  - `surface-container-low`: `#111622` (MUI Paper base, table rows, low-elevation lists)
  - `surface-container`: `#161C2B` (Standard card surface, modal dialogs, drawers)
  - `surface-container-high`: `#1E2538` (Elevated cards, active table hover states, toolbar ribbons)
  - `surface-container-highest`: `#262F46` (Dividers, borders, subtle control outlines)
- **On-Surface / Typography:**
  - High Emphasis: `#F0F4FC` (95% luminance)
  - Medium Emphasis: `#A2B0CD` (70% luminance)
  - Disabled / Outline: `#59657F` (38% luminance)

### Financial & Dual-Currency Signaling
- **Bolivianos (Bs):** Formatted with subtle medium-emphasis indicators (`#A2B0CD`) with high-contrast numerals (`#F0F4FC`).
- **US Dollars ($USD):** Emphasized using secondary teal (`#26A69A`) to denote official invoice conversion rates and customs valuation.

## Typography

Typography prioritizes tabular clarity, dense information hierarchy, and legibility under varying monitor environments. 

### Font Families
- **Inter (Headlines, Titles, Body):** Selected for structural geometric balance, legible letterforms at small scales, and neutral enterprise neutrality.
- **JetBrains Mono (Currencies, SKU codes, Serial Numbers, IP Addresses, Technical Specs):** Used selectively for all monospaced numeric data, dual-currency readouts (`Bs 14,250.00 | $2,045.00`), barcode equivalents, and latency metrics.

### Dual-Currency Type Rules
- Boliviano (Bs) values and Dollar ($USD) values must always use `font-variant-numeric: tabular-nums` to guarantee strict vertical column alignment across enterprise tables.
- Secondary currency conversions should be rendered using `label-currency` at 80% opacity directly adjacent or underneath the primary price node.

## Layout & Spacing

The layout model is anchored to Material Design 3's 8px base rhythm (with a 4px half-step for micro-alignments in badges, input paddings, and SKU chips).

### Responsive Grid System
- **Compact (Mobile: 0px – 599px):** 4 fluid columns, 16px margins, 16px gutters. Navigation collapses to a permanent bottom navigation bar or swipeable drawer.
- **Medium (Tablet: 600px – 899px):** 8 fluid columns, 24px margins, 16px gutters. Standard left-rail navigation (mini-variant, 72px width).
- **Expanded (Desktop: 900px – 1439px):** 12 fluid columns, 24px margins, 24px gutters. Full navigation drawer with contextual side-panels for cart/quote management.
- **Ultra-Wide (Large Display / Warehouse Terminals: 1440px+):** Max layout container capped at 1680px for standard views, or 100% fluid width for Data Grids, leveraging fixed margins of 32px to maximize catalog surface area.

## Elevation & Depth

This design system foregoes harsh dropped drop-shadows in favor of **M3 Tonal Surface Layering** combined with subtle, high-radius ambient blue shadows to convey elevation in dark mode.

### Layering Hierarchy
1. **Level 0 (Canvas Base):** `#0B0F17` – Underlying foundation for sidebars and background work areas.
2. **Level 1 (Default Cards, Data Grid Rows):** `#111622` with a 1px continuous stroke of `rgba(255, 255, 255, 0.06)`. Ambient shadow: `0px 2px 8px rgba(0, 0, 0, 0.40)`.
3. **Level 2 (Hovered Cards, Dropdowns, Table Toolbars):** `#161C2B` with a 1px border of `rgba(25, 118, 210, 0.25)` on hover. Ambient shadow: `0px 6px 16px rgba(0, 0, 0, 0.50), 0px 2px 4px rgba(25, 118, 210, 0.08)`.
4. **Level 3 (Modals, Slide-over Drawers, Floating Invoices):** `#1E2538` with 1px border of `rgba(255, 255, 255, 0.12)`. Ambient shadow: `0px 16px 32px rgba(0, 0, 0, 0.65), 0px 4px 12px rgba(25, 118, 210, 0.12)`.

### Border Discipline
All elevated paper containers must maintain a 1px border (`outline-variant`) using `rgba(255, 255, 255, 0.07)` to ensure clean edge-separation against dark slate grounds without heavy drop shadows.

## Shapes

The design system implements a controlled **Soft (Level 1)** geometric shape model. This reinforces an industrial, technical enterprise atmosphere reminiscent of precision server rack chassis and hardware packaging, avoiding consumer-oriented bubbly aesthetics.

### Corner Radius Assignments
- **Micro (Buttons, Chips, Badges, Text Fields, Checkboxes):** `4px` (`0.25rem`).
- **Standard (Paper Cards, Accordions, Data Grid Containers, Menus):** `8px` (`0.5rem`).
- **Large (Dialogs, Bottom Sheets, Floating Action Banners):** `12px` (`0.75rem`).
- **Pill (Exclusively for Status Indicator Badges):** `9999px` for online/offline pulses and stock tier markers.

## Components

### Buttons (MUI `Button`)
- **Contained (Primary):** Background `#1976D2`, text `#FFFFFF`, 4px border radius. Hover state transitions to `#0D47A1` with an inner border glow (`box-shadow: 0 0 10px rgba(25, 118, 210, 0.5)`). Height: 36px (dense) or 42px (standard). Letter-spacing: 0.02em, semi-bold.
- **Outlined (Secondary):** 1px border in `#00897B`, text `#26A69A`. Hover fills with `rgba(0, 137, 123, 0.08)`.
- **Text:** High-contrast text with background fill on hover (`rgba(255, 255, 255, 0.04)`).

### Chips & Badges (MUI `Chip`, `Badge`)
- **Hardware Spec Chips:** Compact (24px height), background `#161C2B`, border `1px solid rgba(255, 255, 255, 0.1)`. Font: `JetBrains Mono` at 0.75rem.
- **Stock Status Badges:**
  - *In Stock (La Paz / Santa Cruz warehouse):* Teal background tint `rgba(0, 137, 123, 0.15)`, text `#4DB6AC`, dot indicator `#00897B`.
  - *In Transit (Customs / Zona Franca):* Amber background tint `rgba(255, 179, 0, 0.15)`, text `#FFCA28`.
  - *Out of Stock:* Slate muted tint `rgba(162, 176, 205, 0.12)`, text `#A2B0CD`.

### Data Grids (MUI `DataGridPro`)
- **Header:** Background `#161C2B`, font weight 600, uppercase 0.75rem, letter-spacing 0.05em, text `#A2B0CD`.
- **Rows:** Alternating subtle banding (even: `#0B0F17`, odd: `#111622`). Row height: 48px standard for enterprise density.
- **Hover State:** Background `#1E2538` with an active 2px left border in `#1976D2`.
- **Numeric & Currency Columns:** Strict right-alignment using `JetBrains Mono`.

### Form Inputs (MUI `TextField`, `Select`)
- **Container:** Outlined variant default. Surface fill `#111622`.
- **Border:** `1px solid rgba(255, 255, 255, 0.12)`.
- **Focused State:** Border shifts to 2px `#1976D2` with a 3px soft outer ring (`rgba(25, 118, 210, 0.2)`).
- **Adornments:** Currency prefixes ("Bs", "$") rendered in `JetBrains Mono` with `#A2B0CD`.

### Cards & Surfaces (MUI `Card`, `Paper`)
- **Product & Inventory Card:** Base background `#111622`, 1px border `#1E2538`. Padding: 16px. Contains dedicated hardware spec slots (CPU, GPU, RAM, Storage) partitioned by 1px horizontal dividers.
- **Card Action Bar:** Sticky bottom area presenting dual-currency pricing (large Bs, micro USD) accompanied by a rapid-order or quote-add button.

### Navigation & Tabs (MUI `Tabs`, `Tab`)
- **Tabs:** Underline indicator styled with 3px height in `#00B0FF` with rounded edge caps. Inactive text `#A2B0CD`, active text `#F0F4FC` with font weight 600.
- **Navigation Drawer:** Fixed background `#070A0F`, right border `1px solid rgba(255, 255, 255, 0.06)`. Selected items receive `#161C2B` background and `#1976D2` leading icon accent.