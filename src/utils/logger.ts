// utils/logger.ts

/**
 * Logs to Reactotron in development only.
 * @param args Items to log.
 */
export const slogTron = (...args: any[]) => {
  if (__DEV__) {
    console.tron.log(...args)
  }
}
//// Usage in your component:
//import { logTron } from '../utils/logger';
//
//logTron('This will only log in dev', someValue);

// utils/reactotron.ts

export const logTron = (message: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.tron.log(message, ...optionalParams)
  }
}

export const errorTron = (error: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.tron.error(error, optionalParams)
  }
}
