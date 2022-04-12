import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi = require('swagger-ui-express');
import fs = require('fs')

const swaggerOptions = {
    swagger: 2.0,
    info: {
        description: "This is a space API Swagger Documentation",
        version: "1.0.0",
        title: "Space API",
        
        servers: ["http://localhost:3000"]
    },
    // ['.routes/*.js']
    apis: ["../index.ts"]
}

// import the sagger lib

/* Swagger files start */
export const swaggerFile: any = (process.cwd()+"/swagger.json");
export const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
export const customCss: any = fs.readFileSync((process.cwd()+"swagger.css"), 'utf8');
export const swaggerDocument = JSON.parse(swaggerData);
/* Swagger files end */

//export const swaggerDocs = swaggerJSDoc(swaggerOptions);



