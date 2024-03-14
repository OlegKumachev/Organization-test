export default function IdentifyCarts(value) {
  if (/^4\d{12}(?:\d{3})/.test(value)) {
    return '.visa';
  } if (/(^5[1-5])\d{14}/.test(value)) {
    return '.master';
  } if (/(^3[47])\d{13}/.test(value)) {
    return '.amex';
  } if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return '.jcb';
  } if (/(^2||6)\d{15}/.test(value)) {
    return '.mir';
  } if (
    /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})/.test(
      value,
    )
  ) {
    return '.discover';
  }

  return null;
}
