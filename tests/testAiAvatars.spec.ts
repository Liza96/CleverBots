//Тест перехода в сценарий "AI Avatars"
import { test, expect } from '@playwright/test';

test.describe('Тест на вход в  "AI Avatars"', () => {
  test.describe.configure({ timeout: 80_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');

    // Явное ожидание и клик по ссылкам
    const langEnLink = page.getByRole('link', { name: 'en EN' });
    await expect(langEnLink).toBeVisible();
    await langEnLink.click();

    const langRuLink = page.getByRole('link', { name: 'ru RU' });
    await expect(langRuLink).toBeVisible();
    await langRuLink.click();
  });
  /*старый формат пока закомментирую
  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
    await page.getByRole('link', { name: 'en EN' }).click({ timeout: 160_000 });
    await page.getByRole('link', { name: 'ru RU' }).click({ timeout: 90_000 });
  });*/

  test('Вход в "AI Avatars"', async ({ page }) => {
    await page.getByRole('link', { name: 'AI-аватары' }).click();
  }); // Please renew your subscription - в Cromium, Firefox; Повышение эффективности полевых визитов с помощью AI аватаров - Webkit
});
