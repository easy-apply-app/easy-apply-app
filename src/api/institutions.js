import { openDB } from "idb";
import axios from "axios";

export const createApi = () => {
  const dbInitialization = openDB("institutions", 1, {
    upgrade: (dbToUpgrade) => {
      dbToUpgrade.createObjectStore("data", { keyPath: "id" });
      dbToUpgrade.createObjectStore("meta", { keyPath: "id" });
    },
  });

  const sync = async () => {
    const db = await dbInitialization;
    const tx = await db.transaction("data", ["readwrite"]);

    const {
      data: { institution: remoteHash },
    } = await axios.get("/data/hashes.json");
    const {value: localHash} = (await db.get("meta", "hash")) || {value: null};

    if (localHash && localHash === remoteHash) return;

    await db.clear("data");
    const { data } = await axios.get("/data/institutions/data.json");

    data.forEach(
      (singleInstitution) =>
        new Promise((resolve) => {
          const { photo } = singleInstitution;
          if (!singleInstitution.photo) return singleInstitution;

          const { url } = photo;
          fetch(url)
            .then((response) => response.blob())
            .then((photo) => {
              db.add("data", {
                ...singleInstitution,
                photo,
              });
            });
        })
    );

    // institutions.forEach(item => db.add('data', item));
    await tx.done;
  await db.put("meta", { id: "hash", value: remoteHash });
  };
  const read = async (id) => {
    const db = await dbInitialization;
    const response = !id ? await db.getAll("data") : [await db.get("data", id)];

    const results = response.map((singleResponseItem) => ({
      ...singleResponseItem,
      photo: URL.createObjectURL(singleResponseItem.photo),
    }));

    return results;
  };
  return {
    sync,
    read,
  };
};

const institutions = createApi();
institutions.sync();

export { institutions };
export default institutions;
