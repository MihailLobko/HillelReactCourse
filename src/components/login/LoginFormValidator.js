export const isPrimaryUserDataValid = (value) => {
  const isLengthValid = value.length > 2;
  const containsOnlyLetters = /^[A-Za-z]+$/.test(value);
  return isLengthValid && containsOnlyLetters;
};

export const isEmailValid = (value) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(value);
};

export const isPasswordValid = (passwordValue) => {
  const hasCapitalLetter = /[A-Z]/.test(passwordValue);
  const hasNumber = /\d/.test(passwordValue);
  const isWithinLengthLimits =
    passwordValue.length >= 6 && passwordValue.length <= 10;
  return hasCapitalLetter && hasNumber && isWithinLengthLimits;
};
