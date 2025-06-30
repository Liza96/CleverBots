//Тест перехода в сценарий "Directions"
import { test, expect } from '@playwright/test';

test.describe('Тест на вход в  "Directions"', () => {
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

  test('Вход в "Directions-Разработка чат-ботов для бизнеса"', async ({ page }) => {
    await page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Направления' }).click();
    await page.getByRole('link', { name: 'Разработка чат-ботов для бизнеса' }).click();
  });
  test('Вход в "Directions-Разработка голосовых помощников"', async ({ page }) => {
    await page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Направления' }).click();
    await page.getByRole('link', { name: 'Разработка голосовых помощников' }).click();
  });
  test('Вход в "Directions-Генеративный искусственный интеллект"', async ({ page }) => {
    await page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Направления' }).click();
    await page.getByRole('link', { name: 'Генеративный искусственный интеллект' }).click();
  });
});
