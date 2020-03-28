import { formatToSentence } from "./formatToSentence";

describe("formatToSentence", () => {
  describe("there is no options provided", () => {
    it('should NOT capitalize first letter, use " " as separator and " ." as end ponctuation', () => {
      const data: string[] = ["Salut", "les", "amis"];

      const actual = formatToSentence(data);

      const expected = "Salut les amis.";

      expect(actual).toBe(expected);
    });
  });

  describe("capitalize is at true", () => {
    const capitalize = true;

    it('should capitalize first letter, use " "  as separator and " ." as end ponctuation', () => {
      const data: string[] = ["salut", "les", "amis"];

      const actual = formatToSentence(data, { capitalize });

      const expected = "Salut les amis.";

      expect(actual).toBe(expected);
    });
  });

  describe("separator is a coma", () => {
    const separator = ", ";

    it(`should NOT capitalize first letter, use "${separator}"  as separator and " ." as end ponctuation`, () => {
      const data: string[] = ["Salut", "les", "amis"];

      const actual = formatToSentence(data, { separator: ", " });

      const expected = "Salut, les, amis.";

      expect(actual).toBe(expected);
    });
  });

  describe("end ponctuation is thre doot", () => {
    const endPonctuation = "...";

    it(`should NOT capitalize first letter, use " "  as separator and "${endPonctuation}" as end ponctuation`, () => {
      const data: string[] = ["Salut", "les", "amis"];

      const actual = formatToSentence(data, { endPonctuation });

      const expected = "Salut les amis...";

      expect(actual).toBe(expected);
    });
  });
});
