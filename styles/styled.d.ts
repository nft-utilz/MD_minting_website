import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
      white: string;
      borderGray: string;
      progressBeige: string;
      gradientBg: string;
      highlight: string;
      green: string;
      ["w-gray1"]: string;
      ["w-gray2"]: string;
      ["w-gray3"]: string;
      whiteRgba: string;
      blackRgba: string;

      ["whiteAlpha-50"]: string;
      ["whiteAlpha-100"]: string;
      ["whiteAlpha-200"]: string;
      ["whiteAlpha-300"]: string;
      ["whiteAlpha-400"]: string;
      ["whiteAlpha-500"]: string;
      ["whiteAlpha-600"]: string;
      ["whiteAlpha-700"]: string;
      ["whiteAlpha-800"]: string;
      ["whiteAlpha-900"]: string;
      ["blackAlpha-50"]: string;
      ["blackAlpha-100"]: string;
      ["blackAlpha-200"]: string;
      ["blackAlpha-300"]: string;
      ["blackAlpha-400"]: string;
      ["blackAlpha-500"]: string;
      ["blackAlpha-600"]: string;
      ["blackAlpha-700"]: string;
      ["blackAlpha-800"]: string;
      ["blackAlpha-900"]: string;
      ["gray-50"]: string;
      ["gray-100"]: string;
      ["gray-200"]: string;
      ["gray-300"]: string;
      ["gray-400"]: string;
      ["gray-500"]: string;
      ["gray-600"]: string;
      ["gray-700"]: string;
      ["gray-800"]: string;
      ["gray-900"]: string;
      ["red-50"]: string;
      ["red-100"]: string;
      ["red-200"]: string;
      ["red-300"]: string;
      ["red-400"]: string;
      ["red-500"]: string;
      ["red-600"]: string;
      ["red-700"]: string;
      ["red-800"]: string;
      ["red-900"]: string;
      ["orange-50"]: string;
      ["orange-100"]: string;
      ["orange-200"]: string;
      ["orange-300"]: string;
      ["orange-400"]: string;
      ["orange-500"]: string;
      ["orange-600"]: string;
      ["orange-700"]: string;
      ["orange-800"]: string;
      ["orange-900"]: string;
      ["yellow-50"]: string;
      ["yellow-100"]: string;
      ["yellow-200"]: string;
      ["yellow-300"]: string;
      ["yellow-400"]: string;
      ["yellow-500"]: string;
      ["yellow-600"]: string;
      ["yellow-700"]: string;
      ["yellow-800"]: string;
      ["yellow-900"]: string;
      ["green-50"]: string;
      ["green-100"]: string;
      ["green-200"]: string;
      ["green-300"]: string;
      ["green-400"]: string;
      ["green-500"]: string;
      ["green-600"]: string;
      ["green-700"]: string;
      ["green-800"]: string;
      ["green-900"]: string;
      ["teal-50"]: string;
      ["teal-100"]: string;
      ["teal-200"]: string;
      ["teal-300"]: string;
      ["teal-400"]: string;
      ["teal-500"]: string;
      ["teal-600"]: string;
      ["teal-700"]: string;
      ["teal-800"]: string;
      ["teal-900"]: string;
      ["blue-50"]: string;
      ["blue-100"]: string;
      ["blue-200"]: string;
      ["blue-300"]: string;
      ["blue-400"]: string;
      ["blue-500"]: string;
      ["blue-600"]: string;
      ["blue-700"]: string;
      ["blue-800"]: string;
      ["blue-900"]: string;
      ["cyan-50"]: string;
      ["cyan-100"]: string;
      ["cyan-200"]: string;
      ["cyan-300"]: string;
      ["cyan-400"]: string;
      ["cyan-500"]: string;
      ["cyan-600"]: string;
      ["cyan-700"]: string;
      ["cyan-800"]: string;
      ["cyan-900"]: string;
      ["purple-50"]: string;
      ["purple-100"]: string;
      ["purple-200"]: string;
      ["purple-300"]: string;
      ["purple-400"]: string;
      ["purple-500"]: string;
      ["purple-600"]: string;
      ["purple-700"]: string;
      ["purple-800"]: string;
      ["purple-900"]: string;
      ["pink-50"]: string;
      ["pink-100"]: string;
      ["pink-200"]: string;
      ["pink-300"]: string;
      ["pink-400"]: string;
      ["pink-500"]: string;
      ["pink-600"]: string;
      ["pink-700"]: string;
      ["pink-800"]: string;
      ["pink-900"]: string;
      ["linkedin-50"]: string;
      ["linkedin-100"]: string;
      ["linkedin-200"]: string;
      ["linkedin-300"]: string;
      ["linkedin-400"]: string;
      ["linkedin-500"]: string;
      ["linkedin-600"]: string;
      ["linkedin-700"]: string;
      ["linkedin-800"]: string;
      ["linkedin-900"]: string;
      ["facebook-50"]: string;
      ["facebook-100"]: string;
      ["facebook-200"]: string;
      ["facebook-300"]: string;
      ["facebook-400"]: string;
      ["facebook-500"]: string;
      ["facebook-600"]: string;
      ["facebook-700"]: string;
      ["facebook-800"]: string;
      ["facebook-900"]: string;
      ["messenger-50"]: string;
      ["messenger-100"]: string;
      ["messenger-200"]: string;
      ["messenger-300"]: string;
      ["messenger-400"]: string;
      ["messenger-500"]: string;
      ["messenger-600"]: string;
      ["messenger-700"]: string;
      ["messenger-800"]: string;
      ["messenger-900"]: string;
      ["whatsapp-50"]: string;
      ["whatsapp-100"]: string;
      ["whatsapp-200"]: string;
      ["whatsapp-300"]: string;
      ["whatsapp-400"]: string;
      ["whatsapp-500"]: string;
      ["whatsapp-600"]: string;
      ["whatsapp-700"]: string;
      ["whatsapp-800"]: string;
      ["whatsapp-900"]: string;
      ["twitter-50"]: string;
      ["twitter-100"]: string;
      ["twitter-200"]: string;
      ["twitter-300"]: string;
      ["twitter-400"]: string;
      ["twitter-500"]: string;
      ["twitter-600"]: string;
      ["twitter-700"]: string;
      ["twitter-800"]: string;
      ["twitter-900"]: string;
      ["telegram-50"]: string;
      ["telegram-100"]: string;
      ["telegram-200"]: string;
      ["telegram-300"]: string;
      ["telegram-400"]: string;
      ["telegram-500"]: string;
      ["telegram-600"]: string;
      ["telegram-700"]: string;
      ["telegram-800"]: string;
      ["telegram-900"]: string;
    };
    fonts: {
      Montserrat: string;
      Roboto: string;
      CookieRun: string;
      NatoSans: string;
    };
    fontSizes: {
      fontxs: string;
      fontsm: string;
      fontmd: string; //1em = 16px
      fontlg: string;
      fontxl: string;
      font2xl: string;
      font3xl: string;
    };
    headerHeight: string;
  }
}
