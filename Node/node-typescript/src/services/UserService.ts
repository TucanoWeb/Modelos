import { Users } from "../models/user"

export const createUser = (id: number, name: string, email: string, password: string) => {

    Users.push({
        id: id,
        name: name,
        email: email,
        password: password
    })

}


export const deleteUser = (id: number) => {
    Users.splice(id, 1)
}