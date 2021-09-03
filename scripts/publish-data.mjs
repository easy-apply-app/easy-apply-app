import fs from "fs/promises"
import axios from axios

const GET_ALL_INSTITUTIONS_QUERY = `
{
  institutions {
    id
    website
    province
    location{
      latitude
      longitude
    }
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
    await fs.writeFile('./public/data/institutions/test.json',
     JSON.stringify(institutions, null, 2))
}

init();