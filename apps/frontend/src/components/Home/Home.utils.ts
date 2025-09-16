import { ErrorCode } from "react-dropzone";

export const getError = (code:  ErrorCode | string) => {
  switch (code) {
    case ErrorCode.FileInvalidType:
      return "Tipo de archivo inválido";
    case ErrorCode.FileTooLarge:
      return "Archivo demasiado grande";
    case ErrorCode.FileTooSmall:
      return "Archivo demasiado pequeño";
    case ErrorCode.TooManyFiles:
      return "Demasiados archivos";
    default:
      return "Error desconocido";
  }
};
