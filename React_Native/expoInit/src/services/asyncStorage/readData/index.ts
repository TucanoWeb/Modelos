import AsyncStorage from '@react-native-async-storage/async-storage';

export const ReadDataAsync = async (key: string): Promise<any> => {
    try {
        const jsonValue: any = await AsyncStorage.getItem(key)

        // Retonar um json ou um array vazio se der erro no parse
        return JSON.parse(jsonValue) || []
    } catch (e) {
        console.log("Falha ao recuperar data em AsyncStorage ", e)
    }
}