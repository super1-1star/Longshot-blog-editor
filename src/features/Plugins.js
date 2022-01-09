
import createCounterPlugin from "@draft-js-plugins/counter";

const counterPlugin = createCounterPlugin();
const { WordCounter } = counterPlugin;
const plugins = [counterPlugin];
console.log(plugins,WordCounter);

export default plugins;