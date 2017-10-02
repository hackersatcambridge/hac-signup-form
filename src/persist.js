import Papa from 'papaparse';

const KEY = 'HAC_FORM_DATA';

export function appendFormData(formData) {
  window.localStorage.setItem(KEY, JSON.stringify([...fetchFormData(), formData]));
}

export function fetchFormData() {
  return JSON.parse(window.localStorage.getItem(KEY) || '[]');
}

function extractFormFields(formData) {
  const fields = [];

  for (const formEntry of formData) {
    for (const key of Object.keys(formEntry)) {
      if (!fields.includes(key)) {
        fields.push(key);
      }
    }
  }

  fields.sort();

  return fields;
}

function serializeDataToCsv() {
  const formData = fetchFormData();
  const fields = extractFormFields(formData);

  return Papa.unparse({
    fields,
    data: formData.map(formEntry => fields.map(fieldName => formEntry[fieldName] != null ? formEntry[fieldName] : '')),
  });
}

function downloadFile(text, name) {
  const dummyElement = document.createElement("a");
  document.body.appendChild(dummyElement);
  dummyElement.style.display = 'none';

  const fileUrl = window.URL.createObjectURL(new Blob([text], { type: 'octet/stream' }));

  dummyElement.href = fileUrl;
  dummyElement.download = name;
  dummyElement.click();

  window.URL.revokeObjectURL(fileUrl);
  dummyElement.remove();
}

export function downloadFormDataAsCsv() {
  downloadFile(serializeDataToCsv(), 'Results.csv');
}
