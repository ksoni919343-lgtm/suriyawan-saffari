import JsBarcode from 'jsbarcode';

export function generateBarcode(id) {
  JsBarcode('#barcode', id);
}
