const translit = (str: string): string => {
  const ru = ['А', 'аБ', 'б', 'В', 'в', 'Г', 'г', 'Г', 'г', 'Д', 'д', 'Е', 'е',
    'Ё', 'ё', 'Э', 'э', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'I', 'i', 'I', 'i', 'Й',
    'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р',
    'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш',
    'ш', 'Щ', 'щ', 'Ъ', 'ъ', 'Ы', 'ы', 'Ь', 'ь', 'Э', 'э', 'Ю', 'ю', 'Я', 'я']
  const en = ['А', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'G', 'g', 'D', 'd', 'E',
    'e', 'E', 'e', 'E', 'e', 'Zh', 'zh', 'Z', 'z', 'I', 'i', 'I', 'i', 'I', 'i',
    'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R',
    'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'T', 'S', 'ts', 'CH',
    'ch', 'SH', 'sh', 'SCH', 'sch', "'", "'", 'Y', 'y', "'", "'", 'E', 'e',
    'YU', 'yu', 'YA', 'ya']
  const chars = str.split("");
  const translitChars = chars.map(char => {
    const index = ru.indexOf(char);
    return index >= 0 ? en[index] : char;
  });
  return translitChars.join("");
};

export const generateSlug = (str: string): string => {
  let url: string = str.replace(/[\&]+/gi, '-')
    .replace(/[^0-9a-z_\-]+/gi, '-')
    .replace(/---+/g, '-')
    .replace(/--/g, '-')
    .toLowerCase();
  url = translit(url);
  return url;
};
