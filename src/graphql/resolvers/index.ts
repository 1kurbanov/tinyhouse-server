import merge from 'lodash.merge';
import { listingResolvers } from './Listing/index';
import { bookingResolvers } from './Booking/index';
import { userResolvers } from './User/index';
import { viewerResolvers } from './Viewer/index';
export const resolvers = merge(userResolvers, viewerResolvers, listingResolvers, bookingResolvers);
