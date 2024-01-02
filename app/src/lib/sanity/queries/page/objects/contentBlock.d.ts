import type { InputValue } from "@portabletext/svelte/ptTypes";

export type ContentBlock = {
    _type:   string;
    _key:    string;
    content: InputValue;
}