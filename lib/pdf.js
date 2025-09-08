import jsPDF from 'jspdf';

export function generatePDF(data) {
  const doc = new jsPDF();
  doc.text(JSON.stringify(data), 10, 10);
  return doc.output('blob');
}
