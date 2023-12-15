import axios from "axios";

export function fetchFieldsAndUniversities(client) {
  const fieldsBaseQuery = "/fields/";
  const universitiesBaseQuery = "/university/";
  const fieldsReq = client.get(fieldsBaseQuery);
  const universitiesReq = client.get(universitiesBaseQuery);
  return axios.all([fieldsReq, universitiesReq]).then(
    axios.spread((...responses) => {
      const fieldsResponse = responses[0];
      const universitiesResponse = responses[1];

      const fields = fieldsResponse?.data?.map((field) => ({
        key: field.id,
        value: field.persianTitle,
        label: field.persianTitle,
      }));

      const universities = universitiesResponse?.data?.map(
        (university) => ({
          key: university.id,
          value: university.id,
          label: university.name,
        })
      );
      return [fields, universities]
    })
  );
}
