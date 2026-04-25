# Marathi Digital Wedding Patrika - Design System

## Design Summary
This design system translates the sacred and celebratory essence of a Marathi/Konkani *Lagna Patrika* into a digital experience. The brand personality is deeply rooted in tradition, evoking feelings of warmth, family honor, and divine blessing. It prioritizes emotional resonance over clinical efficiency, making the user feel like a guest at a prestigious celebration.

The visual style is **Tactile & Modern**. It leverages the richness of traditional wedding stationery—using physical metaphors like heavy paper textures and metallic foil stamping—while maintaining the usability of a modern web interface. Decorative elements like *Torans* (festooned leaves) and *Mandala* patterns provide a rhythmic visual frame, ensuring every screen feels like a curated invitation rather than a generic application.

## Extracted Color Palette
- **Background / Surface:** `#fefccf` (Cream - mimicking high-quality handmade paper)
- **Card Surface (Surface-Container-Lowest):** `#ffffff` (Floating on the cream background)
- **Surface Tint / Primary:** `#8f4e00` (Dark gold / Brown)
- **Primary Container:** `#ff9933` (Deep Saffron - symbolizing the fire of the Homa)
- **Tertiary:** `#b22b1d` (Maroon - for typography and secondary buttons, representing Kumkum)
- **On Tertiary Container:** `#8c0c05` (Dark red)
- **Secondary Container:** `#fed65b` (Soft gold)
- **Secondary Fixed Dim:** `#e9c349` (Border gold)
- **Text (On Surface):** `#1d1d03` (Dark text for readability)
- **Muted Text (On Surface Variant):** `#554336` (For supporting text)

## Typography Choices
- **Headlines / Ceremonial Titles / Names / Dates:** `Noto Serif` (Refined, classic, Devanagari-friendly)
- **Body / Functional UI / Labels:** `Plus Jakarta Sans` or clean system fallback (Friendly, modern, readable)

## Layout Rules
- **Fixed Grid / Fluid Container:** Centered, symmetrical composition mirroring a traditional Patrika.
- **Max Width / Mobile-First:** Constrained to a narrow max-width (e.g., `max-w-md` or `max-w-lg`) to maintain the vertical flow of a physical card. Optimized for 360px–430px width.
- **Card-Based Architecture:** Content housed within "Cards" (Cream background, Gold/Maroon borders) floating on the main canvas.
- **Generous Whitespace:** Ample breathing room to convey premium luxury. 8px rhythmic scale, with larger gaps (48px+) between distinct ritual phases.
- **No Horizontal Scrolling:** All content flows vertically.

## Section Order
1. Hero (Invocation, Title, Couple Names)
2. Couple Introduction (Groom and Bride details)
3. Blessing / Invitation message
4. Haldi ceremony
5. Wedding Muhurat
6. Venue with Google Maps button
7. Residence
8. Family / Snehankit (with collapsible list)
9. Children section
10. Inviters
11. Footer (Closing message)

## Component Plan
- `Header`: Toran/Mango leaf decorative top border.
- `HeroSection`: Invocation text, Ganesh motif, couple names with premium typography.
- `CoupleCard`: Cards for Bride and Groom with their family details.
- `BlessingSection`: Clean, elegant typography with a subtle background texture.
- `EventCard`: Reusable component for Haldi and Muhurat.
- `VenueSection`: Card containing location details and a prominent Google Maps CTA button.
- `ResidenceSection`: Clean card for residence details.
- `FamilySection`: Collapsible list component for extended family members.
- `ChildrenSection`: Special section for kids' invitation message.
- `InvitersSection`: Simple list of inviters.
- `Footer`: Final blessing and decorative bottom border.
- `BottomNav`: (Optional if needed, but sticky elements should be minimal).

## Animation Plan (Moderate, Lightweight)
- **Fade-in / Reveal-on-Scroll:** Sections smoothly fade in and slide up slightly as they enter the viewport.
- **Subtle Gold Shimmer:** Applied to important borders or dividing lines.
- **Gentle Diya Glow:** Soft pulsating drop-shadow on important elements (e.g., buttons).
- **Button Tap/Hover Scale:** Standard interaction feedback.
- **Smooth Expand/Collapse:** For the family list section.
- **Performance Constraints:** No heavy JavaScript animations; use CSS transitions and `prefers-reduced-motion` queries.

## Responsiveness Plan
- **Mobile-First:** Core layout designed around 360-430px screens.
- **Tablet/Desktop:** The card will remain centered on larger screens with a decorative background pattern or plain cream color on the sides, simulating a physical card resting on a table.
