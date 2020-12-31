var meta = document.createElement('meta');
var locale = meta;
locale.setAttribute('name', 'og:');
locale.content = document.location;
document.getElementsByTagName('head')[0].appendChild(locale);