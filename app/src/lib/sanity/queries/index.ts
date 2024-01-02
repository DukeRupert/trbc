import getMetaData from './metaData/getMetaData';
import type MetaData from './metaData/types';
import getPosts from './post/getPosts';
import getPost from './post/getPost';
import type Post from './post/post';
import getEvent from './event/getEvent';
import getEvents from './event/getEvents';
import getUpcomingEvents from './event/getUpcomingEvents';
import type Event from './event/types';
import getPage from './page/getPage';
import type SanityPage from './page/types';

export { getMetaData, getPost, getEvent, getEvents, getUpcomingEvents, getPosts, getPage };
export { MetaData, Post, Event, SanityPage };
