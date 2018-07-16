import icon48 from './favicon48.png';
import icon72 from './favicon72.png';
import icon96 from './favicon96.png';

const manifest = {
  name: "MadeByRhys",
  short_name: "RhysB",
  start_url: ".",
  display: "standalone",
  background_color: "#fff",
  description: "A portfolio site, blog and projects of Rhys.",
  icons: [{
    rel: "icon",
    href: `${icon48}`,
    sizes: "48x48",
    type: "image/png",
  }, {
    rel: "icon",
    href: `${icon72}`,
    sizes: "72x72",
    type: "image/png",
  }, {
    rel: "icon",
    href: `${icon96}`,
    sizes: "96x96",
    type: "image/png",
  }],
};

export default manifest;
