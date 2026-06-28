# Codex Coop Dashboard

A React + Vite + TypeScript PWA prototype for an iPad-first operating dashboard. V0 is intentionally mock-data-only: it uses no live APIs and makes no paid AI API calls.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal. For a production check:

```bash
npm run build
npm run preview
```

## Install on iPad Home Screen

1. Start or deploy the app over HTTPS (local network testing may require a trusted dev host).
2. Open the app in Safari on iPad.
3. Tap the Share button.
4. Choose **Add to Home Screen**.
5. Launch **CoopDash** from the new Home Screen icon for a standalone PWA-style experience.

## Component list

- `App` — shell, tab routing, quick capture state, and responsive page frame.
- `BottomNav` — five-tab bottom navigation for Today, Briefs, Businesses, Capture, and Tools.
- `Card` — reusable premium dark surface.
- `QuickCaptureModal` — large-tap-target capture dialog that stores notes in `localStorage`.
- Views: `Today`, `Briefs`, `Businesses`, `Capture`, and `Tools`.

## Future integration notes

- Replace `src/data/mockData.ts` with a typed data-access layer when live backends are approved.
- Add authentication and per-user storage before syncing captures across devices.
- Consider a formal PWA plugin if the app needs precache manifests, update prompts, or richer offline behavior.
- Keep expensive or paid AI features behind explicit user controls, budget limits, and observability.

## V0 data and API policy

V0 uses only static mock data from `src/data/mockData.ts` plus browser `localStorage` for Quick Capture. It does not call live APIs, external services, or paid AI APIs.
