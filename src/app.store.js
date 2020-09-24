import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

export function toggleMenu(value) {
  isMenuOpen.set(value);
}
