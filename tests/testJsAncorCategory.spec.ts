import { test, expect } from '@playwright/test';

//class="section_x section_x__category js_ancor__category"

test.describe('Группа тестов section_x section_x__category js_ancor__category', () => {
  test.describe.configure({ timeout: 120_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
  });
  test('Проверка отображения элементов в home__category__title', async ({ page }) => {
    await expect(page.getByText('Get the benefits of tomorrow')).toBeVisible();
    await expect(page.getByText('thanks to proven and')).toBeVisible();
  });

  test('Проверка наименования элементов в home__category__title', async ({ page }) => {
    await expect(page.getByText('Get the benefits of tomorrow')).toContainText(
      'Get the benefits of tomorrow today',
    );
    await expect(page.getByText('thanks to proven and')).toContainText(
      'thanks to proven and effective technologies',
    );
  });

  test('Проверка отображения элементов в home__category__list', async ({ page }) => {
    await expect(page.getByText('Get the benefits of tomorrow')).toBeVisible();
    await expect(page.getByText('thanks to proven and')).toBeVisible();
  });

  test('Проверка наименования элементов в home__category__list', async ({ page }) => {
    await expect(page.getByText('Get the benefits of tomorrow')).toContainText(
      'Get the benefits of tomorrow today',
    );
    await expect(page.getByText('thanks to proven and')).toContainText(
      'thanks to proven and effective technologies',
    );
  });

  test('Проверка отображения кнопок в home__category__list', async ({ page }) => {
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'Get the benefits of tomorrow' })
        .getByRole('link')
        .first(),
    ).toBeVisible();
    await expect(
      page.getByText(
        'Development of chatbots for business A virtual online consultant that simulates',
      ),
    ).toBeVisible();
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'Get the benefits of tomorrow' })
        .getByRole('link')
        .nth(2),
    ).toBeVisible();
  });

  test('Проверка наименования кнопок в home__category__list', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Read more');
  });
});
