<script lang="ts">
  import type { Snippet } from "svelte";
  type Props = {
    children: Snippet;
    class: string;
  };
  let { children, ...rest }: Props = $props();
</script>

<div
  class="flex items-center h-100 w-fit p-1 bg-zb-base border-zb-border rounded-base border shadow-bar {rest.class}"
>
  {@render children()}
</div>
