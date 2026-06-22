# Language Separation Architecture

## Overview
This project implements a clean language separation for English (.com) and Slovak (.sk) domains using a shared codebase with language-specific page folders and conditional rendering.

## Structure

```
app/
├── layout.tsx                 # Root layout (shared)
├── page.tsx                   # Root redirect (shared)
├── lead-gen/                  # Deprecated - kept for backwards compatibility
│   └── page.tsx               # Old lead-gen page
├── en/                        # English language pages
│   ├── page.tsx               # Main page (English)
│   └── lead-gen/
│       └── page.tsx           # Lead-gen page (English, fully translated)
└── sk/                        # Slovak language pages
    ├── page.tsx               # Main page (Slovak)
    └── lead-gen/
        └── page.tsx           # Lead-gen page (Slovak)
```

## How It Works

### 1. **Middleware Routing** (`middleware.ts`)
- Detects domain (dolphinwave-media.sk vs dolphinwave-media.com)
- Sets NEXT_LOCALE cookie based on domain
- Routes traffic appropriately via Next.js rewrites/redirects

### 2. **Language Context** (`lib/language-context.tsx`)
- Manages all text translations for shared components
- Provides `useLanguage()` hook for accessing translations
- Contains both English and Slovak translations for all UI text

### 3. **Page Structure**
- **English Pages** (`/en/`): Fully translated to English, use shared components
- **Slovak Pages** (`/sk/`): Remain in Slovak, use shared components
- **Shared Components**: Render based on language context without hardcoding locale logic

### 4. **Hero Component** (`components/hero.tsx`)
- Contains conditional logic for video selection
- English version: Shows English Google Drive video
- Slovak version: Shows Slovak Google Drive video
- Uses `usePathname()` to detect current language

## Video References

### English Videos
- **Hero Section (Main Page)**: `https://drive.google.com/file/d/1-wPMUzkQy2DEHTr9ZdC5l1jp_S7u4A6E/preview`

### Slovak Videos
- **Hero Section (Main Page)**: `https://drive.google.com/file/d/1f_1qXjH-JC7MzHNqRPZxWgZL6v2EZEgd/preview`

## Image References

### English Images
- **Lead-gen Analytics**: `/images/leadgen-analytics.png` (Replace with actual analytics screenshot)

## Implementation Details

### For English (.com)
1. User visits dolphinwave-media.com
2. Middleware sets `NEXT_LOCALE = 'en'`
3. Page routes to `/en/page.tsx` or `/en/lead-gen/page.tsx`
4. Shared components render English text via language context
5. Hero component displays English video
6. Lead-gen page displays analytics image

### For Slovak (.sk)
1. User visits dolphinwave-media.sk
2. Middleware sets `NEXT_LOCALE = 'sk'`
3. Page routes to `/sk/page.tsx` or `/sk/lead-gen/page.tsx`
4. Shared components render Slovak text via language context
5. Hero component displays Slovak video
6. Lead-gen page remains in Slovak

## Key Files Modified

1. **`/app/en/lead-gen/page.tsx`** - Fully English lead-gen page with:
   - All services, FAQs, and content translated
   - Analytics image placeholder at `/images/leadgen-analytics.png`
   - Complete English UI

2. **`/components/hero.tsx`** - Updated with:
   - `usePathname()` hook for language detection
   - Conditional video URL selection
   - Support for both English and Slovak videos

3. **`/lib/language-context.tsx`** - Contains:
   - Complete English translations for all UI text
   - Complete Slovak translations preserved
   - All testimonials, case studies, services in both languages

## How to Add New Translations

1. Open `/lib/language-context.tsx`
2. Add both English and Slovak keys in the appropriate language object
3. Use `const { t } = useLanguage()` in components
4. Reference with `t("key.path")`

## How to Add New Pages

For a new page (e.g., `/blog`):
1. Create `/app/en/blog/page.tsx` (English)
2. Create `/app/sk/blog/page.tsx` (Slovak)
3. Use shared components where possible
4. Add language-specific content via language context

## Important Notes

- ✅ Slovak content remains 100% untouched in `/sk/` folder
- ✅ English content is fully separated in `/en/` folder
- ✅ Shared components use language context (no hardcoding)
- ✅ Images and videos can be conditionally loaded based on language
- ✅ Middleware automatically routes based on domain
