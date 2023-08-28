import AsyncStorage from "@react-native-async-storage/async-storage"
import { ReadDataAsync } from "./readData"

export const StoreData = async (key: string, type: string) => {

    const asyncDataExists: any = await ReadDataAsync(key)

    try {
        if(asyncDataExists === null){
            await AsyncStorage.setItem(key, type)
        }
    } catch (e) {
        console.log("Erro ao iniciar AsyncStorage: ", e)
    }
}