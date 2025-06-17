import { test, expect } from '@playwright/test';

//class="section_x section_x__map"

test.describe('Группа тестов class section_x section_x__top', () => {
  test.describe.configure({ timeout: 150_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
    await page.getByRole('link', { name: 'en EN' }).click({ timeout: 120_000 });
    await page.getByRole('link', { name: 'ru RU' }).click({ timeout: 50_000 });
  });

  test('Проверка отображение элемента в section_x__map__title', async ({ page }) => {
    await expect(page.getByText('Люди созданы для творчества')).toBeVisible();
    await expect(page.getByText('предоставьте остальное искусственному интеллекту')).toBeVisible();
  });

  test('Проверка отображение наименования в section_x__map__title', async ({ page }) => {
    await expect(page.getByText('Люди созданы для творчества')).toContainText(
      'Люди созданы для творчества',
    );
    await expect(page.getByText('предоставьте остальное искусственному интеллекту')).toContainText(
      'предоставьте остальное искусственному интеллекту',
    );
  });

  test('Проверка отображение элемента карта', async ({ page }) => {
    await expect(
      page
        .locator('section')
        .filter({
          hasText:
            'Люди созданы для творчества предоставьте остальное искусственному интеллекту Наш',
        })
        .locator('img'),
    ).toBeVisible();
  });
  test('Проверка отображение элемента info', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({
          hasText: 'Наш адрес г. Москва, улица Черёмушкинская Б., дом 34, этаж 6, Помещ. А620',
        })
        .nth(3),
    ).toBeVisible();
  });
  test('Проверка отображение элемента в info', async ({ page }) => {
    await expect(page.getByText('Наш адрес')).toBeVisible();
    await expect(
      page.getByText('г. Москва, улица Черёмушкинская Б., дом 34, этаж 6, Помещ. А'),
    ).toBeVisible();
    await expect(page.getByText('Контактный телефон')).toBeVisible();
    await expect(page.locator('a').filter({ hasText: /^\+7 \(495\) 115-82-19$/ })).toBeVisible();
    await expect(page.getByText('Электронная почта')).toBeVisible();
    await expect(page.locator('a').filter({ hasText: /^info@cleverbots\.ru$/ })).toBeVisible();
  });
  test('Проверка отображение наименования в info', async ({ page }) => {
    await expect(page.getByText('Наш адрес')).toContainText('Наш адрес');
    await expect(
      page.getByText('г. Москва, улица Черёмушкинская Б., дом 34, этаж 6, Помещ. А'),
    ).toContainText('г. Москва, улица Черёмушкинская Б., дом 34, этаж 6, Помещ. А620');
    await expect(page.getByText('Контактный телефон')).toContainText('Контактный телефон');
    await expect(page.locator('a').filter({ hasText: /^\+7 \(495\) 115-82-19$/ })).toContainText(
      '+7 (495) 115-82-19',
    );
    await expect(page.getByText('Электронная почта')).toContainText('Электронная почта');
    await expect(page.locator('a').filter({ hasText: /^info@cleverbots\.ru$/ })).toContainText(
      'info@cleverbots.ru',
    );
  });
});
