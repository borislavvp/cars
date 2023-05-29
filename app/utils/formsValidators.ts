import { ParseError, parsePhoneNumber } from "libphonenumber-js";

/**
 * @module forms/FormValidators
 * @description Functions that validate form inputs.
 * <br>All of them must take the input as the first parameter.
 * <br> All functions return false if the input is valid and an error message as a string if the input is not valid.
 */
export const formValidators = {
  /**
   * Validates if an input has minimum characters
   * @param {string} input - Input to validate
   * @param {number} min - Minimum number of characters
   * @returns {boolean | string}
   */
  /**
   * Validates if an input has maximum characters
   * @param {string} input - Input to validate
   * @returns {boolean | string}
   */
  isEmail: function (input: string) {
    const message = "Невалидна ел. поща.";
    if (!input) return false;
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(input)) {
      return message;
    } else {
      return false;
    }
  },
  isPhoneNumber: function (input: string) {
    if (!input) return false;
    const regex = new RegExp("[a-zA-Z]");
    try {
      parsePhoneNumber(input);
      if (regex.test(input)) {
        return "Невалиден телефонен номер.";
      }
      return false;
    } catch (error) {
      if (error instanceof ParseError) {
        switch (error.message) {
          case "INVALID_COUNTRY":
            return "Невалиден телефонен номер.";
          case "TOO_SHORT":
            return "Невалиден телефонен номер.";
          case "NOT_A_NUMBER":
          default:
            return "Невалиден телефонен номер.";
        }
      }
    }
  }
};
