declare module '@vdegenne/caesar' {
  export function encode(message: string, offset: number): string;
  export function decode(message: string, offset: number): string;
}