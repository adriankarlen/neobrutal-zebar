<script lang="ts">
  import { onMount } from "svelte";
  import * as zebarCtx from "zebar";
  import type { GlazeWmOutput } from "../types/providers";

  let glazewmOutput = $state<GlazeWmOutput>();

  onMount(async () => {
    const glazewm = zebarCtx.createProvider({ type: "glazewm" });
    glazewm.onOutput((output) => (glazewmOutput = output));
  });
</script>

{#if glazewmOutput}
  <div class="flex items-center gap-1">
    {#each glazewmOutput.allWorkspaces as workspace}
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
