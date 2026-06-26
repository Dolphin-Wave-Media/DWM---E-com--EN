# English Implementation - Quick Start Guide

## What's Been Done

✅ **Complete English Implementation** for dolphinwave-media.com

### Files Created/Modified:
1. **`/app/en/lead-gen/page.tsx`** - Complete English lead-gen page (544 lines)
   - All services translated
   - All FAQs in English
   - Analytics dashboard image placeholder
   - Fully standalone English implementation

2. **`/components/hero.tsx`** - Updated hero component
   - Conditional video loading based on language
   - English video: `1-wPMUzkQy2DEHTr9ZdC5l1jp_S7u4A6E`
   - Slovak video: `1f_1qXjH-JC7MzHNqRPZxWgZL6v2EZEgd`

3. **`/lib/language-context.tsx`** - Complete translations
   - All English text translations added
   - All Slovak text preserved
   - Both languages fully supported

4. **`/public/images/`** - New directory for assets
   - Ready for: leadgen-analytics.png

## How to Deploy

### Step 1: Update the Analytics Image
Replace the placeholder image in the English lead-gen page:

**Current:**
```tsx
<img
  src="/images/leadgen-analytics.png"
  alt="Campaign analytics dashboard showing results"
  className="rounded-lg border border-border max-w-full h-auto"
/>
```

**What to do:**
1. Add your analytics screenshot to `/public/images/leadgen-analytics.png`
2. OR update the path to point to your actual image

### Step 2: Test Locally
```bash
# Start dev server
npm run dev

# Test English version
# Visit: http://localhost:3000/en/
# Visit: http://localhost:3000/en/lead-gen/

# Test Slovak version (should remain unchanged)
# Visit: http://localhost:3000/sk/
# Visit: http://localhost:3000/sk/lead-gen/
```

### Step 3: Deploy
```bash
git add .
git commit -m "Implement full English website separation"
git push
```

## Domain Routing Setup (Vercel)

The middleware automatically routes based on domain:

### For your Vercel project settings:
1. **Domain 1**: `dolphinwave-media.com` (English)
   - Automatically routes to `/en/` pages
   
2. **Domain 2**: `dolphinwave-media.sk` (Slovak)
   - Automatically routes to `/sk/` pages

**Middleware handles this** - no additional configuration needed!

## Verification Checklist

- [ ] English lead-gen page shows all English text
- [ ] Analytics image displays (add real image to `/public/images/`)
- [ ] English video plays in hero section
- [ ] Slovak pages remain 100% in Slovak
- [ ] No text changes appear on Slovak pages
- [ ] Shared components render correctly on both
- [ ] Links and CTAs work properly

## File Paths Reference

### English Pages (for .com)
- `/app/en/page.tsx` - Main page
- `/app/en/lead-gen/page.tsx` - Lead-gen page

### Slovak Pages (for .sk)
- `/app/sk/page.tsx` - Main page
- `/app/sk/lead-gen/page.tsx` - Lead-gen page

### Shared Resources
- `/lib/language-context.tsx` - All translations
- `/components/` - All shared components
- `/public/images/` - Image assets

## Translation Keys Used

All English translations in `/lib/language-context.tsx` under `en: {` section include:
- `leadgen.*` - Lead-gen page content
- `caseStudies.*` - Case study data
- `testimonials.*` - Client testimonials
- `otherServices.*` - Additional services
- `hero.*` - Hero section text
- And many more...

All Slovak translations preserved under `sk: {` section.

## URLs After Deployment

### English Website (dolphinwave-media.com)
- `https://dolphinwave-media.com/` - Main page (English)
- `https://dolphinwave-media.com/lead-gen/` - Lead-gen page (English)

### Slovak Website (dolphinwave-media.sk)
- `https://dolphinwave-media.sk/` - Main page (Slovak)
- `https://dolphinwave-media.sk/lead-gen/` - Lead-gen page (Slovak)

## Troubleshooting

### English page shows Slovak text
- Check `/app/en/lead-gen/page.tsx` for hardcoded text
- Verify `useLanguage()` is being called correctly
- Clear browser cache and rebuild

### Slovak page changed to English
- Check `/app/sk/lead-gen/page.tsx` - should have Slovak content
- Verify you edited the correct file
- Undo any changes to `/app/sk/` files

### Image doesn't display
- Verify file exists at `/public/images/leadgen-analytics.png`
- Check image path in page.tsx matches actual location
- Ensure image format is supported (PNG, JPG, WebP)

## Video Configuration

The hero component automatically shows:
- **English video** when accessed via `/en/` or dolphinwave-media.com
- **Slovak video** when accessed via `/sk/` or dolphinwave-media.sk

No additional configuration needed - middleware handles the routing!

## Next: Additional Pages

To add more English pages:
1. Create `/app/en/new-page/page.tsx`
2. Create `/app/sk/new-page/page.tsx` (Slovak version)
3. Use shared components
4. Add translations to language context
5. Done!

## Support Documentation

- **Full Architecture**: See `LANGUAGE_STRUCTURE.md`
- **Implementation Details**: See `ENGLISH_IMPLEMENTATION_SUMMARY.md`
- **Translation Reference**: Check `/lib/language-context.tsx`

---

**Status**: ✅ Implementation Complete - Ready for deployment
