# 🟦 Neobrutal [Zebar](https://github.com/glzr-io/zebar)  

An Zebar configuration for Zebar V2 build in Svelte with Tailwind. If you are
still using V1 of Zebar the old config is available in the [V1 branch](https://github.com/adriankarlen/neobrutal-zebar/tree/v1). 

## ✨ Features

- Process icons for current workspace, with current focus indicator.
- System information meters, with dynamic coloring and animations.
- Spotify, currently playing song.
- Configuration using CSS-variables.

> [!IMPORTANT]
>
> This configuration is it's early development. Contributions are
> welcome, especially to the process icon map, as I only mapped the ones I use
> that could not be automapped.

## 🖼️ Showcase

### Fullscreen

![image](https://github.com/adriankarlen/neobrutal-zebar/blob/main/misc/fullscreen.png)
### Workspaces

https://github.com/user-attachments/assets/38e4a09f-1583-4e2a-84e5-6da7156402b2

### System info

https://github.com/user-attachments/assets/185f238c-03b8-4f63-87a2-2d36d6b31039

## 🚀 Getting started

### Getting the config in place

Download the `neobrutal-zebar.zip` from the latest release. Unzip the contents
inside your zebar config directory.

### Configuring CSS-variables

In `src/app.css` there exists a lot of configuration available to tweak.

## 🎨 Themes

### 🌷Rosé Pine (default)
<details>
<summary>Example config</summary>

##### src/app.css
```css
/* colors */
--text: var(--rp-text);
--bg: var(--rp-overlay);
--border: var(--rp-highlight-low);
--shadow: var(--rp-highlight-low);
--icon: var(--rp-love);
--memory: var(--rp-iris);
--cpu: var(--rp-rose);
--cpu-high-usage: var(--rp-love);
--battery-good: var(--rp-pine);
--battery-mid: var(--rp-gold);
--battery-low: var(--rp-love);
--focused-process: var(--rp-text);
--process: var(--rp-muted);
--displayed: var(--rp-text);
--ws-1: var(--rp-gold);
--ws-2: var(--rp-love);
--ws-3: var(--rp-pine);
--ws-4: var(--rp-foam);
--ws-5: var(--rp-iris);
--tiling-direction: var(--rp-rose);
--not-playing: var(--rp-love);
--now-playing: var(--rp-pine);
--network: var(--rp-text);
--weather: var(--rp-text);
```

</details>

### 😸 Catppuccin
<img src="https://github.com/adriankarlen/neobrutal-zebar/blob/main/misc/catppuccin.png" />

Utilizes [Catppuccin Palette](https://github.com/catppuccin/palette/blob/main/docs/css.md), configure css variables accoriding to your liking.

<details>
<summary>Config show in picture above</summary>

##### src/app.css
```css
/* border */
--radius: 9999px;

/* shadow */
--shadow-size-bar: 0;
--shadow-size-button: 0;

/* colors */
--text: var(--ctp-mocha-text);
--bg: var(--ctp-mocha-surface0);
--border: var(--ctp-mocha-crust);
--border-button: var(--ctp-mocha-crust);
--shadow: var(--ctp-mocha-mantle);
--icon: var(--ctp-mocha-red);
--memory: var(--ctp-mocha-mauve);
--cpu: var(--ctp-mocha-pink);
--cpu-high-usage: var(--ctp-mocha-red);
--battery-good: var(--ctp-mocha-green);
--battery-mid: var(--ctp-mocha-peach);
--battery-low: var(--ctp-mocha-red);
--focused-process: var(--ctp-mocha-text);
--process: var(--ctp-mocha-surface2);
--displayed: var(--ctp-mocha-text);
--ws-1: var(--ctp-mocha-peach);
--ws-2: var(--ctp-mocha-red);
--ws-3: var(--ctp-mocha-green);
--ws-4: var(--ctp-mocha-blue);
--ws-5: var(--ctp-mocha-mauve);
--tiling-direction: var(--ctp-mocha-lavender);
--not-playing: var(--ctp-mocha-red);
--now-playing: var(--ctp-mocha-green);
--network: var(--ctp-mocha-text);
--weather: var(--ctp-mocha-text);
```

##### src/components/RightGroup.svelte
```svelte
<!-- replace this line -->
<Button class="text-zb-icon" iconClass="heart-filled" />
<!-- with this line -->
<Button class="text-zb-icon" iconClass="cat" />
```
</details>

## 🍳 Recipies

<details>
<summary>Soft Brutal</summary>

```css
--radius: 9999px;
```

<img src="https://github.com/adriankarlen/neobrutal-zebar/blob/main/misc/brutal-soft.png" />
</details>
<details>
<summary>Round bars without shadow</summary>

```css
--border-size: 1px;
--radius: 9999px;
--shadow-size-bar: 0px;
--shadow-size-button: 0px;
```

<img src="https://github.com/adriankarlen/neobrutal-zebar/blob/main/misc/non-brutal.png" />
</details>

## 📜 License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/adriankarlen/neobrutal-zebar/blob/main/LICENSE) file
