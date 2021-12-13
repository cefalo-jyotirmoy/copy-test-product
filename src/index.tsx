import { connect } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';
import SidebarMetrics from './entrypoints/SidebarMetrics';
import {IntentCtx} from "datocms-plugin-sdk/dist/types/connect";

connect({
  // ...
  itemFormSidebarPanels(itemType, ctx:IntentCtx) {
    return (itemType.attributes.api_key==="test_product" && ctx.currentUser.id==="19866") ? [
      {
        id: 'quickCopy',
        label: 'Quick copy(do not use)',
      },
    ] : [];
  },
  renderItemFormSidebarPanel(sidebarPaneId, ctx) {
    render(<SidebarMetrics ctx={ctx} />);
  },
});
