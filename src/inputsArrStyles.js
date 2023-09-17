const mainStyles = {
  titleFontFamily: "font-ubuntu-mono",
  inputLabelFontFamily: "noto-sans",
  fontWeightNormal: "font-normal",
  fontWeightMedium: "font-medium",
  borderSolidRounded: "border border-solid border-2 rounded-lg",
  inputLabelTextSize: "text-xs",
  placeHolderSize: "text-sm",
  placeHolderTextColor: "placeholder-text2",
  // inputPadding: 'px-3 py-5',
};

export const inputTitleStyles = {
  styles: `${mainStyles.titleFontFamily} ${mainStyles.inputLabelTextSize} ${mainStyles.fontWeightNormal}`,
};

export const inputLabelStyles = {
  styles: `${mainStyles.inputLabelFontFamily} ${mainStyles.inputLabelTextSize} ${mainStyles.fontWeightNormal}`,
};

export const inputFieldStyles = {
  styles: `${mainStyles.borderSolidRounded} ${mainStyles.placeHolderSize} ${mainStyles.fontWeightMedium} ${mainStyles.placeHolderTextColor} ${mainStyles.inputPadding} `,
};

export const inputStyles = {
  // Default
  inputDefault: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input />",
  },
  inputDefaultHover: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text2",
    titleInputText: "<Input />",
    focusColor: "focus:border-blue-500",
  },
  inputDefaultFocus: {
    borderColor: "border-primary-default",
    labelTextColor: "text-primary-default",
    inputTextColor: "text-text2",
    titleInputText: "&:hover",
  },
  // error
  inputError: {
    borderColor: "border-danger-default",
    labelTextColor: "text-danger-default",
    inputTextColor: "text-text1",
    titleInputText: "<Input error />",
  },
  inputErrorHover: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text2",
    titleInputText: "<Input />",
    focusColor: "focus:border-red-500",
  },
  inputErrorFocus: {
    borderColor: "border-danger-default",
    labelTextColor: "text-danger-default",
    inputTextColor: "text-text2",
    titleInputText: "&:hover",
    disabled: false,
  },
  // Disabled
  inputDisabled: {
    borderColor: "none",
    labelTextColor: "text-text1",
    inputTextColor: "text-text2",
    titleInputText: "<Input disabled />",
    disabled: true,
  },

  // HelperText
  inputHelper: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input helperText=”Some interesting text” />",
    littleText: true,
  },
  inputHelperError: {
    borderColor: "border-danger-default",
    labelTextColor: "text-danger-default",
    inputTextColor: "text-text2",
    titleInputText: "<Input helperText=”Some interesting text” error />",
    focusColor: "red",
    littleText: true,
  },

  // WithIcon

  inputStartIcon: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input startIcon />",
    inputPadding: "pl-12 pr-3 py-4",
    iconClass: "phone-icon",
    iconPosition: "start",
  },
  inputEndIcon: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input endIcon />",
    iconClass: "lock-icon",
    iconPosition: "end",
  },
  // InputText
  inputText: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input value=”text” />",
    placeHolderText: "Text",
  },
  // InputSize
  inputSM: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input size=”sm” />",
    inputPadding: "px-3 py-3",
  },
  inputMD: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input size=”md” />",
  },
  inputFW: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input fullWidth />",
  },
  textArea: {
    borderColor: "border-text2",
    labelTextColor: "text-text1",
    inputTextColor: "text-text1",
    titleInputText: "<Input multiline row=”4” />",
    row: "4",
    tagType: "textArea",
  },
};

const inputsArr = [
  {
    styles: [
      inputStyles.inputDefault,
      inputStyles.inputDefaultHover,
      inputStyles.inputDefaultFocus,
    ],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [
      inputStyles.inputError,
      inputStyles.inputErrorHover,
      inputStyles.inputErrorFocus,
    ],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputDisabled],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputHelper, inputStyles.inputHelperError],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputStartIcon, inputStyles.inputEndIcon],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputText],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputSM, inputStyles.inputMD],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:grid-cols-4",
  },
  {
    styles: [inputStyles.inputFW],
    colsMD: "md:grid-cols-1",
    colsLG: "lg:grid-cols-1",
  },
  {
    styles: [inputStyles.textArea],
    colsMD: "md:grid-cols-3",
    colsLG: "lg:lg:grid-cols-3",
  },
];

export default inputsArr;
