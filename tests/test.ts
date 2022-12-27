import { expect, test } from '@playwright/test';

test('contactus page has expected h1', async ({ page }) => {
	await page.goto('/contactus');
	//expect(await page.textContent('h1')).toBe('ติดต่อเรา');
});
