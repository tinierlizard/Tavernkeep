export interface Permission {
    type: "USER" | "ROLE",
    permission: boolean,
    id: string,
}