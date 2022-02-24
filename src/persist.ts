import AsyncStorage from '@react-native-async-storage/async-storage';

export async function save(key: string, snapshot: {}) {
  const data = JSON.stringify(snapshot)
  await AsyncStorage.setItem(key, data)
}

export async function load(key: string) {
  try {
    const raw = await AsyncStorage.getItem(key)
    if (raw) {
      return JSON.parse(raw)
    }
  } catch {}

  return undefined
}
