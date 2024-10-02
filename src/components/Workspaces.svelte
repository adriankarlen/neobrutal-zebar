<script lang="ts">
  import type { Window } from "glazewm";
  import type { GlazeWmOutput } from "zebar";

  import iconMap from "$lib/icon_map.json";
  import ignoredApps from "$lib/ignored_apps.json";

  import Button from "./Button.svelte";

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

    return entry?.iconName ?? "ti-background";
  };

  let { glazewm } : { glazewm: GlazeWmOutput}= $props()
</script>

{#if glazewm}
  <div class="flex flex-row gap-2 items-center">
    {#each glazewm.currentWorkspaces as workspace, i}
      <Button
        iconClass="ti {workspace.hasFocus ? 'ti-point-filled' : 'ti-point'}"
        class="text-zb-ws-{i}"
        callback={() =>
          glazewm!.runCommand(`focus --workspace ${workspace.name}`)}
      />
    {/each}
    <button
      aria-label="tiling-direction"
      class="flex items-center justify-center text-zb-tiling-direction"
      onclick={() => glazewm!.runCommand("toggle-tiling-direction")}
    >
      <i class="ti ti-switch-{glazewm?.tilingDirection}"></i>
    </button>
    <div class="flex items-center gap-1">
      {#if glazewm.focusedWorkspace}
        {#each glazewm.focusedWorkspace!.children as child}
          {#if child.type == "window" && child.state.type != "minimized"}
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
