export interface Config { 
    TOKEN: string,
    STORE_FILE: string,
    DEV_MODE: boolean,
    SERVERS: Map<string, string>,
}