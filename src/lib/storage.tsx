// import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();
// export const storage = { getString: AsyncStorage.getItem, set: AsyncStorage.setItem, delete: AsyncStorage.removeItem };

export function getItem<T>(key: string): T {
// export async function getItem<T>(key: string): T {
  const value = storage.getString(key);
  // const value = await storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  storage.delete(key);
}
