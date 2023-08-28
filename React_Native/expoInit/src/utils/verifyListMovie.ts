import { ReadDataAsync } from '../services/asyncStorage/readData';

export const VerifyMyList = async (movieID: string, key: string): Promise<boolean> => {

    const jsonValue: any = await ReadDataAsync(key)

    let test: boolean = false

    // Verifica, utilizando o método some, se tem algum item.id com movieID, retornando um booleano
    return test = jsonValue.some((item: any) => item.id === movieID)

}