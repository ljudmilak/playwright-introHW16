Playwright Tallinn Delivery Tests

1. Install dependencies:

npm install

2. Install Playwright browsers:

npx playwright install

3. For local setup create .env file in the project root with: APP_URL=https://fe-delivery.tallinn-learning.ee

4.  To run all tests use:

   npx playwright test

5. To run tests in UI mode use:

   npx playwright test --ui


6. In GitHub repository -> Settings ->  "Secrets and variables" -> "Actions" the APP_URL is configured and used in CI pipelines