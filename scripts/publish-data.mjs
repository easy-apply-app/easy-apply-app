  import fs from 'fs/promises';
  import axios from "axios";
  import md5 from 'md5'

  const GET_ALL_INSTITUTIONS_QUERY = `
  {
      institutions {
        id
        website
        province
        photo {
          url
        }
        name
        classification
      }
    }
    `;

const init = async () => {
  const {
    data: {
      data: { institutions },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master",
    { query: GET_ALL_INSTITUTIONS_QUERY }
  );

  const institutionAsString = JSON.stringify(institutions, null, 2)
 
  await fs.writeFile(
    './public/data/institutions/data.json',
    institutionAsString,
     
     );
     const hash = md5(institutionAsString)

     await fs.writeFile(
       './public/data.hashes.json',
       JSON.stringify({
         institutions: hash,
       }, null, 2),
     )

};

init();
