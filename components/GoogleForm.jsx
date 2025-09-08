import React, { useEffect } from 'react';
import useGoogleForm from '../hooks/useGoogleForm';

const GoogleForm = ({ formId }) => {
  const { formHtml, loadForm } = useGoogleForm();

  useEffect(() => {
    loadForm(formId);
  }, [formId]);

  return <div dangerouslySetInnerHTML={{ __html: formHtml }} />;
};

export default GoogleForm;
