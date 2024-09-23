<script lang="ts">
  import { init } from "zebar";
  import Button from "./Button.svelte";
  import type { Window } from "glazewm";
  import { onMount } from "svelte";
  import type { GlazeWmOutput } from "../types/providers";

  type Icon = {
    icon?: string;
    ignore?: boolean;
  };
  type IconMap = {
    [key: string]: Icon;
  };

  const iconMap = {
    // Terminals
    "wezterm-gui": { icon: "ti-terminal-2" },
    alacritty: { icon: "ti-terminal-2" },
    windowsterminal: { icon: "ti-terminal-2" },

    // Editors
    code: { icon: "ti-brand-vscode" }, // VS Code
    devenv: { icon: "ti-brand-visual-studio" }, // Visual Studio

    // Communication
    "ms-teams": { icon: "ti-brand-teams" },
    olk: { icon: "ti-mail" }, // Outlook

    // VPN
    "azure vpn client": { icon: "ti-spy" }, // Azure VPN Client

    // Browsers
    zen: { icon: "ti-circle-letter-z" },
    msedge: { icon: "ti-brand-edge" },

    // Utils
    snippingtool: { icon: "ti-screenshot" },
    "control panel": { icon: "ti-settings" },
    explorer: { icon: "ti-folder" },
    photos: { icon: "ti-photo" },
    sound: { icon: "ti-headphones" },
    excel: { icon: "ti-file-spreadsheet" },
    onenote: { icon: "ti-note" },
    powerpnt: { icon: "ti-presentation" },
    winword: { icon: "ti-file-word" },
    mspaint: { icon: "ti-palette" },

    // Ignore
    msedgewebview2: { ignore: true }
  } as IconMap;

  const getProcessIcon = (child: Window) => {
    const processEntry = iconMap[child.processName.toLowerCase()];
    const titleEntry = iconMap[child.title];

    if (processEntry && !processEntry.ignore) {
      return processEntry.icon;
    } else if (titleEntry && !titleEntry.ignore) {
      return titleEntry.icon;
    } else {
      return "ti-brand-" + child.processName.toLowerCase(); //
    }
  };

  let glazewmOutput = $state<GlazeWmOutput>();
  onMount(async () => {
    const zebarCtx = await init();
    const glazewm = await zebarCtx.createProvider({ type: "glazewm" });
    glazewm.onOutput((output) => (glazewmOutput = output));
  });
</script>

{#if glazewmOutput}
  <div class="flex flex-row gap-2">
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
    <div class="flex items-center gap-2">
      {#if glazewmOutput.focusedWorkspace}
        {#each glazewmOutput.focusedWorkspace!.children as child}
          {#if "state" in child && child.state?.type != "minimized"}
            <span
              class={child.hasFocus
                ? "text-zb-focused-process"
                : "text-zb-process"}
            >
              <i class="ti {getProcessIcon(child as Window)}"></i>
            </span>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
{/if}
