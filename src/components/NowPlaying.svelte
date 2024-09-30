<script lang="ts">
  import type { GlazeWmOutput } from "../types/providers";

  let { glazewm } : { glazewm: GlazeWmOutput | null}= $props()
</script>

{#if glazewm}
  <div class="flex items-center gap-1">
    {#each glazewm.allWorkspaces as workspace}
      {#each workspace.children as child}
        <!-- if the child has prop state, it is a window -->
        {#if "state" in child && child.processName.toLowerCase() === "spotify"}
          {#if child.title.toLowerCase() === "spotify premium"}
            <i class="ti ti-music-off text-zb-spotify-paused"></i>
            nothing is playing
          {:else}
            <i class="ti ti-music text-zb-spotify-playing"></i>
            {child.title}
          {/if}
        {/if}
      {/each}
    {/each}
  </div>
{/if}
