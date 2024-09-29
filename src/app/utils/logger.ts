import { createLogger, format, transports } from "winston"
import path from "path";

const appRoot = path.resolve(__dirname, '..');

const filter = (severity: string) => format((info, opts) => {
    return info.level === severity ? info : false;
});

const logger = createLogger({
  exitOnError: false,
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: `${appRoot}/logs/all.log`, level: 'silly' }), // silly and higher in severity - aka all
    new transports.File({ filename: `${appRoot}/logs/activity.log`, level: 'info' }), // info and higher in severity
    new transports.File({ filename: `${appRoot}/logs/warnings.log`, level: 'warn', format: format.combine(filter('warn')(), format.timestamp(), format.json()) }), // warning only
    new transports.File({ filename: `${appRoot}/logs/error.log`, level: 'error' }), // error only as it's highest in severity
  ],
});

export default logger;

export const logPageVisit = (pageName: string, referer: string | null) => {
    console.log('logging page visit for', pageName, referer)
    if (!referer) return logger.info(`${pageName} visited`, { referer: null });
    
    const url = new URL(referer);
    let sanitizedReferer = url.hostname; // Strip the referrer of any potentially sensitive data 
    
    if (sanitizedReferer === process.env.BASE_URL) sanitizedReferer = sanitizedReferer + url.pathname;
    
    logger.info(`${pageName} visited`, { referer: sanitizedReferer });
}
