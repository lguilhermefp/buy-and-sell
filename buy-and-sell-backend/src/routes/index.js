import { addViewToListingRoute } from './addViewToListing';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListings';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListings';

export default [
    addViewToListingRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute
];