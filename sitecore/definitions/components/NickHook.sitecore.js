// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the NickHook component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'NickHook',
    displayName: 'Nick Hook',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-nick-placeholder', 'jss-nick-placeholder-component'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'richText', type: CommonFieldTypes.RichText }
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
