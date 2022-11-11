export const media = {
  SMALL: "1000px",
  MEDIUM: "1300px",
  BIG: "1500px",
};

/* Pass whatever property and get the standardised margins */
export const margins = {
  full1: (property) => `
        ${property}: 0 calc((100vw - 1500px) / 2));
        @media screen and (max-width: ${media.BIG}) {
            ${property}: 0 25px;
        }
        `,

  single1: (property) => `
        ${property}: calc((100vw - 1500px) / 2));
        @media screen and (max-width: ${media.BIG}) {
            ${property}: 25px;
        }
        `,
};

export const colors = {
  black: "#000",
  white: "#fff",
  turquoise: "#00996b",
  backgroundGrey: "#d6d6d6",
  grey: "#a6a6a6",
  darkGrey: "#737373",
  placeholderGrey: "#b3b3b3",
  turquoiseHover: "#008a5f",
};

export const fonts = {
  heading1: `
        font-style: normal;
        font-weight: 500;
        font-size: 80px;
        line-height: 140%;
        letter-spacing: -0.02em;
        @media screen and (max-width: ${media.SMALL}){
            
        } 
    `,
  heading2: `
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
  `,
  input: `
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
  `,
  submitButton: `
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 100%;
  `,
};
