# ciudse-website

## Requisitos previos

Git https://git-scm.com/downloads

```
apt install git
```

NPM. Recomiendo instalar con NVM (Node Version Manager) https://github.com/nvm-sh/nvm
Si usa Windows, es recomendable usar WSL2 para desarrollo de software.
https://docs.microsoft.com/en-us/windows/wsl/install-win10#simplified-installation-for-windows-insiders
(La ultima version de Windows 10 ya permite la instalacion simplificada, solo se tiene que descargar la actualizacion opcional desde Windows Update)

Instalar NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
(Revisar cual es la ultima version de NVM en su pagina de GitHub)

Instalar version LTS de Node
```
nvm install --lts
```

## Guia para empezar desarrollo

1. Clonar repositorio

```
git clone https://github.com/CIUDSE/ciudse-website.git
cd ciudse-website
```

2. Instalar dependencias

```
npm install
```

3. Correr un servidor de desarrollo local

Este proyecto usa Parcel para crear los paquetes del sitio. Permite usar PostCSS, PostHTML, SASS, TypeScript, etc. Incluye un servidor de desarrollo que se actualiza con cambios de la pagina. El comando para correrlo ya esta configurado como un script de NPM.

```
npm run dev
```

Si se quiere construir la version de produccion del sitio

```
npm run build
```

## Recursos adicionales

El sitio web, actualmente usa Tailwind CSS.
https://tailwindcss.com/docs
