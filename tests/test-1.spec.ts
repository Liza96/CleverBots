import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cleverbots.ru/');
  await page.getByRole('link', { name: 'en EN' }).click();
  await page.getByRole('link', { name: 'ru RU' }).click();
  await expect(
    page.getByText('мая, 2025 Автоматизация массового подбора с помощью ИИ 30 апреля, 2025'),
  ).toBeVisible();
  await expect(
    page.locator('div:nth-child(2) > .section_x__new_item > .section_x__new_item__image'),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Понимание намерений клиентов с помощью генеративного ИИ' }),
  ).toBeVisible();
  await expect(page.locator('body')).toContainText(
    'Понимание намерений клиентов с помощью генеративного ИИ',
  );
});
