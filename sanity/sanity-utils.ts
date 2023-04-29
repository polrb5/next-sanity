import { createClient } from 'next-sanity';

type GeneralContent = {
  title: string;
}

const client = createClient({
  projectId: "4de3djlm",
  dataset: "production",
  apiVersion: "2023-04-24",
  useCdn: false
});

const IMAGES_BASE_URL = 'https://cdn.sanity.io/images/kzz1g91o/smartlis';
const VIDEOS_BASE_URL = 'https://cdn.sanity.io/files/kzz1g91o/smartlis';

const getGeneral = async () => {
  const content: [GeneralContent] = await client.fetch(`*[_type == "general"]`);
  const languageContent = content.filter((c: GeneralContent) => c.title === 'Languages')[0];
  const headerContent = content.filter((c: GeneralContent) => c.title === 'Header')[0];
  const footerContent = content.filter((c: GeneralContent) => c.title === 'Footer')[0];

  return { languageContent, headerContent, footerContent };
};

const getPage = async (page: string, language: string = 'en') => {
  const content = await client.fetch(`*[_type == "${page}" && language == "${language}"]`);
  return content[0];
};
const getLang = async (page: string) => {
  const content = await client.fetch(`*[_type == "${page}"]`);
  return content;
};

const getImageUrl = (img: any) => {
  if (!img) return;
  const imagePathSplitted = img.asset._ref.split('-');
  const imgName = imagePathSplitted.slice(1, -1).join('-').concat(`.${imagePathSplitted.slice(-1)}`);
  return `${IMAGES_BASE_URL}/${imgName}`;
};

const getVideoUrl = (video: any) => {
  if (!video) return;
  const imagePathSplitted = video.asset._ref.split('-');
  const imgName = imagePathSplitted.slice(1, -1).join('-').concat(`.${imagePathSplitted.slice(-1)}`);
  return `${VIDEOS_BASE_URL}/${imgName}`;
};

const fetchLanguages = async () => {
  const languages = await client.fetch(`*[_type == "language"]`);
  console.log('languages:', languages);
  return (languages || []).map((lang: { name: string; code: string; }) => ({ title: lang.name, value: lang.code }));
};

const fetchi18nLanguages = async () => {
  const languages = await client.fetch(`*[_type == "language"]`);
  return (languages || []).map((lang: { code: string; }) => lang.code );
};

export {
  fetchLanguages,
  fetchi18nLanguages,
  getGeneral,
  getImageUrl,
  getPage,
  getLang,
  getVideoUrl,
};
