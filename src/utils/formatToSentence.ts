type IFormatToSentenceOptions = {
  capitalize?: boolean;
  separator?: string;
  endPonctuation?: string;
};

/**
 * Fonction qui convertit un tableau de string en une phrase.
 * @param words Tableau des mots à partir duquel créer une phrase
 * @param options Objet d'options pour le formatage de la phrase
 */
export const formatToSentence = (words: string[], options?: IFormatToSentenceOptions): string => {
  const usableCapitalize = !!options?.capitalize;
  const usableSeparator = options?.separator ?? " ";
  const usableEndPonctuation = options?.endPonctuation ?? ".";

  const sentence = words.reduce((sentence, word, index) => {
    /** Met en majuscule la première lettre si c'est le premier mot et que forceCapitalize est à true */
    if (index === 0) {
      const firstLetter = usableCapitalize ? word.slice(0, 1).toUpperCase() : word.slice(0, 1);
      return `${firstLetter}${word.slice(1)}${usableSeparator}`;
    }

    /** Met le signe de ponctuation si c'est le dernier mot */
    if (index === words.length - 1) {
      return `${sentence}${word}${usableEndPonctuation}`;
    }

    /** Cas par défaut, ajoute le séparateur après le mot */
    return `${sentence}${word}${usableSeparator}`;
  }, "");

  return sentence;
};
