/** Enum des valeurs possibles pour une valeur de spacing du theme */
enum ThemeSpacing {
  "XXS-4" = "4px",
  "XS-8" = "8px",
  "S-12" = "12px",
  "M-16" = "16px",
  "L-20" = "20px",
  "XL-24" = "24px",
  "XXL-32" = "32px",
  "3XL-40" = "40px",
  "4XL-48" = "48px"
}

/** Interface de la fonction getSpacingInPixels */
export type IGetSpacingInPixels = (spacing: keyof typeof ThemeSpacing) => ThemeSpacing;

/** Fonction qui permet de récupérer une valeur en spacing du theme */
export const getSpacingInPixels: IGetSpacingInPixels = spacing => {
  return ThemeSpacing[spacing];
};
