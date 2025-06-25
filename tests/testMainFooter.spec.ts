import { test, expect } from '@playwright/test';

//class="main_footer"

test.describe('Группа тестов class main_footer', () => {
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

  test('Проверка отображения элементов mes', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'TELEGRAM' }),
    ).toBeVisible();
    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'linkedin' }),
    ).toBeVisible();
  });

  test('Проверка наименования элементов в section_x__top__side__social', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'TELEGRAM' }),
    ).toContainText('TELEGRAM');
    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'linkedin' }),
    ).toContainText('linkedin');
  });

  test('Проверка отображения кнопки', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Наверх' })).toBeVisible();
  });

  test('Проверка наименования кнопки', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Наверх' })).toContainText('Наверх');
  });
  test('Проверка отображения текстовки', async ({ page }) => {
    await expect(page.getByRole('contentinfo').getByText('© 2025 Cleverbots')).toBeVisible();
  });

  test('Проверка наименования текстовки', async ({ page }) => {
    await expect(page.getByRole('contentinfo').getByText('© 2025 Cleverbots')).toContainText(
      '© 2025 Cleverbots. Все права защищены.',
    );
  });
});
