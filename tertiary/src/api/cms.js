import axios from "axios"

const getAllDAtaInstitute = () => `
{
    institutions{
      id;
      name;
      photo {
        url
      };
      website;
      classification;
    }
  }
  `
const getAllDAta = async () => {
    const {
      data:{
        data:
        {institutions}
      }
    } = await axios.post('https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master',
    { query:getAllDAtaInstitute}
    
    );
    window.localStorage("institutions",JSON.stringify(institutions))
   return institutions

} 

export default getAllDAta