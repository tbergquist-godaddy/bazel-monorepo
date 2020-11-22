// @flow

import episode123 from './episode123.json';
import show6 from './show6.json';
import search from './search.json';
import showEpisodes from './show36508Episodes.json';
import show6Episodes from './show6Episodes.json';

export default {
  'http://api.tvmaze.com/episodes/123': episode123,
  'http://api.tvmaze.com/shows/6?embed[]=episodes&embed[]=nextepisode&embed[]=previousepisode&embed[]=cast': show6,
  'http://api.tvmaze.com/search/shows?q=the%20100&embed[]=nextepisode&embed[]=previousepisode': search,
  'http://api.tvmaze.com/shows/36508/episodes': showEpisodes,
  'http://api.tvmaze.com/shows/6/episodes': show6Episodes,
};
