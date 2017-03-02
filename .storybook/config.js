import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/content-filters/stories');
  require('../src/feed-weights/stories');
}

configure(loadStories, module);
