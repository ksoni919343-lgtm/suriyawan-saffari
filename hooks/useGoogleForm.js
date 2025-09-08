import { useState } from 'react';
import { fetchFormHtml } from '../lib/googleForms';

export default function useGoogleForm() {
  const [formHtml, setFormHtml] = useState('');

  const loadForm = async (formId) => {
    const html = await fetchFormHtml(formId);
    setFormHtml(html);
  };

  return { formHtml, loadForm };
}
