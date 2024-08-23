# 🟦 Neobrutal [Zebar](https://github.com/glzr-io/zebar)  

> NOTE: This configuration is it's early development. Contributions are
> welcome, especially to the process icon map, as I only mapped the ones I use
> that could not be automapped.

## 🔥Showcase

### Fullscreen

![image](https://github.com/adriankarlen/neobrutal-zebar/blob/main/misc/fullscreen.png)
### Workspaces

https://github.com/user-attachments/assets/d1e1ce3f-37bd-4ee7-8942-611992039014

### System info

https://github.com/user-attachments/assets/185f238c-03b8-4f63-87a2-2d36d6b31039

## 🛠️ Configuration

### Getting the config in place

Download the repo as zip, unzip it in you zebar configuration directory.

### Replacing values

In order for imports to work you will need to update some paths in the files

#### 1. config.yaml

In order for zebar to able to import the css file, you need to url encode all
special character, this can be done via services like https://www.urldecoder.org/.

For instance if you zebar config is stored at
C:/Users/MyCoolUsername/.glzr/zebar. Your import link would look like this:
`http://asset.localhost/C:/Users/MyCoolUsername/.glzr/zebar/styles/global.css`.
Take this url and paste it to https://www.urldecoder.org/ and replace the import
with that string.

```yaml
# Change the following line to match your path
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<<.glzr%5Czebar%5Cstyles%5Cglobal.css";
```

#### 2. styles/global.css 
```css
/* Change the following imports, you don't need to url encode these like in config.yaml */
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/themes/rose-pine.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/config.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/animations.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/bar.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/group-left.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/group-center.css";
@import "http://asset.localhost/>> PATH TO YOUR YOUR GLZR CONFIG FOLDER<</.glzr/zebar/styles/group-right.css";
```

### Configuring CSS-variables

In `styles/config.css` there exists a lot of configuration available to tweak.

## 🖌️ Themes

At the moment the only theme available is [Rosé Pine](https://rosepinetheme.com/) but I plan to add more themes, or if you have a theme you want to add, don't hesitate to contribute.

## 📃 License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/adriankarlen/neobrutal-zebar/blob/main/LICENSE) file
