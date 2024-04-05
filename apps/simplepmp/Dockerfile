FROM mcr.microsoft.com/playwright:focal

# copy project (including tests)
COPY . /e2e

WORKDIR /e2e

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install
# Test
# CMD ["npx", "playwright", "test"]
RUN npx playwright test
