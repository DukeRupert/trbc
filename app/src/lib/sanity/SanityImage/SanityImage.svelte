<script lang="ts">
  import type { SanityImage } from './types'
	import getImageProps from './getImageProps';

	export let image: SanityImage;
  export let maxWidth: number;
  export let priority: boolean = false;
  export let alt: string = ""
</script>

<img
  style="height: auto;"
  loading={priority ? "eager" : "lazy"}
  alt={image.alt || alt}
  {
    ...getImageProps({
      image,
      userMaxWidth: maxWidth
    })
  }
/>