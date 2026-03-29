import { test, expect } from '@playwright/test';

/**
 * Test: EPAM - Explore Our Client Work
 * Steps:
 * 1. Navigate to https://www.epam.com/
 * 2. Select "Services" from the header menu
 * 3. Click the "Explore Our Client Work" link
 * 4. Verify that the "Client Work" text is visible on the page
 *
 * Run: npx playwright test tests/epam-client-work.spec.ts
 */

test('EPAM - Explore Our Client Work leads to Client Work page', async ({ page }) => {
  // 1. Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // 2. Select "Services" from the header menu
  // Use a role-based selector for accessibility-friendly targeting. Fallback to text matching if needed.
  const servicesLink = page.getByRole('link', { name: /Services/i });
  await servicesLink.click();

  // 3. Click the "Explore Our Client Work" link
  // The link may appear on the Services page or in a submenu; we attempt to click by link text.
  const exploreClientWork = page.getByRole('link', { name: /Explore Our Client Work/i });
  await exploreClientWork.click();

  // Wait for navigation to settle
  await page.waitForLoadState('networkidle');

  // 4. Verify that the "Client Work" text is visible on the page
  const clientWorkText = page.getByText(/Client Work/i);
  await expect(clientWorkText).toBeVisible();
});
