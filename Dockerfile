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

COPY ctrf/ctrf-report.json .

RUN jq -r '.results.summary.failed' ctrf-report.json | grep -q "failed" && { echo "Tests failed. Stopping Docker build."; exit 1; } || echo "Tests passed successfully"
