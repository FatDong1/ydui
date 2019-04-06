import Vue  from 'vue';

declare class UIComponent extends Vue {
    static install (vue: typeof Vue): void
}


export declare class Cell extends UIComponent {}
export declare class Dialog extends UIComponent {}
export declare class Rate extends UIComponent {}
export declare class Toast extends UIComponent {}

export interface InstallationOptions {
    locale?: any
    lang?: any
}

export const version: string

export const locale: (l:any) => void

export function install (vue: typeof Vue, options: InstallationOptions): void

