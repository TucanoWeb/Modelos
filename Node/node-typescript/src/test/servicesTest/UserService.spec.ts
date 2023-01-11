import { UsersTest } from "../dbTest"

describe('UserService', () => {

    it('Add new user', () => {

       const mockCreateUser = jest.fn((id: number, name: string, email: string, password: string) => {

        UsersTest.push({
            id: id,
            name: name,
            email: email,
            password: password
        })

        return console.log(UsersTest)
    
    })
        
       mockCreateUser(10, 'teste2', 'teste@email.com', '123456')

       expect(mockCreateUser).toHaveBeenCalled()

    })

})