import fs from 'fs'
import swaggerUi from "swagger-ui-express"

/* Swagger files start */
//export const logging = console.log(__dirname)
export const swaggerFile: any = (__dirname+"\\swagger.json");
export const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
export const customCss: any = fs.readFileSync((__dirname+"\\swagger.css"), 'utf8');
export const swaggerDocument = JSON.parse(swaggerData);

/* Swagger files end */




