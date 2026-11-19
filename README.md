# Portfolio: Alberto S. Payabyab

Next.js + TypeScript portfolio with a live CRUD playground and a Python (FastAPI) sample API.

## Run the site
    npm install
    npm run dev          # http://localhost:3000

## Run the Python API and tests
    cd apis/python
    pip install -r requirements.txt
    pytest
    uvicorn main:app --reload

## Edit content
All skills, languages, experience and projects live in `data/skills.ts`.

## Deploy
Push to `main`. In Settings > Pages, set Source to **GitHub Actions**. The workflow tests the API, builds the static site and publishes it.
