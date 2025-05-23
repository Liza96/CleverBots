import { test, expect } from '@playwright/test';

//class="home__top__wrap"

test.describe('Группа тестов class section_x section_x__top', () => {
  test.describe.configure({ timeout: 120_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
  });

  test('Проверка отображения элементов навигации хедера', async ({ page }) => {
    await expect(page.getByTitle('You are here.')).toBeVisible();
    await expect(page.locator('.navbar__lisk').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'AI Avatars' })).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Marketplace' }),
    ).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Directions' }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'projects', exact: true })).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Solutions' }),
    ).toBeVisible();
    await expect(page.locator('a').filter({ hasText: 'About Us' }).first()).toBeVisible();
    await expect(page.locator('#to-callback-link')).toBeVisible();
    await expect(page.getByRole('link', { name: 'en EN' })).toBeVisible();
  });

  test('Проверка названия элементов навигации хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'AI Avatars' })).toContainText('AI Avatars');
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Marketplace' }),
    ).toContainText('Marketplace');
    await expect(
      page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Directions' }),
    ).toContainText('Directions');
    await expect(page.getByRole('link', { name: 'projects', exact: true })).toContainText(
      'projects',
    );
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Solutions' }),
    ).toContainText('Solutions');
    await expect(page.locator('a').filter({ hasText: 'About Us' }).first()).toContainText(
      'About Us',
    );
    await expect(page.locator('#to-callback-link')).toContainText('Get a consultation');
  });

  test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'AI Avatars' })).toHaveAttribute(
      'href',
      'https://studio.cleverbots.ru/avatar',
    );
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Marketplace' }),
    ).toHaveAttribute('href', 'https://marketplace.cleverbots.ru/');
    await expect(page.getByRole('link', { name: 'projects', exact: true })).toHaveAttribute(
      'href',
      '/projects/',
    );
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Solutions' }),
    ).toHaveAttribute('href', '/products/');
    await expect(page.locator('#to-callback-link')).toHaveAttribute('href', '#callback-block');
    await expect(page.getByRole('link', { name: 'en EN' })).toHaveAttribute('href', '#');
  });

  test('Проверка текста в section_x__top', async ({ page }) => {
    await expect(page.getByText('artificial intelligence', { exact: true }).first()).toBeVisible(); // artificial intelligence
    await expect(page.getByText('AI-based solutions for')).toBeVisible(); // AI-based solutions for business
    await expect(page.getByRole('heading', { name: 'Leader in the development of' })).toBeVisible(); // Лидер в разработке диалоговых систем
    await expect(
      page.getByText('We create bots with industrial-scale artificial intelligence'),
    ).toBeVisible(); // Создаём ботов с искусственным интеллектом промышленного масштаба
  });

  test('Проверка отображения элементов в section_x__top_award', async ({ page }) => {
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'TELEGRAM linkedin SCROLL AI-' })
        .locator('img')
        .nth(1),
    ).toBeVisible();
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'TELEGRAM linkedin SCROLL AI-' })
        .locator('img')
        .nth(2),
    ).toBeVisible();
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'TELEGRAM linkedin SCROLL AI-' })
        .locator('img')
        .nth(3),
    ).toBeVisible();
  });

  test('Проверка отображения элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get a consultation' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find a solution' })).toBeVisible();
  });

  test('Проверка названия элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get a consultation' }).nth(1)).toContainText(
      'Get a consultation',
      { timeout: 60_000 },
    );
    await expect(page.getByRole('link', { name: 'Find a solution' })).toContainText(
      'Find a solution',
      { timeout: 60_000 },
    );
  });

  test('Проверка атрибутов href элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get a consultation' }).nth(1)).toHaveAttribute(
      'href',
      '#callback-block',
    );
    await expect(page.getByRole('link', { name: 'Find a solution' })).toHaveAttribute(
      'href',
      '/products/',
    );
  });

  test('Проверка отображения элементов в section_x__top__side__social', async ({ page }) => {
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
});
