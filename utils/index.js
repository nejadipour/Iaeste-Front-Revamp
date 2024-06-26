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
          value: university.name,
          label: university.name,
        })
      );
      return [fields, universities]
    })
  );
}


export function handleCollaborationReq(form, type, client) {
  const formData = new FormData()
  const fullName = form.first_name + ' ' + form.last_name
  formData.append('fullname', fullName)
  formData.append('type', type)
  delete form.first_name
  delete form.last_name
  for (const key in form) {
    if (Object.hasOwnProperty.call(form, key)) {
      const value = form[key];
      formData.append(key, value)
    }
  }
  return client.post('/career/create/',formData)
}