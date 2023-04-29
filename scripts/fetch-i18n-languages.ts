// Import dependencies
const fs = require('fs');
const path = require('path');
const { createClient } = require('sanity-client');
const { fetchi18nLanguages } = require('./sanity-utils');

// Define the path to the .env.local file
const envPath = path.join(__dirname, '..', '.env.local');

// Define the environment variables
const { SANITY_PROJECT_ID, SANITY_DATASET } = process.env;

// Create a new Sanity client
const client = createClient({
  projectId: "4de3djlm",
  dataset: "production",
  apiVersion: "2023-04-24",
  useCdn: false
});

// Fetch the i18n languages from Sanity
const fetchLanguages = async () => {
  const languages = await fetchi18nLanguages(client);
  console.log('languages:', languages);
  return languages.join(',');
};

// Write the i18n languages to the .env.local file
const writeEnv = async () => {
  const i18nLocales = await fetchLanguages();
  fs.writeFileSync(envPath, `NEXT_PUBLIC_I18N_LOCALES=${i18nLocales}`);
};

writeEnv();
