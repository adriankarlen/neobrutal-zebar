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
  msedgewebview2: { ignore: true },
};

export const focusWorkspace = (event, context) => {
  const id = event.target.id;
  context.providers.glazewm.focusWorkspace(id);
};

const addProcessIconCallback = (mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const node = document.querySelector("#process-container");
      if (node) {
        const iconNodes = node.querySelectorAll(".ti");

        iconNodes.forEach((iconNode) => {
          const processName = iconNode.getAttribute("data-process-name");
          const title = iconNode.getAttribute("data-title");

          if (!processName && !title) return;
          const process = iconMap[processName] || iconMap[title];
          const unmapped = process == null;
          if (!unmapped && process.ignore) {
            iconNode.remove();
            return;
          }

          /** INFO: Edge case, all Windows apps has this process name,
           * to avoid some manual mapping, use title without brand */
          if (unmapped && processName == "applicationframehost") {
            iconNode.classList.add(`ti-${title}`);
          }

          iconNode.classList.add(
            unmapped ? `ti-brand-${processName}` : process.icon,
          );
        });
      }
    }
  }
};

const observer = new MutationObserver(addProcessIconCallback);
const config = { childList: true, subtree: false };
const parentNode = document.querySelector("#glazewm-workspaces");
if (parentNode) {
  observer.observe(parentNode, config);
} else {
  console.error("Parent node #glazewm-workspaces not found.");
}
