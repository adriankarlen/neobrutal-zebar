const processIconMap = {
  // Terminals
  "wezterm-gui": { icon: "ti-terminal-2" },
  alacritty: { icon: "ti-terminal-2" },
  WindowsTerminal: { icon: "ti-terminal-2" },

  // Editors
  code: { icon: "ti-brand-vscode" }, // VS Code
  devenv: { icon: "ti-brand-visual-studio" }, // Visual Studio

  // Communication
  "ms-teams": { icon: "ti-brand-teams" },
  olk: { icon: "ti-mail" }, //Outlook

  // VPN
  applicationframehost: { icon: "ti-spy" }, // Azure VPN Client

  // Browsers
  zen: { icon: "ti-circle-letter-z" },

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

          if (!processName) return;

          const process = processIconMap[processName];

          const unmapped = process == null;
          if (!unmapped && process.ignore) {
            iconNode.remove();
            return;
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
;
