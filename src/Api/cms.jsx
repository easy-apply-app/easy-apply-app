import axios from "axios";

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

const getAllInstitutions = async () => {
  const {
    data: {
      data: { institutions },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master",
    { query: GET_ALL_INSTITUTIONS_QUERY }
  );

  window.localStorage.setItem('institutions', JSON.stringify(institutions));
  return institutions;

  console.log(institutions);
};

export default {
  getAllInstitutions,
};
