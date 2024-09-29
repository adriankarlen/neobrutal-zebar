<script lang="ts">
  import * as zebarCtx from "zebar";
  import Button from "./Button.svelte";
  import type { Window } from "glazewm";
  import { onMount } from "svelte";
  import type { GlazeWmOutput } from "../types/providers";
  import iconMap from "$lib/icon_map.json";
  import ignoredApps from "$lib/ignored_apps.json";

  const getProcessIcon = (child: Window) => {
    const possibleAppNames = [
      child.title.toLowerCase(),
      child.processName.toLowerCase()
    ];

    if (ignoredApps.find((app) => possibleAppNames.includes(app.name))) return;

    let entry = iconMap.find((entry) =>
      entry.appNames
        .map((name) => name.toLowerCase())
        .some((name) => possibleAppNames.includes(name))
    );

    return entry?.iconName ?? `ti-brand-${child.processName.toLowerCase()}`;
  };

  let glazewmOutput = $state<GlazeWmOutput>();
  onMount(() => {
    const glazewm = zebarCtx.createProvider({ type: "glazewm" });
    glazewm.onOutput((output) => (glazewmOutput = output));
  });
</script>

{#if glazewmOutput}
  <div class="flex flex-row gap-2 items-center">
    {#each glazewmOutput.currentWorkspaces as workspace, i}
      <Button
        iconClass="ti {workspace.hasFocus ? 'ti-point-filled' : 'ti-point'}"
        class="text-zb-ws-{i}"
        callback={() =>
          glazewmOutput!.runCommand(`focus --workspace ${workspace.name}`)}
      />
    {/each}
    <button
      class="flex items-center justify-center text-zb-tiling-direction"
      onclick={() => glazewmOutput!.runCommand("toggle-tiling-direction")}
    >
      <i class="ti ti-switch-{glazewmOutput?.tilingDirection}"></i>
    </button>
    <div class="flex items-center gap-1">
      {#if glazewmOutput.focusedWorkspace}
        {#each glazewmOutput.focusedWorkspace!.children as child}
          {#if "state" in child && child.state?.type != "minimized"}
            {@const icon = getProcessIcon(child as Window)}
            {#if icon}
              <span
                class={child.hasFocus
                  ? "text-zb-focused-process"
                  : "text-zb-process"}
              >
                <i class="ti {icon}"></i>
              </span>
            {/if}
          {/if}
        {/each}
      {/if}
    </div>
  </div>
{/if}
