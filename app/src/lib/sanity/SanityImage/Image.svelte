<script lang="ts">
  import type { Image } from '$lib/sanity/queries/common'
	import getImageProps from './getImageProps';

	export let image: Image;
  export let maxWidth: number;
  export let priority: boolean = false;
  export let alt: string = ""
  export let cls: string = ""
</script>

<img
  class={cls}
  loading={priority ? "eager" : "lazy"}
  alt={image?.alt ?? alt}
  {
    ...getImageProps({
      image,
      userMaxWidth: maxWidth
    })
  }
/>