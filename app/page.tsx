import styles from './page.module.css'

import { getLang, getPage } from "@/sanity/sanity-utils"

export default async function Home() {
  const projects = await getPage('home', 'en');
  const langs = await getLang('language');
  

  return (
    <main className={styles.main}>
      <div>
        {projects.title}
      </div>
      <select name="lang" id="lang" >
        {langs.map((lang: any ) => 
        <option key={lang._id} value={lang.code}>{lang.name}</option>
        )}
      </select>
    </main>
  )
}
