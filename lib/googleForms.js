import { google } from 'googleapis';

const forms = google.forms('v1');

export async function fetchFormHtml(formId) {
  // Fetch form and generate embed HTML
  return `<iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true"></iframe>`;
}

export async function createForm(title) {
  const response = await forms.forms.create({ requestBody: { info: { title } } });
  return response.data.formId;
}
