import fs from 'fs';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: "4de3djlm",
  dataset: "production",
  apiVersion: "2023-04-24",
  useCdn: false
});

const fetchLocales = async () => {
  try {
    const languages = await client.fetch('*[_type == "language"]{ code }');
    const locales = languages.map((lang: { code: string }) => lang.code).join(',');
    console.log('locales:', locales);

    fs.writeFileSync('.env.local', `NEXT_PUBLIC_I18N_LOCALES=${locales}\n`);

    console.log('Locales updated successfully:', locales);
  } catch (error) {
    console.error('Error fetching locales:', error);
  }
};

module.exports = {
  fetchLocales,
};